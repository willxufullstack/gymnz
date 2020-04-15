<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;
use App\Console\Commands\DianpingCrawler;
use App\Jobs\DianpingJob;
use DateInterval;
use DatePeriod;
use DateTime;

class Gym extends Model
{
    protected $tableName = "gyms";
    const DEFAULT_TIMEZONE = 'Asia/Shanghai';

    protected $casts = [
        'setting' => 'array'
    ];

    protected $hidden = ['dianping_session', 'dianping_remain_refresh_count', 'dianping_expires_in', 'dianping_refresh_token'];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'org_id', 'created_by', 'setting', 'timezone', 'dianping_shop_id', 'dianping_shop_name'
    ];

    /**
     * Get the coach for the gym.
     */
    public function coaches()
    {
        return $this->hasMany('App\Coach');
    }

    public function getSetting()
    {
        return json_decode($this->setting, true);
    }

    private function _trialCustomersRedisKey()
    {
        return 'gym_' . $this->id . '___trial_customers';
    }

    public function addTrialCustomer($customerId)
    {
        $key = $this->_trialCustomersRedisKey();
        $trialCustomers = Redis::get($key);
        if (empty($trialCustomers)) {
            $trialCustomers = '[]';
        }
        $trialCustomers = json_decode($trialCustomers, true);
        $trialCustomers[$customerId] = time();
        // TODO filter all expired customers
        Redis::set($key, json_encode($trialCustomers));
    }

    public function getTrialCustomers(): array
    {
        $key = $this->_trialCustomersRedisKey();
        $trialCustomers = Redis::get($key);
        if (empty($trialCustomers)) {
            return [];
        }
        return array_keys(json_decode($trialCustomers, true));
    }

    public function getTimezone()
    {
        return $this->timezone ? $this->timezone : self::DEFAULT_TIMEZONE;
    }

    public function convertGymTimezoneToUTC($time, $format = 'Y-m-d H:i:s'): string
    {
        $timezone = $this->getTimezone();
        $utcTime = new \DateTime($time, new \DateTimeZone($timezone));
        $utcTime->setTimezone(new \DateTimeZone('UTC'));
        return $utcTime->format($format);
    }

    public function convertUTCToGymTimezone($time, $format = 'Y-m-d H:i:s'): string
    {
        $timezone = $this->getTimezone();
        $gymTime = new \DateTime($time, new \DateTimeZone('UTC'));
        $gymTime->setTimezone(new \DateTimeZone($timezone));
        return $gymTime->format($format);
    }

    private static function timeRange(string $date, int $days): DatePeriod
    {
        $end = new DateTime($date);
        $end->modify("+1 day");

        $days -= 1;
        $begin = new DateTime($date);
        $begin->modify("-{$days} day");

        $interval = new DateInterval('P1D');
        return new DatePeriod($begin, $interval, $end);
    }

    // obsoleted
    public function crawlHistoryIfNeeded(string $start, string $end)
    {
        $query = Dianping::where('gym_id', $this->id);
        $query->where('date', '>=', $start);
        $query->where('date', '<=', $end);
        $count = $query->count();

        $days = (new DateTime($end))->diff(new DateTime($start))->days + 1;
        if ($count !== $days) {
            $this->crawlDianpingByDateRange('traffic', $start, $end);
            $this->crawlDianpingByDateRange('comment', $start, $end);
        }
    }

    public function crawlDianping(string $task, string $date, int $days, bool $async = true, int $delay = 5)
    {
        if (!$this->dianping_shop_name || !$this->dianping_shop_id) {
            return;
        }

        $dateRange = self::timeRange($date, $days);

        $jobs = [];
        foreach ($dateRange as $value) {
            if ($async) {
                $jobs[] = new DianpingJob($this->id, $value->format('Y-m-d'), $task);
            } else {
                if($task === 'traffic') {
                    $this->crawlTrafficDay($value->format('Y-m-d'));
                }
                if($task === 'comment') {
                    $this->crawlCommentDay($value->format('Y-m-d'));
                }
                sleep($delay);
            }
        }
        if (!empty($jobs)) {
            DianpingJob::enqueueJobsWithDelay($jobs, $delay);
        }
    }

    public function crawlTrafficByDateRange(string $task, string $start, string $end, bool $async = true, int $delay = 5)
    {
        $days = (new DateTime($end))->diff(new DateTime($start))->days + 1;
        $this->crawlDianping($task, $end, $days, $async, $delay);
    }

    public function crawlCommentDay(string $date)
    {
        // crawl
        $appKey = config('services.dianping.key');
        $appSecret = config('services.dianping.secret');

        $session = $this->dianping_session;
        $shopId = $this->dianping_shop_id;

        echo "crawling commetnt: gymId => {$this->id} date=>{$date} dianping=>{$this->dianping_shop_name}";

        $crawler = new DianpingCrawler($appKey, $appSecret, $session);
        $dianping = Dianping::firstOrNew(['gym_id' => $this->id, 'date' => $date]);
        $commentCount = $crawler->getDayComments($shopId, $date);
        $dianping->gym_id = $this->id;
        $dianping->comment_count = $commentCount;
        $dianping->save();
        echo " DONE\n";
    }

    public function crawlTrafficDay(string $date, bool $force = false)
    {
        // skip if exist
        $dianping = Dianping::where('date', $date)
            ->where('gym_id', $this->gym_id)
            ->count();
        if ($dianping && $dianping->view_uv !== 0) {
            return;
        }

        // crawl
        $appKey = config('services.dianping.key');
        $appSecret = config('services.dianping.secret');

        $session = $this->dianping_session;
        $shopId = $this->dianping_shop_id;

        echo "crawling traffic: gymId => {$this->id} date=>{$date} dianping=>{$this->dianping_shop_name}";

        $crawler = new DianpingCrawler($appKey, $appSecret, $session);
        $resp = $crawler->getDayTraffic($shopId, $date);

        if ((int) $resp['code'] === 200) {
            $data = $resp['data'];
            $dianping = Dianping::firstOrNew(['gym_id' => $this->id, 'date' => $date]);
            $dianping->consume_uv = (int) $data['consume_uv'] ?? 0;
            $dianping->view_uv = (int) $data['view_uv'] ?? 0;
            $dianping->buy_uv = (int) $data['buy_uv'] ?? 0;
            $dianping->shop_uv = (int) $data['shop_uv'] ?? 0;
            $dianping->gym_id = $this->id;
            $dianping->date = $date;
            $dianping->save();
            echo " DONE\n";
        } else {
            echo " FAIL:" . $resp['msg'] . "\n";
        }
    }

    public function refreshSession(bool $force = false) {

        $expiresIn3Days = 3 * 24 * 60 * 60;
        if(!$force && $this->dianping_expires_in - time() > $expiresIn3Days){
            echo "no need to refresh token for {$this->id} \n";
            return;
        }

        echo "refresh token ";
        $appKey = config('services.dianping.key');
        $appSecret = config('services.dianping.secret');
        $sessionData = DianpingCrawler::refreshSession($appKey, $appSecret, $this->dianping_refresh_token);

        if((int)$sessionData['code'] === 200){
            $this->dianping_session = $sessionData['access_token'];
            $this->dianping_refresh_token = $sessionData['refresh_token'];
            $this->dianping_expires_in = time() + (int)$sessionData['expires_in'];
            $this->dianping_remain_refresh_count = (int)$sessionData['remain_refresh_count'];

            $this->save();
            echo "DONE\n";
        } else {
            echo $sessionData['msg'];
        }
    }
}

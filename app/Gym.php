<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;
use App\Console\Commands\DianpingCrawler;
use Illuminate\Support\Facades\DB;
use App\Jobs\DianpingJob;
use DateInterval;
use DatePeriod;
use DateTime;

class Gym extends Model
{
    protected $tableName = "gyms";
    const DEFAULT_TIMEZONE = 'Asia/Shanghai';
    const GYM_LATEST_SCHEDULE_PREFIX = 'lastest_schedule_gym__';

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

    public function account()
    {
        return $this->belongsTo('App\Account');
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

    public function getTrialCustomers($beforeDays = 30): array
    {
        $key = $this->_trialCustomersRedisKey();
        $trialCustomers = Redis::get($key);
        if (empty($trialCustomers)) {
            return [];
        }

        $ret = [];
        $customerToTs = json_decode($trialCustomers, true);
        $now = time();
        foreach($customerToTs as $id => $ts) {
            if ($ts > $now - $beforeDays * 24 * 60 * 60) {
                $ret[] = $id;
            }
        }

        return $ret;
    }

    public function getTimezone()
    {
        return $this->timezone ? $this->timezone : self::DEFAULT_TIMEZONE;
    }

    public function convertGymTimezoneToUTC($time, $format = 'Y-m-d H:i:s'): string
    {
        // $timezone = $this->getTimezone();
        // $utcTime = new \DateTime($time, new \DateTimeZone($timezone));
        // $utcTime->setTimezone(new \DateTimeZone('UTC'));
        // return $utcTime->format($format);
        return $time;
    }

    public function convertUTCToGymTimezone($time, $format = 'Y-m-d H:i:s'): string
    {
        // $timezone = $this->getTimezone();
        // $gymTime = new \DateTime($time, new \DateTimeZone('UTC'));
        // $gymTime->setTimezone(new \DateTimeZone($timezone));
        // return $gymTime->format($format);
        return $time;
    }

    public static function timeRange(string $date, int $days): DatePeriod
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
                $jobs[] = new DianpingJob($task, $this->id, $value->format('Y-m-d'));
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

    public function setGymLatestSchedules($userId) {
        $key = self::GYM_LATEST_SCHEDULE_PREFIX . $this->id;
        $allSchedulesStr = Redis::get($key);
        // init if empty
        if(empty($allSchedulesStr)) {
            $this->getGymLatestSchedules();
            return;
        }

        $schedule = Schedule::where('gym_id', $this->id)
            ->where('customer_id', $userId)
            ->where('status', 2)
            ->with('coach.user')
            ->orderBy('date', 'DESC')
            ->first();
        if(empty($schedule)) {
            return;
        }
        // update the user
        $allSchedules = json_decode($allSchedulesStr, true);

        $allSchedules[$schedule->customer_id] =  $schedule->makeHidden('detail')->makeHidden('conclusion');


        Redis::set($key, json_encode($allSchedules));
    }

    public function getGymOrderBalance()
    {
        $orders = Order::where('gym_id', $this->id)->get();
        $ret = [];
        foreach($orders as $order) {
            if(!isset($ret[$order->customer_id])){
                $ret[$order->customer_id] = [
                    'total' => 0,
                    'unfinished_count' => 0,
                    'expired_count' => 0,
                    'unfinished_price' => 0,
                    'expired_price' => 0
                ];
            }

            // if an order has been refund
            if($order->status === 2) {
                $ret[$order->customer_id]['total'] += $order->booked_amount;
                continue;
            }

            $ret[$order->customer_id]['total'] += $order->course_amount;
            $unfinishedCount = $order->course_amount - $order->booked_amount;
            $unfinishedPrice = ($order->course_amount && $order->price) ? $order->price * $unfinishedCount / $order->course_amount : 0;

            $ret[$order->customer_id]['unfinished_count'] += $unfinishedCount;
            $ret[$order->customer_id]['unfinished_price'] += $unfinishedPrice;

            if ($order->hasExpired()) {
                $ret[$order->customer_id]['expired_count'] += $unfinishedCount;
                $ret[$order->customer_id]['expired_price'] += $unfinishedPrice;
            }
        }

        return $ret;
    }

    public function getGymLatestSchedules()
    {
        $key = self::GYM_LATEST_SCHEDULE_PREFIX . $this->id;
        $allSchedulesStr = Redis::get($key);
        if (empty($allSchedulesStr)) {
            // load latest schedule
            $scheduleIds = Schedule::where('status', 2)
                ->where('gym_id', $this->id)
                ->groupBy('customer_id')
                ->get([DB::raw('MAX(id) as id')]);

            $allIds = [];
            foreach ($scheduleIds as $scheduleId) {
                $allIds[] = $scheduleId['id'];
            }

            $schedules = Schedule::with(['coach.user'])
            ->whereIn('id', $allIds)
            ->get();

            // userId => schedules
            $map = [];
            foreach ($schedules as &$schedule) {
                $map[$schedule->customer_id] = $schedule->makeHidden('detail')->makeHidden('conclusion');
            }
            $allSchedulesStr = json_encode($map, true);
            Redis::set($key, $allSchedulesStr);
        }

        return json_decode($allSchedulesStr, true);
    }
}

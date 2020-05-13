<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redis;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    const LATEST_SCHEDULE_PREFIX = 'lastest_schedule_';

    public function coach()
    {
        return $this->hasOne('App\Coach');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'sex',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'updated_at', 'email_verified_at', 'api_token'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    public function getCourseBalance($gymId)
    {
        $query = Order::where([
            'customer_id' => $this->id,
        ]);

        $query = $query->where('gym_id', $gymId)->orderBy('created_at', 'ASC');
        $orders = $query->get();
        $ret = ['total' => 0, 'booked' => 0, 'created_at' => 0];
        // calc
        foreach ($orders as $order) {
            if ($ret['created_at'] === 0) {
                $ret['created_at'] = substr($order->created_at, 0, 10);
            }
            if ($order->status === 1) {
                $ret['total'] += $order->course_amount;
            } else {
                // calc total by the actual booked amount if refund
                $ret['total'] += $order->booked_amount;
            }
            $ret['booked'] += $order->booked_amount;
        }
        return $ret;
    }

    public function getFirstOrder($gymId)
    {
        $query = Order::where([
            'customer_id' => $this->id,
            'gym_id' => $gymId
        ]);

        return $query->orderBy('created_at', 'ASC')->first();
    }

    public function getHotMap($date, $durationDays = 7, $gymId = null)
    {
        $fromDate = date('Y-m-d', strtotime($date . " -{$durationDays} day"));
        $query = Schedule::where('customer_id', $this->id)
            ->where('date', '>', $fromDate)
            ->where('date', '<=', $date);
        if ($gymId) {
            $query->where('gym_id', $gymId);
        }
        $schedules = $query->get();

        /*
         * build a hot map which marks days with schedule as 1, otherwise 0
         * eg.
         *  "110000"  => there are schedules in the first 2 days
         */
        $dateMap = [];
        for ($i = $durationDays - 1; $i >= 0; $i--) {
            $dateStr = date('Y-m-d', strtotime($date . " -{$i} day"));
            $dateMap[$dateStr] = 0;
        }

        foreach ($schedules as $schedule) {
            $dateMap[$schedule->date] = 1;
        }
        return implode('', array_values($dateMap));
    }

    public function getLatestSchedule($status = null, $gymId = null, $coachId = null)
    {
        return self::getLatestScheduleCache($this->id);
    }

    public static function getLatestScheduleById($customerId, $status = null, $gymId = null, $coachId = null)
    {
        $query = Schedule::with(['coach.user'])
            ->where('customer_id', $customerId);
        // if ($status) {
        //     $query->where('status', $status);
        // }
        // if ($gymId) {
        //     $query->where('gym_id', $gymId);
        // }
        // if ($coachId) {
        //     $query->where('coach_id', $coachId);
        // }
        $ret = $query->orderBy('date', 'DESC')->first();
        if(empty($ret)){
            return null;
        }
        return $ret->makeHidden('detail')->makeHidden('conclusion');
    }

    public static function convertSex($sex): bool {
        if($sex === 1 || $sex === '1' || $sex === '男') {
            return true;
        }
        return false;
    }


    public static function setLatestScheduleCache($userId)
    {
        $key = self::LATEST_SCHEDULE_PREFIX . $userId;
        $schedule = self::getLatestScheduleById($userId);
        Redis::set($key, $schedule);
        return $schedule;
    }

    public static function getLatestScheduleCache($userId)
    {
        $key = self::LATEST_SCHEDULE_PREFIX . $userId;
        $ret = Redis::get($key);
        if(empty(Redis::get($key))){
            $ret = self::setLatestScheduleCache($userId);
        }
        return $ret;
    }
}

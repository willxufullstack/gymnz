<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class Gym extends Model
{
    protected $tableName = "gyms";
    const DEFAULT_TIMEZONE = 'Asia/Shanghai';

    protected $casts = [
        'setting' => 'array'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'org_id', 'created_by', 'setting', 'timezone'
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

}

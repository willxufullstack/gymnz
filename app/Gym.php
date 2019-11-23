<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class Gym extends Model
{
    protected $tableName = "gyms";

    protected $casts = [
        'setting' => 'array'
    ];

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'org_id', 'created_by', 'setting'
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
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class WorkoutAction extends Model
{
    protected $fillable = [
        'name', 'unit', 'weight', 'set_times', 'repeat_times', 'interval'
    ];

    const ALL_ACTIONS_KEY = 'all_workout_actions';

    static function clearAllRedis()
    {
        Redis::del(self::ALL_ACTIONS_KEY);
    }

    static function allFromRedis()
    {
        $allActionsStr = Redis::get(self::ALL_ACTIONS_KEY);
        if (empty($allActionsStr)) {
            $ret = (array)WorkoutAction::all();
            Redis::set(self::ALL_ACTIONS_KEY, json_encode($ret));
            return $ret;
        }
        return json_decode($allActionsStr);
    }

    static function allActionsWithDefaultValueByCustomer($customerId)
    {
        $ori = WorkoutAction::all();
        if (empty($customerId)) {
            return $ori;
        }

        $key = 'action_default_value_' . $customerId;
        $defaultValues = json_decode(Redis::get($key), true);
        if (!$defaultValues) {
            $defaultValues = [];
        }

        $ret = [];

        foreach ($ori as &$action) {
            if (array_key_exists($action['id'], $defaultValues)) {
                $action = $defaultValues[$action['id']];
            }
            unset($action['updated_at']);
            unset($action['created_at']);
            $ret[] = $action;
        }
        return $ret;
    }

    static function actionsWithDefaultValueByCustomer($customerId)
    {
        $key = 'action_default_value_' . $customerId;
        $defaultValues = json_decode(Redis::get($key), true);
        if (!$defaultValues) {
            $defaultValues = [];
        }
        return array_values($defaultValues);
    }
}

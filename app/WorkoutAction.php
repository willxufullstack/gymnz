<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class WorkoutAction extends Model
{
    protected $fillable = [
        'name', 'unit', 'weight', 'set_times','repeat_times', 'interval'
    ];

    static function actionsWithDefaultValueByCustomer($customerId){
        $ori = WorkoutAction::all();

        if(empty($customerId)){
            return $ori;
        }

        $key = 'action_default_value_'.$customerId;
        $defaultValues = json_decode(Redis::get($key), true);
        if(!$defaultValues) {
            $defaultValues = [];
        }
        $ori = WorkoutAction::all();
        $ret = [];
        foreach($ori as $action) {
            if(array_key_exists($action->id, $defaultValues)){
                $ret[] = $defaultValues[$action->id];
                continue;
            }
            $ret[] = $action;
        }
        return $ret;
    }
}

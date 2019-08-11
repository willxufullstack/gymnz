<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class WorkoutAction extends Model
{
    protected $fillable = [
        'name', 'unit', 'weight', 'set_times','repeat_times', 'interval'
    ];
}

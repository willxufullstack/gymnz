<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalarySetting extends Model
{
    protected $fillable = [
        'created_by', 'base', 'course_fixed', 'course_percentage', 'sale_percentage', 'tax', 'gym_id', 'coach_id'
    ];

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }
}

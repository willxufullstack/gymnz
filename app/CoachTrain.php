<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CoachTrain extends Model
{
    protected $fillable = ['gym_id', 'coach_id', 'date', 'detail', 'images'];

    protected $casts = [
        'images' => 'array',
    ];

    /**
     * Get the gym.
     */
    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    /**
     * Get the customer
     */
    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }
}

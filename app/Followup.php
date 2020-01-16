<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Schedule;

class Followup extends Model
{
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
    public function customer()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the customer
     */
    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    /**
     * Get the schedule
     */
    public function schedule()
    {
        return $this->belongsTo('App\Schedule');
    }
}

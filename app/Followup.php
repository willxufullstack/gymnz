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

    public static function triggerNewFollowp(Schedule $schedule) {
        // skip if there is unfinished item
        $count = Followup::where('status', 0)
            ->where('coach_id', $schedule->coach_id)
            ->where('gym_id', $schedule->gym_id)
            ->where('customer_id', $schedule->customer_id)
            ->count();
        if($count) {
            return;
        }
        // create
        $followup = new Followup();
        $followup->customer_id = $schedule->customer_id;
        $followup->gym_id = $schedule->gym_id;
        $followup->coach_id = $schedule->coach_id;
        $followup->status = 0; // 0 => pending
        // set date to tomorrow
        $followup->date = date('Y-m-d', strtotime('+1 day', strtotime($schedule->date)));
        $followup->save();
    }

}

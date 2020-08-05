<?php

namespace App\Listeners;

use App\Events\CoachAddEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\SalarySetting;

class SalarySettingAddAction
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  CoachAddEvent  $event
     * @return void
     */
    public function handle(CoachAddEvent $event)
    {
        $coach = $event->coach;

        if(SalarySetting::where(['gym_id' => $coach->gym_id, 'coach_id' => $coach->id])->first()){
            return;
        }

        SalarySetting::create([
            'gym_id' => $coach->gym_id,
            'coach_id' => $coach->id,
            'created_by' => $coach->created_by
        ]);

    }
}

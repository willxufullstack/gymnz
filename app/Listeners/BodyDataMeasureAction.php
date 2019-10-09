<?php

namespace App\Listeners;

use App\BodyData;
use App\Coach;
use App\Task;
use App\User;

class BodyDataMeasureAction
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
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        $schedule = $event->schedule;

        $gymSetting = $schedule->gym->setting;

        if(empty($gymSetting['bodyMeasureDays'])){
            return;
        }
        // create a task
        // 4. trigger body measure event

        $days = BodyData::getDaysFromLastRecord($schedule->customer_id, $schedule->date);

        $gymId = $schedule->gym_id;
        $customer = $schedule->customer;
        $coach = $schedule->coach;
        if ($days === -1 || $days >= $gymSetting['bodyMeasureDays']) {
            // create a body event if no task
            $key = 'body_' . $customer->id;
            if (!Task::where('key', $key)->where('status', 1)->first()) {
                $task = new Task();
                $task->user_id = $coach->user->id;
                $task->gym_id = $gymId;
                $task->message = $customer->name . '需要测量数据';
                $task->date = $schedule->date;
                $task->created_by = $coach->id;
                $task->key = $key;
                $task->save();
            }
        }
    }
}

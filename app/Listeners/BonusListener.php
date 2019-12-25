<?php

namespace App\Listeners;

use App\Order;
use Carbon\Carbon;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Redis;


class BonusListener
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

        $date = explode('-', $schedule->date);
        $year = $date[0];
        $month = $date[1];
        $key = `bonus_{$schedule->customer_id}_{$year}_{$month}`;
        if(Redis::get($key)) {
            return;
        }


        // 2. create order
        $order = new Order();
        $order->created_by = $schedule->coach_id;
        $order->price = 0;
        $order->course_amount = 1;
        $order->duration = 120;
        $order->customer_id = $schedule->customer_id;
        $order->gym_id = $schedule->gym_id;
        $order->coach_id = $schedule->coach_id;
        // calcuate expiry
        $order->expiry = Carbon::now()->addMonths(12);
        // 3. map user
        // $order->customer()->associate($schedule->customer);
        // // 4. map gym
        // $order->gym()->associate($gym);
        // // 5. map coach
        // $order->coach()->associate($coach);
        // 6. return
        $order->save();
        Redis::set($key, 1);

    }
}

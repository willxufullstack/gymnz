<?php

namespace App\Listeners;

use App\Events\OrderCreateEvent;
use App\Accounting;


class AccountingAction
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
     * @param  OrderCreateEvent  $event
     * @return void
     */
    public function handle(OrderCreateEvent $event)
    {
        $order = $event->order;
        if ($order->price <= 0) {
            return;
        }
        // generate detail
        $cate = '订单收入';
        $detail = '#'.$order->id . ' ' . $order->customer->name . ' ' . $order->price . '/' . $order->course_amount;
        Accounting::create([
            'category' => $cate,
            'detail' => $detail,
            'amount' => $order->price,
            'created_by' => $order->created_by,
            'gym_id' => $order->gym_id,
        ]);
    }
}

<?php

namespace App\Listeners;

use App\Events\OrderEvent;
use App\Accounting;


class OrderAccountingAction
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
     * @param  OrderEvent  $event
     * @return void
     */
    public function handle(OrderEvent $event)
    {
        $order = $event->order;
        // generate detail
        $cate = '订单收入';

        $orderId = $order->id;
        if ($event->action == 'refund') {
            $cate = '退款支出';
            $orderId = null;
        }

        $detail = $order->getAccountingMessage($event->message);
        Accounting::create([
            'category' => $cate,
            'detail' => $detail,
            'amount' => $event->amount,
            'created_by' => $event->operator,
            'gym_id' => $order->gym_id,
            'created_at' => $order->created_at,
            'order_id' => $orderId
        ]);
    }
}

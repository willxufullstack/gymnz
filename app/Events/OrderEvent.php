<?php

namespace App\Events;

use Illuminate\Queue\SerializesModels;
use App\Order;


class OrderEvent
{
    use SerializesModels;

    public $order;
    public $action;
    public $amount;
    public $operator;
    public $message;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct(Order $order, $op, $action = 'create', $amount = 0, $message = '')
    {
        $this->order = $order;
        $this->operator = $op;
        $this->action = $action;
        $this->message = $message;
        if (empty($amount)) {
            $amount = $order->price;
        }
        $this->amount = $amount;
    }
}

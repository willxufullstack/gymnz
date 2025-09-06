<?php

namespace App\Listeners;

use App\Events\ScheduleDeletedEvent;
use App\Events\ScheduleUpdatedEvent;
use App\Order;

class ScheduleBookedAmountRefresher
{
    public function handle($event): void
    {
        if ($event instanceof ScheduleDeletedEvent) {
            // When a schedule is deleted, if it was linked to an order, refresh booked for that order
            $orderId = $event->schedule->order_id;
            if ($orderId) {
                Order::refreshBooked($orderId);
            }
            return;
        }
        if ($event instanceof ScheduleUpdatedEvent) {
            // When a schedule is updated and order relationship changed, refresh both old and new
            if ($event->originalOrderId) {
                Order::refreshBooked($event->originalOrderId);
            }
            if ($event->schedule->order_id) {
                Order::refreshBooked($event->schedule->order_id);
            }
            return;
        }
    }
}

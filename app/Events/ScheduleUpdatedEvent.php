<?php

namespace App\Events;

use App\Schedule;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ScheduleUpdatedEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $schedule;
    public $originalOrderId;

    public function __construct(Schedule $schedule, ?int $originalOrderId = null)
    {
        $this->schedule = $schedule;
        $this->originalOrderId = $originalOrderId;
    }
}

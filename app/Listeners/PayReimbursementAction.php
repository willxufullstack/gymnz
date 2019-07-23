<?php

namespace App\Listeners;

use App\Events\PayReimbursementEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Accounting;

class PayReimbursementAction
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
     * @param  PayReimbursementEvent  $event
     * @return void
     */
    public function handle(PayReimbursementEvent $event)
    {
        $cate = $event->reimbursement->category;
        $amount = -$event->reimbursement->amount;
        $gymId = $event->reimbursement->gym_id;
        $operator = $event->reimbursement->approved_by;
        $detail = $event->reimbursement->op->name . ' ' . $event->reimbursement->detail;
        Accounting::create([
            'category' => $cate,
            'detail' => $detail,
            'amount' => $amount,
            'created_by' => $operator,
            'gym_id' => $gymId,
        ]);
    }
}

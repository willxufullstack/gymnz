<?php

namespace App\Listeners;

use App\Events\PaySalaryEvent;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use App\Accounting;

class SalaryPaymentAccountingAction
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
     * @param  PaySalaryEvent  $event
     * @return void
     */
    public function handle(PaySalaryEvent $event)
    {
        $cate = '工资支出';
        $amount = -$event->salaryReceipt->total;
        $gymId = $event->salaryReceipt->gym_id;
        $operator = $event->salaryReceipt->created_by;
        $detail = $event->salaryReceipt->coach->user->name . ' ' . $event->salaryReceipt->month;
        Accounting::create([
            'category' => $cate,
            'detail' => $detail,
            'amount' => $amount,
            'created_by' => $operator,
            'gym_id' => $gymId,
        ]);
    }
}

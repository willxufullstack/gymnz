<?php

namespace App\Providers;

use Illuminate\Support\Facades\Event;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    /**
     * The event listener mappings for the application.
     *
     * @var array
     */
    protected $listen = [
        Registered::class => [
            SendEmailVerificationNotification::class,
            'App\Listeners\UserCreatedAction',
        ],
        'App\Events\OrderEvent' => [
            'App\Listeners\OrderAccountingAction',
        ],
        'App\Events\PayReimbursementEvent' => [
            'App\Listeners\PayReimbursementAction',
        ],
        'App\Events\CoachAddEvent' => [
            'App\Listeners\SalarySettingAddAction',
        ],
        'App\Events\PaySalaryEvent' => [
            'App\Listeners\SalaryPaymentAccountingAction',
        ],
        'App\Events\BonusEvent' => [
            'App\Listeners\BonusListener',
        ],
        'App\\Events\\ScheduleCreateEvent' => [
            'App\\Listeners\\BodyDataMeasureAction',
        ],
        'App\\Events\\ScheduleDeletedEvent' => [
            'App\\Listeners\\ScheduleBookedAmountRefresher',
        ],
        'App\\Events\\ScheduleUpdatedEvent' => [
            'App\\Listeners\\ScheduleBookedAmountRefresher',
        ],
    ];

    /**
     * Register any events for your application.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();

        //
    }
}

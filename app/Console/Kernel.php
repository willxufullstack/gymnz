<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        \App\Console\Commands\CrawlDianping::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('billing:deposit --point=1000')
            ->monthly();
        $schedule->command('crawl:dianping traffic --async --duration=5')
            ->dailyAt('03:00');
        $schedule->command('crawl:dianping comment --async --duration=5')
            ->dailyAt('03:00');
        $schedule->command('crawl:dianping refresh-session')
            ->dailyAt('04:00');
        $schedule->command('analyze:orders --duration=1')
            ->dailyAt('05:00');
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__ . '/Commands');

        require base_path('routes/console.php');
    }
}

<?php

namespace App\Console\Commands;

use App\Gym;
use Illuminate\Console\Command;

class CrawlDianping extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crawler:dianping {task} {--async} {--date=} {--duration=1} {--delay=5}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Crawl Dianping data';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $task = $this->argument('task');
        $date = $this->option('date') ?? date('Y-m-d');
        $duration = $this->option('duration');
        $async = $this->option('async') || false;
        $delay = $this->option('delay');
        $gyms = Gym::all();
        foreach ($gyms as $gym) {
            if ($gym->dianping_shop_name) {
                $gym->crawlDianping($task, $date, $duration, $async, $delay);
            }
        }
    }
}

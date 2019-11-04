<?php

namespace App\Console\Commands;

use App\WorkoutAction;
use Illuminate\Console\Command;

class ImportWorkoutActions extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:workoutactions';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'import workout action list';

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
        $url = 'http://o2-fit.com/api/sw';

        $actions = json_decode(file_get_contents($url), true);

        //   `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        //   `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        //   `unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
        //   `comments` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '',
        //   `weight` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '-',
        //   `set_times` int(10) unsigned NOT NULL DEFAULT '4',
        //   `repeat_times` int(10) unsigned NOT NULL DEFAULT '10',
        //   `created_at` timestamp NULL DEFAULT NULL,
        //   `updated_at` timestamp NULL DEFAULT NULL,
        //   `interval` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT '30s',
        foreach ($actions as $action) {
            $workoutAction = new WorkoutAction();
            $workoutAction->unit = $action['unit'];
            $workoutAction->name = $action['name'];
            $workoutAction->save();
            echo "import {$action['name']}\n";
        }
    }
}

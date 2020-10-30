<?php

namespace App\Console\Commands;

use App\Coach;
use App\CoachWeeklyReport;
use App\Gym;
use Carbon\Carbon;
use Illuminate\Console\Command;

class weeklyreport extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'report:coach {--weeks=3}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

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
        $weeks = (int)$this->option('weeks');
        // the end date of previous week;
        $today = Carbon::now()->endOfWeek();
        $gyms = Gym::all();
        for ($i = 0; $i < $weeks; $i++) {
            echo "processing " . $today->format('Y-m-d') . "\n";
            foreach ($gyms as $gym) {
                echo "gym: " . $gym->name . "\n";
                self::processGym($gym, $today->format('Y-m-d'));
            }
            // go to prevous week
            $today->addWeeks(-1);
        }
    }

    private static function processGym(Gym $gym, string $date)
    {
        $coaches = Coach::where(['gym_id' => $gym->id, 'status' => 1, 'hidden' => 0])->get();
        foreach ($coaches as $coach) {
            CoachWeeklyReport::updateOrInsertReport($gym->id, $coach->id, $date);
        }
    }
}

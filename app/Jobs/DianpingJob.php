<?php

namespace App\Jobs;

use App\Gym;
use DateInterval;
use DatePeriod;
use DateTime;
use Illuminate\Bus\Queueable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;

class DianpingJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    const DELAY = 5;

    private $gymId;
    private $date;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(int $gymId, string $date)
    {
        $this->gymId = $gymId;
        $this->date = $date;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $gym = Gym::find($this->gymId);
        $gym->crawlTrafficDay($this->date);
    }

    public static function enqueueJobsWithDelay(array $jobs) {
        $delay = 0;
        foreach($jobs as $job){
            $job->delay($delay);
            dispatch($job);
            $delay += self::DELAY;
        }
    }
}

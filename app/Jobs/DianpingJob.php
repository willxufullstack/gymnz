<?php

namespace App\Jobs;

use App\Gym;
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
    private $task;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct(string $task, int $gymId, string $date)
    {
        $this->gymId = $gymId;
        $this->date = $date;
        $this->task = $task;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        echo "doing {$this->task} job for gym {$this->gymId}\n";
        $gym = Gym::find($this->gymId);
        if($this->task === 'traffic'){
            $gym->crawlTrafficDay($this->date);
        }
        if($this->task === 'comment') {
            $gym->crawlCommentDay($this->date);
        }
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

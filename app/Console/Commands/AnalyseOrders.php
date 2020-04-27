<?php

namespace App\Console\Commands;

use App\Gym;
use App\Order;
use App\Statistics;
use DateTime;
use Illuminate\Console\Command;

class AnalyseOrders extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'analyze:orders {--date=} {--gym=} {--duration=30}';

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
        $date = $this->option('date') ?? date('Y-m-d');
        $duration = (int)$this->option('duration');
        $gymId = (int)$this->option('gym');

        if(empty($gymId)){
            $gyms = Gym::all();
            foreach($gyms as $gym) {
                $this->analyseGym($gym->id, $date, $duration);
            }
        } else {
            $this->analyseGym($gymId, $date, $duration);
        }
    }

    private function save(int $gymId, string $dateStr, array $row)
    {
        echo "$dateStr: expired = {$row['expired']} finished = {$row['finished']} stock = {$row['stock']} total = {$row['total']}\n";
        $s = Statistics::firstOrNew(['gym_id' => $gymId, 'date' => $dateStr]);
        $s->gym_id = $gymId;
        $s->date = $dateStr;
        $s->expired = $row['expired'];
        $s->finished = $row['finished'];
        $s->stock = $row['stock'];
        $s->total = $row['total'];
        $s->save();
    }

    private function analyseGym(int $gymId, string $date, int $duration)
    {
        echo "Gym = $gymId \n";
        echo "loading orders ... ... \n";
        // load order and order schedules
        $orders = Order::where('gym_id', $gymId)
            ->where('created_at', '<', $date)
            ->get();
        foreach ($orders as $order) {
            $order->loadSchedules();
        }

        echo "counting orders ... ... \n";
        // count schedules
        $ret = [];
        $dateRange = Gym::timeRange($date, $duration);
        foreach ($dateRange as $day) {
            $dayStr = $day->format('Y-m-d');
            $ret[$dayStr] = [
                'expired' => 0,
                'stock' => 0,
                'total' => 0,
                'finished' => 0
            ];
            foreach ($orders as $order) {
                $created = (new DateTime($order->created_at))->getTimestamp();
                if($created > $day->getTimestamp()){
                    continue;
                }
                $ret[$dayStr]['expired'] += $order->getExpiredCount($day);
                $ret[$dayStr]['finished'] += $order->getFinishedCount($day);
                $ret[$dayStr]['stock'] += $order->getStockCount($day);
                $ret[$dayStr]['total'] += $order->course_amount;
            }
            $this->save($gymId, $dayStr, $ret[$dayStr]);
        }
    }
}

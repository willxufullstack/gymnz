<?php

namespace App\Console\Commands;

use App\Dianping;
use App\Gym;
use Illuminate\Console\Command;

class CrawlDianping extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'crawler:dianping {task} {--gym=} {--date=}';

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
        $type = $this->argument('task');
        if ($type === 'traffic') {
            $this->crawlTraffic();
        }
    }

    private function crawlTraffic()
    {
        $gym = Gym::find($this->option('gym'));
        $date = $this->option('date');

        $appKey = config('services.dianping.key');
        $appSecret = config('services.dianping.secret');

        $session = $gym->dianping_session;
        $shopId = $gym->dianping_shop_id;

        $crawler = new DianpingCrawler($appKey, $appSecret, $session);
        $resp = $crawler->getDayTraffic($shopId, $date);

        if ((int) $resp['code'] === 200) {
            $data = $resp['data'];
            $dianping = Dianping::firstOrNew(['gym_id' => $gym->id, 'date' => $date]);
            $dianping->consume_uv = (int) $data['consume_uv'] ?? 0;
            $dianping->view_uv = (int) $data['view_uv'] ?? 0;
            $dianping->buy_uv = (int) $data['buy_uv'] ?? 0;
            $dianping->shop_uv = (int) $data['shop_uv'] ?? 0;
            $dianping->gym_id = $gym->id;
            $dianping->date = $date;
            $dianping->save();
        } else {
            echo 'faile to crawl dianping:' . $resp['msg'];
        }
    }
}

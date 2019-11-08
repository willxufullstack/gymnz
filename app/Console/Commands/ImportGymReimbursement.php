<?php

namespace App\Console\Commands;

use App\Coach;
use App\Reimbursement;
use App\User;
use Exception;
use Illuminate\Console\Command;

class ImportGymReimbursement extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:reimbursement {fromGymId} {toGymId} {start} {end} {defaultApproveBy}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'import reimbursement of recent 3 month';

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

        $from = (int) $this->argument('fromGymId');
        $to = (int) $this->argument('toGymId');
        $start = $this->argument('start');
        $end = $this->argument('end');
        $defaultApprove = $this->argument('defaultApproveBy');

        $data = $this->loadData($from, $start, $end);

        $defaultApproveId = User::where('email', $defaultApprove)->first()->id;
        foreach ($data as $row) {
            $this->insert($row, $defaultApproveId, $to);
        }
    }

    private function loadData(int $fromGymId, string $start, string $end)
    {
        $url = "http://o2-fit.com/api/g/{$fromGymId}/reimbursement?";
        //append start
        $url .= "start=$start";
        $url .= "&";
        $url .= "end=$end";
        return json_decode(file_get_contents($url), true);

        // {
        //     "id": 1818,
        //     "gym": 19,
        //     "date": "2019-10-25",
        //     "brief": "服装斗篷4件",
        //     "by": "王邵维",
        //     "op": "王邵维",
        //     "cate": "运营支出",
        //     "amount": -100,
        //     "channel": "现金",
        //     "memo": "",
        //     "created": "2019-10-25T05:39:16Z",
        //     "reimburse": true,
        //     "reimburse_done": false
        // },
    }

    private function insert(array $item, int $approvedBy, int $gymId)
    {
        $text = implode(' ', [$item['date'], $item['by'], $item['amount'], $item['brief']]);
        try {
            $r = new Reimbursement();
            $r->amount = -$item['amount'];
            $r->category = $item['cate'];


            $formattedTime = str_replace('T', ' ', $item['created']);
            $formattedTime = str_replace('Z', '', $formattedTime);
            $r->created_at = $formattedTime;
            $r->created_by = $approvedBy;


            // get coach id
            $user = User::where('name', $item['by'])->first();
            $coach = Coach::where('user_id', $user->id)->first();
            $r->coach_id = $coach->id;

            $r->detail = $item['brief'];
            $r->gym_id = $gymId;

            $r->status = $item['reimburse_done'] ? 2 : 1;
            $r->approved_by = $item['reimburse_done'] ? $approvedBy : 0;

            $r->save();
            echo  $text."\n";
        } catch (Exception $e) {
            dd($e);
            echo  'FAIL '.$text."\n";
        }



        // amount: 200
        // approved_by: 0
        // category: "运营支出"
        // coach_id: 2
        // created_at: "2019-11-08 19:24:13"
        // created_by: 1
        // detail: "hello"
        // gym_id: 2
        // id: 2
        // op: {id: 1, name: "admin", email: "00000000", api_token: null, sex: 0, openid: "", avatar: ""}
        // status: 1
        // updated_at: "2019-11-08 19:24:13

    }
}

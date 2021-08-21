<?php

namespace App\Console\Commands;

use App\Documents;
use Exception;
use Illuminate\Console\Command;

class ImportDoc extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:doc {fromGymId} {toGymId}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'import document';

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

        $data = $this->loadData($from);

        foreach ($data as $row) {
            $this->insert($row, $to);
        }
    }

    private function loadData(int $fromGymId)
    {
        $url = "http://o2-fit.com/api/g/{$fromGymId}/docs/";
        return json_decode(file_get_contents($url), true);

        // {
        //     "id": 5,
        //     "gym": 19,
        //     "author": "虞柳河",
        //     "title": "体验课动作库及考核标准",
        //     "summary": "体验课标准化流程和考核标准1.0",
        //     "attachment": "http://static.o2-fit.com/体验课训练标准0809.pdf",
        //     "datestr": "2017-08-09",
        //     "update": "2017-05-15T07:44:25Z"
        // },
    }

    private function insert(array $item, int $gymId)
    {
        try {
            // $table->string('title');
            // $table->string('author');
            // $table->string('file_path');
            // $table->string('description');
            $d = new Documents();
            $d->gym_id = $gymId;
            $d->title = $item['title'];
            $d->description = $item['summary'];
            $d->author = $item['author'];
            $d->file_path = $item['attachment'];
            $d->save();

            echo "importing " . $item['title'] . "\n";
        } catch (Exception $e) {
            dd($e);
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

<?php

namespace App\Console\Commands;

use App\Gym;
use App\User;
use Illuminate\Console\Command;

class ImportGym extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:gym {fromGymId} {toOrgId} {byUserPhoneNumber}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'import the gym';

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
        $gymId = $this->argument('fromGymId');
        $orgId = $this->argument('toOrgId');
        $byUserPhoneNumber = $this->argument('byUserPhoneNumber');

        $byUser = User::where('email', $byUserPhoneNumber)->first();

        $url = 'http://o2-fit.com/api/g/' . $gymId;
        // 1. get gym from remote

        $json = json_decode(file_get_contents($url), true);
        // 2. save gym
        // $gym = $request->only("name", "description", "org_id");
        $gym = [
            'name' => $json['name'],
            'description' => $json['address'],
            'org_id' => (int) $orgId,
            'created_by' => $byUser->id,
            'setting' => ["workingHours" => ["min" => 28,"max" => 96]]
        ];

        Gym::create($gym);
        echo("success\n");
    }
}

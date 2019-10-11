<?php

namespace App\Console\Commands;

use App\Coach;
use App\Gym;
use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

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

        // dd($json);
        // 2. save gym
        $gym = [
            'name' => $json['name'],
            'description' => $json['address'],
            'org_id' => (int) $orgId,
            'created_by' => $byUser->id,
            'setting' => ["workingHours" => ["min" => 28, "max" => 96]]
        ];

        $gym = Gym::create($gym);
        echo("created gym " . $json['name'] . "\n");

        // 2.create coach user
        foreach ($json['coaches_set'] as $coach) {
            // add coach input the gym
            $coachObj = new Coach([
                'created_by' => $byUser->id,
            ]);

            $user = new User();
            $user->password = Hash::make('00000000');
            $user->email = $coach['name'];
            $user->name = $coach['displayname'];
            $user->sex = $coach['sex'];
            $user->avatar = $coach['avatar'];
            $user->openid = $coach['openid'];
            $user->save();

            // 3.map coach=>user
            $coachObj->user()->associate($user);

            // 4.map coach=>gym
            $coachObj->gym()->associate($gym);
            $coachObj->save();

            echo('created coach '. $user['displayname'] . ' ' . $user->email . "\n");
        }

        echo ("success\n");
    }
}

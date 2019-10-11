<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Hash;

class ImportCustomers extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:customers {phoneNumber}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'import all customers by {phoneNumber}';

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
        $phoneNumber = $this->argument('phoneNumber');

        $url = 'http://o2-fit.com/api/' . $phoneNumber . '/customers/';

        $customersJson = json_decode(file_get_contents($url), true);

        $imported = 0;
        $skipped = 0;
        foreach ($customersJson as $customer) {
            // skip existed customer
            $user = User::where('email', $customer['name'])->first();
            if (empty($user)) {
                $user = new User();
                continue;
            }
            $user->password = Hash::make('00000000');
            $user->email = $customer['name'];
            $user->name = $customer['displayname'];
            $user->sex = $customer['sex'];
            $user->avatar = $customer['avatar'];
            $user->openid = $customer['openid'] ?? '';

            $success = $user->save();

            if (!$success) {
                $skipped++;
                echo ('ERROR: skipped customer ' . $user['displayname'] . ' ' . $user['name'] . "\n");
                continue;
            }
            echo ('imported customer ' . $user['displayname'] . ' ' . $user['name'] . "\n");
            $imported++;
        }
        echo "imported: $imported \n skipped: $skipped \n";
    }
}

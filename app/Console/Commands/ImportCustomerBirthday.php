<?php

namespace App\Console\Commands;

use App\User;
use Illuminate\Console\Command;

class ImportCustomerBirthday extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'import:birthday {phoneNumber}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "import  {phoneNumber}'s customers' birthday";

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

        echo "loading customers ... \n";
        $customersJson = json_decode(file_get_contents($url), true);
        echo "done\n";

        foreach ($customersJson as $customer) {
            // skip existed customer
            $user = User::where('email', $customer['name'])->first();
            if (empty($user)) {
                continue;
            }
            $user->birthday = $customer['birthday'];
            $user->save();
            echo ('imported customer birthday ' . $customer['displayname'] . ' : ' . $customer['birthday'] . "\n");
        }
    }
}

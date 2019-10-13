<?php

namespace App\Console\Commands;

use App\Coach;
use App\Gym;
use App\Order;
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

        $coachUser = User::where('email', $phoneNumber)->first();
        $defaultCoach = Coach::with('user')->where('user_id', $coachUser->id)->first();

        $url = 'http://o2-fit.com/api/' . $phoneNumber . '/customers/';

        $customersJson = json_decode(file_get_contents($url), true);

        $imported = 0;
        $skipped = 0;
        foreach ($customersJson as $customer) {
            // skip existed customer
            $user = User::where('email', $customer['name'])->first();
            if (empty($user)) {
                $user = new User();
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
            echo ('imported customer ' . $customer['displayname'] . ' : ' . $customer['name'] . "\n");
            self::importOrders($customer['name'], $defaultCoach);
            $imported++;
        }
        echo "imported: $imported \n skipped: $skipped \n";
    }

    private static function importOrders($customerPhone, $defaultCoach)
    {
        $url = "http://o2-fit.com/api/$customerPhone/o/";
        $ordersJson = json_decode(file_get_contents($url), true);
        $orders = $ordersJson['results'];
        foreach ($orders as $order) {
            self::importOrder($order, $defaultCoach);
        }
    }

    private static function importOrder($oriOrder, $defaultCoach)
    {
        echo "importing order {$oriOrder['customerdetail']['displayname']} +++ {$oriOrder['coachdetail']['displayname']} \n";
        $coachUser = User::where('email', $oriOrder['coachdetail']['name'])->first();
        $order = new Order();
        // !!!!TODO
        $order->created_by = $coachUser->id ?? $defaultCoach->user->id;
        $order->price = $oriOrder['amount'];
        $order->course_amount = $oriOrder['course_count'];
        $order->duration = $oriOrder['duration'];

        // format time
        $formattedTime = str_replace('T', ' ', $oriOrder['created']);
        $formattedTime = str_replace('Z', '', $formattedTime);
        $order->created_at = $formattedTime;
        // calcuate expiry
        // !!!!TODO
        // $order->expiry = Carbon::now()->addMonths($order->duration);
        $order->expiry = $oriOrder['endtime'] !== 'N/A' ? $oriOrder['endtime'] : date("Y-m-d", time());
        // 3. map user
        // get customer
        $customer = User::where('email', $oriOrder['custom'])->first();
        $order->customer()->associate($customer);
        // 4. map gym
        $gym = Gym::where('name', $oriOrder['gym'])->first();
        if(empty($gym)) {
            $gym = Gym::find($defaultCoach->gym_id);
        }
        $order->gym()->associate($gym);
        // 5. map coach
        $coach = $defaultCoach;
        if (!empty($coachUser)) {
            $coach = Coach::where('user_id', $coachUser->id)->first();
        }
        $order->coach()->associate($coach);
        // 6. return
        $order->save();
    }
}

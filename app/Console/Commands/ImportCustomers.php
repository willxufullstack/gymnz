<?php

namespace App\Console\Commands;

use App\BodyData;
use App\Coach;
use App\Gym;
use App\Order;
use App\Photo;
use App\User;
use App\Schedule;
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

        echo "loading customers ... \n";
        $customersJson = json_decode(file_get_contents($url), true);
        echo "done\n";

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
            self::importBodyData($customer['name'], $user['id'], $coachUser->id);

            self::importPhotos($customer['name'], $user['id'], $coachUser->id);

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
        $order->expiry = $oriOrder['endtime'] !== 'N/A' ? $oriOrder['endtime'] : date("Y-m-d", time());
        // 3. map user
        // get customer
        $customer = User::where('email', $oriOrder['custom'])->first();
        $order->customer()->associate($customer);
        // 4. map gym
        $gym = Gym::where('name', $oriOrder['gym'])->first();
        if (empty($gym)) {
            $gym = Gym::find($defaultCoach->gym_id);
        }
        $order->gym()->associate($gym);
        // 5. map coach
        $coach = $defaultCoach;
        if (!empty($coachUser)) {
            $coach = Coach::where('user_id', $coachUser->id)->first();
        }
        $order->coach()->associate($coach);
        // 6. save order
        $order->save();

        // 7. import schedule
        $bookedCount = self::importScheduleByOrder($oriOrder, $order, $defaultCoach, $gym);

        // 8. update booked_amount and status
        $order->booked_amount = $bookedCount;
        $order->save();
        echo $bookedCount . ' / ' . $oriOrder['course_count'] . "\n";
    }

    private static function importScheduleByOrder($oriOrder, $destOrder, $defaultCoach, $defaultGym)
    {
        // 1. get booked
        $orderId = $oriOrder['id'];
        $customerPhone = $oriOrder['customerdetail']['name'];
        $url = "http://o2-fit.com/api/$customerPhone/o/$orderId/";

        echo "loading order ... \n";
        $json = json_decode(file_get_contents($url), true);
        echo "done \n";

        $booked = $json['booked'];
        // import every schedule
        echo "booked count " . count($booked) . "\n";
        foreach ($booked as $s) {
            // skip empty order
            if (!empty($s)) {
                echo '.';
                self::importSchedule($s, $destOrder, $defaultCoach, $defaultGym);
                continue;
            }
            // skipped
            echo "x";
        }
        echo "\n";
        return count($booked);
    }

    private static function importSchedule($oriSchedule, $destOrder, $defaultCoach, $defaultGym)
    {
        try {
            $schedule = new Schedule();
            $schedule->created_by = $destOrder->coach->user->id;
            $schedule->order_id = $destOrder->id;
            $schedule->date = $oriSchedule['date'];

            // 36 + hour * 2

            $schedule->start = 36 + $oriSchedule['hour'] * 2;
            $schedule->end =  $schedule->start + 3;

            $schedule->detail = '[]';
            $schedule->status = 2;
            $schedule->conclusion = '';


            $customer = User::where('email', $oriSchedule['customerprofile']['name'])->first();
            $schedule->customer()->associate($customer);

            $coach = $defaultCoach;
            $coachUser = User::where('email', $oriSchedule['coachprofile']['name'])->first();
            if (!empty($coachUser)) {
                $coach = Coach::where('user_id', $coachUser->id)->first();
            }

            $schedule->coach()->associate($coach);
            $schedule->gym()->associate($defaultGym);
            $schedule->conclusion = self::importReview($oriSchedule);

            $schedule->detail = self::convertPlan(json_decode($oriSchedule['detail'], true));

            $schedule->save();
        } catch (\Exception $e) {

            echo "!!!!!empty customer, skip schedule\n";
            return;
        }
        // echo "imported schedule {$schedule->date}  {$oriSchedule['coachprofile']['displayname']} => {$coach->user->name}\n";
    }

    private static function importReview($oriSchedule)
    {
        $id = $oriSchedule['id'];
        $url = "http://o2-fit.com/api/s/$id/review/";
        try {
            $resp = file_get_contents($url);
            $json = json_decode($resp, true);
            echo ('. ');
            return $json['coach_review'];
        } catch (\Exception $ex) {
            echo ('x ');
            return '';
        }
    }

    private static function convertPlan($plan)
    {
        $ret = [];
        foreach ($plan as $item) {
            try {
                if ($item['contenttype'] === 'action') {
                    $newItem = [
                        'contenttype' => $item['contenttype'],
                        'interval' => $item['interval'],
                        'id' => $item['workoutid'],
                        'name' => $item['name'],
                        'set_times' => $item['repeattimes'],
                        'unit' => $item['unit'],
                        'repeat_times' => $item['weight'],
                        'weight' => $item['comments'] ?? '-'
                    ];
                    $ret[] = $newItem;
                }
                if ($item['contenttype'] === 'comments') {
                    $ret[] = $item;
                }
            } catch (\Exception $ex) { }
        }
        return json_encode($ret);
    }

    private static function importPhotos($phone, $customerId, $by) {
        // http://o2-fit.com/api/13001094300/album/
        $url = "http://o2-fit.com/api/$phone/album/";
        $resp = file_get_contents($url);
        $photos = json_decode($resp, true)['results'];

        // `user_id` bigint(20) unsigned NOT NULL,
        // `url` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
        // `created_by` bigint(20) unsigned NOT NULL,
        // `created_at` timestamp NULL DEFAULT NULL,
        // `updated_at` timestamp NULL DEFAULT NULL,
        // `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
        foreach($photos as $oriPhoto) {
            $photo = new Photo();
            $photo->user_id = $customerId;
            $photo->url = $oriPhoto['url'];
            $photo->created_by = $by;

            $formattedTime = str_replace('T', ' ', $oriPhoto['created']);
            $formattedTime = str_replace('Z', '', $formattedTime);
            $photo->created_at = $formattedTime;

            if($photo->save()){
                echo "imported " . $oriPhoto['url'] . "\n";
                continue;
            }
            echo "fail to import photo for {$phone}";
        }

    }

    private static function importBodyData($phone, $customerId, $by) {
        // 1. get data http://o2-fit.com/api/13001094300/e/all/
        $url = "http://o2-fit.com/api/$phone/e/all/";
        $resp = file_get_contents($url);
        $items = json_decode($resp, true);

         // 2. save
        foreach($items as $item){
            $value = $item['value'];

            // skip if not numeric
            if(!is_numeric($value)) {
                continue;
            }

            // `value` double NOT NULL DEFAULT '0',
            // `date` date NOT NULL,
            // `option` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            // `unit` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
            // `created_by` bigint(20) unsigned NOT NULL,
            // `user_id` bigint(20) unsigned NOT NULL,
            // `created_at` timestamp NULL DEFAULT NULL,
            // `updated_at` timestamp NULL DEFAULT NULL,
            // `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,

            $bd = new BodyData();
            $bd->created_by = $by;
            $bd->value = $item['value'];
            $bd->option = $item['option'];
            $bd->unit = $item['unit'];
            $bd->date = $item['date'];
            $bd->user_id = $customerId;
            $bd->save();
            echo "imported " . $item['option'] . ": " . $item['value'] . "\n";

        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use Mockery\Exception;
use Illuminate\Support\Facades\Auth;
use App\Coach;
use App\User;
use App\Gym;
use App\Order;
use App\Schedule;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;

class CsvImportController extends Controller
{

    const DEFAULT_PASSWORD = '12345678';

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     */
    public function index(Request $request)
    {
        //

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @param $gymId
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(Request $request, $gymId)
    {
        try {
            //values must be present and not empty.
            $validator = Validator::make($request->all(), [
                '*.price' => 'required',
                '*.course_amount' => 'required',
                '*.duration' => 'required',
                '*.created_at' => 'required',
                '*.customer_name' => 'required',
                // '*.customer_phone' => 'required',
                '*.customer_sex' => 'required',
                '*.coach_name' => 'required',
                '*.coach_phone' => 'required',
            ]);
            if ($validator->fails() || empty($gymId)) {
                return response()->json($validator->errors()->first(), 500);
            }
        } catch (Exception $e) {
            return response()->json(['message' => 'request params illegal: ' . $e], 500);
        }

        try {
            $savedOrders = [];
            $counter = 0;
            foreach ($request->all() as $params) {
                $counter ++;
                if(empty($params['customer_phone'])){
                    $params['customer_phone'] = self::autoFixPhone($counter);
                }
                $params['gym_id'] = $gymId;
                $coach = $this->saveCoach($params);
                $params['coach_id'] = $coach->id;
                $savedOrders[] = $this->saveOrderInfo($params);
            }
            return response()->json($savedOrders, 200);
        } catch (Exception $e) {
            return response()->json(['message' => 'fail' . $e], 500);
        }
    }

    static function autoFixPhone(int $i){
       return substr(time(). $i, -11);
    }

    /**
     * @param $orderData
     * @return Order
     */
    function saveOrderInfo($orderData)
    {
        $userId = Auth::User()->id;

        // convert phone to email
        $customerEmail = $orderData['customer_phone'];
        $customer = User::where('email', $customerEmail)->first();

        // 1. create user if customer does not exist
        if (empty($customer)) {
            $customer = new User();
            $customer->password = Hash::make(self::DEFAULT_PASSWORD);
            $customer->email = $customerEmail;
            $customer->name = $orderData['customer_name'];
            $customer->sex = User::convertSex($orderData['customer_sex']);
            $customer->save();
        }

        // check customer and coach should not same person
        $coach = Coach::where('user_id', $customer->id)->first();
        if ($coach) {
            throw new \InvalidArgumentException(
                "customer[{$orderData['customer_phone']}] and coach[{$orderData['coach_phone']}] should not same person".
                json_encode($orderData)
            );
        }

        // 2. create order
        // todo order may duplicated
        $order = new Order();
        $order->created_by = $userId;
        $order->price = $orderData['price'];
        $order->course_amount = $orderData['course_amount'];
        $order->duration = $orderData['duration'];
        $order->setCreatedAt( str_replace('/', '-', $orderData['created_at']));
        // calculate expiry
        $order->expiry = Carbon::parse($orderData['created_at'])->addMonths($orderData['duration'])->format('Y-m-d H:i:s');
        // 3. map user
        $order->customer_id = $customer->id;
        // 4. map gym
        $order->gym_id = $orderData['gym_id'];
        // 5. map coach
        $order->coach_id = $orderData['coach_id'];
        // 6. return
        $order->save();

        // handle schedules
        if($orderData['schedules']){
            $schedulesDates = explode('|', $orderData['schedules']);
            $this->saveSchedule($order, $schedulesDates);
        }

        // dispatch event for accounting
        event(new \App\Events\OrderEvent($order, $userId));

        return $order;
    }

    function saveSchedule($order, $schedulesDates){
        foreach($schedulesDates as $date) {
            $trimed = trim($date);
            if(empty($trimed)){
                continue;
            }
            $schedule = new Schedule();
            $schedule->created_by = Auth::User()->id;;
            $schedule->order_id = $order->id;
            $schedule->date = trim($date);
            $schedule->start = 40;
            $schedule->end = 43;
            $schedule->detail = '[]';
            $schedule->status = 2; // mark as finished
            $schedule->conclusion = '';
            $schedule->customer_id = $order->customer_id;
            $schedule->coach_id = $order->coach_id;
            $schedule->gym_id = $order->gym_id;
            $schedule->save();

            $order->booked_amount++;
        }
        $order->save();
    }

    /**
     * @param $coachData
     * @return Order
     */
    function saveCoach($coachData)
    {
        $userId = Auth::User()->id;

        // convert phone to email
        $userEmail = $coachData['coach_phone'];

        // 1. get user
        $user = User::where('email', $userEmail)->first();
        if (empty($user)) {
            // create user if not exists
            $user = new User();
            $user->password = Hash::make(self::DEFAULT_PASSWORD);
            $user->email = $userEmail;
            $user->name = $coachData['coach_name'];
            $user->sex = false;
            $user->save();
        }

        // 2. get coach
        $coach = Coach::where('user_id', $user->id)->first();
        if (empty($coach)) {
            // create coach row
            $coach = new Coach([
                'created_by' => $userId,
            ]);

            // map coach=>user
            $coach->user()->associate($user);

            // map coach=>gym
            $gym = Gym::find($coachData['gym_id']);
            $coach->gym()->associate($gym);

            $success = $coach->save();

            if ($success) {
                event(new \App\Events\CoachAddEvent($coach));
            }
        }

        return $coach;
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     */
    public function destroy($id)
    {
        //
    }

}

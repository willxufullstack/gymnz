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
            // values must be present and not empty.
            $validator = Validator::make($request->all(), [
                '*.price' => 'required',
                '*.course_amount' => 'required',
                '*.duration' => 'required',
                '*.created_at' => 'required',
                '*.customer_name' => 'required',
                '*.customer_phone' => 'required',
                '*.customer_sex' => 'required',
                '*.coach_name' => 'required',
                '*.coach_phone' => 'required',
                '*.coach_password' => 'required',
            ]);
            if ($validator->fails() || empty($gymId)) {
                return response()->json(['message' => 'request params illegal: ' . json_encode($validator)], 500);
            }
        } catch (Exception $e) {
            return response()->json(['message' => 'request params illegal: ' . $e], 500);
        }

        try {
            $savedOrders = [];
            foreach ($request->all() as $params) {
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
        $order->setCreatedAt($orderData['created_at']);
        // calculate expiry
        $order->expiry = Carbon::parse($orderData['created_at'])->addMonths($orderData['duration'])->format('Y-m-d H:i:s');
        // 3. map user
        $order->customer()->associate($customer);
        // 4. map gym
        $gym = Gym::find($orderData['gym_id']);
        $order->gym()->associate($gym);
        // 5. map coach
        $coach = Coach::find($orderData['coach_id']);
        $order->coach()->associate($coach);
        // 6. return
        $order->save();

        //dispatch event for accounting
        event(new \App\Events\OrderEvent($order, $userId));

        return $order;
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
            $password = $coachData['coach_password'] ? $coachData['coach_password'] : self::DEFAULT_PASSWORD;
            $user = new User();
            $user->password = Hash::make($password);
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

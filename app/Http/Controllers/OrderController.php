<?php

namespace App\Http\Controllers;

use App\Coach;
use App\User;
use App\Gym;
use App\Order;
use Carbon\Carbon;
use Auth;
use Hash;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    const DEFAULT_PASSWORD = '12345678';
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gymId)
    {
        if (!$request->has('start') || !$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }

        $orders = Order::with(['customer', 'coach.user'])
            ->where('gym_id', '=', $gymId)
            ->where('created_at', '>=', $request->input('start'))
            ->where('created_at', '<=', $request->input('end'))
            ->get();

        if ($orders) {
            return response()->json($orders, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        // TODO validate

        // prepare data
        $userId = Auth::User()->id;
        $customerData = $request->only('name', 'phone', 'sex');
        // convert phone to email
        $customerEmail = $customerData['phone'];

        $gym = Gym::find($request->input('gym'));
        $coach = Coach::find($request->input('coach'));

        // 1. create user if customer does not exist
        $customer = User::where('email', '=', $customerEmail)->first();
        if (empty($customer)) {
            $customer = new User();
            $customer->password = Hash::make(self::DEFAULT_PASSWORD);
            $customer->email = $customerEmail;
            $customer->name = $customerData['name'];
            $customer->sex = $customerData['sex'];
            $customer->save();
        }
        // 2. create order
        $order = new Order();
        $order->created_by = $userId;
        $order->price = $request->input('price');
        $order->course_amount = $request->input('amount');
        $order->duration = $request->input('duration');
        // calcuate expiry
        $order->expiry = Carbon::now()->addMonths($order->duration);
        // 3. map user
        $order->customer()->associate($customer);
        // 4. map gym
        $order->gym()->associate($gym);
        // 5. map coach
        $order->coach()->associate($coach);
        // 6. return
        $order->save();

        //dispatch event for accounting
        event(new \App\Events\OrderEvent($order, $userId));

        return response()->json($order, 201);;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function refund(Request $request, $gymId, $orderId)
    {
        $order = Order::where([
            'gym_id' => $gymId,
            'id' => $orderId,
        ])->first();
        if (!$order) {
            return response()->json(array('message' => 'cannot find the order'), 404);
        }
        $order->status = 2;
        $order->save();
        event(new \App\Events\OrderEvent($order, Auth::User()->id, 'refund', -$request->input('amount'), $request->input('reason')));
        return  response()->json($order, 200);
    }

    public function getCustomerOrders(Request $request, $customerId)
    {
        $query = Order::with('coach.user')
            ->where('customer_id', '=', $customerId);
        if ($request->input('gym')) {
            $query = $query->where('gym_id', '=', $request->input('gym'));
        }
        $ret = $query->get();
        if ($ret) {
            return response()->json($ret, 200);
        }
        return response()->json(array('message' => $ret), 500);
    }

    public function getCustomerCourseBalance(Request $request, $customerId)
    {
        $query = Order::with('coach.user')
            ->where([
                'customer_id' => $customerId,
            ]);
        if ($request->input('gym')) {
            $query = $query->where('gym_id', '=', $request->input('gym'));
        }
        $orders = $query->get();
        $ret = ['total' => 0, 'booked' => 0];
        // calc
        foreach ($orders as $order) {
            if ($order->status === 1) {
                $ret['total'] += $order->course_amount;
            } else {
                // calc total by the actual booked amount if refund
                $ret['total'] += $order->booked_amount;
            }
            $ret['booked'] += $order->booked_amount;
        }
        return response()->json($ret, 200);
    }
}

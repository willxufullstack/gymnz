<?php

namespace App\Http\Controllers;

use App\Gym;
use App\Order;
use App\Coach;
use App\Schedule;
use App\User;
use Auth;

use Illuminate\Http\Request;

class GymController extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $userId = Auth::user()->id;
        $ret = Gym::where("created_by", "=", $userId)->get();
        if ($ret) {
            return response()->json($ret, 200);
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
        $userId = Auth::user()->id;
        $gym = $request->only("name", "description", "org_id");
        $gym['created_by'] = $userId;
        $ret = Gym::create($gym);
        if ($ret) {
            return response()->json($ret, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Gym::find($id);
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
        $gym = Gym::find($id);
        if (!$gym) {
            return response()->json(array('message' => 'fail'), 500);
        }
        $success = $gym->update($request->all());
        if ($success) {
            return response()->json($gym, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
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

    public function getShareCover(){
        return [
            'plan' => 'http://static.o2-fit.com/plan_share.png',
            // 'register' => 'http://static.o2-fit.com/image/register_share.jpg',
            'register' => 'http://static.o2-fit.com/image/register2.jpg',
            'confirm' => 'http://static.o2-fit.com/confirm_share.png'
        ];
    }


    public function getCustomerList($id)
    {
        // TODO permission check
        $customers = Order::with('customer')
            ->where('gym_id', '=', $id)
            ->orderBy('updated_at', 'DESC')
            ->get()
            ->pluck('customer')
            ->unique('id')
            ->toArray();
        $gym = Gym::find($id);
        $trialIds = $gym->getTrialCustomers();
        $trials = [];
        if(!empty($trialIds)){
            $trials = User::whereIn('id', $gym->getTrialCustomers())->get();
        }
        $ret = [];
        if (is_array($customers)) {
            $ret = array_values($customers);
        }
        foreach($trials as $c) {
            $ret[] = $c->toArray();
        }
        return response()->json($ret, 200);
    }

    public function getAvailableTime(Request $request, $id)
    {
        $date = $request->input('date');
        if (empty($date)) {
            return response()->json(array('message' => 'missing date'), 500);
        }

        // get workinghours
        $gym = Gym::find($id);
        $workingHours = range($gym->setting['workingHours']['min'], $gym->setting['workingHours']['max'] - 1);
        if(empty($workingHours) || count($workingHours) < 4) {
            $workingHours = range(32, 92);
        }

        // build available hours according to working hours
        $coaches = Coach::with('user')->where([
            'gym_id' => $id,
            'status' => 1
        ])->get();
        // get schedules
        $schedules = Schedule::where([
            'gym_id' => $id,
            'date' => $date,
        ])->get();
        foreach ($coaches as $coach) {
            $coach['available'] = $workingHours;
            foreach ($schedules as $schedule) {
                if ($schedule->coach_id === $coach['id']) {
                    // filter scheduled hours
                    $coach['available'] = array_values(array_filter($coach['available'], function ($h) use ($schedule) {
                        return $h < $schedule->start || $h > $schedule->end;
                    }));
                }
            }
        }
        return response()->json($coaches, 200);
    }


    public function getSummary(Request $request, $id)
    {
        if (!$request->has('start') || !$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }
        // schedules
        $schedules = Schedule::where('gym_id', $id)
            ->where('status', 2)
            ->where('date', '>=', $request->input('start'))
            ->where('date', '<=', $request->input('end'));

        $scheduleCount = $schedules->count();

        $activeCustomerCount = count($schedules->groupBy('customer_id')->get('customer_id'));

        $orders = Order::where('gym_id', $id)
            ->where('price', '>', 0)
            ->where('created_at', '>=', $request->input('start'))
            ->where('created_at', '<=', $request->input('end'));
        // order count
        $orderCount = $orders->count();

        // order total price
        $orderPrice = $orders->sum('price');

        $res = [
            'orderCount' => $orderCount,
            'scheduleCount' => $scheduleCount,
            'orderPrice' => $orderPrice,
            'activeCustomerCount' => $activeCustomerCount
        ];
        return response()->json($res, 200);
    }
}

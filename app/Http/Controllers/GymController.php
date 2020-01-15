<?php

namespace App\Http\Controllers;

use App\Gym;
use App\Order;
use App\Coach;
use App\Schedule;
use App\User;
use Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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
     * @param  \Illuminate\Http\Request $request
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
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Gym::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
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
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function getShareCover()
    {
        return [
            'plan' => 'http://static.o2-fit.com/image/plan_share_500x400.png',
            // 'register' => 'http://static.o2-fit.com/image/register_share.jpg',
            'register' => 'http://static.o2-fit.com/image/register2.jpg',
            'confirm' => 'http://static.o2-fit.com/confirm_share.png'
        ];
    }

    public function refreshCustomerCreatedAt($id)
    {
        $customers = Order::with('customer')
            ->where('gym_id', '=', $id)
            ->orderBy('updated_at', 'DESC')
            ->get()
            ->pluck('customer')
            ->unique('id')
            ->toArray();
        $i = 0;
        foreach ($customers as $c) {
            $customer = User::find($c['id']);
            $firstOrder = $customer->getFirstOrder($id);
            if (!empty($firstOrder)) {
                $customer->created_at = $firstOrder->created_at;
                $customer->save();
                $i++;
            }
        }
        return response()->json(['updated' => $i], 200);
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
        if (!empty($trialIds)) {
            $trials = User::whereIn('id', $gym->getTrialCustomers())->get();
        }
        $ret = [];
        if (is_array($customers)) {
            $ret = array_values($customers);
        }
        foreach ($trials as $c) {
            $ret[] = $c->toArray();
        }

        // get customer id list

        // get latest schedule info by customer_id
        // add schedule data to ret
        foreach ($ret as &$item) {
            $item['latest_schedule'] = User::getLatestScheduleById($item['id'], 2);
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
        if (empty($workingHours) || count($workingHours) < 4) {
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


        $gym = Gym::find($id);
        $endWithSeconds = $request->input('end') . ' 23:59:59';
        $startGymTimezone = $gym->convertGymTimezoneToUTC($request->input('start'));
        $endGymTimezone = $gym->convertGymTimezoneToUTC($endWithSeconds);
        // change end time to the last second of the end day

        $orders = Order::where('gym_id', $id)
            ->where('price', '>', 0)
            ->where('created_at', '>=', $startGymTimezone)
            ->where('created_at', '<=', $endGymTimezone);
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

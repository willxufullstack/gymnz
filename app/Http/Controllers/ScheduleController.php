<?php

namespace App\Http\Controllers;

use App\BodyData;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Gym;
use App\User;
use App\Coach;
use App\Events\BonusEvent;
use App\Order;
use App\Schedule;
use Auth;
use DateInterval;
use DatePeriod;
use DateTime;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Redis;

class ScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $id)
    {
        $foreignKeys = ['coach.user', 'customer'];
        $query = Schedule::with($foreignKeys);

        $group = ''; //keep count param to add a `group by` at the end
        // could be [customer_id, coach_id]
        if ($request->input('count')) {
            $group = $request->input('count');
            $query->select(DB::raw('count(id) as course_amount, ' . $group));
        }

        $query->where('gym_id', $id);
        if ($request->input('start') && $request->input('end')) {
            $query->where('date', '>=', $request->input('start'));
            $query->where('date', '<=', $request->input('end'));
        }
        if ($request->input('date')) {
            $query->where('date', $request->input('date'));
        }
        if ($request->input('customer')) {
            $query->where('customer_id', $request->input('customer'));
        }
        if ($request->input('coach')) {
            $query->where('coach_id', $request->input('coach'));
        }
        if ($request->input('status')) {
            $query->where('status', $request->input('status'));
        }

        if (!empty($group)) {
            $query->groupBy($group)->orderBy('course_amount', 'DESC');
        }

        $ret = $query->get();

        // update a month count when quering schedule list
        // should skip the step when we do some group count operation
        if (empty($group)) {
            foreach ($ret as &$row) {
                $row->monthCount = $row->getMonthCount();
            }
        }

        if ($request->input('price')) {
            foreach ($ret as &$row) {
                if ($row['order_id']) {
                    $order = Order::find($row['order_id']);
                    $row['price'] = $order->price / $order->course_amount;
                }
            }
        }
        if ($request->input('balance')) {
            foreach ($ret as &$row) {
                $row['balance'] = $row->getBalance();
            }
        }

        if ($ret) {
            return response()->json($ret, 200);
        }
        return response()->json(['message' => 'failed'], 500);
    }

    private function getWorkloadExpr()
    {
        $str = '';
        for ($i = 0; $i <= 24 * 60; $i+=15) {
            $str .= 0;
        }
        return $str;
    }
    public function workload(Request $request, $id)
    {
        // 1. get schedules
        $query = Schedule::where('gym_id', $id);
        if ($request->input('start') && $request->input('end')) {
            $query->where('date', '>=', $request->input('start'));
            $query->where('date', '<=', $request->input('end'));
        }
        if ($request->input('date')) {
            $query->where('date', $request->input('date'));
        }
        $schedules = $query->get();

        // 2. get workload expr
        $begin = $end = '';
        if ($request->input('date')) {
            $begin = new DateTime($request->input('date'));
            $end = new DateTime($request->input('date'));
        }
        if ($request->input('start') && $request->input('end')) {
            $begin = new DateTime($request->input('start'));
            $end = new DateTime($request->input('end'));
        }
        $workloadStr = [];
        for ($i = $begin; $i <= $end; $i->modify('+1 day')) {
            $workloadStr[$i->format("Y-m-d")] = $this->getWorkloadExpr();
        }

        // 3. mark workload
        foreach ($schedules as $s) {
            for ($i = $s->start; $i <= $s->end; $i++) {
                $workloadStr[$s->date][$i] = (int)$workloadStr[$s->date][$i] + 1;
            }
        }
        return $workloadStr;
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

    private function _createTrialSchedule(array $scheduleData, int $userId, User $customer = null)
    {

        $schedule = new Schedule();
        $schedule->created_by = $userId;

        $schedule->date = $scheduleData['date'];
        $schedule->start = $scheduleData['start'];
        $schedule->end = $scheduleData['end'];

        $schedule->detail = '[]';

        $schedule->status = 1;
        $schedule->conclusion = '';

        $gym = Gym::find($scheduleData['gym']);
        // create trial customer
        if ($customer == null) {
            $customer = new User();
            $customer->password = Hash::make('00000000');
            $customer->email = time() . '';
            $customer->name = $scheduleData['customer'];
            $customer->sex = true;
            $customer->avatar = 'http://static.o2-fit.com/image/logo.png?imageView2/1/w/60/h/60/format/jpg';
            $customer->save();
            $gym->addTrialCustomer($customer->id);
        }

        $schedule->customer()->associate($customer);
        $schedule->coach()->associate(Coach::with('user')->find($scheduleData['coach']));
        $schedule->gym()->associate($gym);

        $schedule->save();
        $schedule['balance'] = $schedule->getBalance();

        return $schedule;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $userId = Auth::User()->id;

        $scheduleData = $request->only('customer', 'coach', 'gym', 'date', 'start', 'end');

        // handle trial new
        if ($request->has('trial')) {

            $trial = $this->_createTrialSchedule($scheduleData, $userId);
            return response()->json($trial, 201);
        }
        // handle trial old
        $allOrders = Order::where([
            'customer_id' => $scheduleData['customer'],
            'gym_id' => $scheduleData['gym'],
        ])->count();
        if ($allOrders === 0) {
            $customer = User::find($scheduleData['customer']);
            $trial = $this->_createTrialSchedule($scheduleData, $userId, $customer);
            return response()->json($trial, 201);
        }


        // 1. try to find avaiable orders
        $order = Order::where([
            'customer_id' => $scheduleData['customer'],
            'gym_id' => $scheduleData['gym'],
        ])->whereRaw('booked_amount<course_amount')
            ->orderBy('expiry', 'ASC')
            ->first();
        //return 404 if no available order
        if (empty($order)) {
            return response()->json(['message' => 'no available order'], 404);
        }
        // 2. create schedule
        $schedule = new Schedule();
        $schedule->created_by = $userId;
        $schedule->order_id = $order->id;
        $schedule->date = $scheduleData['date'];
        $schedule->start = $scheduleData['start'];
        $schedule->end = $scheduleData['end'];

        // try to get detail from redis
        $detail = Redis::get('tmp_schedule_plan_' . $scheduleData['customer']);
        if (!$detail) {
            $detail = '[]';
        } else {
            Redis::del('tmp_schedule_plan_' . $scheduleData['customer']);
        }
        $schedule->detail = $detail;

        $schedule->status = 1;
        $schedule->conclusion = '';

        $schedule->customer()->associate(User::find($scheduleData['customer']));
        $schedule->coach()->associate(Coach::with('user')->find($scheduleData['coach']));
        $schedule->gym()->associate(Gym::find($scheduleData['gym']));

        $schedule->save();
        event(new \App\Events\ScheduleCreateEvent($schedule));
        // TODO handle save error
        // 3. update order booked_amount
        $order->booked_amount++;
        $order->save();

        $schedule['balance'] = $schedule->getBalance();
        return response()->json($schedule, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($gymId, $id)
    {
        return Schedule::with(['coach.user', 'customer'])
            ->where(['id' => $id, 'gym_id' => $gymId])
            ->first();
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
    public function update(Request $request, $gymId, $id)
    {
        $schedule = Schedule::with(['coach.user', 'customer'])->where(['id' => $id, 'gym_id' => $gymId])->first();
        if (empty($schedule)) {
            return response()->json(array('message' => 'can not find the schedule ' . $id), 500);
        }

        if ($request->has('conclusion')) {
            $schedule->conclusion = $request->input('conclusion');
        }
        if ($request->has('detail')) {
            $schedule->detail = $request->input('detail');
            // save action default value if it's the latest schedule
            $latest = Schedule::where(['customer_id' => $schedule->customer_id])->orderBy('date', 'DESC')->first();
            if ($latest->id === $id) {
                $schedule->saveActionDefaultValue();
            }
        }
        $success = $schedule->save();
        $schedule['balance'] = $schedule->getBalance();
        if ($success) {
            return response()->json($schedule, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($gymId, $id)
    {
        $schedule = Schedule::where(['id' => $id, 'gym_id' => $gymId])->first();
        if (empty($schedule)) {
            return response()->json(array('message' => 'can not find the schedule ' . $id), 500);
        }

        // keep the plan into cache
        Redis::set('tmp_schedule_plan_' . $schedule->customer_id, $schedule->detail);

        $success = $schedule->delete();
        if ($success) {
            // update order booked when it's non-trial schedule
            // TODO need to use event pattern
            if ($schedule['order_id']) {
                $order = Order::find($schedule['order_id']);
                $order->booked_amount--;
                $order->save();
            }

            return response()->json($schedule, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }


    public function complete($gymId, $id)
    {
        $schedule = Schedule::with(['coach.user', 'customer', 'gym'])
            ->where(['id' => $id, 'gym_id' => $gymId])
            ->first();
        if (empty($schedule)) {
            return response()->json(array('message' => 'can not find the schedule ' . $id), 500);
        }

        $schedule->status = 2;
        $success = $schedule->save();

        // check where have bonus setting
        $setting = $schedule->gym->setting;
        if (array_key_exists('bonus', $setting) && $setting['bonus']) {
            if ($schedule->getMonthCount() === (int) $setting['bonus']) {
                event(new BonusEvent($schedule));
            }
        }

        if ($success) {
            $schedule['balance'] = $schedule->getBalance();
            return response()->json($schedule, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    public function history(Request $request)
    {
        if (!$request->has('customer')) {
            return response()->json(array('message' => 'missing parameter'), 500);
        }
        $customer = (int) $request->input('customer');
        return Schedule::where('customer_id', $customer)->orderBy('date', 'DESC')->get();
    }
}

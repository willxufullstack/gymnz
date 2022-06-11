<?php

namespace App\Http\Controllers;

use App\Billing;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Gym;
use App\User;
use App\Coach;
use App\Console\Commands\DianpingCrawler;
use App\Events\BonusEvent;
use Carbon\Carbon;
use App\Order;
use App\Schedule;
use Auth;
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

        if ($request->has('analyse')) {
            if ($request->input('analyse') === 'customer') {
                return $this->anaylzeCustomer($request, $id);
            }
            return response()->json(array('message' => 'invalid analyse type'), 500);
        }

        $foreignKeys = ['coach.user', 'customer', 'order'];
        $query = Schedule::with($foreignKeys);

        $group = ''; //keep count param to add a `group by` at the end
        // could be [customer_id, coach_id]
        if ($request->input('count')) {
            $group = $request->input('count');
            $query->select(DB::raw('count(distinct(customer_id)) as customer_amount, count(id) as course_amount, ' . $group));
            $query->where('order_id', '>', 0);
        } else {
            $query->orderBy('date', 'DESC');
        }

        /* select count(id) as c, coach_name, month(date) from schedule group by coach_name,  */
        // ?gym_id=2&count=coach_name,month(date)&start=2019-01-01&end=2019-12-31
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
            $query->groupBy(explode(',', $group))->orderBy('course_amount', 'DESC');
        }

        $ret = $query->get();

        // update a month count when quering schedule list
        // should skip the step when we do some group count operation
        if (empty($group)) {
            foreach ($ret as &$row) {
                $row->monthCount = $row->getMonthCount();
                $row->last_measure_at = User::getLatestMeasureDate($row->customer_id);
            }
        }

        foreach ($ret as &$row) {
            if ($row['order_id']) {
                $row['price'] = $row->order->price / $row->order->course_amount;
                $row['balance'] = [
                    'booked' => $row->order->booked_amount,
                    'total' => $row->order->course_amount,
                ];
            } else {
                $row['balance'] = '体验课';
            }
        }

        if ($ret) {
            return response()->json($ret, 200);
        }
        return response()->json(['message' => 'failed'], 500);
    }

    // frequency = 1 / ((firstSchedule.date - lastSchedule.date) / scheduleCount)

    public function anaylzeCustomer(Request $request, $id)
    {

        if (!$request->has('start') || !$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }
        $query = Schedule::with(['customer'])
            ->select(DB::raw('customer_id, count(id) as course_amount, min(date) as min_date, max(date) as max_date'))
            ->where('gym_id', $id)
            ->where('status', 2)
            ->where('date', '>=', $request->input('start'))
            ->where('date', '<=', $request->input('end'))
            ->groupBy('customer_id');
        $ret = $query->get();

        foreach ($ret as &$row) {
            // plug first order create time
            // plug available balance
            $row['balance'] =  $row['customer']->getCourseBalance($id);
        }

        return $ret;
    }

    private function getWorkloadExpr()
    {
        $str = '';
        for ($i = 0; $i <= 24 * 60; $i += 15) {
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
                $workloadStr[$s->date][$i] = (int) $workloadStr[$s->date][$i] + 1;
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


    public function preSchedule(Request $request)
    {
        $scheduleData = $request->only('customer', 'coach', 'gym', 'date', 'start', 'end');

        $order = Order::where([
            'customer_id' => $scheduleData['customer'],
            'gym_id' => $scheduleData['gym'],
            'status' => 1,
        ])->whereRaw('booked_amount<course_amount')
            ->orderBy('expiry', 'ASC')
            ->first();

        return $order;
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


        // 1. try to find available orders
        $order = Order::where([
            'customer_id' => $scheduleData['customer'],
            'gym_id' => $scheduleData['gym'],
            'status' => 1,
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

        $len = $order->len > 0 ?  $order->len : 4;
        $schedule->end = $schedule->start + $len - 1;

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

        $gym = Gym::find($scheduleData['gym']);
        $schedule->customer()->associate(User::find($scheduleData['customer']));
        $schedule->coach()->associate(Coach::with('user')->find($scheduleData['coach']));
        $schedule->gym()->associate($gym);

        if ($schedule->hasTimeConflicts()) {
            return response()->json(['message' => 'conflict with other schedules'], 400);
        }
        $schedule->save();

        // link the followup
        $schedule->linkFollowup();
        event(new \App\Events\ScheduleCreateEvent($schedule));
        // TODO handle save error
        // 3. update order booked_amount / expiry
        if (!$order->booked_amount) {
            $order->expiry = Carbon::createFromFormat('Y-m-d', $scheduleData['date'])->addMonths($order->duration);
        }
        $order->booked_amount++;
        $order->save();

        $schedule['balance'] = $schedule->getBalance();

        // clear cache 'latest_schedule'
        User::setLatestScheduleCache($schedule->customer_id);
        User::clearLatestMeasureDate($schedule->customer_id);

        Billing::consume($schedule);
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
        $oriOrderId = $newOrderId = 0;
        $schedule = Schedule::with(['coach.user', 'customer'])->where(['id' => $id, 'gym_id' => $gymId])->first();
        if (empty($schedule)) {
            return response()->json(array('message' => 'can not find the schedule ' . $id), 500);
        }

        if ($request->has('conclusion')) {
            $schedule->conclusion = $request->input('conclusion');
        }
        if ($request->has('detail')) {
            $schedule->detail = $request->input('detail');
            $schedule->saveActionDefaultValue();
        }
        if ($request->has('order_id')) {
            $oriOrderId = $schedule->order_id;
            $schedule->order_id = $request->input('order_id');
            $newOrderId = $schedule->order_id;
        }
        if ($request->has('coach_id')) {
            $schedule->coach_id = $request->input('coach_id');
        }
        $success = $schedule->save();
        $schedule['balance'] = $schedule->getBalance();

        if ($oriOrderId) {
            Order::refreshBooked($oriOrderId);
        }
        if ($newOrderId) {
            Order::refreshBooked($newOrderId);
        }
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

        // unlink followup
        $schedule->unlinkFollowup();
        // keep the plan into cache
        if (!empty($schedule->detail) && $schedule->detail !== '[]') {
            Redis::set('tmp_schedule_plan_' . $schedule->customer_id, $schedule->detail);
        }
        $success = $schedule->delete();
        if ($success) {
            // update order booked when it's non-trial schedule
            // TODO need to use event pattern
            if ($schedule['order_id']) {
                $order = Order::find($schedule['order_id']);
                $order->booked_amount--;
                $order->save();
            }

            $schedule->gym->setGymLatestSchedules($schedule->customer_id);
            Billing::cancel($schedule);
            return response()->json($schedule, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    public function hotmap(Request $request, $userId)
    {
        $customer = User::find($userId);
        $date = $request->input('date', date('Y-m-d'));
        return response()->json(str_split($customer->getHotMap($date, 35)));
    }

    public function bonusCheck(Request $request, $gymId)
    {

        $gym = Gym::find($gymId);
        $setting = $gym->setting;
        if (!array_key_exists('bonus', $setting) || !$setting['bonus']) {
            return response()->json(array('message' => 'bonus has not been enabled '), 200);
        }

        $year = $request->input('year');
        $month = $request->input('month');
        // get last schedule of the month
        $rows = Schedule::select(DB::raw('customer_id, count(id) as course_amount'))
            ->where(['gym_id' => $gymId])
            ->whereYear('date', '=', $year)
            ->whereMonth('date', '=', $month)
            ->where('status', 2)
            ->groupBy('customer_id')
            ->get();
        $processed = [];
        foreach ($rows as $row) {
            if ($row->course_amount >= (int) $setting['bonus']) {
                // last schedule
                $lastSchedule = Schedule::with(['customer'])
                    ->where(['gym_id' => $gymId, 'customer_id' => $row->customer_id])
                    ->whereYear('date', '=', $year)
                    ->whereMonth('date', '=', $month)
                    ->where('status', 2)
                    ->orderBy('date', 'DESC')
                    ->first();
                event(new BonusEvent($lastSchedule));
                $processed[] = $lastSchedule->customer->name;
            }
        }
        return response()->json($processed, 200);
    }

    public function complete(Request $request, $gymId, $id)
    {
        $schedule = Schedule::with(['coach.user', 'customer', 'gym'])
            ->where(['id' => $id, 'gym_id' => $gymId])
            ->first();
        if (empty($schedule)) {
            return response()->json(array('message' => 'can not find the schedule ' . $id), 500);
        }

        if ($reaction = $request->input('reaction')) {
            $schedule->reaction = $reaction;
        }

        $schedule->status = 2;
        $success = $schedule->save();

        $gym = Gym::find($schedule->gym_id);
        $gym->setGymLatestSchedules($schedule->customer_id);

        // try to trigger followup if needed
        $schedule->triggerNewFollowp();

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

    public function coupon(Request $request, $gymId, $id)
    {
        $schedule = Schedule::where(['id' => $id, 'gym_id' => $gymId])
            ->first();
        if (empty($schedule)) {
            return response()->json(array('message' => 'cannot find schedule'), 406);
        }

        $user = Auth::user();
        $gym = Gym::find($gymId);
        $code = $request->input('code');

        $appKey = config('services.dianping.key');
        $appSecret = config('services.dianping.secret');
        $crawler = new DianpingCrawler($appKey, $appSecret, $gym->dianping_session);

        if ($crawler->consume($code, $schedule->id, $gym->dianping_shop_id, $user->id, $user->name)) {
            $schedule->dianping_code = $code;
            $schedule->save();
            return response()->json($schedule, 200);
        }
        return response()->json(['success' => 'verify groupon code fail'], 406);
    }
}

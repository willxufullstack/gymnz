<?php

namespace App\Http\Controllers;

use App\Account;
use App\Gym;
use App\Order;
use App\Coach;
use App\Console\Commands\DianpingCrawler;
use App\Schedule;
use App\User;
use Auth;
use Carbon\Carbon;
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

        // cond 1. => is admin
        $ret = Gym::where("created_by", $userId)->get();

        foreach($ret as $gym) {
             // try init account_id
            if (!$gym->account_id) {
                $user = User::find($gym->created_by);
                $gym = $this->bindAccountByPhone($user, $gym->id);
            }
        }

        // cond 2. => is coach
        if (!$ret->count()) {
            $coach = Coach::with('user')
                ->where("user_id", "=", $userId)
                ->where('status', 1)
                ->first();
            if ($coach && $coach->is_gym_manager) {
                $ret = Gym::where('id', $coach->gym_id)->get();
            }
        }

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
        $gym = Gym::find($id);

        // try init account_id
        if (!$gym->account_id) {
            $user = User::find($gym->created_by);
            $gym = $this->bindAccountByPhone($user, $id);
        }

        return $gym;
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
        // when set the dianping shop for the first time, crawl past 180 days data
        if ($request->has('dianping_shop_name') && !empty($request->input('dianping_shop_name'))) {
            // aync crawl half year
            $gym->crawlDianping('traffic', date('Y-m-d'), 190);
            $gym->crawlDianping('comment', date('Y-m-d'), 190);
        }
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

    public function getShareCover(Request $request, $id)
    {
        $gym = Gym::find($id);
        return [
            // 'plan' => 'http://static.o2-fit.com/image/plan_share_500x400.png',
            // 'register' => 'http://static.o2-fit.com/image/register2.jpg',
            // 'confirm' => 'http://static.o2-fit.com/confirm_share.png'
            'plan' => $gym->setting['planCover'] ?? 'http://static.o2-fit.com/image/plan_cover_0808.png',
            'register' => 'http://static.o2-fit.com/image/register2.jpg',
            'confirm' => $gym->setting['confirmCover'] ?? 'http://static.o2-fit.com/image/summary_cover_0807.png'
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
    public function getHotmaps(Request $request, $id)
    {
        $date = $request->input('date', date('Y-m-d'));
        $duration = $request->input('duration', 7);
        return User::getUserIdToHotmap($id, $date, $duration);
    }


    public function getCustomerList(Request $request, $id)
    {
        // TODO permission check
        if(!$request->has('start') && !$request->has('end')) {
            $customers = Order::with('customer')
                ->where('gym_id', '=', $id)
                ->orderBy('updated_at', 'DESC')
                ->get()
                ->pluck('customer')
                ->unique('id')
                ->toArray();
        } else {
            $start = $request->get('start');
            $end = $request->get('end');
            $coach = $request->get('coach');


            $customerQuery = Schedule::with('customer')
                ->where('gym_id', '=', $id)
                ->where('date', '>=', $start)
                ->where('date', '<=', $end)
                ->where('order_id', '>', 0)
                ->orderBy('date', 'DESC');
            if($coach) {
                $customerQuery->where('coach_id', $coach);
            }
            $customers = $customerQuery->get()
                ->pluck('customer')
                ->unique('id')
                ->toArray();
        }


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
            $customer = $c->toArray();
            $customer['name'] .= '🚀';
            $ret[] = $customer;
        }

        // get customer id list

        // get latest schedule info by customer_id
        // add schedule data to ret
        $filtered = [];
        $saved = [];

        $latestSchedules = $gym->getGymLatestSchedules();
        $gymStocks = $gym->getGymOrderBalance();
        foreach ($ret as &$item) {
            if (!array_key_exists($item['id'], $saved)) {
                $item['latest_schedule'] = $latestSchedules[$item['id']] ?? null;
                $item['stock'] = $gymStocks[$item['id']] ?? null;
                $saved[$item['id']] = 1;
                $filtered[] = $item;
            }
        }

        if ($request->has('hotmap')) {
            $allHotmaps = User::getUserIdToHotmap($id, date('Y-m-d'), 35);
            foreach ($filtered as &$item) {
                $item['hotmap'] = $allHotmaps[$item['id']] ?? str_repeat('0', 35);
            }
        }

        $monthMap = User::schedulesMonthMap($id, date('Y-m-d'));
        foreach ($filtered as &$item) {
            $item['monthMap'] = $monthMap[$item['id']] ?? [];
        }

        return response()->json($filtered, 200);
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

        // trial count
        $trialCourseCount = Schedule::where('gym_id', $id)
            ->where('status', 2)
            ->where('date', '>=', $request->input('start'))
            ->where('date', '<=', $request->input('end'))
            ->where('order_id', 0)
            ->count();

        // new customer count
        $newCustomerCount = Order::where('gym_id', $id)
            ->where('price', '>', 0)
            ->where('created_at', '>=', $startGymTimezone)
            ->where('created_at', '<=', $endGymTimezone)
            ->whereHas('customer', function ($query) use ($startGymTimezone, $endGymTimezone) {
                $query->where('created_at', '>=', $startGymTimezone)
                    ->where('created_at', '<=', $endGymTimezone);
            })->count();

        $res = [
            'orderCount' => $orderCount,
            'scheduleCount' => $scheduleCount,
            'orderPrice' => $orderPrice,
            'activeCustomerCount' => $activeCustomerCount,
            'trialCourseCount' => $trialCourseCount,
            'newCustomerCount' => $newCustomerCount
        ];
        return response()->json($res, 200);
    }

    public function bind(Request $request, $gymId)
    {
        $code = $request->input('code');

        $appKey = config('services.dianping.key');
        $appSecret = config('services.dianping.secret');
        $sessionData = DianpingCrawler::getSession($appKey, $appSecret, $code);

        $gym = Gym::find($gymId);
        $gym->dianping_session = $sessionData['access_token'];
        $gym->dianping_refresh_token = $sessionData['refresh_token'];
        $gym->dianping_expires_in = time() + (int) $sessionData['expires_in'];
        $gym->dianping_remain_refresh_count = (int) $sessionData['remain_refresh_count'];
        $gym->dianping_bid = $sessionData['bid'];
        $gym->save();

        $crawler = new DianpingCrawler($appKey, $appSecret, $gym->dianping_session);
        $shopListResp = $crawler->getShopList($gym->dianping_bid);

        return response()->json($shopListResp['data'] ?? [], 200);
    }

    public function updateCustomerProfile(Request $request, $gymId, $customerId)
    {
        $customer = User::find($customerId);
        $customer->name = $request->input('name');
        $customer->email = $request->input('email');
        $customer->sex = $request->input('sex');
        $customer->save();
        return response()->json($customer);
    }

    public function monthCourseByCustomerType(Request $request, $gymId)
    {
        if (!$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }

        $ret = [];

        $currentMonth = Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1);
        $duration = $request->input('duration', 6);

        for ($i = 0; $i < $duration; $i++) {
            $ret[$currentMonth->locale('zh')->translatedFormat('F')] = ['all' => 0, 'recent' => 0, 'new' => 0];
            $currentMonth->subMonth();
        }

        $ret = array_reverse($ret);

        $end =  Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1)->addMonth()->subDay();
        $start =  Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1)->addMonth()->subMonths($duration);

        $schedules = Schedule::with(['customer'])
            ->where('gym_id', $gymId)
            ->where('status', 2)
            ->where('order_id', '>', 0)
            ->where('date', '>=', $start->format('Y-m-d'))
            ->where('date', '<=', $end->format('Y-m-d'))
            ->get();
        foreach ($schedules as $schedule) {
            $monthObj = Carbon::createFromFormat('Y-m-d', $schedule->date);
            $month = $monthObj->locale('zh')->translatedFormat('F');
            $ret[$month]['all'] += 1;
            if ($schedule->customer->isNew(Carbon::createFromFormat('Y-m-d', $schedule->date))) {
                $ret[$month]['new'] += 1;
            }
            if ($schedule->customer->isRecent(Carbon::createFromFormat('Y-m-d', $schedule->date))) {
                $ret[$month]['recent'] += 1;
            }
        }

        return $ret;
    }

    public function monthSaleByType(Request $request, $gymId)
    {
        if (!$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }

        $ret = [];

        $currentMonth = Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1);
        $duration = $request->input('duration', 6);

        for ($i = 0; $i < $duration; $i++) {
            $ret[$currentMonth->locale('zh')->translatedFormat('F')] = ['all' => 0, 'recent' => 0, 'new' => 0];
            $currentMonth->subMonth();
        }

        $ret = array_reverse($ret);

        $end =  Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1)->addMonth()->subDay();
        $start =  Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1)->addMonth()->subMonths($duration);

        $orders = Order::with(['customer'])
            ->where('gym_id', $gymId)
            ->where('created_at', '>=', $start)
            ->where('created_at', '<=', $end)
            ->get();

        foreach ($orders as $order) {
            $month = $order->created_at->locale('zh')->translatedFormat('F');
            $ret[$month]['all'] += $order->price;
            if ($order->customer->isNew($order->created_at)) {
                $ret[$month]['new'] += $order->price;
            }
            if ($order->customer->isRecent($order->created_at)) {
                $ret[$month]['recent'] += $order->price;
            }
        }

        return $ret;
    }

    public function monthActiveByType(Request $request, $gymId)
    {
        if (!$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }

        $ret = [];

        $currentMonth = Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1);
        $duration = $request->input('duration', 6);

        for ($i = 0; $i < $duration; $i++) {
            $ret[$currentMonth->locale('zh')->translatedFormat('F')] = ['all' => [], 'new' => [], 'recent' => []];
            $currentMonth->subMonth();
        }

        $ret = array_reverse($ret);

        $end =  Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1)->addMonth()->subDay();
        $start =  Carbon::createFromFormat('Y-m-d', $request->input('end'))->setDay(1)->addMonth()->subMonths($duration);

        $schedules = Schedule::with(['customer'])
            ->where('gym_id', $gymId)
            ->where('status', 2)
            ->where('order_id', '>', 0)
            ->where('date', '>=', $start->format('Y-m-d'))
            ->where('date', '<=', $end->format('Y-m-d'))
            ->get();
        foreach ($schedules as $schedule) {
            $monthObj = Carbon::createFromFormat('Y-m-d', $schedule->date);
            $month = $monthObj->locale('zh')->translatedFormat('F');
            $ret[$month]['all'][$schedule->customer_id] = 1;
            if ($schedule->customer->isNew(Carbon::createFromFormat('Y-m-d', $schedule->date))) {
                $ret[$month]['new'][$schedule->customer_id] = 1;
            }
            if ($schedule->customer->isRecent(Carbon::createFromFormat('Y-m-d', $schedule->date))) {
                $ret[$month]['recent'][$schedule->customer_id] = 1;
            }
        }

        foreach ($ret as &$row) {
            $row['all'] = count($row['all']);
            $row['new'] = count($row['new']);
            $row['recent'] = count($row['recent']);
        }

        return $ret;
    }

    public function bindAccount(Request $request, $gymId)
    {
        $phone = $request->input('phone', null);

        $user = User::where('email', $phone)->first();

        if($gym = $this->bindAccountByPhone($user, $gymId)) {
            return response()->json($gym);
        }

        return response()->json(array('message' => 'invalid input'), 500);
    }

    private function bindAccountByPhone(User $user, int $gymId) {
        $gym = Gym::find($gymId);

        if(empty($user) || empty($gym)) {
            return null;
        }

        $account = Account::firstOrCreate(['user_id' => $user->id]);
        $account->save();

        $gym->account_id = $account->id;
        $gym->save();

        return $gym;

    }
}

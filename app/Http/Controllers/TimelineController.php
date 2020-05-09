<?php

namespace App\Http\Controllers;

use App\BodyData;
use App\Schedule;
use App\Talk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TimelineController extends Controller
{
    const SCHEDULE_PAGE_SIZE = 5;

    public function indexV2(Request $request)
    {
        $userId = Auth::User()->id;

        if ($request->has('user')) {
            $userId = $request->input('user');
        }

        // default to tomorrow
        $tommorrow = strtotime(date('Y-m-d', time()) . ' +1 day');
        $dateBefore = date('Y-m-d', $tommorrow);
        if ($request->has('before')) {
            $dateBefore = $request->input('before');
        }
        $schedules = Schedule::where('customer_id', $userId)
            ->where('date', '<', $dateBefore)
            ->orderBy('date',  'DESC')
            ->limit(self::SCHEDULE_PAGE_SIZE)
            ->get();

        $ret = [];
        foreach ($schedules as $s) {
            $trainCard =  $s->toTrainCardV2();
            if (!empty($trainCard)) {
                $ret[] = $trainCard;
            }
        }
        if (empty($ret)) {
            return [];
        }

        $piv = end($ret)['date'];
        // append talk
        $talks = Talk::with(['from', 'to'])
            ->where(function ($query) use ($userId) {
                $query->where('to_id', $userId);
                $query->orWhere('from_id',  $userId);
            })
            ->where('created_at', '>=', substr($piv, 0, 10))
            ->where('created_at', '<', $dateBefore)
            ->get();

        foreach ($talks as $to) {
            $ret[] = $to->toTimelineCard();
        }

        // append body data
        $ret = array_merge($ret, BodyData::getBodyDataCardV2($userId, $piv, $dateBefore));
        // order ret by date
        usort($ret, function ($a, $b) {
            return strtotime($a['date']) >= strtotime($b['date']);
        });
        return $ret;
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userId = Auth::User()->id;

        if ($request->has('v2')) {
            return $this->indexV2($request);
        }

        if ($request->has('user')) {
            $userId = $request->input('user');
        }

        // default to tomorrow
        $tommorrow = strtotime(date('Y-m-d', time()) . ' +1 day');
        $dateBefore = date('Y-m-d', $tommorrow);
        if ($request->has('before')) {
            $dateBefore = $request->input('before');
        }
        $schedules = Schedule::where('customer_id', $userId)
            ->where('date', '<', $dateBefore)
            ->orderBy('date',  'DESC')
            ->limit(self::SCHEDULE_PAGE_SIZE)
            ->get();

        $ret = [];
        foreach ($schedules as $s) {
            $trainCard =  $s->toTrainCard();
            if (!empty($trainCard)) {
                $ret[] = $trainCard;
            }
            if ($s->status === 2 && !empty(trim($s->conclusion))) {
                $ret[] = $s->toConclusionCard();
            }
        }
        if (empty($ret)) {
            return [];
        }

        $piv = end($ret)['date'];
        // append talk
        $talks = Talk::with(['from', 'to'])
            ->where(function ($query) use ($userId) {
                $query->where('to_id', $userId);
                $query->orWhere('from_id',  $userId);
            })
            ->where('created_at', '>=', substr($piv, 0, 10))
            ->where('created_at', '<', $dateBefore)
            ->get();

        foreach ($talks as $to) {
            $ret[] = $to->toTimelineCard();
        }

        // append body data
        $ret = array_merge($ret, BodyData::getBodyDataCard($userId, $piv, $dateBefore));

        // order ret by date
        usort($ret, function ($a, $b) {
            return strtotime($a['date']) >= strtotime($b['date']);
        });

        return $ret;
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
        //
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

    public function message()
    {
        $userId = Auth::user()->id;

        $scheduleCount = Schedule::with('gym')
            ->where('customer_id', $userId)
            ->where('date', '>=', date('Y-m-01'))
            ->where('status', 2)
            ->orderBy('date', 'DESC')
            ->count();

        return response()->json(['message' => '本月已完成' . $scheduleCount . '节课']);

        // OBSOLETE
        // get latest schedule
        // $schedule = Schedule::with('gym')->where('customer_id', $userId)->orderBy('date', 'DESC')->first();

        // if (empty($schedule)) {
        //     return response()->json(['message' => 'cannot find the schedule'], 404);
        // }
        // $expectedDays = $schedule->gym->setting['bodyMeasureDays'];
        // if(empty($expectedDays)) {
        //     return response()->json(['message' => '']);
        // }
        // $days = BodyData::getDaysFromLastRecord($userId);
        // $nextMeasureDays = $expectedDays - $days;
        // if($days === -1 || $nextMeasureDays < 0 ) {
        //     $nextMeasureDays = 0;
        // }
        // return response()->json(['message' => '距离下次测量还有' . $nextMeasureDays . '天']);
    }
}

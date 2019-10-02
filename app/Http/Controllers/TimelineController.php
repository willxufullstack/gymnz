<?php

namespace App\Http\Controllers;

use App\Schedule;
use App\Talk;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TimelineController extends Controller
{
    const SCHEDULE_PAGE_SIZE = 2;
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
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
            $ret[] = $s->toTrainCard();
            if ($s->conclusion) {
                $ret[] = $s->toConclusionCard();
            }
        }
        if(empty($ret)) {
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
}

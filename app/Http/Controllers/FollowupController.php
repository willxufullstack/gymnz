<?php

namespace App\Http\Controllers;

use App\Followup;
use Illuminate\Http\Request;
use App\Gym;
use App\Coach;
use App\User;

class FollowupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gymId)
    {
        if (empty($request->input('before'))) {
            return response()->json(array('message' => 'fail: before is empty'), 500);
        }
        $beforeDate = $request->input('before');

        $query = Followup::with(['customer']);
        $query->where('gym_id', (int)$gymId);
        if ($request->has('customer')) {
            $query->where('customer_id', (int)$request->input('customer'));
        }
        if ($request->has('coach')) {
            $query->where('coach_id', (int)$request->input('coach'));
        }
        if ($request->has('status')) {
            $query->where('status', (int)$request->input('status'));
        } else {
            $query->where('status', 0);
        }
        if ($request->input('after')) {
            $query->where('date', '>=', $request->input('after'));
        }
        $query->where('date', '<=', $beforeDate);
        $followUps = $query->orderBy('date', 'DESC')->get();
        if (empty($followUps)) {
            return response()->json($followUps, 201);
        }

        // get schedules info 35 days before return data as schedule_history_line
        $durationDays = 35;
        foreach ($followUps as &$item) {
            $item['hot_map'] = $item->customer->getHotMap($beforeDate, $durationDays, $gymId);
            $item['latest_schedule'] = $item->customer->getLatestSchedule(2, $gymId);
        }
        return response()->json($followUps, 200);
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


    public function postpone(Request $request, $id)
    {
        $date = $request->input('date');
        $followUp = Followup::find($id);
        if(empty($followUp)){
            return response()->json(array('message' => 'cannot find the followup task'), 404);
        }
        // close the old one
        $followUp->status = 2;
        $followUp->action .= ' postpone'; // append an `postpone`
        $followUp->save();

        // crete new
        $newFollowup = new Followup();
        $newFollowup->date = $date;
        $newFollowup->customer_id = $followUp->customer_id;
        $newFollowup->coach_id = $followUp->coach_id;
        $newFollowup->gym_id = $followUp->gym_id;
        $newFollowup->action = $followUp->action;
        $newFollowup->save();
        return response()->json($followUp, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $followUpData = $request->only('date', 'coach_id', 'customer_id', 'gym_id');
        $followUp = new Followup();
        $followUp->customer()->associate(User::find($followUpData['customer_id']));
        $followUp->coach()->associate(Coach::find($followUpData['coach_id']));
        $followUp->gym()->associate(Gym::find($followUpData['gym_id']));
        $followUp->date = $followUpData['date'];
        $followUp->status = 1;
        $followUp->save();
        return response()->json($followUp, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Followup $followup
     * @return \Illuminate\Http\Response
     */
    public function show(Followup $followup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Followup $followup
     * @return \Illuminate\Http\Response
     */
    public function edit(Followup $followup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \App\Followup $followup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Followup $followup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Followup $followup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Followup $followup)
    {
        //
    }
}

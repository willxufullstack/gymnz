<?php

namespace App\Http\Controllers;

use App\Coach;
use App\CoachTrain;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CoachTrainController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, int $gymId)
    {
        if (!$request->has('before')) {
            return response()->json(array('message' => 'missing before'), 500);
        }

        $query = CoachTrain::with('coach.user')
            ->where('gym_id', $gymId)
            ->where('date', '<=', $request->input('before'))
            ->orderBy('date', 'DESC');
        if ($coachId = $request->input('coach')) {
            $query->where('coach_id', $coachId);
        }

        return $query->get();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, int $gymId)
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, int $gymId)
    {
        $user = Auth::User();
        $coach = Coach::where(['gym_id' => $gymId, 'user_id' => $user->id])->first();

        $train = new CoachTrain([
            'date' => $request->input('date'),
            'start' => $request->input('start'),
            'end' => $request->input('end'),
            'detail' => $request->input('detail'),
            'images' => $request->input('images'),
            'gym_id' => $gymId,
            'coach_id' => $coach->id
        ]);
        $train->save();
        return $train;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\CoachTrain  $coachTrain
     * @return \Illuminate\Http\Response
     */
    public function show(CoachTrain $coachTrain)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CoachTrain  $coachTrain
     * @return \Illuminate\Http\Response
     */
    public function edit(CoachTrain $coachTrain)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CoachTrain  $coachTrain
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoachTrain $coachTrain)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CoachTrain  $coachTrain
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoachTrain $coachTrain)
    {
        //
    }
}

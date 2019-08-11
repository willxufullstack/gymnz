<?php

namespace App\Http\Controllers;

use App\WorkoutAction;
use Illuminate\Http\Request;

class WorkoutActionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return WorkoutAction::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    { }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('name', 'unit');
        $action = new WorkoutAction();
        $action->name = $data['name'];
        $action->unit = $data['unit'];
        if ($request->has('weight')) {
            $action->weight = ($request->input('weight') || '-');
        }
        if ($request->has('repeat_times')) {
            $action->repeat_times = $request->input('repeat_times') || 0;
        }
        if ($request->has('set_times')) {
            $action->set_times = $request->input('set_times') || 1;
        }
        if ($request->has('interval')) {
            $action->interval = $request->input('interval') || '30s';
        }
        $action->save();
        return response()->json($action, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\WorkoutAction  $workoutAction
     * @return \Illuminate\Http\Response
     */
    public function show(WorkoutAction $workoutAction)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\WorkoutAction  $workoutAction
     * @return \Illuminate\Http\Response
     */
    public function edit(WorkoutAction $workoutAction)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\WorkoutAction  $workoutAction
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, WorkoutAction $workoutAction)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\WorkoutAction  $workoutAction
     * @return \Illuminate\Http\Response
     */
    public function destroy(WorkoutAction $workoutAction)
    {
        //
    }
}

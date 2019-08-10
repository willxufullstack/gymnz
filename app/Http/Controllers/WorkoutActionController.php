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
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->only('name', 'unit');
        return WorkoutAction::create($data);
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

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
    public function index(Request $request)
    {
        $customerId = null;
        if($request->has('customer')){
            $customerId = $request->input('customer');
        }
        $actions = WorkoutAction::actionsWithDefaultValueByCustomer($customerId);
        return $actions;
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
            $action->weight = ($request->input('weight') ?? '-');
        }
        if ($request->has('repeat_times')) {
            $action->repeat_times = $request->input('repeat_times') ?? 8;
        }
        if ($request->has('set_times')) {
            $action->set_times = $request->input('set_times') ?? 4;
        }
        if ($request->has('interval')) {
            $action->interval = $request->input('interval') ?? '30s';
        }
        $action->save();
        WorkoutAction::clearAllRedis();
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
    public function destroy($id)
    {
        $action = WorkoutAction::where(['id' => $id])->first();
        if (empty($action)) {
            return response()->json(array('message' => 'can not find the action ' . $id), 500);
        }
        $success = $action->delete();
        if ($success) {
            WorkoutAction::clearAllRedis();
            return response()->json($action, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }
}

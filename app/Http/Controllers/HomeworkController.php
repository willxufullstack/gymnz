<?php

namespace App\Http\Controllers;

use App\Coach;
use App\Homework;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redis;

class HomeworkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($userId)
    {
        return Homework::with(['coach.user', 'customer'])
            ->where('customer_id', $userId)
            ->orderBy('date', 'DESC')
            ->get();
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
        $homeworkData = $request->only('customer', 'coach', 'date', 'detail');

        $homework = new Homework();

        $homework->date = $homeworkData['date'];
        $homework->detail = $homeworkData['detail'];

        $homework->customer()->associate(User::find($homeworkData['customer']));
        $homework->coach()->associate(Coach::with('user')->find($homeworkData['coach']));

        $homework->save();

        return response()->json($homework, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Homework  $homework
     * @return \Illuminate\Http\Response
     */
    public function show(Request $request, $userId, $id)
    {
        return Homework::with(['coach.user', 'customer'])
                ->where('customer_id', $userId)
                ->where('id', $id)
                ->first();
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Homework  $homework
     * @return \Illuminate\Http\Response
     */
    public function edit(Homework $homework)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Homework  $homework
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $userId, $id)
    {
        $homework = Homework::with(['coach.user', 'customer'])->where('id', $id)->first();
        if (empty($homework)) {
            return response()->json(array('message' => 'can not find the schedule ' . $id), 500);
        }
        if ($request->has('detail')) {
            $homework->detail = $request->input('detail');
        }
        if ($request->has('date')) {
            $homework->date = $request->input('date');
        }
        $success = $homework->save();
        if ($success) {
            return response()->json($homework, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Homework  $homework
     * @return \Illuminate\Http\Response
     */
    public function destroy(Homework $homework)
    {
        //
    }
}

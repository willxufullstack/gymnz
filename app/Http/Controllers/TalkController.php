<?php

namespace App\Http\Controllers;

use App\Talk;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class TalkController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {

        // OBSOLETED
        $userId =  $request->input('user');

        return Talk::with(['from', 'to'])
            ->where(function ($query) use ($userId) {
                $query->where('to_id', $userId);
                $query->orWhere('from_id',  $userId);
            })
            ->orderBy('created_at', 'DESC')
            ->limit(100)
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
        $by = Auth::user()->id;
        $talk = new Talk();
        $data = $request->only('message', 'type', 'to', 'gym');

        $talk->to_id = (int) $data['to'];
        $talk->from_id = $by;
        if (array_key_exists('gym', $data)) {
            $talk->gym_id = (int) $data['gym'];
        } else {
            // use the latest schedule's gym
            if ($latestSchedule = User::getLatestScheduleById($by)) {
                $talk->gym_id = $latestSchedule->gym_id;
            }
        }

        $talk->message = $data['message'];
        $talk->type = 'message';
        $talk->save();

        return response()->json($talk->toTimelineCard(), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Talk  $talk
     * @return \Illuminate\Http\Response
     */
    public function show(Talk $talk)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Talk  $talk
     * @return \Illuminate\Http\Response
     */
    public function edit(Talk $talk)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Talk  $talk
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Talk $talk)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Talk  $talk
     * @return \Illuminate\Http\Response
     */
    public function destroy(Talk $talk)
    {
        //
    }
}

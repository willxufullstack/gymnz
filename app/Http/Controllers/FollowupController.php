<?php

namespace App\Http\Controllers;

use App\Followup;
use Illuminate\Http\Request;

class FollowupController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gymId)
    {
        $query = Followup::with(['customer']);
        $query->where('gym_id', (int)$gymId);
        $query->where('date', '<=', $request->input('before'));
        if($request->has('customer')){
            $query->where('customer_id', (int)$request->input('customer'));
        }
        if($request->has('coach')){
            $query->where('coach_id', (int)$request->input('coach'));
        }
        if($request->has('status')){
            $query->where('status', (int)$request->input('status'));
        } else {
            $query->where('status', 0);
        }
        if($request->has('before')){
            $query->where('date', '<=', $request->input('before'));
        }
        if($request->has('after')){
            $query->where('date', '>=', $request->input('after'));
        }
        return $query->orderBy('date', 'DESC')->get();

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
     * @param  \App\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function show(Followup $followup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function edit(Followup $followup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Followup $followup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Followup  $followup
     * @return \Illuminate\Http\Response
     */
    public function destroy(Followup $followup)
    {
        //
    }
}

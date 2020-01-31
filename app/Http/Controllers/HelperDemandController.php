<?php

namespace App\Http\Controllers;

use App\HelperDemand;
use Illuminate\Http\Request;

class HelperDemandController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        // store and Return
        $demand = new HelperDemand();
        $demand->before = $request->input('before');
        $demand->price = (int)$request->input('price');
        $demand->from = $request->input('from');
        $demand->to = $request->input('to');
        $demand->content = $request->input('content');
        $demand->openid = $request->input('openid');

        $demand->save();
        return $demand;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\HelperDemand  $helperDemand
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return HelperDemand::find($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\HelperDemand  $helperDemand
     * @return \Illuminate\Http\Response
     */
    public function edit(HelperDemand $helperDemand)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\HelperDemand  $helperDemand
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, HelperDemand $helperDemand)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\HelperDemand  $helperDemand
     * @return \Illuminate\Http\Response
     */
    public function destroy(HelperDemand $helperDemand)
    {
        //
    }
}

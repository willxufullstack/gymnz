<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SalarySetting;
use Auth;

class SalarySettingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gymId)
    {
        return SalarySetting::with('coach.user')
            ->where('gym_id', $gymId)
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
    public function update(Request $request, $gymId, $id)
    {
        $row = SalarySetting::with('coach.user')
            ->where('id', $id)
            ->where('gym_id', $gymId)
            ->first();

        $newData = $request->only('base', 'course_fixed',  'course_fixed_configuration', 'sale_configuration', 'course_free', 'course_trial', 'course_percentage', 'sale_percentage', 'tax');
        $newData['created_by'] = Auth::User()->id;
        $row->update($newData);
        return $row;
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

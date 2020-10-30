<?php

namespace App\Http\Controllers;

use App\CoachWeeklyReport;
use Carbon\Carbon;
use Illuminate\Http\Request;

class CoachWeeklyReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, int $gymId)
    {
        $date = Carbon::now()->endOfWeek();
        $weeks = $request->input('weeks', 8);
        $start = $date->addWeeks(-$weeks);

        return CoachWeeklyReport::with('coach.user')
            ->where('gym_id', $gymId)
            ->where('date', '>=', $start)
            ->orderBy('date', 'DESC')
            ->orderBy('coach_id', 'DESC')
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
     * @param  \App\CoachWeeklyReport  $coachWeeklyReport
     * @return \Illuminate\Http\Response
     */
    public function show(CoachWeeklyReport $coachWeeklyReport)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\CoachWeeklyReport  $coachWeeklyReport
     * @return \Illuminate\Http\Response
     */
    public function edit(CoachWeeklyReport $coachWeeklyReport)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\CoachWeeklyReport  $coachWeeklyReport
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, CoachWeeklyReport $coachWeeklyReport)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\CoachWeeklyReport  $coachWeeklyReport
     * @return \Illuminate\Http\Response
     */
    public function destroy(CoachWeeklyReport $coachWeeklyReport)
    {
        //
    }
}

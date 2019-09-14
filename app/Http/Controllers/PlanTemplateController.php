<?php

namespace App\Http\Controllers;

use App\PlanTemplate;
use Illuminate\Http\Request;

class PlanTemplateController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $coachId)
    {
        $ret = PlanTemplate::where('coach_id', $coachId)->get();

        return response()->json($ret, 200);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, $coachId)
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $coachId)
    {
        $data = $request->only('detail', 'name');
        $data['coach_id'] = $coachId;
        $ret = PlanTemplate::create($data);

        return response()->json($ret, 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\PlanTemplate  $planTemplate
     * @return \Illuminate\Http\Response
     */
    public function show(PlanTemplate $planTemplate)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\PlanTemplate  $planTemplate
     * @return \Illuminate\Http\Response
     */
    public function edit(PlanTemplate $planTemplate)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\PlanTemplate  $planTemplate
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, PlanTemplate $planTemplate)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\PlanTemplate  $planTemplate
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request, $coachId, $id)
    {
        $template = PlanTemplate::where(['id' => $id, 'coach_id' => $coachId])->first();
        if (empty($template)) {
            return response()->json(array('message' => 'can not find the tempalte ' . $id), 500);
        }
        $success = $template->delete();
        if ($success) {
            return response()->json($template, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }
}

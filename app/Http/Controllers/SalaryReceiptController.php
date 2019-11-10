<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SalaryReceipt;
use App\SalarySetting;
use Auth;

class SalaryReceiptController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gymId)
    {
        if (!$request->has('month')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }

        $query = SalaryReceipt::with('coach.user')
            ->where('month', $request->input('month'))
            ->where('gym_id', $gymId)
            ->where('status', '>=', 1);

        if ($request->has('coach')) {
            $query = $query->where('coach_id', $request->input('coach'));
        }

        $receipts = $query->get();

        if (count($receipts) == 0) {

            // 1. inital from salary setting
            $settings = SalarySetting::where('gym_id', $gymId)->get();
            foreach ($settings as $setting) {
                $receipt = $setting->toSalaryReceipt();
                $receipt->month = $request->input('month');
                $receipt->created_by = Auth::User()->id;
                $receipts[] = $receipt;
            }
        }

        foreach ($receipts as $r) {
            // '1' indicates it has not been archieved
            if ($r->status == 1) {
                $r->syncWithSetting();
                $r->updateKPI();
                $r->updateTotal();
                $r->save();
            }
        }


        return $query->get();
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
        $receipt = SalaryReceipt::with('coach.user')
            ->where('id', $id)
            ->where('gym_id', $gymId)
            ->where('status', 1)
            ->first();
        if (empty($receipt)) {
            return response()->json(array('message' => 'cannot find the salary receipt'), 404);
        }
        $updateFields = $request->only('adjustment', 'adjustment_reason');
        $receipt->created_by = Auth::User()->id;
        $receipt->update($updateFields);
        $receipt->updateTotal();
        $receipt->updateKPI();
        $receipt->save();

        return response()->json($receipt, 200);
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

    public function pay(Request $request, $gymId, $id)
    {
        $receipt = SalaryReceipt::with('coach.user')
            ->where('id', $id)
            ->where('gym_id', $gymId)
            ->where('status', 1)
            ->first();
        if (empty($receipt)) {
            return response()->json(array('message' => 'cannot find the salary receipt'), 404);
        }

        $receipt->status = 2;
        $receipt->created_by = Auth::User()->id;
        $receipt->save();

        event(new \App\Events\PaySalaryEvent($receipt));

        return response()->json($receipt, 200);
    }
}

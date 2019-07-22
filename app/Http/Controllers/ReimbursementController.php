<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Reimbursement;

class ReimbursementController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $gymId)
    {
        if (!$request->has('start') || !$request->has('end')) {
            return response()->json(array('message' => 'missing time range'), 500);
        }

        return Reimbursement::with('op')
            ->where('gym_id', $gymId)
            ->where('created_at', '>=', $request->input('start'))
            ->where('created_at', '<=', $request->input('end'))
            ->orderBy('created_at', 'DESC')
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
    public function store(Request $request, $gymId)
    {
        $data = $request->only('category', 'detail', 'amount', 'coach_id');
        $data['created_by'] = Auth::User()->id;
        $data['gym_id'] = $gymId;
        return Reimbursement::create($data);
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
    public function update(Request $request, $id)
    {
        //
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

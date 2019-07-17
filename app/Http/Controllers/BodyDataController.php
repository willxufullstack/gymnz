<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\BodyData;
use App\User;
use Auth;


class BodyDataController extends Controller
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
    public function store(Request $request, $userId)
    {
        //Batch create
        $by = Auth::User()->id;
        $user = User::find($userId);
        $ret = [];
        foreach($request->input('batch') as $item) {
            $bd = new BodyData();
            $bd->created_by = $by;
            $bd->value = $item['value'];
            $bd->option = $item['option'];
            $bd->unit = $item['unit'];
            $bd->date = $item['date'];
            $bd->user()->associate($user);
            $bd->save();
            $ret[] = $bd;
        }
        return response()->json($ret, 200);
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

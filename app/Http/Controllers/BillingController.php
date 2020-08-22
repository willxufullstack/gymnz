<?php

namespace App\Http\Controllers;

use App\Billing;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class BillingController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }
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
        if (Auth::user()->email !== '00000000') {
            return redirect('home');
        }

        $billing = new Billing();
        $billing->operated_by = Auth::user()->id;
        $billing->account_id = $request->input('account_id');
        $billing->point = (int) $request->input('point');
        $billing->paid = (int) $request->input('paid');
        $billing->detail = 'charge';
        $billing->expired_at = null;
        // dd($billing);
        $billing->save();

        return redirect("/god");
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\billing  $billing
     * @return \Illuminate\Http\Response
     */
    public function show(billing $billing)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\billing  $billing
     * @return \Illuminate\Http\Response
     */
    public function edit(billing $billing)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\billing  $billing
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, billing $billing)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\billing  $billing
     * @return \Illuminate\Http\Response
     */
    public function destroy(billing $billing)
    {
        //
    }
}

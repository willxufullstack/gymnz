<?php

namespace App\Http\Controllers;

use App\Billing;
use App\Gym;
use JWTAuth;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class GodController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = Auth::user();
        if($user->email === '00000000') {
            $gyms = Gym::all();
            $billings = Billing::getAllBilling();
            return view('god', compact('gyms', 'billings'));
        }
        return redirect('home');
    }
}

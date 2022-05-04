<?php

namespace App\Http\Controllers;

use App\Gym;
use App\User;
use Illuminate\Http\Request;
use Carbon\Carbon;

class TVController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        // $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index(Request $request, int $gymId)
    {

        // 1. check whether TV enabled
        $gym = Gym::find($gymId);
        if (!$gym->setting['enableTV']) {
            return '未启用';
        }

        // 2. Set month
        $month = Carbon::now()->format('M');
        // 3. SetBillboard
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();
        $timesToUsers = Gym::getMonthBoard($gymId, $start->format('Y-m-d'), $end->format('Y-m-d'));

        $allHotmaps = User::getUserIdToHotmap($gymId, $end->format('Y-m-d'), 30);
        foreach ($timesToUsers as &$item) {
            $item->hotmap = $allHotmaps[$item->customer->id] ?? str_repeat('0', 30);
            if (strlen($item->customer->name) >= 2) {
                $name = preg_split('//u', $item->customer->name, -1, PREG_SPLIT_NO_EMPTY);
                $name[1] = '*';
                $item->maskedName = implode('', $name);
            }
        }

        return view('tv', compact('month', 'timesToUsers'));
    }
}

<?php

namespace App\Http\Controllers;

use App\Coach;
use App\User;
use App\Gym;
use App\SalarySetting;
use Auth;
use Hash;
use Illuminate\Http\Request;

/**
 * Class CoachController
 * @package App\Http\Controllers
 */
class CoachController extends Controller
{
    /**
     * @param $gym_id gym id
     * @return \Illuminate\Http\JsonResponse
     */
    public function index($gym_id)
    {
        $ret = Coach::with('user')
            ->where("gym_id", "=", $gym_id)
            ->where("status", "=", "1")
            ->get();
        if ($ret) {
            foreach ($ret as $coach) {
                if (empty(SalarySetting::where('coach_id', $coach->id)->first())) {
                    event(new \App\Events\CoachAddEvent($coach));
                }
            }
            return response()->json($ret, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $gym_id)
    {
        $userId = Auth::User()->id;

        $coachData = $request->only('name', 'phone', 'password', 'sex');

        // convert phone to email
        $customerEmail = $coachData['phone'];

        // 1.create coach row
        $coach = new Coach([
            'created_by' => $userId,
        ]);

        // 2.create coach user
        $user = new User();
        $user->password = Hash::make($coachData['password']);
        $user->email = $customerEmail;
        $user->name = $coachData['name'];
        $user->sex = $coachData['sex'];
        $user->save();

        // 3.map coach=>user
        $coach->user()->associate($user);

        // 4.map coach=>gym
        $gym = Gym::find($gym_id);
        $coach->gym()->associate($gym);

        $success = $coach->save();

        if ($success) {
            event(new \App\Events\CoachAddEvent($coach));
            return response()->json($coach, 200);
        } else {
            return response()->json(array('message' => 'fail'), 500);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param $id
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param $id
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param $id
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param $gymId
     * @param $coachId
     * @return \Illuminate\Http\JsonResponse
     */
    public function destroy($gymId, $coachId)
    {
        $coachItem = Coach::where(['id' => $coachId, 'gym_id' => $gymId, 'status' => 1])->first();
        if (empty($coachItem)) {
            return response()->json(array('message' => 'can not find coach_id ' . $coachId), 500);
        }
        $coachItem->status = 0;
        $success = $coachItem->save();
        if ($success) {
            $ss = SalarySetting::where(['gym_id' => $gymId, 'coach_id' => $coachId]);
            $ss->delete();
            return response()->json($coachItem, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    public function getCoachInfoForAdmin(User $user): Coach
    {
        $gym = Gym::where("created_by", "=", $user->id)->latest('created_at')->first();
        if($gym) {
            $coach = Coach::where('gym_id', $gym->id)
                ->where('status', 1)
                ->first();
            $coach->user = $user;
            $coach->coach_id = 0;
            return $coach;
        }
        return null;
    }

    public function getCoachInfoByUserId()
    {
        $user = Auth::User();
        $ret = Coach::with('user')
            ->where("user_id", "=", $user->id)
            ->where('status', 1)
            ->first();

        if (!$ret) {
            $ret = $this->getCoachInfoForAdmin($user);
        }

        if ($ret){
            return response()->json($ret, 200);
        } else {
            return response()->json(array('message' => 'fail'), 500);
        }
    }

    public function reset($gymId, $coachId)
    {
        $coachItem = Coach::where(['id' => $coachId, 'gym_id' => $gymId, 'status' => 1])->first();
        if (empty($coachItem)) {
            return response()->json(array('message' => 'can not find coach_id ' . $coachId), 500);
        }
        $usr = $coachItem->user;
        // reset password
        $usr->password = Hash::make('00000000');
        $success = $usr->save();
        if ($success) {
            return response()->json($coachItem, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }
}

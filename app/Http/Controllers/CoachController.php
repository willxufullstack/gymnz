<?php

namespace App\Http\Controllers;

use App\Coach;
use App\User;
use App\Gym;
use App\SalarySetting;
use Auth;
use Hash;
use Illuminate\Http\Request;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;
use DateTime;

/**
 * Class CoachController
 * @package App\Http\Controllers
 */
class CoachController extends Controller
{

    // const SMS_TEMPLATE_INVITE = 'SMS_198667484';
    const SMS_TEMPLATE_INVITE = 'SMS_198677372'; // tmp
    const REDIS_INVITE_PREFIX = 'coach_invite_';
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

    private function sendCoachInvite($vcode, $coach, $operator)
    {
        $accessKeyId = config('services.ali.key');
        $accessSecret = config('services.ali.secret');
        AlibabaCloud::accessKeyClient($accessKeyId, $accessSecret)
            ->regionId('cn-hangzhou')
            ->asDefaultClient();

        // Hi, ${name}已将您添加为${gym}的教练, 现在打开氧气教练App并使用邀请码${code}登录吧～
        try {
            $result = AlibabaCloud::rpc()
                ->product('Dysmsapi')
                // ->scheme('https') // https | http
                ->version('2017-05-25')
                ->action('SendSms')
                ->method('POST')
                ->host('dysmsapi.aliyuncs.com')
                ->options([
                    'query' => [
                        'RegionId' => "cn-hangzhou",
                        'PhoneNumbers' => $coach->user->email,
                        'SignName' => "氧气教练Pro",
                        'TemplateCode' => self::SMS_TEMPLATE_INVITE,
                        'TemplateParam' => json_encode([
                            // 'name' => $operator->name,
                            // 'gym' => $coach->gym->name,
                            'code' => $vcode,
                        ]),
                    ],
                ])
                ->request();
            // dd($result);
            return $result;
        } catch (ClientException $e) {
            // dd($e->getErrorMessage());
            return false;
        } catch (ServerException $e) {
            // dd($e->getErrorMessage());
            return false;
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $gym_id)
    {
        $operater = Auth::User();
        $userId = $operater->id;

        $coachData = $request->only('name', 'phone', 'sex');

        // convert phone to email
        $customerEmail = $coachData['phone'];

        // 1.create coach user
        $user = User::firstOrCreate(['email' => $customerEmail]);
        $user->password = Hash::make(rand(100000, 999999));
        $user->email = $customerEmail;
        $user->name = $coachData['name'];
        $user->sex = $coachData['sex'];
        $user->save();

        // 2.create coach row
        $coach = Coach::firstOrCreate(['user_id' => $user->id, 'gym_id' => $gym_id]);
        $coach->created_by = $userId;
        $coach->invite_at = new DateTime();

        // assign `coach` role
        $user->assignRole('coach');

        // 3.map coach=>user
        $coach->user()->associate($user);

        // 4.map coach=>gym
        $gym = Gym::find($gym_id);
        $coach->gym()->associate($gym);

        $success = $coach->save();

        // send invitation
        $vcode = $user->refreshVCode(365 * 24 * 60 * 60);
        $this->sendCoachInvite($vcode, $coach, $operater);

        if ($success) {
            event(new \App\Events\CoachAddEvent($coach));
            return response()->json($coach, 200);
        } else {
            return response()->json(array('message' => 'fail'), 500);
        }
    }

    public function invite($gymId, $coachId)
    {
        $operater = Auth::User();
        $coachItem = Coach::where(['id' => $coachId, 'gym_id' => $gymId, 'status' => 1])->first();
        if (empty($coachItem)) {
            return response()->json(array('message' => 'can not find coach_id ' . $coachId), 500);
        }
        $user = $coachItem->user;
        // send invitation
        $vcode = $user->refreshVCode(365 * 24 * 60 * 60);
        $this->sendCoachInvite($vcode, $coachItem, $operater);
        return response()->json(array('message' => 'invite has been sent' . $vcode), 200);
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
    public function update(Request $request, $gymId, $coachId)
    {
        $coachItem = Coach::where(['id' => $coachId, 'gym_id' => $gymId, 'status' => 1])->first();
        if (empty($coachItem)) {
            return response()->json(array('message' => 'can not find coach_id ' . $coachId), 500);
        }
        if ($request->has('hidden')) {
            $coachItem->hidden = (bool) $request->input('hidden');
        }
        if ($request->has('is_gym_manager')) {
            $coachItem->is_gym_manager = (bool) $request->input('is_gym_manager');
        }
        $success = $coachItem->save();
        if ($success) {
            return response()->json($coachItem, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
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
        $gyms = Gym::where("created_by", "=", $user->id)->get();
        foreach ($gyms as $gym) {
            $coach = Coach::where('gym_id', $gym->id)
                ->where('status', 1)
                ->first();
            if (empty($coach)) {
                continue;
            }
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

        if ($ret) {
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

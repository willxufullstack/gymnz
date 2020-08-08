<?php

namespace App\Http\Controllers;

use App\Coach;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Auth\Events\Registered;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use App\Libraries\Ucpaas\Ucpaas;
use AlibabaCloud\Client\AlibabaCloud;
use AlibabaCloud\Client\Exception\ClientException;
use AlibabaCloud\Client\Exception\ServerException;

class AuthController extends Controller
{
    const SMS_TEMPLATE_VCODE = 'SMS_198677372';
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['vcode', 'login', 'register', 'openid', 'bind', 'token', 'chart', 'NZHelperOpenId']]);
    }

    /**
     * Get a JWT token via given credentials.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');
        $vcode = $request->input('vcode', '');

        if ($vcode) {
            $user = User::where('email', $credentials['email'])->first();
            if ($user->verifyVCode($vcode)) {
                // $vcode could come from coach invitation, then set `invite_at` to NULL to finish the coach invitation
                if ($coach = Coach::where('user_id', $user->id)->first()) {
                    if ($coach->invite_at) {
                        $coach->invite_at = null;
                        $coach->save();
                    }
                }

                $token = $this->guard()->tokenById($user->id);
                return $this->respondWithToken($token);
            }
        }

        if ($token = $this->guard()->attempt($credentials)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function register(Request $request)
    {
        $data = $request->only('name', 'email', 'password');

        if (User::where('email', $data['email'])->count() > 0) {
            return response()->json(['error' => '用户已存在'], 400);
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        event(new Registered($user));

        if ($token = $this->guard()->tokenById($user->id)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Unauthorized'], 403);
    }

    public function reset(Request $request)
    {
        $user = $this->guard()->user();
        $credentials = [
            'email' => $user->email,
            'password' => $request->input('currentPassword')
        ];

        $vcode = $request->input('vcode', '');

        $user = User::where('email', $credentials['email'])->first();

        if (!$user->verifyVCode($vcode) && !$this->guard()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $password = $request->input('newPassword');
        $user->password = Hash::make($password);
        $user->setRememberToken(Str::random(60));
        $user->save();
        $token = $this->guard()->tokenById($user->id);
        return $this->respondWithToken($token);
    }

    /**
     * Get the authenticated User
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function me()
    {
        return response()->json($this->guard()->user());
    }

    /**
     * Log the user out (Invalidate the token)
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function logout()
    {
        $this->guard()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    /**
     * Refresh a token.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function refresh()
    {
        return $this->respondWithToken($this->guard()->refresh());
    }

    /**
     * Get the token array structure.
     *
     * @param  string $token
     *
     * @return \Illuminate\Http\JsonResponse
     */
    protected function respondWithToken($token)
    {
        return response()->json([
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => $this->guard()->factory()->getTTL() * 60
        ]);
    }

    /**
     * Get the guard to be used during authentication.
     *
     * @return \Illuminate\Contracts\Auth\Guard
     */
    public function guard()
    {
        return Auth::guard('api');
    }
    public function NZHelperOpenId(Request $request)
    {
        $code = $request->input('code');
        $appId = 'wx6cda57a3aa04e5aa';
        $secret = config('services.wx.secret'); // TODO replace
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' . $appId . '&secret=' . $secret . '&js_code=' . $code . '&grant_type=authorization_code';
        $json = json_decode(file_get_contents($url), true);
        $openid = $json['openid'];
        $ret = [
            'openid' => $openid
        ];
        $user = User::where('openid', $openid)->first();
        if (!empty($user)) {
            $ret['token'] = $this->guard()->tokenById($user->id);
        }

        return response()->json($ret);
    }

    public function openid(Request $request)
    {
        $code = $request->input('code');
        $appId = config('services.wx.id');
        $secret = config('services.wx.secret');
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' . $appId . '&secret=' . $secret . '&js_code=' . $code . '&grant_type=authorization_code';
        $json = json_decode(file_get_contents($url), true);
        $openid = $json['openid'];
        $ret = [
            'openid' => $openid
        ];
        $user = User::where('openid', $openid)->first();
        if (!empty($user)) {
            // try to mock to the target customer if is coach
            if ($request->input('customer') && Coach::where('user_id', $user->id)->count() > 0) {
                $user = User::find($request->input('customer'));
            }
            $ret['token'] = $this->guard()->tokenById($user->id);
        }

        return response()->json($ret);
    }

    public function token(Request $request)
    {
        $code = $request->input('code');
        $appId = config('services.wx.id');
        $secret = config('services.wx.secret');
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' . $appId . '&secret=' . $secret . '&js_code=' . $code . '&grant_type=authorization_code';
        $resp = file_get_contents($url);
        $json = json_decode($resp, true);
        if (!array_key_exists('openid', $json)) {
            Log::error('cannot get wx openid: ', [$resp]);
            return response()->json(array('message' => 'cannot get openid via wx api'), 500);
        }
        $openid = $json['openid'];
        // find user by openid
        $user = User::where('openid', $openid)->first();
        if (empty($user)) {
            return response()->json(array('message' => 'cannot find the user'), 500);
        }
        $token = $this->guard()->tokenById($user->id);
        return $this->respondWithToken($token);
    }

    public function bind(Request $request)
    {
        $phone = $request->input('phone');
        $openid = $request->input('openid');
        $avatar = $request->input('avatar');

        if (empty($phone) || empty($openid)) {
            return response()->json(array('message' => 'missing parameters'), 500);
        }

        $user = User::where('email', $phone)->first();
        if (empty($user)) {
            return response()->json(array('message' => 'cannot find the user'), 500);
        }
        $user->openid = $openid;
        $user->avatar = $avatar;
        $user->save();

        // return token
        $token = $this->guard()->tokenById($user->id);
        return $this->respondWithToken($token);
    }

    public function vcodeUcpaas(Request $request)
    {
        $mobile  = $request->input('mobile');

        $user = User::where('email', $mobile)->first();
        if (empty($user)) {
            return response()->json(array('message' => '找不到对应的用户'), 404);
        }

        $appId = config('services.ucpaas.appId');
        $token = config('services.ucpaas.token');
        $sid = config('services.ucpaas.sid');
        $templateId = config('services.ucpaas.templateId');

        $options['accountsid'] = $sid;
        $options['token'] = $token;
        $ucpass = new Ucpaas($options);

        $vcode = $user->refreshVCode();
        $param = $vcode . ',5';

        return $ucpass->SendSms($appId, $templateId, $param, $mobile, $user->id);
        // return response()->json(['vcode' => $vcode]);
    }

    public function vcode(Request $request)
    {
        $mobile  = $request->input('mobile');

        $user = User::where('email', $mobile)->first();
        if (empty($user)) {
            return response()->json(array('message' => '找不到对应的用户'), 404);
        }

        return response()->json(array('message' => $vcode));

        $accessKeyId = config('services.ali.key');
        $accessSecret = config('services.ali.secret');
        AlibabaCloud::accessKeyClient($accessKeyId, $accessSecret)
            ->regionId('cn-hangzhou')
            ->asDefaultClient();

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
                        'PhoneNumbers' => $mobile,
                        'SignName' => "氧气教练Pro",
                        'TemplateCode' => self::SMS_TEMPLATE_VCODE,
                        'TemplateParam' => json_encode(['code' => $vcode]),
                    ],
                ])
                ->request();
            return response()->json($result->toArray());
        } catch (ClientException $e) {
            return response()->json(array('message' => $e->getErrorMessage()), 500);
        } catch (ServerException $e) {
            return response()->json(array('message' => $e->getErrorMessage()), 500);
        }
    }
}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use App\User;
use Goat1000\SVGGraph\SVGGraph;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class AuthController extends Controller
{
    /**
     * Create a new AuthController instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'openid', 'bind', 'token', 'chart']]);
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

        if ($token = $this->guard()->attempt($credentials)) {
            return $this->respondWithToken($token);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
    }

    public function reset(Request $request)
    {
        $user = $this->guard()->user();
        $credentials = [
            'email' => $user->email,
            'password' => $request->input('currentPassword')
        ];

        if ($token = $this->guard()->attempt($credentials)) {
            $password = $request->input('newPassword');
            $user->password = Hash::make($password);
            $user->setRememberToken(Str::random(60));
            $user->save();
            return $this->respondWithToken($token);
            // $this->guard()->login($user);
        }

        return response()->json(['error' => 'Unauthorized'], 401);
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

    public function openid(Request $request)
    {
        $code = $request->input('code');
        $appId = config('services.wx.id');
        $secret = config('services.wx.secret');
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' . $appId . '&secret=' . $secret . '&js_code=' . $code . '&grant_type=authorization_code';
        $json = json_decode(file_get_contents($url), true);
        $ret = [
            'openid' => $json['openid']
        ];

        return response()->json($ret);
    }

    public function token(Request $request)
    {
        $code = $request->input('code');
        $appId = config('services.wx.id');
        $secret = config('services.wx.secret');
        $url = 'https://api.weixin.qq.com/sns/jscode2session?appid=' . $appId . '&secret=' . $secret . '&js_code=' . $code . '&grant_type=authorization_code';
        $json = json_decode(file_get_contents($url), true);
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
}

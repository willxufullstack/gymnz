<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Photo;
use App\User;
use Auth;
use Qiniu\Auth as QNAuth;

class PhotoController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, $userId)
    {
        $photos = Photo::where('user_id', $userId)->orderBy('created_at', 'DESC')->get();
        if($photos){
            return response()->json($photos, 200);
        }
        return response()->json(['message'=>'failed'], 500);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $createdBy = Auth::User()->id;
        $data = $request->only('user', 'url');
        $user = User::find($data['user']);
        $photo = new Photo();
        $photo->url = $data['url'];
        $photo->created_by = $createdBy;
        $photo->user()->associate($user);
        $success = $photo->save();
        if($success){
            return response()->json($photo, 201);
        }
        response()->json(['message'=>'failed'], 500);
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
    public function destroy($userId, $id)
    {
        $photo = Photo::where(['id' => $id, 'user_id' => $userId])->first();
        if (empty($photo)) {
            return response()->json(array('message' => 'can not find the photo ' . $id), 500);
        }
        $success = $photo->delete();
        if ($success) {
            return response()->json($photo, 200);
        }
        return response()->json(array('message' => 'fail'), 500);
    }

    public function getUploadToken(Request $request){
        $userId = Auth::User()->id;
        $qnkey = config('services.qn.key');
        $qnSecret = config('services.qn.secret');
        $bucket = config('services.qn.bucket');

        $auth = new QNAuth($qnkey, $qnSecret);
        $fileName =  $userId.'_'.time().'.jpg';
        if($request->has('fileName')){
            $fileName = $request->input('fileName');
        }

        $upToken = $auth->uploadToken($bucket, $fileName, 7200, null, true);
        return response()->json(['fileName'=> $fileName, 'token'=>$upToken], 200);
    }
}

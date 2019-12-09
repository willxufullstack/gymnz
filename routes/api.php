<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// test code
// Route::group([], function ($router) {

// });


Route::group([
    'middleware' => 'api',
    'prefix' => 'auth'
], function ($router) {
    Route::get('openid', 'AuthController@openid');
    Route::post('token', 'AuthController@token');
    Route::post('bind', 'AuthController@bind');
    Route::post('login', 'AuthController@login');
    Route::post('logout', 'AuthController@logout');
    Route::post('refresh', 'AuthController@refresh');
    Route::post('reset', 'AuthController@reset');
    Route::get('me', 'AuthController@me');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {
    // it's a picture so should make it as public
    Route::get('/user/{user}/bodydata/chart', 'BodyDataController@chart');
    // allow visit the trial course so that user can access from wx app
    Route::get('/gym/{gym}/trial/{id}', 'ScheduleController@show');
    // paste route here to skip auth when debug

});

// route for helper
Route::group([], function () {
    Route::resource('/helper/demand', 'HelperDemandController');
});

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::resource('/workoutaction', 'WorkoutActionController');

    Route::get('/token/upload', 'PhotoController@getUploadToken');
    Route::get('/bodydata/predefined', 'BodyDataController@getPredefinedOptions');

    Route::get('coach', 'CoachController@getCoachInfoByUserId');

    Route::get('gym/{gym}/customer', 'GymController@getCustomerList');
    Route::get('gym/{gym}/available', 'GymController@getAvailableTime');
    Route::get('gym/{gym}/summary', 'GymController@getSummary');
    Route::get('gym/{gym}/workload', 'ScheduleController@workload');

    Route::resource('user/{user}/task', 'TaskController');
    Route::patch('task/{task}/complete', 'TaskController@complete');

    Route::get('user/{user}/coursebalance', 'OrderController@getCustomerCourseBalance');
    Route::get('user/{user}/order', 'OrderController@getCustomerOrders');
    Route::resource('user.bodydata', 'BodyDataController');
    Route::resource('user.photo', 'PhotoController');

    Route::resource('org', 'OrganizationController');

    Route::get('gym/{gym}/sharecover', 'GymController@getShareCover');
    Route::resource('gym', 'GymController');
    Route::resource('gym.coach', 'CoachController');
    Route::get('gym/{gym}/coach/{coach}/reset', 'CoachController@reset');

    Route::resource('gym.order', 'OrderController');
    Route::post('gym/{gym}/order/{order}/refund', 'OrderController@refund');
    Route::post('gym/{gym}/order/{order}/split', 'OrderController@split');

    Route::resource('gym.accounting', 'AccountingController');

    Route::resource('gym.reimbursement', 'ReimbursementController');
    Route::get('gym/{gym}/reimbursement/{reimbursementId}/pay', 'ReimbursementController@pay');

    Route::get('schedule/history', 'ScheduleController@history');
    Route::resource('gym.schedule', 'ScheduleController');
    Route::get('gym/{gym}/schedule/{schedule}/complete', 'ScheduleController@complete');

    Route::resource('gym.salarysetting', 'SalarySettingController');

    Route::resource('gym.salaryreceipt', 'SalaryReceiptController');
    Route::post('gym/{gym}/salaryreceipt/{receipt}/pay', 'SalaryReceiptController@pay');

    Route::resource('coach.template', 'PlanTemplateController');

    Route::get('timeline/message', 'TimelineController@message');
    Route::resource('timeline', 'TimelineController');

    Route::resource('talk', 'TalkController');
});

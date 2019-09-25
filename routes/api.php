<?php

use Illuminate\Http\Request;

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
    Route::post('me', 'AuthController@me');
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
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

    Route::get('user/{user}/coursebalance', 'OrderController@getCustomerCourseBalance');
    Route::get('user/{user}/order', 'OrderController@getCustomerOrders');
    Route::resource('user.bodydata', 'BodyDataController');
    Route::resource('user.photo', 'PhotoController');

    Route::resource('org', 'OrganizationController');

    Route::resource('gym', 'GymController');
    Route::resource('gym.coach', 'CoachController');
    Route::get('gym/{gym}/coach/{coach}/reset', 'CoachController@reset');

    Route::resource('gym.order', 'OrderController');
    Route::post('gym/{gym}/order/{order}/refund', 'OrderController@refund');

    Route::resource('gym.accounting', 'AccountingController');

    Route::resource('gym.reimbursement', 'ReimbursementController');
    Route::get('gym/{gym}/reimbursement/{reimbursementId}/pay', 'ReimbursementController@pay');

    Route::resource('gym.schedule', 'ScheduleController');
    Route::get('gym/{gym}/schedule/{schedule}/complete', 'ScheduleController@complete');

    Route::resource('gym.salarysetting', 'SalarySettingController');

    Route::resource('gym.salaryreceipt', 'SalaryReceiptController');
    Route::post('gym/{gym}/salaryreceipt/{receipt}/pay', 'SalaryReceiptController@pay');

    Route::resource('coach.template', 'PlanTemplateController');
});

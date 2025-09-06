<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BodyDataController;
use App\Http\Controllers\CoachController;
use App\Http\Controllers\CoachTrainController;
use App\Http\Controllers\CoachWeeklyReportController;
use App\Http\Controllers\CsvImportController;
use App\Http\Controllers\DianpingController;
use App\Http\Controllers\DocumentsController;
use App\Http\Controllers\FollowupController;
use App\Http\Controllers\GymController;
use App\Http\Controllers\HomeworkController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrganizationController;
use App\Http\Controllers\PhotoController;
use App\Http\Controllers\PlanTemplateController;
use App\Http\Controllers\ReimbursementController;
use App\Http\Controllers\SalaryReceiptController;
use App\Http\Controllers\SalarySettingController;
use App\Http\Controllers\ScheduleController;
use App\Http\Controllers\StatisticsController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\TimelineController;
use App\Http\Controllers\WorkoutActionController;
use App\Http\Controllers\HelperDemandController;

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
    Route::get('openid', [AuthController::class, 'openid']);
    Route::post('token', [AuthController::class, 'token']);
    Route::post('bind', [AuthController::class, 'bind']);
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('reset', [AuthController::class, 'reset']);
    Route::get('me', [AuthController::class, 'me']);
    Route::post('vcode', [AuthController::class, 'vcode']);
});

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([], function () {
    // it's a picture so should make it as public
    Route::get('/user/{user}/bodydata/chart', [BodyDataController::class, 'chart']);
    // allow visit the trial course so that user can access from wx app
    Route::get('/gym/{gym}/trial/{id}', [ScheduleController::class, 'show']);
    // legacy API: to re-generate bonus orders: year=2020&month=4
    Route::get('gym/{gym}/bonus', [ScheduleController::class, 'bonusCheck']);
    // paste route here to skip auth when debug
    // Route::get('gym/{gym}/refreshCustomerCreatedAt', 'GymController@refreshCustomerCreatedAt');
    // Route::get('gym/{gym}/chart/monthcoursebycustomertype', 'GymController@monthCourseByCustomerType');
    // Route::get('gym/{gym}/chart/monthsalebytype', 'GymController@monthSaleByType');
    // Route::get('gym/{gym}/chart/monthactivebytype', 'GymController@monthActiveByType');

});

// route for helper
Route::group([], function () {
    Route::resource('/helper/demand', HelperDemandController::class);
    Route::get('/helper/openid', [AuthController::class, 'NZHelperOpenId']);
});

Route::group([
    'middleware' => 'auth:api'
], function () {
    Route::resource('/workoutaction', WorkoutActionController::class);

    Route::get('/token/upload', [PhotoController::class, 'getUploadToken']);
    Route::get('/bodydata/predefined', [BodyDataController::class, 'getPredefinedOptions']);

    Route::get('coach', [CoachController::class, 'getCoachInfoByUserId']);

    Route::get('gym/{gym}/customer', [GymController::class, 'getCustomerList']);
    Route::get('gym/{gym}/hotmap', [GymController::class, 'getHotmaps']);
    Route::get('gym/{gym}/available', [GymController::class, 'getAvailableTime']);
    Route::get('gym/{gym}/summary', [GymController::class, 'getSummary']);
    Route::get('gym/{gym}/workload', [ScheduleController::class, 'workload']);
    Route::get('gym/{gym}/anaylze/customer', [GymController::class, 'anaylzeCustomer']);
    Route::resource('gym/{gym}/followup', FollowupController::class);
    Route::post('followup/{id}/postpone', [FollowupController::class, 'postpone']);
    Route::post('followup/{id}/close', [FollowupController::class, 'close']);
    Route::post('followup/{id}/switch', [FollowupController::class, 'switch']);

    Route::resource('user/{user}/task', TaskController::class);
    Route::patch('task/{task}/complete', [TaskController::class, 'complete']);

    Route::get('user/{user}/coursebalance', [OrderController::class, 'getCustomerCourseBalance']);
    Route::get('user/{user}/order', [OrderController::class, 'getCustomerOrders']);
    Route::get('user/{user}/hotmap', [ScheduleController::class, 'hotmap']);
    Route::resource('user.bodydata', BodyDataController::class);
    Route::resource('user.photo', PhotoController::class);
    Route::resource('user.homework', HomeworkController::class);
    Route::get('homework/{id}', [HomeworkController::class, 'showWithoutUser']);

    Route::resource('org', OrganizationController::class);

    Route::get('gym/{gym}/sharecover', [GymController::class, 'getShareCover']);
    Route::post('gym/{gym}/bind', [GymController::class, 'bind']);

    Route::patch('gym/{gym}/customer/{customer}', [GymController::class, 'updateCustomerProfile']);

    Route::get('gym/{gym}/dianping', [DianpingController::class, 'index']);
    Route::get('gym/{gym}/statistics', [StatisticsController::class, 'index']);
    Route::get('gym/{gym}/coach/summary', [CoachController::class, 'summary']);

    Route::resource('gym', GymController::class);
    Route::resource('gym.coach', CoachController::class);
    Route::get('gym/{gym}/coach/{coach}/reset', [CoachController::class, 'reset']);
    Route::get('gym/{gym}/coach/{coach}/invite', [CoachController::class, 'invite']);

    Route::resource('gym.order', OrderController::class);
    Route::get('gym/{gym}/chart/monthcoursebycustomertype', [GymController::class, 'monthCourseByCustomerType']);
    Route::get('gym/{gym}/chart/monthsalebytype', [GymController::class, 'monthSaleByType']);
    Route::get('gym/{gym}/chart/monthactivebytype', [GymController::class, 'monthActiveByType']);
    Route::post('gym/{gym}/order/{order}/refund', [OrderController::class, 'refund']);
    Route::post('gym/{gym}/order/{order}/split', [OrderController::class, 'split']);
    Route::resource('gym/{gym}/csv', CsvImportController::class);

    Route::resource('gym.accounting', AccountingController::class);

    Route::resource('gym.reimbursement', ReimbursementController::class);
    Route::get('gym/{gym}/reimbursement/{reimbursementId}/pay', [ReimbursementController::class, 'pay']);

    Route::get('schedule/history', [ScheduleController::class, 'history']);
    Route::post('gym/{gym}/preschedule', [ScheduleController::class, 'preSchedule']);
    Route::resource('gym.schedule', ScheduleController::class);

    Route::get('gym/{gym}/schedule/{schedule}/complete', [ScheduleController::class, 'complete']);
    Route::post('gym/{gym}/schedule/{schedule}/complete', [ScheduleController::class, 'complete']);
    Route::post('gym/{gym}/schedule/{schedule}/coupon', [ScheduleController::class, 'coupon']);

    Route::resource('gym.salarysetting', SalarySettingController::class);

    Route::resource('gym.salaryreceipt', SalaryReceiptController::class);
    Route::post('gym/{gym}/salaryreceipt/{receipt}/pay', [SalaryReceiptController::class, 'pay']);

    Route::resource('coach.template', PlanTemplateController::class);

    Route::get('timeline/message', [TimelineController::class, 'message']);
    Route::resource('timeline', TimelineController::class);

    Route::resource('talk', TalkController::class);

    Route::resource('gym.documents', DocumentsController::class);

    Route::resource('gym.coachweeklyreport', CoachWeeklyReportController::class);
    Route::resource('gym.coachtrain', CoachTrainController::class);
});

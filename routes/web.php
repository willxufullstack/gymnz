<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

use App\Http\Controllers\HomeController;
use App\Http\Controllers\GodController;
use App\Http\Controllers\TVController;
use App\Http\Controllers\BillingController;

Route::get('/home', [HomeController::class, 'index'])->name('home');
Route::get('/god', [GodController::class, 'index'])->name('god');
Route::get('/tv/{gymId}', [TVController::class, 'index'])->name('tv');
Route::resource('/billing', BillingController::class);
Route::get('{path}', [HomeController::class, 'index'])->where('path', '.+');


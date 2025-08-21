<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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

// Route::get('/', function () {
//     return view('welcome');
// });

route::get('/',[HomeController::class, 'index'])->name('home');
route::get('/ai-services',[HomeController::class, 'ai_services'])->name('ai-services');
route::get('/about',[HomeController::class, 'about'])->name('about');
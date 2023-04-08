<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\EtudiantController;
use App\Http\Controllers\ProfController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});




Route::post('login', [AuthController::class,'login']);







// Route::post('admin/login',[AdminController::class,'login']);
// // Route::get('admin/details',[AdminController::class,'userDetails'])->middleware(['auth:sanctum','abilities:admin']);


// Route::post('etudiant/login',[EtudiantController::class,'login']);
// // Route::get('etudiant/details',[EtudiantController::class,'userDetails'])->middleware(['auth:sanctum','abilities:etudiant']);

// Route::post('prof/login',[ProfController::class,'login']);
// Route::get('prof/details',[ProfController::class,'userDetails'])->middleware(['auth:sanctum','abilities:prof']);

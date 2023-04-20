<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\Etudiantcontroller;

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

//Etudiants Authentification Routes :
Route::post('login', [AuthController::class,'login']);
Route::post('register', [AuthController::class,'register']);
// Route::post('login/etudiant', [AuthController::class,'login']);

Route::prefix('etudiants')->group(function () {
    Route::get('/', 'Etudiantcontroller@index'); // Get all etudiants
    Route::get('/{id}', [Etudiantcontroller::class , 'show']); // Get a specific etudiant by ID
    Route::patch('/{id}', [Etudiantcontroller::class ,'update' ]); // Update a specific etudiant by ID
    // Route::post('/{id}/applyForCours', 'Etudiantcontroller@applyForCours'); // Apply for a course for a specific etudiant by ID
});


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
    Route::get('/', [Etudiantcontroller::class , 'index']);
    Route::post('/add-etudiant', [Etudiantcontroller::class , 'store']);
    Route::get('/{id}', [Etudiantcontroller::class , 'show']); // Get a specific etudiant by ID
    Route::patch('/update-etudiant/{id}', [Etudiantcontroller::class ,'update' ]); // Update a specific etudiant by ID
    Route::delete('/delete-etudiant/{id}', [Etudiantcontroller::class ,'destroy' ]);
    // Route::post('/{id}/applyForCours', 'Etudiantcontroller@applyForCours'); // Apply for a course for a specific etudiant by ID
});


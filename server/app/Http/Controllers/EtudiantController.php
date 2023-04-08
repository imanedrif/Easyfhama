<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;
use Auth;

class EtudiantController extends Controller
{
    public function login(Request $request)
    {
        $input = $request->all();

        $validation = \Validator::make($input,[
            'email' => 'required|email',
            'password' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation -> errors()],401);
        }

        if (Auth::guard('etudiant')->attempt(['email'=> $input['email'],'password' => $input['password']])){
            $user = Auth::guard('etudiant')->user();

            $token = $user->createToken('MyApp',['etudiant'])->plainTextToken;
            return response()->json(['user'=> $user,'token' => $token ]);

        }
        return response()->json(['error' => 'Unauthorised'],401);
    }

    public function userDetails()
    {
        $user = Auth::user();
        return response()->json(['data' => $user]);
    }


}

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Auth;
use App\Models\Etudiant;

class AuthController extends Controller
{

    public function register(Request $request)
    {
        $input = $request->all();

        $validation = \Validator::make($input,[
            'nom' => 'required',
            'emai'=> 'required|email',
            'filliere' => 'required',
            'classe' => 'required',
            'password' => 'required|min:8',
        ]);

        if($validation->fails()){
            return response()->json(['error' => $validation -> errors()],401);
        }
        // check if email already exists
        $exist = Etudiant::where('email',$input['email'])->first();
        if($exist){
            return response()->json(['error' => 'Email already exists'],401);
        }

        $user= new Etudiant();
        $user->nom = $input['nom'];
        $user->email = $input['email'];
        $user->email = $input['filliere'];
        $user->email = $input['classe'];
        $user->password = bcrypt($input['password']);
        $user->save();

        $token = $user->createToken('myApp',['etudiant'])->plainTextToken;
        return response()->json(['user'=>$user , 'token' => $token]);
    }

    Public function login(Request $request){
        $input = $request->all();

        $validation  = \Validator::make($input,[
            'email'=>'required|email',
            'password' => 'password'
        ]);

        if($validation->fails()){
            return response()->json(['error'=>$validation -> errors()],401);
        }
        if(Auth::guard('etudiant')->attempt(['email' => $input['email'],'password'=>$input['password']])){
            $user =Auth::guard('etudiant')->user();
            $token = $user->createToken('token_name',['etudiant'])->plainTextToken;
            
            return response()->json(['user'=>$user,'token' => $token]);
        }
        else if(Auth::guard('admin')->attempt(['email' => $input['email'],'password'=>$input['password']])){
            $user =Auth::guard('admin')->user();
            $token = $user->createToken('token_name',['admin'])->plainTextToken;
            return response()->json(['user'=>$user,'token' => $token]);
        }
        else if(Auth::guard('prof')->attempt(['email' => $input['email'],'password'=>$input['password']])){
            $user =Auth::guard('prof')->user();
            $token = $user->createToken('token_name',['prof'])->plainTextToken;
            return response()->json(['user'=>$user,'token' => $token]);
        }
        return response()->json(['error' => 'Unauthorised'],401);
    }

    function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logout successful']);
    }

}

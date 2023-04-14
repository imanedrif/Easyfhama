<?php

namespace App\Http\Controllers;

use Auth;
use App\Models\Etudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;


class AuthController extends Controller
{
    public function register(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input,[
            'nom' => 'required',
            'email' => 'required|email',
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
        $user->filliere = $input['filliere'];
        $user->classe = $input['classe'];
        $user->password = bcrypt($input['password']);
        $user->save();

        $token = $user->createToken('token_auth',['etudiant'])->plainTextToken;
        return response()->json(['user'=>$user],200);
    }

    Public function login(Request $request){
        $input = $request->all();

        $validation = Validator::make($input,[
            'email'=> 'required|email',
            'password' => 'required|min:8',
        ]);

        if($validation->fails()){
            return response()->json(['error'=>$validation -> errors()],401);
        }
        if(Auth::guard('etudiant')->attempt(['email' => $input['email'],'password'=>$input['password']])){
            $user =Auth::guard('etudiant')->user();
            $token = $user->createToken('token_name',['etudiant'])->plainTextToken;
            $user['token'] = $token;
            $user['role'] = 'etudiant';
            return response()->json(['user'=>$user]);
        }
        else if(Auth::guard('admin')->attempt(['email' => $input['email'],'password'=>$input['password']])){
            $user =Auth::guard('admin')->user();
            $token = $user->createToken('token_name',['admin'])->plainTextToken;
            $user['token'] = $token;
            $user['role'] = 'admin';
            return response()->json(['user'=>$user]);
        }
        else if(Auth::guard('prof')->attempt(['email' => $input['email'],'password'=>$input['password']])){
            $user =Auth::guard('prof')->user();
            $token = $user->createToken('token_name',['prof'])->plainTextToken;
            $user['token'] = $token;
            $user['role'] = 'prof';
            return response()->json(['user'=>$user,'token' => $token]);
        }
        return response()->json(['error' => 'Unauthorised'],401);





        // $input = $request->all();
        // // check if the login correct in etudiant table
        // $user = Etudiant::where('email',$input['email'])->first();
        // if(!$user){
        //     return response()->json(['error'=>'Invalid credentials'],401);
        // }
        // // check if the password matches the hashed password
        // if(Hash::check($input['password'],$user->password)){
        //     return response()->json(['user'=>$user]);
        // }
        // else{
        //     return response()->json(['error'=>'Invalid credentials'],401);
        // }
    }

    function logout(Request $request) {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Logout successful']);
    }
}

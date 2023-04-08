<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Auth;

class AdminController extends Controller
{

    public function AddProf(Request $request)
    {
        $input = $request->all();

        $validation = \Validator::make($input,[
            'nom' => 'required',
            'emai'=> 'required|email',
            'password' => 'required|min:8',
        ]);

        if($validation->fails()){
            return response()->json(['error' => $validation -> errors()],401);
        }
        // check if email already exists
        $exist = Prof::where('email',$input['email'])->first();
        if($exist){
            return response()->json(['error' => 'Email already exists'],401);
        }

        $user= new Prof();
        $user->nom = $input['nom'];
        $user->email = $input['email'];
        $user->password = bcrypt($input['password']);
        $user->save();

        $token = $user->createToken('myApp',['prof'])->plainTextToken;
        return response()->json(['user'=>$user , 'token' => $token]);
    }

    public function getProf()
    {
        $profs = Prof::all();
        return reaponse()->json(['profs'=>$profs]);
    }


    public function AddEtudiant(Request $request)
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

    public function getEtudiant()
    {
        $etudiants = Etudiant::all();
        return reaponse()->json(['etudiants'=>$etudiants]);
    }

    public function AddCours(Request $request){
        $input = $request->all();

        $validation = \Validator::make($input,[
            'nom' => 'required',
            'date' => 'required',
            ''
        ]);
    }


}



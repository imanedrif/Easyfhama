<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getEtudiants()
    {
        $etudiants = Etudiant::all();
        return response()->json(['etudiants' => $etudiants]);
    }

    public function getProfs()
    {
        $profs = Prof::all();
        return response()->json(['profs' => $profs]);
    }

    public function addStudent(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'nom' => 'required',
            'email' => 'required|email|unique:etudiants,email',
            'password' => 'required|min:8',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 401);
        }

        $etudiant = new Etudiant();
        $etudiant->name = $input['name'];
        $etudiant->email = $input['email'];
        $etudiant->password = bcrypt($input['password']);
        $etudiant->save();

        return response()->json(['etudiant' => $etudiant]);
    }

    public function addProf(Request $request)
    {
        $input = $request->all();

        $validation = \Validator::make($input, [
            'nom' => 'required',
            'email' => 'required|email|unique:profs,email',
            'password' => 'required|min:6',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 401);
        }

        $prof = new Prof();
        $prof->name = $input['name'];
        $prof->email = $input['email'];
        $prof->password = bcrypt($input['password']);
        $prof->save();

        return response()->json(['prof' => $prof]);
    }
}


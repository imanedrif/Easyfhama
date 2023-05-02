<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function getEtudiants()
    {
        $etudiants = Etudiant::all();
        return response()->json(['etudiants' => $etudiants],200);
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

        return response()->json(['etudiant' => $etudiant],200);
    }

    public function deleteEtudiant($id)
    {
        $etudiant = Etudiant::find($id);
        if (!$etudiant) {
            return response()->json(['error' => 'Etudiant not found'], 404);
        }

        $etudiant->delete();
        return response()->json(['message' => 'Etudiant deleted successfully']);
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

    public function deleteProf($id)
    {
        $prof = Prof::find($id);
        if (!$prof) {
            return response()->json(['error' => 'Prof not found'], 404);
        }

        $prof->delete();
        return response()->json(['message' => 'Prof deleted successfully']);
    }

    public function addCours(request $request){
        $input = $request->all();

        $validation = Validator::make($input, [
            'nom' => 'required',
            'date' => 'required',
        ]);


        $cours = new Cours();
        $cours->nom = $input['name'];
        $cours->date = $input['email'];
        $cours->save();

        return response()->json(['cours' => $cours]);
    }

    public function deleteCours($id)
    {
        $cours = Cours::findOrFail($id);
        $cours->delete();

        return response()->json(['message' => 'Course deleted successfully']);
    }

    public function updateCours(Request $request, $id)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'nom' => 'required',
            'date' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 401);
        }

        $cours = Cours::findOrFail($id);
        $cours->nom = $input['nom'];
        $cours->date = $input['date'];
        $cours->save();

        return response()->json(['cours' => $cours]);
    }

}


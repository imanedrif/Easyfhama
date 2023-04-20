<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Profcontroller extends Controller
{

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

    public function index()
    {
        $profs = Prof::with(['classe', 'cours', 'etudiants'])->get();
        return response()->json(['data' => $profs]);
    }

    public function show($id)
    {
        $prof = Prof::with(['classe', 'cours', 'etudiants'])->find($id);
        return response()->json(['data' => $prof]);
    }

    // public function show($id)
    // {
    //     $prof = Prof::find($id);
    //     if (!$prof) {
    //         return response()->json(['error' => 'Prof not found'], 404);
    //     }

    //     return response()->json(['prof' => $prof]);
    // }

    public function update(Request $request, $id)
    {
        $prof = Prof::find($id);
        if (!$prof) {
            return response()->json(['error' => 'Prof not found'], 404);
        }

        $prof->update($request->all());

        return response()->json(['message' => 'Prof updated successfully']);
    }

    public function addClasse(Request $request)
    {
        $this->validate($request, [
            'nom' => 'required',
            'filliere' => 'required',
            'limit' => 'required|integer',
        ]);

        $classe = new Classe();
        $classe->nom = $request->input('nom');
        $classe->filliere = $request->input('filliere');
        $classe->limit = $request->input('limit');
        $classe->save();

        return response()->json(['message' => 'Classroom added successfully.']);
    }
}

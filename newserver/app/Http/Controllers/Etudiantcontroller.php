<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;


class Etudiantcontroller extends Controller
{
    public function index()
    {
        $etudiants = Etudiant::all();
        return response()->json(['etudiant' => $etudiants],200);
    }

    public function show($id)
    {
        $etudiant = Etudiant::with(['Etudiantcours', 'prof'])->find($id);
        return response()->json(['data' => $etudiant],200);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'nom' => 'required',
            'email' => 'required|email',
            'filliere' => 'required',
            'classe' => 'required',
            'password' => 'required|min:8',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 401);
        }
        $exist = Etudiant::where('email',$input['email'])->first();
        if($exist){
            return response()->json(['error' => 'Email already exists'],401);
        }

        $etudiant = new Etudiant();
        $etudiant->nom = $input['nom'];
        $etudiant->email = $input['email'];
        $etudiant->filliere = $input['filliere'];
        $etudiant->classe = $input['classe'];
        $etudiant->password = bcrypt($input['password']);
        $etudiant->save();

        return response()->json(['etudiant' => $etudiant],200);
    }

    // public function show($id)
    // {
    //     $etudiant = Etudiant::find($id);
    //     if (!$etudiant) {
    //         return response()->json(['error' => 'Etudiant not found'], 404);
    //     }

    //     return response()->json(['etudiant' => $etudiant]);
    // }

    public function update(Request $request, $id)
    {
        $etudiant = Etudiant::find($id);
        if (!$etudiant) {
            return response()->json(['error' => 'Etudiant not found' , 'id'=>$id], 403);
        }

        $etudiant->update($request->all());

        return response()->json(['message' => 'Etudiant updated successfully', 'etudiant' => $etudiant],200);
    }
    public function destroy($id)
    {
        $etudiant = Etudiant::find($id);
        if ($etudiant){
            $etudiant->delete();
            return response()->json(['message'=>'etudiant deleted succesfully',200]);
        }
        else{
            return response()->json(['message'=>'etudiant not found',404]);
        }

    }

    public function applyForCours(Request $request, $id)
    {
        $etudiant = Etudiant::findOrFail($id);
        $coursId = $request->input('id_cours');

        if ($etudiant->cours->contains($coursId)) {
            return response()->json(['message' => 'You have already applied for this course.'], 400);
        }

        $cours = Cours::findOrFail($coursId);

        if ($cours->etudiants->count() >= $cours->limit) {
            return response()->json(['message' => 'This course is already full.'], 400);
        }

        $etudiant->cours()->attach($coursId, ['status' => 'accepted']);

        return response()->json(['message' => 'You have successfully applied for the course.']);
    }
}

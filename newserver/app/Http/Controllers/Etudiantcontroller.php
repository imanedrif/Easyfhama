<?php

namespace App\Http\Controllers;

use App\Models\Etudiant;
use Illuminate\Http\Request;

class Etudiantcontroller extends Controller
{
    public function index()
    {
        $etudiants = Etudiant::with(['Etudiantcours', 'prof'])->get();
        return response()->json(['data' => $etudiants]);
    }

    public function show($id)
    {
        $etudiant = Etudiant::with(['Etudiantcours', 'prof'])->find($id);
        return response()->json(['data' => $etudiant]);
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

        return response()->json(['message' => 'Etudiant updated successfully', 'etudiant' => $etudiant]);
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

<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ClasseController extends Controller
{
    public function index()
    {
        $classes = Classe::all();
        return response()->json(['classes' => $classes], 200);
    }

    public function show($id)
    {
        $classe = Classe::find($id);
        if ($classe) {
            return response()->json(['classe' => $classe], 200);
        } else {
            return response()->json(['error' => 'Class not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'nom' => 'required',
            'filliere' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 422);
        }

        $classe = Classe::create($input);

        return response()->json(['message' => 'Class created successfully', 'classe' => $classe], 201);
    }

}


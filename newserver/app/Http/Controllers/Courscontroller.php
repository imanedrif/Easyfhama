<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CoursController extends Controller
{
    public function index()
    {
        $courses = Cours::all();
        return response()->json(['courses' => $courses], 200);
    }

    public function show($id)
    {
        $course = Cours::find($id);
        if ($course) {
            return response()->json(['course' => $course], 200);
        } else {
            return response()->json(['error' => 'Course not found'], 404);
        }
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validation = Validator::make($input, [
            'nom' => 'required',
            'description' => 'required',
        ]);

        if ($validation->fails()) {
            return response()->json(['error' => $validation->errors()], 422);
        }

        $course = Cours::create($input);

        return response()->json(['message' => 'Course created successfully', 'course' => $course], 201);
    }

}


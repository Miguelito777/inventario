<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\TC_MOTIVO;


class motivoController extends Controller
{
    public function index()
    {
        //
    }
    public function showAllmotivo()
    {
       return response()->json(TC_MOTIVO::all());
    }
    public function showOnemotivo($id)
    {
        return response()->json(TC_MOTIVO::find($id));
    }
    public function create(Request $request)
    {
        $motivo= TC_MOTIVO::create($request->all());
        return response()->json($motivo, 201);
    }
    public function update($id, Request $request)
    {
        $motivo = TC_MOTIVO::findOrFail($id);
        $motivo->update($request->all());
        return response()->json($motivo, 200);
    }
    public function delete($id)
    {
        TC_MOTIVO::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
<?php

namespace App\Http\Controllers;

use App\TC_CATEGORIA;
use Illuminate\Http\Request;

class CategoriaController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }
    public function showAllcat()
    {
       return response()->json(TC_CATEGORIA::all());
    }
    public function showOnecat($id)
    {
        return response()->json(TC_CATEGORIA::find($id));
    }
    public function create(Request $request)
    {
        $categoria= TC_CATEGORIA::create($request->all());
        return response()->json($categoria, 201);
    }
    public function update($id, Request $request)
    {
        $categoria = TC_CATEGORIA::findOrFail($id);
        $categoria->update($request->all());
        return response()->json($categoria, 200);
    }
    public function delete($id)
    {
        TC_CATEGORIA::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}

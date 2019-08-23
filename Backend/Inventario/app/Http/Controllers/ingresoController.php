<?php

namespace App\Http\Controllers;

use App\TT_INGRESO;
use Illuminate\Http\Request;

class ingresoController extends Controller
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

    public function showAllingreso()
    {
       return response()->json(TT_INGRESO::all());
    }
    public function showOneingreso($id)
    {
        return response()->json(TT_INGRESO::find($id));
    }
    public function create(Request $request)
    {
        $ingreso= TT_INGRESO::create($request->all());
        return response()->json($ingreso, 201);
    }
    public function update($id, Request $request)
    {
        $ingreso = TT_INGRESO::findOrFail($id);
        $ingreso->update($request->all());
        return response()->json($ingreso, 200);
    }
    public function delete($id)
    {
        TT_INGRESO::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }



  
}

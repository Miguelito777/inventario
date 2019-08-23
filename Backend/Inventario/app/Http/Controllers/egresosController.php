<?php

namespace App\Http\Controllers;

use App\TT_EGRESOS;
use Illuminate\Http\Request;

class egresosController extends Controller
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
    public function showAllegresos()
    {
       return response()->json(TT_EGRESOS::all());
    }
    public function showOneegresos($id)
    {
        return response()->json(TT_EGRESOS::find($id));
    }
    public function create(Request $request)
    {
        $egresos= TT_EGRESOS::create($request->all());
        return response()->json($egresos, 201);
    }
    public function update($id, Request $request)
    {
        $egresos = TT_EGRESOS::findOrFail($id);
        $egresos->update($request->all());
        return response()->json($egresos, 200);
    }
    public function delete($id)
    {
        TT_EGRESOS::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}

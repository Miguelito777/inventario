<?php

namespace App\Http\Controllers;

use App\TT_MOVIMIENTO;
use Illuminate\Http\Request;

class movimientoController extends Controller
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
    public function showAllmovimiento()
    {
       return response()->json(TT_MOVIMIENTO::all());
    }
    public function showOnemovimiento($id)
    {
        return response()->json(TT_MOVIMIENTO::find($id));
    }
    public function create(Request $request)
    {
        $movimiento= TT_MOVIMIENTO::create($request->all());
        return response()->json($movimiento, 201);
    }
    public function update($id, Request $request)
    {
        $movimiento = TT_MOVIMIENTO::findOrFail($id);
        $movimiento->update($request->all());
        return response()->json($movimiento, 200);
    }
    public function delete($id)
    {
        TT_MOVIMIENTO::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}

<?php

namespace App\Http\Controllers;

use App\TT_PASILLOS;
use App\TC_BODEGAS;
use Illuminate\Http\Request;

class pasillosController extends Controller
{
    
    public function index()
    {
        //
    }

    public function showAllpasillo()
   {
      //return response()->json(TT_PASILLOS::all());
      return response()->json(TT_PASILLOS::with('TcBodega')->get());
   }
   public function showOnepasillo($id)
   {
       return response()->json(TT_PASILLOS::find($id));
   }
   public function create(Request $request)
   {
       $pasillo = TT_PASILLOS::create($request->all());
       $bodega = TC_BODEGAS::find($pasillo->idbodega);
       $pasillo->tc_bodega = $bodega; 
       return response()->json( $pasillo, 201);
   }
   public function update($id, Request $request)
   {
       $pasillo = TT_PASILLOS::findOrFail($id);
       $pasillo->update($request->all());
       $bodega = TC_BODEGAS::find($pasillo->idbodega);
       $pasillo->tc_bodega = $bodega; 
       return response()->json($pasillo, 200);
   }
   public function delete($id)
   {
     TT_PASILLOS::findOrFail($id)->delete();
       return response('Deleted Successfully', 200);
   }
}

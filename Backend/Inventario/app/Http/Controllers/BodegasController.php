<?php

namespace App\Http\Controllers;

use App\TC_BODEGAS;
use Illuminate\Http\Request;

class BodegasController extends Controller
{
   
    public function index()
   {
       //
   }
   public function showAllbod()
   {
      return response()->json(TC_BODEGAS::all());
   }
   public function showOnebod($id)
   {
       return response()->json(TC_BODEGAS::find($id));
   }
   public function create(Request $request)
   {
       $bodegas= TC_BODEGAS::create($request->all());
       return response()->json($bodegas, 201);
   }
   public function update($id, Request $request)
   {
       $bodegas = TC_BODEGAS::findOrFail($id);
       $bodegas->update($request->all());
       return response()->json($bodegas, 200);
   }
   public function delete($id)
   {
       TC_BODEGAS::findOrFail($id)->delete();
       return response('Deleted Successfully', 200);
   }
}

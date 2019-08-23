<?php

namespace App\Http\Controllers;

use App\TT_PASILLOS;
use Illuminate\Http\Request;

class pasillosController extends Controller
{
    
    public function index()
    {
        //
    }

    public function showAllpasillo()
   {
      return response()->json(TT_PASILLOS::all());
   }
   public function showOnepasillo($id)
   {
       return response()->json(TT_PASILLOS::find($id));
   }
   public function create(Request $request)
   {
       $pasillo= TT_PASILLOS::create($request->all());
       return response()->json( $pasillo, 201);
   }
   public function update($id, Request $request)
   {
       $pasillo = TT_PASILLOS::findOrFail($id);
       $pasillo->update($request->all());
       return response()->json($pasillo, 200);
   }
   public function delete($id)
   {
     TT_PASILLOS::findOrFail($id)->delete();
       return response('Deleted Successfully', 200);
   }
}

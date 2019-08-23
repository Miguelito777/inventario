<?php

namespace App\Http\Controllers;

use App\TT_ESTANTERIAS;
use Illuminate\Http\Request;

class estanteriasController extends Controller
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

 
   
   public function showAllestanteria()
   {
      return response()->json(TT_ESTANTERIAS::all());
   }


   public function showOneestanteria($id)
   {
       return response()->json(TT_ESTANTERIAS::find($id));
   }
   public function create(Request $request)
   {
       $estanteria= TT_ESTANTERIAS::create($request->all());
       return response()->json( $estanteria, 201);
   }
   public function update($id, Request $request)
   {
       $estanteria = TT_ESTANTERIAS::findOrFail($id);
       $estanteria->update($request->all());
       return response()->json($estanteria, 200);
   }
   public function delete($id)
   {
    TT_ESTANTERIAS::findOrFail($id)->delete();
       return response('Deleted Successfully', 200);
   }
}

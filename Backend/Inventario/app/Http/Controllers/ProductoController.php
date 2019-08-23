<?php

namespace App\Http\Controllers;

use App\TT_PRODUCTO;
use Illuminate\Http\Request;

class ProductoController extends Controller
{
    
    public function index()
    {
        //
    }

    public function showAllprod()
   {
      return response()->json(TT_PRODUCTO::all());
   }
   public function showOneprod($id)
   {
       return response()->json(TT_PRODUCTO::find($id));
   }
   public function create(Request $request)
   {
       $producto= TT_PRODUCTO::create($request->all());
       return response()->json( $producto, 201);
   }
   public function update($id, Request $request)
   {
       $producto = TT_PRODUCTO::findOrFail($id);
       $producto->update($request->all());
       return response()->json($producto, 200);
   }
   public function delete($id)
   {
       TT_PRODUCTO::findOrFail($id)->delete();
       return response('Deleted Successfully', 200);
   }
}

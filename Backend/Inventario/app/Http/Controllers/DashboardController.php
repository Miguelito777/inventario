<?php

namespace App\Http\Controllers;

use App\TT_PRODUCTO;
use App\TC_BODEGAS;
use App\TT_MOVIMIENTO;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
   
    public function index()
   {
       //
   }
   public function countProducto()
   {
    return response()->json(TT_PRODUCTO::all()->count());
   }
   public function countBadega()
   {
    return response()->json(TC_BODEGAS::all()->count());
   }
   public function productosEscasos()
   {
    return response()->json(TT_PRODUCTO::all()->where('cantidad','<=',8)->count());
   }
   public function countIngresos()
   {
    return response()->json(TT_MOVIMIENTO::all()->where('idtipomovimiento','=',1)->count());
   }
   public function countSalidas()
   {
    return response()->json(TT_MOVIMIENTO::all()->where('idtipomovimiento','=',2)->count());
   }
}

<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

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

   public function getIngresos($idMotivo){
        $ingresos = DB::table('tt_movimiento as mov')
            ->select('mov.created_at as fecha_ingreso', 'mov.cantidad', 'mov.precio', 'prod.nombre', 'est.codigo as estanteria', 'pas.codigo as pasillo', 'bod.bodega')
            ->join('tt_producto as prod','mov.id_producto', '=', 'prod.id')
            ->join('tt_estanterias as est','mov.id_estanteria', '=', 'est.id')
            ->join('tt_pasillos as pas','est.idpasillo', '=', 'pas.id')
            ->join('tc_bodegas as bod','pas.idbodega', '=', 'bod.id')
            ->join('tt_tipomov as tm', 'mov.idtipomovimiento', '=', 'tm.id')
            ->join('tc_motivo as mt', function ($join)use($idMotivo) {
                $join->on('tm.id_motivo', '=', 'mt.id')
                     ->where('mt.id', '=', $idMotivo);
            })->get();
        return response()->json($ingresos);
    }
}

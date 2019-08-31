<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TT_MOVIMIENTO extends Model
{
   
    protected $table = "TT_MOVIMIENTO";

    protected $fillable = [
        
        'cantidad',
        'precio',
        'idtipomovimiento',
        'idestanteria',
        'idproducto'
    ];
}

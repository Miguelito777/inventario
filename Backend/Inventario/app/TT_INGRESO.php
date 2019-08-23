<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TT_INGRESO extends Model
{
    protected $table = "TT_INGRESO";
    protected $fillable = [
        'motivo',
        'descuento',
        'idtipomov',
      
    ];
}


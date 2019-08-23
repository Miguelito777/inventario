<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TT_PASILLOS extends Model
{
    protected $table = "TT_PASILLOS";

    protected $fillable = [
        'codigo',
        'idbodega'
      
    ];
}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TT_EGRESOS extends Model

{
    protected $table = "TT_EGRESOS";
    protected $fillable = [
        'motivo',
        'ganancia',
        'idtipomovim'
        
    ];
    
}

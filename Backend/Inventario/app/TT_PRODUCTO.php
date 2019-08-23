<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TT_PRODUCTO extends Model
{
    protected $table = "TT_PRODUCTO";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'codigo',
        'nombre',
        'description',
        'cantidad',
        'idcat'
    ];
    
}

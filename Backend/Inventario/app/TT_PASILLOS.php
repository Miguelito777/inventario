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
    public function TcBodega(){
        return $this->hasOne('App\TC_BODEGAS','id','idbodega');
    }
}

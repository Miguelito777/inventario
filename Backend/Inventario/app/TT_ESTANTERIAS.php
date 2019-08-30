<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TT_ESTANTERIAS extends Model
{
   
    protected $table = "TT_ESTANTERIAS";
    protected $fillable = [
        'codigo',
        'idpasillo'
      
    ];
    public function TtPasillo(){
        return $this->hasOne('App\TT_PASILLOS','id','idpasillo');
    }
}


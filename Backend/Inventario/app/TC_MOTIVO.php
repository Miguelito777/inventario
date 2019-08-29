<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TC_MOTIVO extends Model
{
    protected $table = "TC_MOTIVO";

    protected $fillable = [
        
        'motivo',
        'observaciones'
     
    ];
}

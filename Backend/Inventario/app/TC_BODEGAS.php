<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TC_BODEGAS extends Model
{

    protected $table = "TC_BODEGAS";
    protected $fillable = [
    'name',
    'direccion'
    
];

}

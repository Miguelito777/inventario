<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class TABLASCATALOGO extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('TC_CATEGORIA', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('categoria');
            $table->timestamps();
        });

        Schema::create('TC_BODEGAS', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('bodega','15');
            $table->string('direccion','100');
            $table->timestamps();
        });
        
        Schema::create('TC_MOTIVO', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('motivo','15');
            $table->string('observaciones','100');
            $table->timestamps();
        });

    }

        


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('TC_BODEGAS');
        Schema::dropIfExists('TC_CATEGORIA');
        Schema::dropIfExists('TC_MOTIVO');
    }
}

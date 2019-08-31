<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Tablastransaccionales extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('TT_TIPOMOV', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('tipomov');
            $table->unsignedInteger('id_motivo');
            $table->foreign('id_motivo')->references('id')->on('TC_MOTIVO');
            $table->timestamps();
        });


        Schema::create('TT_PRODUCTO', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('codigo','15');
            $table->string('nombre','15');
            $table->string('description','45');
            $table->integer('cantidad');
            $table->unsignedInteger('idcat');
            $table->foreign('idcat')->references('id')->on('TC_CATEGORIA');
            $table->timestamps();
        });
        Schema::create('TT_PASILLOS', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('codigo');
            $table->unsignedInteger('idbodega');
            $table->foreign('idbodega')->references('id')->on('TC_BODEGAS');
            $table->timestamps();
        });

        Schema::create('TT_ESTANTERIAS', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('codigo', '15');
            $table->unsignedInteger('idpasillo');
            $table->foreign('idpasillo')->references('id')->on('TT_PASILLOS');
            $table->timestamps();
        });
        
        Schema::create('TT_MOVIMIENTO', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('cantidad');
            $table->float('precio');
            $table->unsignedInteger('idtipomovimiento');
            $table->unsignedInteger('id_estanteria');
            $table->unsignedInteger('id_producto');
            $table->foreign('idtipomovimiento')->references('id')->on('TT_TIPOMOV');
            $table->foreign('id_estanteria')->references('id')->on('TT_ESTANTERIAS');
            $table->foreign('id_producto')->references('id')->on('TT_PRODUCTO');
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
        Schema::dropIfExists('TT_TIPOMOV');
        Schema::dropIfExists('TT_PRODUCTO');
        Schema::dropIfExists('TT_PASILLOS');
        Schema::dropIfExists('TT_ESTANTERIAS');
        Schema::dropIfExists('TT_MOVIMIENTO');
    }
}

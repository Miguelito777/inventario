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
            $table->string('nombretip');
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

        Schema::create('TT_INGRESO', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('motivo', '15');
            $table->float('descuento');
            $table->unsignedInteger('idtipomov');
            $table->foreign('idtipomov')->references('id')->on('TT_TIPOMOV');
            $table->timestamps();
        });

        Schema::create('TT_EGRESOS', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('motivo', '15');
            $table->float('ganancia');
            $table->unsignedInteger('idtipomovim');
            $table->foreign('idtipomovim')->references('id')->on('TT_TIPOMOV');
            $table->timestamps();
        });
        
        Schema::create('TT_MOVIMIENTO', function (Blueprint $table) {
            $table->Increments('id');
            $table->integer('cantidad');
            $table->float('precio');
            $table->unsignedInteger('idtipomovimiento');
            $table->unsignedInteger('idproducto');
            $table->unsignedInteger('idbodega');
            $table->foreign('idtipomovimiento')->references('id')->on('TT_TIPOMOV');
            $table->foreign('idproducto')->references('id')->on('TT_PRODUCTO');
            $table->foreign('idbodega')->references('id')->on('TC_BODEGAS');
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
        Schema::dropIfExists('TT_INGRESOS');
        Schema::dropIfExists('TT_EGRESOS');
        Schema::dropIfExists('TT_MOVIMIENTO');
    }
}

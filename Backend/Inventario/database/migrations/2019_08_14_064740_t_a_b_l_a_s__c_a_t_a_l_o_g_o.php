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
            $table->string('name');
            $table->timestamps();
        });

        Schema::create('TC_BODEGAS', function (Blueprint $table) {
            $table->Increments('id');
            $table->string('name','15');
            $table->string('direccion','100');
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
    }
}

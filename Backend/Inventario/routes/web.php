<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

    $router->get('/', function () use ($router) {
        return $router->app->version();
    });


       $router->group(['prefix' => 'api'], function () use ($router) {
        $router->get('mostrarunocat/{id}',  ['uses' => 'CategoriaController@showOnecat']);
        $router->get('mostrarcat',  ['uses' => 'CategoriaController@showAllCat']);
        $router->post('cat', ['uses' => 'CategoriaController@create']);
        $router->put('actualizarcat/{id}',  ['uses' => 'CategoriaController@update']);
        $router->delete('eliminarcat/{id}',  ['uses' => 'CategoriaController@delete']);

        $router->get('mostrarunabod/{id}',  ['uses' => 'BodegasController@showOnebod']);
        $router->get('mostrarbod',  ['uses' => 'BodegasController@showAllbod']);
        $router->post('bodega', ['uses' => 'BodegasController@create']);
        $router->put('actualizarbod/{id}',  ['uses' => 'BodegasController@update']);
        $router->delete('eliminarbod/{id}',  ['uses' => 'BodegasController@delete']);

        $router->get('mostrarunprod/{id}',  ['uses' => 'ProductoController@showOneprod']);
        $router->get('mostrarprod',  ['uses' => 'ProductoController@showAllprod']);
        $router->post('producto', ['uses' => 'ProductoController@create']);
        $router->put('actualizarprod/{id}',  ['uses' => 'ProductoController@update']);
        $router->delete('eliminarprod/{id}',  ['uses' => 'ProductoController@delete']);
       

        
        $router->get('mostrarunpasillo/{id}',  ['uses' => 'pasillosController@showOnepasillo']);
        $router->get('mostrarpasillo',  ['uses' => 'pasillosController@showAllpasillo']);
        $router->post('pasillo', ['uses' => 'pasillosController@create']);
        $router->put('actualizarpasillo/{id}',  ['uses' => 'pasillosController@update']);
        $router->delete('eliminarpasillo/{id}',  ['uses' => 'pasillosController@delete']);


        $router->get('mostrarunaestanteria/{id}',  ['uses' => 'estanteriasController@showOneestanteria']);
        $router->get('mostrarestanteria',  ['uses' => 'estanteriasController@showAllestanteria']);
        $router->post('estanterias', ['uses' => 'estanteriasController@create']);
        $router->put('actualizarestanteria/{id}',  ['uses' => 'estanteriasController@update']);
        $router->delete('eliminarestanteria/{id}',  ['uses' => 'estanteriasController@delete']);


        $router->get('mostraruntipomov/{id}',  ['uses' => 'tipomovController@showOnetipomov']);
        $router->get('mostrartipomov',  ['uses' => 'tipomovController@showAlltipomov']);
        $router->post('tipomov', ['uses' => 'tipomovController@create']);
        $router->put('actualizartipomov/{id}',  ['uses' => 'tipomovController@update']);
        $router->delete('eliminartipomov/{id}',  ['uses' => 'tipomovController@delete']);


        
        $router->get('mostraruningreso/{id}',  ['uses' => 'ingresoController@showOneingreso']);
        $router->get('mostraringreso',  ['uses' => 'ingresoController@showAllingreso']);
        $router->post('ingreso', ['uses' => 'ingresoController@create']);
        $router->put('actualizaringreso/{id}',  ['uses' => 'ingresoController@update']);
        $router->delete('eliminaringreso/{id}',  ['uses' => 'ingresoController@delete']);


        $router->get('mostrarunegresos/{id}',  ['uses' => 'egresosController@showOneegresos']);
        $router->get('mostraregresos',  ['uses' => 'egresosController@showAllegresos']);
        $router->post('egresos', ['uses' => 'egresosController@create']);
        $router->put('actualizaregresos/{id}',  ['uses' => 'egresosController@update']);
        $router->delete('eliminaregresos/{id}',  ['uses' => 'egresosController@delete']);


        $router->get('mostrarunmovimiento/{id}',  ['uses' => 'movimientoController@showOnemovimiento']);
        $router->get('mostrarmovimiento',  ['uses' => 'movimientoController@showAllmovimiento']);
        $router->post('movimiento', ['uses' => 'movimientoController@create']);
        $router->put('actualizarmovimiento/{id}',  ['uses' => 'movimientoController@update']);
        $router->delete('eliminarmovimiento/{id}',  ['uses' => 'movimientoController@delete']);


        $router->get('mostrarunmotivo/{id}',  ['uses' => 'motivoController@showOnemotivo']);
        $router->get('mostrarmotivo',  ['uses' => 'motivoController@showAllmotivo']);
        $router->post('motivo', ['uses' => 'motivoController@create']);
        $router->put('actualizarmotivo/{id}',  ['uses' => 'motivoController@update']);
        $router->delete('eliminarmotivo/{id}',  ['uses' => 'motivoController@delete']);


        $router->get('dashboard/productos/count',  ['uses' => 'DashboardController@countProducto']);
        $router->get('dashboard/bodegas/count',  ['uses' => 'DashboardController@countBadega']);
        $router->get('dashboard/productos/escasos',  ['uses' => 'DashboardController@productosEscasos']);
        $router->get('dashboard/countIngresos',  ['uses' => 'DashboardController@countIngresos']);
        $router->get('dashboard/countSalidas',  ['uses' => 'DashboardController@countSalidas']);
        $router->get('dashboard/getMovimientos/{id}',  ['uses' => 'DashboardController@getIngresos']);     
    });

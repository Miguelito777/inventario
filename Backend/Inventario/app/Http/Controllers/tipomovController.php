<?php

namespace App\Http\Controllers;

use App\TT_TIPOMOV;
use Illuminate\Http\Request;

class tipomovController extends Controller
{
     public function index()
    {
        //
    }
    public function showAlltipomov()
    {
       return response()->json(TT_TIPOMOV::all());
    }
    public function showOnetipomov($id)
    {
        return response()->json(TT_TIPOMOV::find($id));
    }
    public function create(Request $request)
    {
        $tipomov= TT_TIPOMOV::create($request->all());
        return response()->json($tipomov, 201);
    }
    public function update($id, Request $request)
    {
        $tipomov = TT_TIPOMOV::findOrFail($id);
        $tipomov->update($request->all());
        return response()->json($tipomov, 200);
    }
    public function delete($id)
    {
        TT_TIPOMOV::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}

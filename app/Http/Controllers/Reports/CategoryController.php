<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reports\CategoryStoreRequest;
use App\Models\Reports\Category as Category;

use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index(){
        $forms = Category::all();

        return response()->json([
            'data' => $forms
        ]);
    }

    public function store( CategoryStoreRequest $request ) {
        $form = new Category;
        $form->fill($request->all());
        $form->save();


        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $form->id,
            ]
        ]);
    }

    public function show( Category $category ) {
        return response()->json([
            'data' => $category
        ]);
    }

    public function update( CategoryStoreRequest $request, Category $category ) {
        $category->fill($request->all());
        $category->save();

        return response()->json([
            'status' => true,
            'data' => $category
        ]);
    }

    public function destroy( Category $category ) {
        $category->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        Category::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }
}

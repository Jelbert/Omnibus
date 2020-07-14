<?php

namespace App\Http\Controllers;

use App\Company;
use App\Models\Reports\Form as ReportsForm;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    /**
     * Index resource
     *
     * @return JsonResponse
     */
    public function index() {
        $company = Company::all();

        return response()->json([
            'data' => $company
        ]);
    }

    public function show(Company $company){

        return response()->json([
            'data' => $company
        ]);

    }

    public function generate(Company $company){

    }
}

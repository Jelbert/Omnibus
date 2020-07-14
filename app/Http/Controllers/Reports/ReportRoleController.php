<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reports\ReportRoleStoreRequest;
use App\Models\Reports\ReportRole as ReportRole;
use Illuminate\Http\Request;

class ReportRoleController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Index resource
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index() {
        $roles = ReportRole::all();

        return response()->json([
            'data' => $roles
        ]);
    }


    /**
     * Store new resource
     *
     * @param ReportRoleStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store( ReportRoleStoreRequest $request ) {
        $role = new ReportRole;
        $role->fill($request->all());
        $role->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $role->id
            ]
        ]);
    }

    /**
     * Generate report
     *
     * @param ReportRole $role
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function show( ReportRole $role ) {

        return response()->json([
            'data' => $role
        ]);
    }

    /**
     * Update single resource
     *
     * @param ReportRoleStoreRequest $request
     * @param ReportRole $client
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update( ReportRoleStoreRequest $request, ReportRole $role ) {
        $role->fill($request->all());
        $role->save();

        return response()->json([
            'status' => true,
            'data' => $role
        ]);
    }
}

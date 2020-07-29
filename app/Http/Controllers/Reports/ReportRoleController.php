<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Http\Requests\Reports\ReportRoleStoreRequest;
use App\Models\Reports\Form as ReportsForm;
use App\Role as Role;
use App\RoleAccess as RoleAccess;
use App\Http\Controllers\RoleRoute;
use Facade\FlareClient\Report;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

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
        $roles = Role::all();


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
    public function store(  ) {
        $this->validate(request(), [
            'name' => 'required',
            'role_access.*' => 'in:'.RoleRoute::getActionName()->implode(',')
        ]);


//        $forms = ReportsForm::all();


        $role = Role::forceCreate([
            'name' => request('name'),
            'description' => request('description')
        ]);
//        $accesses = request('role_access');
////        $accesses = request('role_access');
//        dd($accesses);

        if ($accesses = request('role_access')) {
            foreach ($accesses as $route) {
                RoleAccess::forceCreate([
                    'role_id' => $role->id,
                    'route' => $route
                ]);
            }
        }

//

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $role->id
            ]
        ]);
    }


    public function getRoleAccesses(Request $request){

        $modules = Auth::user()->role->accesses;
        $modules = json_decode($modules, true);
        $route = array();
        $arrayChunk = array();


        foreach ($modules as $key => $module) {
            $route[] = $module;
            $item = $route[$key]['route'];
            $arrayChunk[] = $item;
        }

//        print_r($arrayChunk);
//        exit;


        return response()->json([
            'data' => $arrayChunk
        ]);

    }

    /**
     * Generate report
     *
     * @param Role $role
     *
     * @return \Illuminate\Http\JsonResponse
     */

    public function show(Role $role ) {

        $rolesaccess = RoleAccess::where('role_id', '=', $role->id)->get();

        return response()->json([
            'data' => $role,
            'roleAccess' => $rolesaccess,
        ]);
    }

    /**
     * Update single resource
     *
     * @param ReportRoleStoreRequest $request
     * @param Role $client
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update(Role $role ) {
        $this->validate(request(), [
            'name' => 'required',
            'role_access.*' => 'in:'.RoleRoute::getActionName()->implode(',')
        ]);

        $role->name = request('name');
        $role->description = request('description');
        $role->save();

        $role->accesses()->delete();
        if ($accesses = request('role_access')) {
            $routes = [];

            foreach ($accesses as $route) {
                $routes[] = new RoleAccess(['route' => $route]);
            }

            $role->accesses()->saveMany($routes);
        }

        return response()->json([
            'status' => true,
            'data' => $role
        ]);
    }

    public function destroy( Role $role ) {
        $role->delete();
        $role->accesses()->delete();

        return response()->json([
            'status' => true
        ]);
    }

    public function destroyMass( Request $request, Role $role ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        RoleAccess::destroy($request->ids);
        $role->accesses()->delete();

        return response()->json([
            'status' => true
        ]);
    }
}

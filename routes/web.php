<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

/*
 * Clients management
 * */
Route::prefix('/clients')->group(function () {
    Route::get('', 'ClientsController@index');
    Route::get('{client}', 'ClientsController@show');
    Route::post('store', 'ClientsController@store');
    Route::patch('{client}', 'ClientsController@update');
    Route::post('destroy', 'ClientsController@destroyMass');
    Route::delete('{client}/destroy', 'ClientsController@destroy');
});

/*
 * Forms management
 * */
Route::prefix('/reports/forms')->group(function () {
    Route::get('', 'Reports\ReportsFormsController@index');
    Route::get('m3', 'Reports\ReportsFormsController@m3');
    Route::get('prod', 'Reports\ReportsFormsController@prod');
    Route::get('{form}', 'Reports\ReportsFormsController@show');
    Route::post('store', 'Reports\ReportsFormsController@store');
    Route::patch('{form}', 'Reports\ReportsFormsController@update');
    Route::post('destroy', 'Reports\ReportsFormsController@destroyMass');
    Route::delete('{form}/destroy', 'Reports\ReportsFormsController@destroy');
    Route::post('{form}/generate', 'Reports\ReportsFormsController@generate');
    Route::get('{form}/exportpdf', 'Reports\ReportsFormsController@exportpdf');
    Route::get('{form}/exportcsv', 'Reports\ReportsFormsController@exportcsv');

});

/*
 * Category
 * */
Route::get('category', 'Reports\ReportsFormsController@category');
Route::prefix('/reports/category')->group(function () {
    Route::get('', 'Reports\CategoryController@index');
    Route::post('store', 'Reports\CategoryController@store');
    Route::get('{category}', 'Reports\CategoryController@show');
    Route::patch('{category}', 'Reports\CategoryController@update');
    Route::post('destroy', 'Reports\CategoryController@destroyMass');
    Route::delete('{category}/destroy', 'Reports\CategoryController@destroy');
});

/*
 * Modules
 */

Route::get('modules', 'Reports\ModuleController@modules');
Route::post('modulepath', 'Reports\ModuleController@postModulePath');
Route::get('{$module}', 'Reports\ModuleController@getModulePath');

/*
 * Company
 */
Route::prefix('/company')->group(function () {
    Route::get('', 'CompanyController@index');
    Route::get('{company}', 'CompanyController@show');
});


/*
 * Report Role
 */
Route::prefix('/reports/role')->group(function (){
    Route::get('', 'Reports\ReportRoleController@index');
    Route::post('store', 'Reports\ReportRoleController@store');
    Route::get('{role}', 'Reports\ReportRoleController@show');
    Route::patch('{role}', 'Reports\ReportRoleController@update');
    Route::post('destroy', 'Reports\ReportRoleController@destroyMass');
    Route::delete('{role}/destroy', 'Reports\ReportRoleController@destroy');
});

Route::get('access', 'Reports\ReportRoleController@getRoleAccesses');

Route::get('roleroute', 'RoleRoute@transformed');






/*
 * Current user
 * */
Route::prefix('/user')->group(function () {
    Route::get('', 'CurrentUserController@show');
    Route::patch('', 'CurrentUserController@update');
    Route::patch('/password', 'CurrentUserController@updatePassword');
});

/*
 * File upload (e.g. avatar)
 * */
Route::post('/files/store', 'FilesController@store');

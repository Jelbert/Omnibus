<?php

namespace App\Http\Controllers\Reports;

use App\File;
use App\Http\Controllers\Controller;
use App\Models\Reports\Form as ReportsForm;
use App\Http\Requests\Reports\ReportsFormStoreRequest;
use Dompdf\Dompdf;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Storage;
use Ixudra\Curl\Facades\Curl;
use Barryvdh\DomPDF\Facade as PDF;
use Smalot\PdfParser\Parser;
use Maatwebsite\Excel\Facades\Excel;

class ReportsFormsController extends Controller
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
        $forms = ReportsForm::all();

        return response()->json([
            'data' => $forms
        ]);
    }

    public function m3(Request $request) {
        $forms = ReportsForm::where('category', $request->query('category', 'm3'))->get();

        return response()->json([
            'data' => $forms
        ]);
    }

    public function prod(Request $request) {
        $forms = ReportsForm::where('category', $request->query('category', 'prod'))->get();

        return response()->json([
            'data' => $forms
        ]);
    }

    /**
     * Get single resource
     *
     * @param Request $request
     * @param ReportsForm $form
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function generate( Request $request, ReportsForm $form ) {
        $data = $request->all();
        $data['output-target'] = 'table/html;page-mode=stream';
        $data['renderMode'] = 'report';
        $data['showParameters'] = true;
        $data['htmlProportionalWidth'] = false;


        $res = Curl::to( env('PENTAHO_URL') . '/api/repos/' . rawurlencode($form->pentaho_id) . '/generatedContent')
            ->withData($data)
            ->withHeader('Authorization: Basic ' . base64_encode( env('PENTAHO_USERNAME') . ':' . env('PENTAHO_PASSWORD') ))
            ->withHeader('Accept: */*')
            ->withHeader('Accept-encoding: gzip, deflate, br')
            ->withResponseHeaders()
            ->withTimeout(0)
            ->withConnectTimeout(0)
            ->returnResponseObject()
            ->withOption('HTTP_VERSION', CURL_HTTP_VERSION_1_1)
            ->enableDebug( storage_path('logs/curl.log') )
            ->get();

        preg_match("/<body[^>]*>(.*?)<\/body>/is", str_replace('/pentaho', env('PENTAHO_URL'), $res->content), $report);


//        print_r(str_replace('/pentaho', env('PENTAHO_URL'), $res->content));
//        exit();

        return response()->json([
            'data' => str_replace('/pentaho', env('PENTAHO_URL'), $res->content)
        ], $res->status);

    }




    /**
     * Generate report
     *
     * @param ReportsForm $form
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function show( ReportsForm $form ) {
        return response()->json([
            'data' => $form
        ]);
    }

    /**
     * Update single resource
     *
     * @param ReportsFormStoreRequest $request
     * @param ReportsForm $client
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function update( ReportsFormStoreRequest $request, ReportsForm $form ) {
        $form->fill($request->all());
        $form->save();

        return response()->json([
            'status' => true,
            'data' => $form
        ]);
    }

    /**
     * Store new resource
     *
     * @param ReportsFormStoreRequest $request
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function store( ReportsFormStoreRequest $request ) {
        $form = new ReportsForm;
        $form->fill($request->all());
        $form->save();

        return response()->json([
            'status' => true,
            'created' => true,
            'data' => [
                'id' => $form->id
            ]
        ]);
    }

    /**
     * Destroy single resource
     *
     * @param ReportsForm $form
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroy( ReportsForm $form ) {
        $form->delete();

        return response()->json([
            'status' => true
        ]);
    }

    /**
     * Destroy resources by ids
     *
     * @param Request $request
     *
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function destroyMass( Request $request ) {
        $request->validate([
            'ids' => 'required|array'
        ]);

        ReportsForm::destroy($request->ids);

        return response()->json([
            'status' => true
        ]);
    }

    /**
     * Get single resource
     *
     * @param Request $request
     *
     *
     * @param ReportsForm $form
     * @return string|string[]
     */
    public function exportpdf(Request $request, ReportsForm $form){
        $data = $request->all();
        $data['output-target'] = 'pageable/pdf';
        $data['renderMode'] = 'report';
        $data['showParameters'] = true;
        $data['htmlProportionalWidth'] = false;


        $res = Curl::to( env('PENTAHO_URL') . '/api/repos/' . rawurlencode($form->pentaho_id) . '/generatedContent')
            ->withData($data)
            ->withHeader('Authorization: Basic ' . base64_encode( env('PENTAHO_USERNAME') . ':' . env('PENTAHO_PASSWORD') ))
            ->withHeader('Accept: */*')
            ->withHeader('Accept-encoding: gzip, deflate, br')
            ->withResponseHeaders()
            ->withTimeout(0)
            ->withConnectTimeout(0)
            ->returnResponseObject()
            ->withOption('HTTP_VERSION', CURL_HTTP_VERSION_1_1)
            ->enableDebug( storage_path('logs/curl.log') )
            ->get();

        preg_match("/<body[^>]*>(.*?)<\/body>/is", str_replace('/pentaho', env('PENTAHO_URL'), $res->content), $report);

        return response($res->content)
            ->header('Content-Type', 'application/pdf');

    }

    public function exportcsv(Request $request, ReportsForm $form){
        $data = $request->all();
        $data['output-target'] = 'table/csv;page-mode=stream';
        $data['renderMode'] = 'report';
        $data['showParameters'] = true;
        $data['htmlProportionalWidth'] = false;


        $res = Curl::to( env('PENTAHO_URL') . '/api/repos/' . rawurlencode($form->pentaho_id) . '/generatedContent')
            ->withData($data)
            ->withHeader('Authorization: Basic ' . base64_encode( env('PENTAHO_USERNAME') . ':' . env('PENTAHO_PASSWORD') ))
            ->withHeader('Accept: */*')
            ->withHeader('Accept-encoding: gzip, deflate, br')
            ->withResponseHeaders()
            ->withTimeout(0)
            ->withConnectTimeout(0)
            ->returnResponseObject()
            ->withOption('HTTP_VERSION', CURL_HTTP_VERSION_1_1)
            ->enableDebug( storage_path('logs/curl.log') )
            ->get();

        preg_match("/<body[^>]*>(.*?)<\/body>/is", str_replace('/pentaho', env('PENTAHO_URL'), $res->content), $report);

        return response(str_replace('/pentaho', env('PENTAHO_URL'), $res->content))
            ->header('Content-Type', 'text/csv');

    }

}

<?php

namespace App\Http\Controllers\Reports;

use App\Http\Controllers\Controller;
use App\Models\Reports\Category as Category;
use App\Models\Reports\Form;
use App\Models\Reports\Form as ReportsForm;
use App\Models\Reports\module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ModuleController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }


    public function modules(){

        $modules = module::all();
        $module = json_decode($modules, true);

        $categories = Category::all();
        $categories = json_decode($categories, true);

        $forms = ReportsForm::all();
//        $forms = ReportsForm::where('category', $request->query('category', 'm3'))->get();
        $forms = json_decode($forms, true);

//        $prods = ReportsForm::where('category', $request->query('category', 'prod'))->get();
//        $prods = json_decode($prods, true);


        $m3 = array();
        $category1 = array();
        $category2 = array();
//        $finalcategory = array();
        $prodArray = array();
        $arrayChunk = array();
        $tempData5 = array();
        $prodChunk = array();


        foreach ($categories as $category){
            $category1[] = $category['id'];
        }


//        exit();

        foreach ($forms as $index => $form) {

//        print_r($form['category_id']);

            $m3 = array($form['title'], '/?form=' . $index, $form['category_id']);

//            if($form['category_id'] == $category1) {
//
//            } elseif ($form['category_id'] == 2){
//                $prodArray[] = array($form['title'], '/?form=' . $index);
//            } else {
//                $prodArray[] = array($form['title'], '/?form=' . $index);
//            }

            $m3['label'] = $m3['0'];
            $m3['to'] = $m3['1'];
            $m3['category_id'] = $m3['2'];
            unset($m3['0']);
            unset($m3['1']);
            unset($m3['2']);
            $arrayChunk[] = $m3;

            print_r($form);

        }


//        foreach ($m3 as $key2 => $item) {
//
//        }
//        foreach ($prodArray as $key => $item) {
//            $item['label'] = $item['0'];
//            $item['to'] = $item['1'];
//            unset($item['0']);
//            unset($item['1']);
//            $prodChunk[] = $item;
//        }




        foreach ($categories as $key => $cat){
            $finalcategory = $cat['id'];


            $tempData5[] = array("label" => $cat['name'], "icon" => $module[4]['icon'], "menu" => $arrayChunk);

//            if($finalcategory == 1) {
//
//            } elseif ($finalcategory == 2){
//                $tempData5[] = array("label" => $cat['name'], "icon" => $module[4]['icon'], "menu" => $prodChunk);
//            } else {
//                $tempData5[] = array("label" => $cat['name'], "icon" => $module[4]['icon'], "menu" => $prodChunk);
//            }

//            print_r($finalcategory);


        }



        exit;





//        print_r($arrayChunk);

//        print_r(array("menu"=>$arrayChunk));
//        print_r(array("menu"=>array_chunk($m3, 1)));
//        print_r(array("menu"=>[["label"=>$module[5]['name'], "to"=>$module[5]['path']],["label"=>$module[5]['name'], "to"=>$module[5]['path']]]));
//        exit();
        $value = reset($module);
        $value1 = $value['name'];
        $tempData1 = array($module[0]['name']);
        $tempData2[] = array("to"=>$module[1]['path'], "icon"=>$module[1]['icon'], "label"=>$module[1]['name']);
        $tempData3 = array($module[2]['name']);
        $tempData4[] = array("to"=>$module[3]['path'], "icon"=>$module[3]['icon'], "label"=>$module[3]['name']);
        $tempData8[] = array("to"=>$module[7]['path'], "icon"=>$module[7]['icon'], "label"=>$module[7]['name']);
        $tempData9[] = array("to"=>$module[8]['path'], "icon"=>$module[8]['icon'], "label"=>$module[8]['name']);

        $tempData7 = array($module[6]['name']);
//        $tempData5[] = array("label"=>$finalcategory,"icon"=>$module[4]['icon'], "menu"=>$arrayChunk);
//        $tempData6[] = array("label"=>$module[5]['name'],"icon"=>$module[5]['icon'], "menu"=>$prodChunk);
//        $tempData6[] = array("label"=>$module[4]['name'],"icon"=>$module[4]['icon'], "menu"=>[["label"=>$module[5]['name'], "to"=>$module[5]['path']],["label"=>$module[5]['name']]]);
//        print_r($tempData5);
//        exit;

        array_push($tempData1, $tempData2);
        array_push($tempData3, $tempData4, $tempData8,$tempData9);
        array_push($tempData7 ,$tempData5);

        $finalData = array_merge($tempData1, $tempData3, $tempData7);

//        print_r($tempData5);
//        print_r($tempData6);
//        exit();

        $json = json_encode($finalData);
        $array = json_decode($json, true);



        return response()->json([
            'data' => $array
        ]);
    }

    public function postModulePath(){
        $forms = ReportsForm::all();

        return response()->json([
            'data' => $forms
        ]);
    }

    public function getModulePath(){
        $modules = ReportsForm::all();
//        $modules = json_decode($modules, true);

//        foreach ($modules as $index => $module) {
//            $module[] = array($module['title'],$module['path']);
//
//
//
//        }

//        print_r($modules);
//        exit;



        return response()->json([
            'data' => $modules
        ]);
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateModulesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('modules', function (Blueprint $table) {
            $table->id();
            $table->integer('parent_id');
            $table->string('name');
            $table->string('icon');
            $table->string('path');
            $table->timestamps();
        });



        \App\Models\Reports\module::forceCreate([
            'id'=>'1',
            'parent_id' => '0',
            'name' => 'General',
            'icon' => '',
            'path' => '',
        ]);
        \App\Models\Reports\module::forceCreate([
            'id'=>'2',
            'parent_id' => '1',
            'name' => 'Browse',
            'icon' => 'view-dashboard',
            'path' => '/',
        ]);
        \App\Models\Reports\module::forceCreate([
            'id'=>'3',
            'parent_id' => '0',
            'name' => 'Admin',
            'icon' => '',
            'path' => '',
        ]);
        \App\Models\Reports\module::forceCreate([
            'id'=>'4',
            'parent_id' => '3',
            'name' => 'Forms',
            'icon' => 'database',
            'path' => '/reports/forms/index',
        ]);
        \App\Models\Reports\module::forceCreate([
            'id'=>'5',
            'parent_id' => '0',
            'name' => 'M3 PRD',
            'icon' => 'view-list',
            'path' => '',
        ]);
        \App\Models\Reports\module::forceCreate([
            'id'=>'6',
            'parent_id' => '0',
            'name' => 'Accounting',
            'icon' => 'view-list',
            'path' => '',
        ]);

        \App\Models\Reports\module::forceCreate([
            'id'=>'7',
            'parent_id' => '0',
            'name' => 'Infor PRD',
            'icon' => 'view-list',
            'path' => '',
        ]);

        \App\Models\Reports\module::forceCreate([
            'id'=>'8',
            'parent_id' => '3',
            'name' => 'Role',
            'icon' => 'database',
            'path' => '/reports/role/index',
        ]);

        \App\Models\Reports\module::forceCreate([
            'id'=>'9',
            'parent_id' => '3',
            'name' => 'Category',
            'icon' => 'database',
            'path' => '/reports/category/index',
        ]);

    }


    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('modules');
    }
}

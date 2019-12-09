<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class HelperCreateDemandTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('helper_demands', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->timestamps();
            $table->string('openid', 64)->default('');
            $table->date('before');
            $table->string('from')->default('');
            $table->string('to')->default('');
            $table->integer('price')->default(0);
            $table->text('content');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('helper_demands');
    }
}

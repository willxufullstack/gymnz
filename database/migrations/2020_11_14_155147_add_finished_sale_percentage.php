<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddFinishedSalePercentage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('salary_settings', function (Blueprint $table) {
            $table->double('finished_percentage')->default(0);
        });
        Schema::table('salary_receipts', function (Blueprint $table) {
            $table->double('finished_percentage')->default(0);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('salary_settings', function (Blueprint $table) {
            //
        });
    }
}

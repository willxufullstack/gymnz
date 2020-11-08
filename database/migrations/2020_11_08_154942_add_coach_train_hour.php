<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCoachTrainHour extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('coach_trains', function (Blueprint $table) {
            $table->integer('start')->comment('use int to indicate start time, every 1 unit is 15 mins');
            $table->integer('end')->comment('use int to indicate start time, every 1 unit is 15 mins');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('coach_trains', function (Blueprint $table) {
            //
        });
    }
}

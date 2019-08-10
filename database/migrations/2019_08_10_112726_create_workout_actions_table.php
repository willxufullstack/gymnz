<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateWorkoutActionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('workout_actions', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('unit')->default('');
            $table->string('comments')->default('');
            $table->string('weight')->default('-');
            $table->unsignedInteger('set_times')->default(4);
            $table->unsignedInteger('repeat_times')->default(10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('workout_actions');
    }
}

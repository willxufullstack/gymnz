<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSalarySettings extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('salary_settings', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->double('base')->default(0);
            $table->double('course_fixed')->default(0);

            $table->double('course_percentage')->default(0);
            $table->double('sale_percentage')->default(0);

            $table->double('tax')->default(0);

            $table->unsignedBigInteger('coach_id');
            $table->foreign('coach_id')
                ->references('id')
                ->on('coaches')
                ->onDelete('CASCADE');

            $table->bigInteger('gym_id')->unsigned();
            $table->foreign('gym_id')
                ->references('id')
                ->on('gyms')
                ->onDelete('CASCADE');

            $table->unsignedBigInteger('created_by');

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
        Schema::dropIfExists('salary_settings');
    }
}

<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePlanTemplatesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('plan_templates', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('coach_id');
            $table->foreign('coach_id')
                ->references('id')
                ->on('coaches')
                ->onDelete('CASCADE');

            $table->json('detail');
            $table->string ('name');
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
        Schema::dropIfExists('plan_templates');
    }
}

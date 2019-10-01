<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTalksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('talks', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->unsignedBigInteger('from_id');
            $table->foreign('from_id')
                ->references('id')
                ->on('users')
                ->onDelete('CASCADE');

            $table->unsignedBigInteger('to_id');
            $table->foreign('to_id')
                ->references('id')
                ->on('users')
                ->onDelete('CASCADE');

            $table->text('message');

            $table->unsignedBigInteger('gym_id');
            $table->foreign('gym_id')
                ->references('id')
                ->on('gyms')
                ->onDelete('CASCADE');

            $table->string('type', 32);

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
        Schema::dropIfExists('talks');
    }
}

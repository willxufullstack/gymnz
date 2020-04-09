<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDianpingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dianping', function (Blueprint $table) {
            $table->bigIncrements('id');

            $table->bigInteger('gym_id')->unsigned();
            $table->foreign('gym_id')
                ->references('id')
                ->on('gyms')
                ->onDelete('CASCADE');

            $table->date('date');
            $table->integer('consume_uv')->unsigned()->default(0);
            $table->integer('view_uv')->unsigned()->default(0);
            $table->integer('buy_uv')->unsigned()->default(0);
            $table->integer('shop_uv')->unsigned()->default(0);

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
        Schema::dropIfExists('dianping');
    }
}

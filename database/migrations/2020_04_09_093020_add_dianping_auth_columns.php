<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDianpingAuthColumns extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('gyms', function (Blueprint $table) {
            $table->integer('dianping_expires_in')
                ->nullable()
                ->default(null);
            $table->integer('dianping_remain_refresh_count')
                ->nullable()
                ->default(null);
            $table->string('dianping_refresh_token', 255)
                ->nullable()
                ->default(null);
            $table->string('dianping_shop_name', 255)
                ->nullable()
                ->default(null);
            $table->string('dianping_bid', 255)
                ->nullable()
                ->default(null);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('gyms', function (Blueprint $table) {
            //
        });
    }
}

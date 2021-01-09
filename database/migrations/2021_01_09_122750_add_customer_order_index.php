<?php

use App\Order;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddCustomerOrderIndex extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->integer('customer_order_index')->default(0);
        });
        $orders = Order::all();
        foreach ($orders as &$order) {
            $count = Order::where('customer_id', $order->customer_id)
                ->where('id', '<=', $order->id)
                ->count();
            $order->customer_order_index = $count;
            $order->save();
            echo ($order->id . ':' . $order->customer_id . ' => ' . $count . "\n");
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            //
        });
    }
}

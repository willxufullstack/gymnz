<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $tableName = "orders";

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    public function customer()
    {
        return $this->belongsTo('App\User');
    }

    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    public function formatTimestamp()
    {
        $gym = Gym::find($this->gym_id);
        $this->updated_at = $gym->convertUTCToGymTimezone($this->updated_at);
        $this->created_at = $gym->convertUTCToGymTimezone($this->created_at);
        return $this;
    }

    public function getAccountingMessage($message) {
        return $message.' #' . $this->id . ' ' . $this->customer->name . ' ' . $this->price . '/' . $this->course_amount;
    }

    public function deleteAccounting()
    {
        $accounting = Accounting::where('order_id', $this->id)->first();
        if(!empty($accounting)){
            $accounting->delete();
        }
    }

    public function updateAccounting()
    {
        $accounting = Accounting::where('order_id', $this->id)->first();
        if(!empty($accounting)){
            $accounting->amount = $this->price;
            $message = ';'.date('Y/m/d') . '更新';
            $accounting->detail .= $this->getAccountingMessage($message);
            $accounting->save();
        }
    }
}

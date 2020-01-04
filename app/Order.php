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

}

<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

}

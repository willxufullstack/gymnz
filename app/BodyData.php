<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BodyData extends Model
{
    protected $table = 'body_data';

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}

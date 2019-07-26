<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BodyData extends Model
{
    protected $table = 'body_data';

    protected $fillable = [
        'date', 'value',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}

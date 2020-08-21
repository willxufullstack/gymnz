<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    protected $table = 'accounts';

    protected $fillable = ['user_id'];

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}

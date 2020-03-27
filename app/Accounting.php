<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Accounting extends Model
{
    protected $table = 'accounting';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'created_by', 'amount', 'category', 'detail', 'gym_id', 'created_at'
    ];

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    public function op()
    {
        return $this->belongsTo('App\User', 'created_by', 'id');
    }
}

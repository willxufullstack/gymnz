<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Reimbursement extends Model
{
    protected $fillable = [
        'created_by', 'amount', 'category', 'detail', 'gym_id', 'coach_id'
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

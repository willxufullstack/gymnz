<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PlanTemplate extends Model
{
    protected $fillable = [
        'detail', 'coach_id', 'name'
    ];
}

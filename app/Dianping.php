<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Dianping extends Model
{
    protected $table = "dianping";


    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'consume_uv',
        'view_uv',
        'buy_uv',
        'shop_uv',
        'date',
    ];
}

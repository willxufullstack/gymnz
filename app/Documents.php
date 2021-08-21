<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Documents extends Model
{
    protected $tableName = "documents";

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title', 'description', 'author', 'file_path'
    ];
}

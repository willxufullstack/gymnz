<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\SalaryReceipt;

class SalarySetting extends Model
{
    protected $fillable = [
        'created_by', 'base', 'course_fixed', 'course_percentage', 'sale_percentage', 'tax', 'gym_id', 'coach_id'
    ];

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    public function toSalaryReceipt(): SalaryReceipt
    {
        $receipt = new SalaryReceipt();
        $receipt->base = $this->base;
        $receipt->course_fixed = $this->course_fixed;
        $receipt->course_percentage = $this->course_percentage;
        $receipt->sale_percentage = $this->sale_percentage;
        $receipt->tax = $this->tax;
        $receipt->gym_id = $this->gym_id;
        $receipt->coach_id = $this->coach_id;
        $receipt->status = 1;
        return $receipt;
    }
}

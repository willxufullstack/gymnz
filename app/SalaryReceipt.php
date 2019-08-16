<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Schedule;

class SalaryReceipt extends Model
{
    protected $fillable = [
        'created_by',
        'base',
        'course_fixed',
        'course_percentage',
        'sale_percentage',
        'tax',
        'gym_id',
        'coach_id',
        'total',
        'adjustment',
        'adjustment_reason'
    ];

    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    public function syncWithSetting()
    {
        $setting = SalarySetting::where([
            'coach_id' => $this->coach_id,
            'gym_id' => $this->gym_id
        ])->first();

        $this->base = $setting->base;
        $this->course_fixed = $setting->course_fixed;
        $this->course_percentage = $setting->course_percentage;
        $this->sale_percentage = $setting->sale_percentage;
        $this->tax = $setting->tax;
    }

    public function updateTotal()
    {
        // get start/end
        $start = strtotime($this->month . '-01');
        $end = strtotime('-1 second', strtotime('+1 month', $start));
        // count schedule
        $query = Schedule::where('coach_id', $this->coach_id)
            ->where('gym_id', $this->gym_id)
            ->where('date', '>=', date('Y-m-d', $start))
            ->where('date', '<=', date('Y-m-d', $end))
            ->where('status', 2);

        // update total
        $count = $query->count();
        $this->course_count = $count;
        $this->total = $this->base + $count * $this->course_fixed + $this->adjustment - $this->tax;
    }
}

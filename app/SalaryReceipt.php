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
            ->where('status', 2)
            ->get();

        $moneyByCoursePercentage = 0;
        // get percentage by price
        if ($this->course_percentage) {
            foreach ($query as $s) {
                $money = 120;
                $p = $s->getPrice();
                if ($p) {
                    $money = $p * $this->course_percentage / 100;
                }
                $moneyByCoursePercentage += $money;
            }
        }

        $moneyByOrderPercentage = 0;
        if ($this->sale_percentage) {
            $orders = Order::where('coach_id', $this->coach_id)
                ->where('gym_id', $this->gym_id)
                ->where('created_at', '>=', date('Y-m-d H:i:s', $start))
                ->where('created_at', '<=', date('Y-m-d H:i:s', $end))
                ->get();
            foreach ($orders as $order) {
                $moneyByOrderPercentage += $order->price;
            }
            $moneyByOrderPercentage = $moneyByOrderPercentage * $this->sale_percentage / 100;
        }


        // update total
        // $count = $query->count();
        $count = count($query);
        $this->course_count = $count;
        $this->total = $this->base
            + $count * $this->course_fixed
            + $this->adjustment
            + $moneyByCoursePercentage
            + $moneyByOrderPercentage
            - $this->tax;
    }
}

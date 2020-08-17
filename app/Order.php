<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use DateTime;

class Order extends Model
{
    protected $tableName = "orders";

    protected $casts = [
        'images' => 'array',
    ];

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    public function customer()
    {
        return $this->belongsTo('App\User');
    }

    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    public function getIsFirstOrderAttribute()
    {
        return Order::where('gym_id', $this->gym_id)
            ->where('customer_id', $this->customer_id)
            ->where('created_at', '<', $this->created_at)
            ->count() === 0;
    }

    public function formatTimestamp()
    {
        $gym = Gym::find($this->gym_id);
        $this->updated_at = $gym->convertUTCToGymTimezone($this->updated_at);
        $this->created_at = $gym->convertUTCToGymTimezone($this->created_at);
        return $this;
    }

    public function getAccountingMessage($message)
    {
        return $message . ' #' . $this->id . ' ' . $this->customer->name . ' ' . $this->price . '/' . $this->course_amount;
    }

    public function deleteAccounting()
    {
        $accounting = Accounting::where('order_id', $this->id)->first();
        if (!empty($accounting)) {
            $accounting->delete();
        }
    }

    public function updateAccounting()
    {
        $accounting = Accounting::where('order_id', $this->id)->first();

        if (empty($accounting)) {
            // WHERE detail lke '% #orderid %'
            $accounting = Accounting::where('detail', 'LIKE', '%#' . $this->id . ' %')->first();
        }

        if (empty($accounting)) {
            return;
        }
        $accounting->order_id = $this->id;
        $accounting->amount = $this->price;
        $message = ';' . date('Y/m/d') . '更新';
        $accounting->detail .= $this->getAccountingMessage($message);
        $accounting->created_at = $this->created_at;
        $accounting->save();
    }

    public function hasExpired(?DateTime $day = null)
    {

        if (count($this->schedules) === 0) {
            return false;
        }
        if (!$day) {
            $day = date('Y-m-d');
        } else {
            $day = $day->format('Y-m-d');
        }
        return strtotime($this->expiry) <= strtotime($day);
    }

    public function loadSchedules()
    {
        $this->schedules = array_column(Schedule::select('date')
            ->where('order_id', $this->id)
            ->get()
            ->toArray(), 'date');
    }

    public function getExpiredCount(DateTime $day): int
    {
        if ($this->hasExpired($day)) {
            return $this->getStockCount($day);
        }
        return 0;
    }

    public function getStockCount(DateTime $day): int
    {
        return $this->course_amount - $this->getFinishedCount($day);
    }

    public function getFinishedCount(DateTime $day): int
    {
        if (!is_array($this->schedules)) {
            $this->loadSchedules();
        }
        $threshold = $day->getTimestamp();
        $finished = 0;
        foreach ($this->schedules as $date) {
            // echo($schedule->date."\n");
            // echo($schedule['date']."\n");
            if (strtotime($date) <= $threshold) {
                $finished++;
            }
        }
        return $finished;
    }

    public static function refreshBooked(int $orderId)
    {
        $order = Order::find($orderId);
        $order->booked_amount = Schedule::where('order_id', $orderId)->count();
        $order->save();
    }
}

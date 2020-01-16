<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Redis;

class Schedule extends Model
{
    protected $table = 'schedules';

    protected $fillable = ['detail'];

    protected $hidden = ['created_at', 'updated_at'];

    /**
     * Get the gym.
     */
    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    /**
     * Get the customer
     */
    public function customer()
    {
        return $this->belongsTo('App\User');
    }

    /**
     * Get the customer
     */
    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    public function getPrice()
    {
        $orderId = $this->order_id;
        // get order

        $order = Order::find($orderId);
        if (empty($order)) {
            return 0;
        }
        // get course price
        return $order->price / $order->course_amount;
    }

    public function getBalance()
    {
        $ret = ['booked' => 0, 'total' => 0];
        $orderId = $this->order_id;

        if (empty($orderId)) {
            return '体验课';
        }
        // get order
        $order = Order::find($orderId);
        // get course price
        $ret['booked'] = $order->booked_amount;
        $ret['total'] = $order->course_amount;
        return $ret;
    }

    public function saveActionDefaultValue()
    {
        $detail = json_decode($this->detail, true);
        if (empty($detail)) {
            return;
        }
        $key = 'action_default_value_' . $this->customer_id;
        // to hash
        $hash = json_decode(Redis::get($key), true);

        if (!$hash) {
            $hash = [];
        }
        foreach ($detail as $action) {
            $action['lastUsed'] = $this->date;
            $hash[$action['id']] = $action;
        }
        Redis::set($key, json_encode($hash));
    }

    public function getStartDateTime()
    {
        $mins = $this->start * 15;
        return strftime('%Y-%m-%d %H:%M', strtotime($this->date . " +$mins minutes"));
    }

    public function getEndDateTime()
    {
        $mins = ($this->end + 1) * 15;
        return strftime('%Y-%m-%d %H:%M', strtotime($this->date . " +$mins minutes"));
    }

    public function getMonthCount()
    {
        if ($this->monthCount !== null) {
            return $this->monthCount;
        }
        $dataArray = explode('-', $this->date);
        $this->monthCount = Schedule::where(['gym_id' => $this->gym_id, 'customer_id' => $this->customer_id])
            ->whereYear('date', '=', $dataArray[0])
            ->whereMonth('date', '=', $dataArray[1])
            ->where('status', 2)
            ->count();
        return $this->monthCount;
    }

    public function toTrainCard()
    {
        $detail = json_decode($this->detail);
        $title = '~ 训练 ~';

        foreach ($detail as $row) {
            if ($row->contenttype === 'comments') {
                $title = $row->comments;
                break;
            }
        }

        return [
            'type' => 'title-only',
            'title' => $title,
            'date' => $this->getStartDateTime(),
            'id' => $this->id,
            'gym' => $this->gym_id,
            'user_id' => $this->coach->user->id,
            'avatar' => $this->coach->user->avatar ?? 'http://static.o2-fit.com/image/logo.png?imageView2/1/w/80/h/80/format/jpg'
        ];
    }

    public function toConclusionCard()
    {
        return [
            'type' => 'body-only',
            'body' => $this->conclusion,
            'date' => $this->getEndDateTime(),
            'id' => $this->id,
            'gym' => $this->gym_id,
            'status' => $this->status,
            'user_id' => $this->coach->user->id,
            'avatar' => $this->coach->user->avatar ?? 'http://static.o2-fit.com/image/logo.png?imageView2/1/w/80/h/80/format/jpg'
        ];
    }

    /**
     * check whether two time range have overlap
     *
     * two time periods P1 and P2 overlaps if, and only if, at least one of these conditions hold:
     * P1 starts between the start and end of P2 (P2.from <= P1.from <= P2.to)
     * P2 starts between the start and end of P1 (P1.from <= P2.from <= P1.to)
     *
     *                      START         END
     *                       |             |
     *     1      FROM---TO  |             |
     *                       |             |
     *     2           FROM--|--TO         |
     *                       |             |
     *     3                 |  FROM---TO  |
     *                       |             |
     *     4          FROM---|-------------|---TO
     *                       |             |
     *     5                 |       FROM--|--TO
     *                       |             |
     *     6                 |             |  FROM---TO
     */
    private function _isTimeOverlap($form, $to, $start, $end)
    {
        if ($form >= $start && $form <= $end ||
            $start >= $form && $start <= $to
        ) {
            return true;
        }
        return false;
    }

    /**
     * check whether the schedule conflict with other schedules of the same coach
     */
    public function hasTimeConflicts()
    {
        // get all schedule at the same day
        $schedules = Schedule::where('gym_id', $this->gym_id)
            ->where('coach_id', $this->coach_id)
            ->where('date', '=', $this->date)
            ->get();

        foreach ($schedules as $schedule) {
            $fromTime = $schedule['start'];
            $endTime = $schedule['end'];
            if ($this->_isTimeOverlap($this->start, $this->end, $fromTime, $endTime)) {
                return true;
            }
        }
        return false;
    }

    public function fillFollowup()
    {
        $followup = Followup::where('status', 0)
            ->where('coach_id', $this->coach_id)
            ->where('gym_id', $this->gym_id)
            ->where('customer_id', $this->customer_id)
            ->first();
        if (!$followup) {
            return;
        }
        $followup->status = 1; // 1 => finished by schedule
        $followup->schedule_id = $this->id;
        $followup->save();
    }

    public function triggerNewFollowp($postponeDays = 1)
    {
        // skip if there is unfinished item
        $count = Followup::where('status', 0)
            ->where('coach_id', $this->coach_id)
            ->where('gym_id', $this->gym_id)
            ->where('customer_id', $this->customer_id)
            ->count();
        if ($count) {
            return;
        }
        // create
        $followup = new Followup();
        $followup->customer_id = $this->customer_id;
        $followup->gym_id = $this->gym_id;
        $followup->coach_id = $this->coach_id;
        $followup->status = 0; // 0 => pending
        // set date to tomorrow
        $followup->date = date('Y-m-d', strtotime("+{$postponeDays} day", strtotime($this->date)));
        $followup->save();
    }
}

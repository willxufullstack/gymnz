<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class CoachWeeklyReport extends Model
{
    protected $fillable = ['gym_id', 'coach_id', 'date', 'duration'];

    protected $casts = [
        'detail' => 'array',
    ];
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
    public function coach()
    {
        return $this->belongsTo('App\Coach');
    }

    public static function updateOrInsertReport(int $gymId, int $coachId, string $date, int $duration = 7)
    {
        $endDate = Carbon::createFromFormat('Y-m-d', $date);
        $startDate = Carbon::createFromFormat('Y-m-d', $date)->addDays(-$duration);

        $schedules = Schedule::where([
            'coach_id' => $coachId,
            'gym_id' => $gymId,
        ])
            ->where('date', '>', $startDate)
            ->where('date', '<=', $endDate)
            ->get();

        $customers = [];
        $scheduleCount = 0;
        foreach ($schedules as $s) {
            if (!$s->order_id) {
                continue;
            }
            $scheduleCount++;
            $customers[$s->customer_id] = true;
        }

        $customerCount = count($customers);

        $row = self::firstOrNew(['gym_id' => $gymId, 'coach_id' => $coachId, 'date' => $date, 'duration' => $duration]);
        $row->detail = [
            'schedule_count' => $scheduleCount,
            'customer_count' => $customerCount,
        ];
        $row->save();

        return $row;
    }
}

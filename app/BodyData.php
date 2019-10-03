<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class BodyData extends Model
{
    protected $table = 'body_data';

    protected $fillable = [
        'date', 'value',
    ];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public static function getBodyDataCard($user, $start, $end)
    {
        $data = self::where('user_id', $user)
            ->where('date', '>=', $start)
            ->where('date', '<', $end)
            ->get();
        // group
        $grouped = [];
        foreach ($data as $row) {
            $grouped[$row['date']] = true;
        }


        $ret = [];
        $host = request()->getSchemeAndHttpHost();
        foreach (array_keys($grouped) as $date) {
            $ret[] = [
                'type' => 'chart',
                'date' => $date,
                'id' => $date,
                'user_id' => $user,
                'avatar' => 'https://i.pravatar.cc/80',
                'url' => $host . "/api/user/$user/bodydata/chart?date=$date"
            ];
        }
        return $ret;
    }
}

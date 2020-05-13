<?php

namespace App;

use DateTime;
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

    public static function getDaysFromLastRecord($user, $date = null)
    {
        $data = self::where('user_id', $user)
            ->orderBy('date', 'DESC')
            ->first();
        if(empty($data)){
            return -1;
        }
        $from = new DateTime($data['date']);
        $today = new DateTime($date);
        return $from->diff($today)->format('%a');
    }

    public static function getBodyDataCardV2($user, $start, $end)
    {
        $data = self::where('user_id', $user)
            ->where('date', '>=', $start)
            ->where('date', '<', $end)
            ->get();
        // group
        $grouped = [];
        foreach ($data as $row) {
            if(!array_key_exists($row['date'], $grouped)) {
                $grouped[$row['date']] = [];
            }
            $grouped[$row['date']][] = $row;
        }

        $ret = [];
        $host = request()->getSchemeAndHttpHost();
        foreach ($grouped as $date => $data) {
            $hasChart = self::where('user_id', $user)
                ->where('date', '<=', $date)
                ->where('option','体重')
                ->count() > 1;
            $ret[] = [
                'type' => 'chart',
                'date' => $date,
                'data' => $data,
                'id' => $date,
                'user_id' => $user,
                'url' => $hasChart ? $host . "/api/user/$user/bodydata/chart?date=$date" : ''  // hide chart if only one record
            ];
        }
        return $ret;
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
            if(array_key_exists($row['date'], $grouped)) {
                continue;
            }
            $userObj = User::find($row->created_by);
            $avatar = $userObj->avatar ?? 'http://static.o2-fit.com/image/logo.png?imageView2/1/w/80/h/80/format/jpg';
            $grouped[$row['date']] = $avatar;
        }

        $ret = [];
        $host = request()->getSchemeAndHttpHost();
        foreach (array_keys($grouped) as $date) {
            $ret[] = [
                'type' => 'chart',
                'date' => $date,
                'id' => $date,
                'user_id' => $user,
                'avatar' => $grouped[$date],
                'url' => $host . "/api/user/$user/bodydata/chart?date=$date"
            ];
        }
        return $ret;
    }
}

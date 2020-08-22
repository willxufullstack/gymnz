<?php

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Billing extends Model
{
    protected $table = 'billing';

    public function operated_by()
    {
        return $this->belongsTo('App\User');
    }

    public function account()
    {
        return $this->belongsTo('App\Account');
    }

    public static function getAllBilling()
    {
        $rows = self::all();
        $idToBalance = [];
        foreach ($rows as $row) {
            if ($row->expired_at && $row->expired_at->lt(Carbon::today())) {
                continue;
            }
            if (!isset($idToBalance[$row->account_id])) {
                $idToBalance[$row->account_id] = 0;
            }

            $idToBalance[$row->account_id] += $row->point;
        }

        return $idToBalance;
    }

    public static function consume(Schedule $schedule) {
        $accountId = $schedule->gym->account_id;
        if (!$accountId) {
            return;
        }

        $billing = new Billing();
        $billing->operated_by = $schedule->coach->user->id;
        $billing->account_id = $accountId;
        $billing->point = -1;
        $billing->paid = 0;
        $billing->detail = 'consume #'.$schedule->id;
        $billing->expired_at = null;
        // dd($billing);
        $billing->save();
    }

    public static function cancel(Schedule $schedule) {
        $accountId = $schedule->gym->account_id;
        if (!$accountId) {
            return;
        }

        $billing = new Billing();
        $billing->operated_by = $schedule->coach->user->id;
        $billing->account_id = $accountId;
        $billing->point = 1;
        $billing->paid = 0;
        $billing->detail = 'cancel #'.$schedule->id;
        $billing->expired_at = null;
        // dd($billing);
        $billing->save();
    }
}

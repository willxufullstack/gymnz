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
}

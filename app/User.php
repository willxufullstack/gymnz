<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Support\Facades\Auth;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable;

    public function coach()
    {
        return $this->hasOne('App\Coach');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'sex',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token', 'updated_at', 'email_verified_at',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    // Rest omitted for brevity

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        return [];
    }


    public function getCourseBalance($gymId)
    {
        $query = Order::where([
                'customer_id' => $this->id,
            ]);

        $query = $query->where('gym_id', $gymId)->orderBy('created_at', 'ASC');
        $orders = $query->get();
        $ret = ['total' => 0, 'booked' => 0, 'created_at' => 0];
        // calc
        foreach ($orders as $order) {
            if($ret['created_at'] === 0) {
                $ret['created_at'] = substr($order->created_at, 0, 10);
            }
            if ($order->status === 1) {
                $ret['total'] += $order->course_amount;
            } else {
                // calc total by the actual booked amount if refund
                $ret['total'] += $order->booked_amount;
            }
            $ret['booked'] += $order->booked_amount;
        }
        return $ret;
    }

    public function getFirstOrder($gymId){
        $query = Order::where([
            'customer_id' => $this->id,
            'gym_id' =>$gymId
        ]);

        return $query->orderBy('created_at', 'ASC')->first();
    }
}

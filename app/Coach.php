<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coach extends Model
{
    protected $table = 'coaches';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'gym_id', 'user_id', 'created_by'
    ];

    protected $hidden = [
        'created_at', 'updated_at', 'created_by'
    ];

    protected $appends = ['is_gym_manager'];

    /**
     * Get the gym with the coach.
     */
    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    /**
     * Get the phone record associated with the user.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function getIsGymManagerAttribute()
    {
        $user = User::find($this->user_id);
        return $user->hasRole('gym manager');
    }

    public function setIsGymManagerAttribute($value)
    {
        $user = User::find($this->user_id);
        if ($value) {
            return $user->assignRole('gym manager');
        } else {
            return $user->removeRole('gym manager');
        }

    }

}

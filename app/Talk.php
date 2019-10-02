<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Talk extends Model
{

    public function from()
    {
        return $this->belongsTo('App\User');
    }

    public function to()
    {
        return $this->belongsTo('App\User');
    }

    public function gym()
    {
        return $this->belongsTo('App\Gym');
    }

    function toTimelineCard() {
        return [
            'type' => 'body-only',
            'body' => $this->message,
            'date' => $this->created_at->format('Y-m-d H:i'),
            'id' => $this->id,
            'gym' => $this->gym_id,
            'user_id' => $this->from->id,
            'avatar' => $this->from()->avatar ?? 'https://i.pravatar.cc/80'
        ];
    }
}

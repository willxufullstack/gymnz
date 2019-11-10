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
            'from' => $this->from,
            'avatar' => $this->from->avatar ?? 'http://static.o2-fit.com/image/logo.png?imageView2/1/w/80/h/80/format/jpg'
        ];
    }
}

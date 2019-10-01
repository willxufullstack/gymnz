<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Schedule extends Model
{
    protected $table = 'schedules';


    protected $fillable = ['detail'];

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
            'date' => $this->date,
            'id' => $this->id,
            'gym' => $this->gym_id,
            'user_id' => $this->coach->user->id,
            'avatar' => $this->coach->avatar ?? 'https://i.pravatar.cc/80'
        ];
    }
    public function toConclusionCard()
    {
        return [
            'type' => 'body-only',
            'body' => $this->conclusion,
            'date' => $this->date,
            'id' => $this->id,
            'gym' => $this->gym_id,
            'status' => $this->status,
            'user_id' => $this->coach->user->id,
            'avatar' => $this->coach->avatar ?? 'https://i.pravatar.cc/80'
        ];
    }
}

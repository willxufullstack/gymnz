<?php

namespace App\Policies;

use App\User;
use App\Gym;

class GymPolicy
{
    public function view(User $user, Gym $gym): bool
    {
        // super admin
        if ($user->id === 1) {
            return true;
        }
        // gym manager of this gym
        if ($user->coach && $user->coach->gym_id === $gym->id && $user->hasRole('gym manager')) {
            return true;
        }
        // creator of gym
        return $gym->created_by === $user->id;
    }
}

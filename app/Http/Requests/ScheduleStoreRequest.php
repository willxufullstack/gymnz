<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScheduleStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        // TODO: integrate with policies to check if the user can create schedules in the given gym
        return true;
    }

    public function rules(): array
    {
        $trial = $this->has('trial');

        $base = [
            'coach' => 'required|integer|exists:coaches,id',
            'gym' => 'required|integer|exists:gyms,id',
            'date' => 'required|date_format:Y-m-d',
            'start' => 'required|integer|min:0|max:95',
            // end is only used for trial courses; for normal schedules end is derived from order len
            'end' => 'nullable|integer|min:0|max:95|gte:start',
        ];

        if ($trial) {
            $trialSpecific = [
                'customer' => 'required|string|max:50',
                'trial' => 'present',
            ];
            // for trial, end must be provided explicitly
            $base['end'] = 'required|integer|min:0|max:95|gte:start';
            return array_merge($base, $trialSpecific);
        }

        $normalSpecific = [
            'customer' => 'required|integer|exists:users,id',
        ];
        return array_merge($base, $normalSpecific);
    }
}

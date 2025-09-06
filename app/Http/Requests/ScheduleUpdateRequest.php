<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ScheduleUpdateRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'conclusion' => 'sometimes|string|nullable|max:2000',
            'detail' => 'sometimes|string|nullable',
            'order_id' => 'sometimes|integer|nullable|exists:orders,id',
            'coach_id' => 'sometimes|integer|exists:coaches,id',
            'reaction' => 'sometimes|integer|in:1,2,3,4,5',
        ];
    }
}

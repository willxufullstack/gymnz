<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderStoreRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name' => 'required|string|max:50',
            'phone' => 'required|string|max:30',
            'sex' => 'required',
            'price' => 'required|numeric|min:0',
            'amount' => 'required|integer|min:1',
            'duration' => 'required|integer|min:1|max:36',
            'len' => 'nullable|integer|min:1|max:16',
            'images' => 'nullable|array',
            'images.*' => 'string',
            'source' => 'nullable|string|max:50',
            'coach' => 'required|integer|exists:coaches,id',
            'gym' => 'required|integer|exists:gyms,id',
            'birthday' => 'nullable|date_format:Y-m-d'
        ];
    }
}

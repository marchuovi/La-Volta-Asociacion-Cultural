<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\User;
use Illuminate\Support\Facades\Auth;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'status' => 'paid' || 'unpaid',
            'total_price' => fake()->numberBetween(5, 50),
            'session_id' => fake()->uuid(),
            'user_id' => User::all()->random()->first()->id
        ];
    }
}

<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Donation>
 */
class DonationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        
            'name' => $name = fake()->word(),
            'interval' => 'month',
            'price' => fake()->numberBetween(5, 50),
            'lookup_key' => $name, 
            'st_donation_id' => fake()->uuid()
        ];
    }
}

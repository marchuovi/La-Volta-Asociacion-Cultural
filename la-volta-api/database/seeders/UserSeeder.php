<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*User::factory()->count(2)->create();*/
        User::create([
            'name' => 'Juliana',
            'lastname' => 'Montaño',
            'email' => 'zjulim89@gmail.com',
            'password' => bcrypt('12345678')
            ])->assignRole('Admin');

        User::create([
            'name' => 'Amelie',
            'lastname' => 'LT',
            'email' => 'amelie_letron@yahoo.fr',
            'password' => bcrypt('holiholi')
        ]);
    
        User::factory()->create();

        
    }
    
}

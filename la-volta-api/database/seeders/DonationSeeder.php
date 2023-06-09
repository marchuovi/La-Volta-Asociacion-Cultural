<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Donation;

class DonationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Donation::create([
            'name' => '5punctual',
            'price' => '5',
            'lookup_key' => '5punctual', 
            'st_donation_id' => 'price_1MqDGTEhbIltMipCvHZgbWu3'
            
        ]);

        Donation::create([
            'name' => '5month',
            'interval' => 'month',
            'price' => '5',
            'lookup_key' => '5month', 
            'st_donation_id' => 'price_1MpwYdEhbIltMipCupmdzBuw'
            
        ]);

        Donation::create([
            'name' => '5year',
            'interval' => 'year',
            'price' => '5',
            'lookup_key' => '5year', 
            'st_donation_id' => 'price_1MpwZCEhbIltMipCCowX4vmo'
            
        ]);

        Donation::create([
            'name' => '10punctual',
            'price' => '10',
            'lookup_key' => '10punctual', 
            'st_donation_id' => 'price_1MqYVtEhbIltMipCUarjxVDM'
            
        ]);

        Donation::create([
            'name' => '10month',
            'interval' => 'month',
            'price' => '10',
            'lookup_key' => '10month', 
            'st_donation_id' => 'price_1MqYX5EhbIltMipCYVVkHHSa'
            
        ]);

        Donation::create([
            'name' => '10year',
            'interval' => 'year',
            'price' => '10',
            'lookup_key' => '10year', 
            'st_donation_id' => 'price_1MqYXgEhbIltMipC80aL4Ev2'
            
        ]);

        Donation::create([
            'name' => '15punctual',
            'price' => '15',
            'lookup_key' => '15punctual', 
            'st_donation_id' => 'price_1MqYZBEhbIltMipCD5uNTd9B'
            
        ]);

        Donation::create([
            'name' => '15month',
            'interval' => 'month',
            'price' => '15',
            'lookup_key' => '15month', 
            'st_donation_id' => 'price_1MqYedEhbIltMipC2VyLEbzH'
            
        ]);

        Donation::create([
            'name' => '15year',
            'interval' => 'year',
            'price' => '15',
            'lookup_key' => '15year', 
            'st_donation_id' => 'price_1MqYe5EhbIltMipCCjtmNam9'
            
        ]);
        Donation::create([
            'name' => '25punctual',
            'price' => '25',
            'lookup_key' => '25punctual', 
            'st_donation_id' => 'price_1MqYfZEhbIltMipCg2fL1Hro'
            
        ]);

        Donation::create([
            'name' => '25month',
            'interval' => 'month',
            'price' => '25',
            'lookup_key' => '25month', 
            'st_donation_id' => 'price_1MqYgMEhbIltMipCAKMePXtF'
            
        ]);

        Donation::create([
            'name' => '25year',
            'interval' => 'year',
            'price' => '25',
            'lookup_key' => '25year', 
            'st_donation_id' => 'price_1MqYh6EhbIltMipCLLwAa3dN'
            
        ]);
    }
}

<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Donation;
use App\Models\Payment;
use Laravel\Sanctum\Sanctum;
use App\Models\User;
use Illuminate\Testing\Fluent\AssertableJson;



class PaymentTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_CheckIfAPaymentUrlAreListedInJsonFile()
    {
    
       Sanctum::actingAs(
        User::factory()->create([
        'name' => 'Bianca',
        'lastname' => 'Giudici',
        'email' => 'b.giudici@gmail.com',
        'password' => '01234567'
        ])
    );

        Donation::factory()->create([
            'name' => '5month',
            'interval' => 'month',
            'price' => '5',
            'lookup_key' => '5month', 
            'st_donation_id' => 'price_1MpwYdEhbIltMipCupmdzBuw'
            
        ]
        );
        $response = $this->get('/api/donations');

        $response->assertStatus(200);
            

        $response = $this->post('/api/checkout/1');

        $response->assertStatus(200)
                 ->assertJson(fn (AssertableJson $json) =>
                 $json->whereType('url', 'string'));
    }

   

}

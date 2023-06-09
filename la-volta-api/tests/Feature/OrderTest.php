<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\Order;
use Illuminate\Testing\Fluent\AssertableJson;
use App\Models\User;
use App\Models\Donation;


class OrderTest extends TestCase
{
    use RefreshDatabase;
    

    public function test_CheckIfOrdersAreCreatedAndListedInJsonFile()
    {
      

        Sanctum::actingAs(
            User::factory()->create([
            'name' => 'Bianca',
            'lastname' => 'Giudici',
            'email' => 'b.giudici@gmail.com',
            'password' => '01234567',
            
            ])
        );

        $this->withoutMiddleware();

    
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
    
            $response->assertStatus(200);
                 

       Order::factory(5)->create();
        $response = $this->get('/api/orders');

        $response->assertStatus(200)
                ->assertJsonCount(6);
    }


    public function test_CheckIfOrderCanBeDeleted(){
    
        Sanctum::actingAs(
            User::factory()->create([
            'name' => 'Bianca',
            'lastname' => 'Giudici',
            'email' => 'b.giudici@gmail.com',
            'password' => '01234567',
            
            ])
        );

        $this->withoutMiddleware();

    
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
    
            $response->assertStatus(200);
                 

       
        $response = $this->delete('/api/order/destroy/1');

        $response->assertStatus(200);

        $this->assertCount(0, Order::all());

    }
    
   
}

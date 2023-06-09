<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\Donation;

class DonationTest extends TestCase
{
    use RefreshDatabase;

    public function test_CheckIfDonationsAreListedInJsonFile()
    {
        $this->withoutMiddleware();
        
        Donation::factory(2)->create();
        $response = $this->get('/api/donations');

        $response->assertStatus(200)
                ->assertJsonCount(2);
    }

    public function test_ADonationCanBeCreated ()
    {
        $this->withoutMiddleware();

        $response = $this->post('/api/donation' , [
            'name' => '5month',
            'interval' => 'month',
            'price' => '5',
            'lookup_key' => '5month', 
            'st_donation_id' => 'price_1MpwYdEhbIltMipCupmdzBuw'
        ]);

        $response->assertOk();
        $this->assertCount(1, Donation::all());

        $this->assertEquals(Donation::first()->name,'5month');
        $this->assertEquals(Donation::first()->price,'5');

    }
}

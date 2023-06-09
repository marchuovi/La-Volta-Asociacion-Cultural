<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use App\Models\User;
use Laravel\Sanctum\Sanctum;



class AuthTest extends TestCase
{
    use RefreshDatabase;

    public function test_UserCanRegister()
    {
        
        $response = $this->post('/api/register', 
            [
            'name' => 'Bianca',
            'lastname' => 'Giudici',
            'email' => 'b.giudici@gmail.com',
            'password' => '01234567'
            ]);

        $response->assertStatus(200);
        $this->assertCount(1, User::all());
    }

    public function test_UserCanLogin()
    {

        $user = User::factory()->create(
            [
                'name' => 'Bianca',
                'lastname' => 'Giudici',
                'email' => 'b.giudici@gmail.com',
                'password' => '01234567'
        ]
    );

        $response = $this->post('/api/login',[
            'email' => 'b.giudici@gmail.com',
            'password' => '01234567',
        ]);

            $response->assertStatus(200);

    }

    public function test_UserCanLogout()
    {
        
        Sanctum::actingAs(
            User::factory()->create([
            'name' => 'Bianca',
            'lastname' => 'Giudici',
            'email' => 'b.giudici@gmail.com',
            'password' => '01234567'
            ])
        );

        $response = $this->post('/api/logout');
        $response->assertStatus(200)
                 ->assertJson([
                    'status'=>200,
                    'message'=>'Logged Out Successfully'
                 ]);
    }
}

<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;
use Laravel\Sanctum\Sanctum;
use App\Models\User;
use Illuminate\Testing\Fluent\AssertableJson;


class UserTest extends TestCase
{
    use RefreshDatabase;
    
    public function test_the_application_returns_a_successful_response(): void
    {
        $this->withoutExceptionHandling();

        Sanctum::actingAs(
            User::factory()->create([
            'name' => 'Bianca',
            'lastname' => 'Giudici',
            'email' => 'b.giudici@gmail.com',
            'password' => '01234567', // password
            ])
        );
     
        $response = $this->get('/');
     
        $response->assertOk();

        $this->assertCount(1, User::all());

    }

    public function test_CheckIfUsersAreListedInJsonFile()
    {
        $this->withoutMiddleware();

        User::factory(2)->create();
        $response = $this->get('/api/users');

        $response->assertStatus(200)
                ->assertJsonCount(2);
    }

    public function test_CheckWhatTypeDataUserAreListedInJsonFile()
    {
        $this->withoutMiddleware();
        $this->withoutExceptionHandling();

        User::factory(5)->create();
        $response = $this->get('/api/user/2');

        $response->assertStatus(200)
                ->assertJsonCount(13)
                ->assertJson(fn (AssertableJson $json) =>
                 $json->whereType('id', 'integer')
                      ->whereType('name', 'string')
                      ->whereType('lastname', 'string')
                      ->whereType('email', 'string')
                      ->whereType('email_verified_at', 'string')
                      ->whereType('donation_id', 'null')
                      ->whereType('created_at', 'string')
                      ->whereType('updated_at', 'string')
                      ->whereType('stripe_id', 'null')
                      ->whereType('pm_type', 'null')
                      ->whereType('pm_last_four', 'null')
                      ->whereType('trial_ends_at', 'null')
                      ->whereType('role', 'integer'));
    }

    public function test_AUserCanBeCreated ()
    {
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        $response = $this->post('/api/user' , [
            'name' => 'Amelie',
            'lastname' => 'LT',
            'email' => 'amelie_letron@yahoo.fr',
            'password' => bcrypt('holiholi')
        ]);

        $response->assertOk();
        $this->assertCount(1, User::all());

        $this->assertEquals(User::first()->name,'Amelie');
        $this->assertEquals(User::first()->email, 'amelie_letron@yahoo.fr');

    }

    public function test_CheckIfUserCanBeDeleted(){
    
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        User::factory(1)->create([
            'id'=> 1
        ]);

        $response = $this->get('/api/users');
        
        $this->assertCount(1, User::all());
        
        $response = $this->delete('/api/user/1');
        $response->assertOk();
        
        $this->assertCount(0, User::all());

    }
    
    public function test_CheckIfUserCanBeUpdated(){
        $this->withoutExceptionHandling();
        $this->withoutMiddleware();

        User::factory(1)->create([
            'id'=> 1,
            'name' => 'Bianca'
        ]);

        $response = $this->get('/api/users');
      
        $this->assertCount(1, User::all());

        $response = $this->put('/api/user/1', [
            'name' => 'Juliana',
            'lastname' => 'Montaño',
            'email' => 'zjulim89@gmail.com',
            'password' => bcrypt('12345678')
        ]);
        
        $this->assertEquals(User::first()->name,'Juliana');

    }
  
}

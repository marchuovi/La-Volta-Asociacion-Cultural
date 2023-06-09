<?php

namespace App\Http\Controllers;

use App\Models\Donation;
use Illuminate\Http\Request;

class DonationController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
        $donation = Donation::all();
        return response()->json([
            'status' => true,
            'data' => $donation,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
       \Stripe\Stripe::setApiKey(env('STRIPE_SECRET'));

       $donation = \Stripe\Price::create([
        'unit_amount' => $request->price * 100,
        'currency' => 'eur',
        'recurring' => [
            'interval' => $request->interval,
            //'trial_period_days' => $request->trial_period_days,
        ],
        'lookup_key' => str()->snake($request->name),
        'transfer_lookup_key' => true,
        'product_data' => [
            'name' => $request->name,
        ],
    ]);

    $newDonation = new Donation();
    if ($donation && $donation->active === true) {
        $newDonation->st_donation_id = $donation->id;
        $newDonation->name = $request->name;
        $newDonation->price = $request->price;
        $newDonation->interval = $request->interval;
        $newDonation->lookup_key = str()->snake($request->name);
        $newDonation->save();
    }

    return response()->json([
        'status' => true,
        'data' => $newDonation,
    ]);

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Donation $donation)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Donation $donation)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Donation $donation)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Donation $donation)
    {
        //
    }
}

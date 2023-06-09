<?php

namespace App\Http\Controllers;

use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $orders = Order::all();
        return $orders;
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
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
    public function showByUserAdmin(string $user_id)
    {
        $orderByUser = Order::where('user_id', $user_id)->get();
        return $orderByUser;
    }

    public function showByUser(string $user_id)
    {   
        $orderByUser = Order::where('user_id', $user_id)->get();
        return $orderByUser;
    }

    public function showByPayments()
    {
        $orderByPayment = Order::where('payment_id','!=',NULL)->get();
        return $orderByPayment;
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Order $order)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Order $order)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $orders = Order::destroy($id);
        return $orders;
    }
}

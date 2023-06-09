<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'interval',
        //'trial_period_days',
        'lookup_key',
        'st_plan_id',
        
    ];

}

<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        return response()->json([
            'message' => 'API REGISTER OK',
            'payload' => $request->all()
        ]);
    }
}

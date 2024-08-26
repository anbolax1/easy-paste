<?php
namespace App\Services;

use Illuminate\Support\Facades\Auth;

class AuthService
{
    public function authenticateUser($credentials)
    {
        if (auth()->attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;

            return explode('|', $token)[1];
        }

        return null;
    }
}

<?php
namespace App\Services;

use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService
{
    public function authenticateUser($credentials)
    {
        try {
            if(!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['error' => 'Неверные логин и/или пароль!'], 401);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }

        return response()->json(compact('token'));
       /* if (auth()->attempt($credentials)) {
            $user = Auth::user();
            $token = $user->createToken('API Token')->plainTextToken;

            return explode('|', $token)[1];
        }

        return null;*/
    }
}

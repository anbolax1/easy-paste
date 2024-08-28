<?php
namespace App\CustomServices;

use Tymon\JWTAuth\Facades\JWTAuth;

class AuthService
{
    public function authenticateUser($credentials)
    {
        try {
            if(!$token = JWTAuth::attempt($credentials)) {
                throw new \Exception( 'Неверные логин и/или пароль!', 401);
//                return response()->json(['error' => 'Неверные логин и/или пароль!'], 401);
            }
            return $token;
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage(), $e->getCode());
        }
    }

    public function test()
    {
        return response()->json(['token' => '111111111111111111111111111111111111'], 401);
    }
}

<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\AuthService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    protected AuthService $authService;

    public function __construct(AuthService $authService)
    {
        $this->authService = $authService;
    }

    public function register(Request $request)
    {
        try {
            $validator = Validator::make(
                $request->all(),[
                    'login' => 'required|string|max:255|unique:users',
                    'email' => 'nullable|string|email|max:255|unique:users',
                    'password' => 'required|string|min:3',
                ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            User::create([
                'login' => $request->login,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            $credentials = $request->only('login', 'password');

            $token = $this->authService->authenticateUser($credentials);
            if ($token) {
                return response()->json(['token' => $token]);
            }
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], $e->getCode());
        }
    }

    public function login(Request $request)
    {
        try {
            $validator = Validator::make($request->all(), [
                'login' => 'required|string',
                'password' => 'required|string',
            ]);

            if ($validator->fails()) {
                return response()->json($validator->errors(), 422);
            }

            $credentials = $request->only('login', 'password');

            $token = $this->authService->authenticateUser($credentials);
            $cookies = [
                cookie('token', $token, 60, '/', null, null, true),
                cookie('login', $request->login, 60, '/', null, null, true),
            ];
            if ($token) {
                return response()->json(['token' => $token]);
            }

            throw new \Exception( 'Unauthorized', 401);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], $e->getCode());
        }
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        if(auth()->check()) {
            auth()->user()->tokens()->delete();
        }
        /*if(!$user) {
            return response()->json(['message' => 'Пользователь не найден'], 401);
        }*/

//        $user->tokens()->delete();

        return response()->json(['message' => 'Токен удалён']);
    }

    public function test(Request $request) {
        return response()->json(['message' => 'Токен удалён']);
    }
}

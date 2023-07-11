<?php

namespace App\Http\Controllers;

use http\Env\Request;
use http\Env\Response;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
    /*public function admin_register(Request $request)*/
    public function admin_login(Request $request)
    {
        $credentials = $request->validate([
            'email' => 'required|email|string|exists:users,email',
            'password' => [
                'required',
            ],
            'remember' => 'boolean'
        ]);
        $remember = $credentials['remember']?? false;
        unset($credentials['remember']);

        if(!Auth::attempt($credentials, $remember)){
            return response([
                'error' => 'The Provided Credentials are not correct'
            ], 422);
        }
        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response([
            'user' => $user,
            'token' => $token
        ]);
    }
}

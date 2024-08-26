<?php

namespace App\Http\Controllers;

use App\Models\Paste;
use Illuminate\Http\Request;

class PasteController extends Controller
{
    public function createPaste(Request $request)
    {
        // Проверка аутентификации
        /*if (!auth()->check()) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }*/

        $request->validate([
           'title' => 'required|string|max:255',
           'paste_content' => 'required|string',
           'visibility' => 'required|in:public,unlisted,private',
           'expires_at' => 'nullable|in:' . implode(',', Paste::EXPIRATION_OPTIONS),
           'language' => 'nullable|string|max:50',
        ]);

        $paste = Paste::create([
            'title' => $request->title,
            'paste_content' => $request->paste_content,
            'user_id' => auth()->id(),
            'visibility' => $request->visibility,
            'expires_at' => Paste::getExpirationTime($request->expires_at),
            'language' => $request->language,
        ]);

        return response()->json(['link' => url($paste->hash)]);
    }

    public function getPaste($hash)
    {
        $paste = Paste::where('hash', $hash)->first();

        if(!$paste) {
            return response()->json(['message' => 'Паста не найдена'], 404);
        }

        if($paste->isExpired() || ($paste->visibility === Paste::VISIBILITY_PRIVATE && $paste->user_id !== \auth()->id())) {
            return response()->json(['message' => 'Паста скрыта настройками приватности или недействительна'], 404);
        }

        return response()->json($paste);
    }

    public function getPastes()
    {
        // Проверяем, авторизован ли пользователь
        if (auth()->check()) {
            // Если авторизован, получаем 10 последних записей пользователя
            $pastes = Paste::where('user_id', auth()->id())->latest()->take(10)->get();
        } else {
            // Если не авторизован, получаем 10 последних записей
            $pastes = Paste::latest()->take(10)->get();
        }

        return response()->json($pastes);
    }
}

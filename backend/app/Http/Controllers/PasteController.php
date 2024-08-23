<?php

namespace App\Http\Controllers;

use App\Models\Paste;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class PasteController extends Controller
{
    public function create(Request $request)
    {
        $request->validate([
           'title' => 'required|string|max:255',
           'paste_content' => 'required|string',
           'visibility' => 'required|in:public,unlisted,private',
           'expires_at' => 'nullable|date',
           'language' => 'nullable|string|max:50',
        ]);

        $paste = Paste::create([
            'title' => $request->title,
            'paste_content' => $request->paste_content,
            'user_id' => Auth::id(),
            'visibility' => $request->visibility,
            'expires_at' => $request->expires_at,
            'language' => $request->language,
        ]);

        return response()->json(['link' => url($paste->hash)]);
    }

    public function get()
    {
        return response()->json(['result' => 'success']);
    }

    public function pastes()
    {
        return '123';
    }
}

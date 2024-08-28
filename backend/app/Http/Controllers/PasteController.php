<?php

namespace App\Http\Controllers;

use App\Models\Paste;
use Illuminate\Contracts\Database\Query\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PasteController extends Controller
{
    public function createPaste(Request $request)
    {
        try {
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

            return response()->json(['hash' => $paste->hash]);
        }
        catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
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

    public function getPastes(Request $request)
    {
        $privateMode = $request->privateMode;

        $pastes = [];
        if(!$privateMode && !auth()->check()){
            return response()->json($pastes);
        }

        $pastes = DB::table('pastes')
            ->where(function ($query) {
                $query->where('expires_at', '>', now())
                    ->orWhereNull('expires_at');
            })
            ->where(function($query) use ($privateMode) {
                if ($privateMode == Paste::VISIBILITY_PUBLIC) {
                    $query->where('visibility', Paste::VISIBILITY_PUBLIC);
                } else if (auth()->check()) {
                    $query->where('user_id', auth()->id());
                    $query->whereIn('visibility', [Paste::VISIBILITY_PUBLIC, Paste::VISIBILITY_PRIVATE]);
                }
            })
            ->latest()
            ->take(10)
            ->get();

        return response()->json($pastes);
    }
}

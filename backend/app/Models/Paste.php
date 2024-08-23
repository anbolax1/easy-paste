<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Paste extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'pastes';

    protected $fillable = ['title', 'paste_content', 'user_id', 'visibility', 'expires_at', 'language', 'hash'];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($paste) {
            $paste->hash = Str::random(8);
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function isExpired()
    {
        return $this->expires_at && $this->expires_at < now();
    }
}

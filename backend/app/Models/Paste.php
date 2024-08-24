<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Str;

class Paste extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'pastes';

    protected $fillable = ['title', 'paste_content', 'user_id', 'visibility', 'expires_at', 'language', 'hash'];

    const EXPIRATION_10_MINUTES = '10m';
    const EXPIRATION_1_HOUR = '1h';
    const EXPIRATION_3_HOURS = '3h';
    const EXPIRATION_1_DAY = '1d';
    const EXPIRATION_1_WEEK = '1w';
    const EXPIRATION_1_MONTH = '1m';
    const EXPIRATION_UNLIMITED = 'без ограничения';

    const EXPIRATION_OPTIONS = [
        self::EXPIRATION_10_MINUTES => '10m',
        self::EXPIRATION_1_HOUR => '1h',
        self::EXPIRATION_3_HOURS => '3h',
        self::EXPIRATION_1_DAY => '1d',
        self::EXPIRATION_1_WEEK => '1w',
        self::EXPIRATION_1_MONTH => '1m',
        self::EXPIRATION_UNLIMITED => 'unlimited',
    ];

    const VISIBILITY_PUBLIC = 'public';
    const VISIBILITY_UNLISTED = 'unlisted';
    const VISIBILITY_PRIVATE = 'private';

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
        return $this->expires_at && \Carbon\Carbon::parse($this->expires_at)->isPast();
    }

    public static function getExpirationTime(string $expiration): ?Carbon
    {
        return match ($expiration) {
            self::EXPIRATION_10_MINUTES => now()->addMinutes(10),
            self::EXPIRATION_1_HOUR => now()->addHours(1),
            self::EXPIRATION_3_HOURS => now()->addHours(3),
            self::EXPIRATION_1_DAY => now()->addDay(),
            self::EXPIRATION_1_WEEK => now()->addWeek(),
            self::EXPIRATION_1_MONTH => now()->addMonth(),
            default => null,
        };
    }
}

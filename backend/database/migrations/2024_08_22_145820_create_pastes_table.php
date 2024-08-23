<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('pastes', function (Blueprint $table) {
            $table->id();
            $table->string('title')->comment('Заголовок пасты');
            $table->text('paste_content')->comment('Содержимое пасты');
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('cascade')->comment('Внешний ключ для связи с таблицей пользователей');
            $table->string('visibility')->comment('Видимость: public, unlisted, private');
            $table->timestamp('expires_at')->nullable()->comment('Срок действия пасты');
            $table->string('language')->nullable()->comment('Язые программирования');
            $table->string('hash')->unique()->comment('Хэш');
            $table->timestamps();

            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pastes');
    }
};

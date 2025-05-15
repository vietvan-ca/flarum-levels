<?php

use Flarum\Database\Migration;
use Illuminate\Database\Schema\Blueprint;

return Migration::createTable('levels', function (Blueprint $table) {
    $table->increments('id');
    $table->string('name', 100);
    $table->text('description')->nullable();
    $table->integer('xp_required')->unsigned();
    $table->integer('order')->unsigned();
    $table->string('color', 20)->nullable();
    $table->string('icon', 100)->nullable();
    $table->boolean('is_special')->default(false);
    $table->timestamps();
});
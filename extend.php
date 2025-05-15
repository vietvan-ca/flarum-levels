<?php

namespace VietVan\FlarumLevels;

use Flarum\Extend;
use VietVan\FlarumLevels\Api\Controller;
use VietVan\FlarumLevels\Api\Serializer\LevelSerializer;
use VietVan\FlarumLevels\Console\RecalculateXpCommand;
use VietVan\FlarumLevels\Listeners\UserXpListener;

return [
    // Add API endpoints
    (new Extend\Routes('api'))
        ->get('/levels', 'levels.index', Controller\ListLevelsController::class)
        ->post('/levels', 'levels.create', Controller\CreateLevelController::class)
        ->patch('/levels/{id}', 'levels.update', Controller\UpdateLevelController::class)
        ->delete('/levels/{id}', 'levels.delete', Controller\DeleteLevelController::class)
        ->patch('/users/{id}/level', 'users.level.update', Controller\UpdateUserLevelController::class)
        ->post('/users/{id}/xp', 'users.xp.add', Controller\AddUserXpController::class),

    // Register serializers
    (new Extend\ApiSerializer(\Flarum\Api\Serializer\UserSerializer::class))
        ->attributes(Listeners\AddUserAttributes::class),

    // Register models
    new Extend\Model(\Flarum\User\User::class),

    // Register console commands
    (new Extend\Console())
        ->command(RecalculateXpCommand::class),

    // Register event listeners
    (new Extend\Event())
        ->listen(\Flarum\Post\Event\Posted::class, UserXpListener::class),

    // Register the admin interface
    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js')
        ->css(__DIR__ . '/less/admin.less'),

    // Register the forum interface
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/less/forum.less'),

    // Localization
    new Extend\Locales(__DIR__ . '/locale'),

    // Make sure you have this in your extend.php
    (new Extend\Settings())
        ->serializeToForum('xpPerPost', 'vietvan-ca-flarum-levels.xp_per_post')
        ->serializeToForum('xpPerDiscussion', 'vietvan-ca-flarum-levels.xp_per_discussion'),
];
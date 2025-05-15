<?php

namespace VietVan\FlarumLevels\Api\Controller;

use Flarum\Api\Controller\AbstractCreateController;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use VietVan\FlarumLevels\Api\Serializer\LevelSerializer;
use VietVan\FlarumLevels\Level;

class CreateLevelController extends AbstractCreateController
{
    public $serializer = LevelSerializer::class;
    
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        
        // Ensure the user has permission to create levels
        $actor->assertAdmin();
        
        $data = Arr::get($request->getParsedBody(), 'data.attributes', []);
        
        $level = new Level();
        $level->name = Arr::get($data, 'name');
        $level->description = Arr::get($data, 'description');
        $level->xp_required = (int) Arr::get($data, 'xp_required', 0);
        $level->order = (int) Arr::get($data, 'order', 0);
        $level->color = Arr::get($data, 'color');
        $level->icon = Arr::get($data, 'icon');
        $level->is_special = (bool) Arr::get($data, 'is_special', false);
        
        $level->save();
        
        return $level;
    }
}
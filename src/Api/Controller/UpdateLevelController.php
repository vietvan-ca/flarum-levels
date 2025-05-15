<?php

namespace VietVan\FlarumLevels\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use VietVan\FlarumLevels\Api\Serializer\LevelSerializer;
use VietVan\FlarumLevels\Level;

class UpdateLevelController extends AbstractShowController
{
    public $serializer = LevelSerializer::class;
    
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        
        // Ensure the user has permission to update levels
        $actor->assertAdmin();
        
        $id = Arr::get($request->getQueryParams(), 'id');
        $data = Arr::get($request->getParsedBody(), 'data.attributes', []);
        
        $level = Level::findOrFail($id);
        
        if (Arr::has($data, 'name')) {
            $level->name = Arr::get($data, 'name');
        }
        
        if (Arr::has($data, 'description')) {
            $level->description = Arr::get($data, 'description');
        }
        
        if (Arr::has($data, 'xp_required')) {
            $level->xp_required = (int) Arr::get($data, 'xp_required');
        }
        
        if (Arr::has($data, 'order')) {
            $level->order = (int) Arr::get($data, 'order');
        }
        
        if (Arr::has($data, 'color')) {
            $level->color = Arr::get($data, 'color');
        }
        
        if (Arr::has($data, 'icon')) {
            $level->icon = Arr::get($data, 'icon');
        }
        
        if (Arr::has($data, 'is_special')) {
            $level->is_special = (bool) Arr::get($data, 'is_special');
        }
        
        $level->save();
        
        return $level;
    }
}
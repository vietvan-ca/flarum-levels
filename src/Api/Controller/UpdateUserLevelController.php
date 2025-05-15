<?php

namespace VietVan\FlarumLevels\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use VietVan\FlarumLevels\Level;

class UpdateUserLevelController extends AbstractShowController
{
    public $serializer = \Flarum\Api\Serializer\UserSerializer::class;
    
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        
        // Ensure the user has permission to update user levels
        $actor->assertAdmin();
        
        $id = Arr::get($request->getQueryParams(), 'id');
        $data = Arr::get($request->getParsedBody(), 'data.attributes', []);
        
        $user = User::findOrFail($id);
        
        if (Arr::has($data, 'level_id')) {
            $levelId = Arr::get($data, 'level_id');
            
            if ($levelId) {
                // Ensure the level exists
                $level = Level::findOrFail($levelId);
                $user->level_id = $level->id;
            } else {
                $user->level_id = null;
            }
        }
        
        if (Arr::has($data, 'is_manual_level')) {
            $user->is_manual_level = (bool) Arr::get($data, 'is_manual_level');
        }
        
        $user->save();
        
        return $user;
    }
}
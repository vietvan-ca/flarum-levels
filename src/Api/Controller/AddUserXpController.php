<?php

namespace VietVan\FlarumLevels\Api\Controller;

use Flarum\Api\Controller\AbstractShowController;
use Flarum\User\Exception\PermissionDeniedException;
use Flarum\User\User;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use VietVan\FlarumLevels\Level;

class AddUserXpController extends AbstractShowController
{
    public $serializer = \Flarum\Api\Serializer\UserSerializer::class;
    
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        
        // Ensure the user has permission to add XP
        $actor->assertAdmin();
        
        $id = Arr::get($request->getQueryParams(), 'id');
        $data = Arr::get($request->getParsedBody(), 'data.attributes', []);
        $user = User::findOrFail($id);
        
        // Don't process if the user has a manually assigned level
        if ($user->is_manual_level) {
            return $user;
        }
        
        $amount = (int) Arr::get($data, 'amount', 0);
        
        if ($amount != 0) {
            $user->xp += $amount;
            
            // Check if user should level up
            $appropriateLevel = Level::findLevelForXP($user->xp);
            
            if ($appropriateLevel && (!$user->level_id || $user->level_id != $appropriateLevel->id)) {
                $user->level_id = $appropriateLevel->id;
            }
            
            $user->save();
        }
        
        return $user;
    }
}
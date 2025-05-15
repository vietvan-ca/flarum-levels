<?php

namespace VietVan\FlarumLevels\Api\Controller;

use Flarum\Api\Controller\AbstractDeleteController;
use Flarum\User\Exception\PermissionDeniedException;
use Illuminate\Support\Arr;
use Psr\Http\Message\ServerRequestInterface;
use VietVan\FlarumLevels\Level;
use Flarum\User\User;

class DeleteLevelController extends AbstractDeleteController
{
    protected function delete(ServerRequestInterface $request)
    {
        $actor = $request->getAttribute('actor');
        
        // Ensure the user has permission to delete levels
        $actor->assertAdmin();
        
        $id = Arr::get($request->getQueryParams(), 'id');
        $level = Level::findOrFail($id);

        // Clear this level from any users who have it
        User::where('level_id', $level->id)->update(['level_id' => null]);
        
        $level->delete();
    }
}
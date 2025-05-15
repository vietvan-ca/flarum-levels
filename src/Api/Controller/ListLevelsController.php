<?php

namespace VietVan\FlarumLevels\Api\Controller;

use Flarum\Api\Controller\AbstractListController;
use Psr\Http\Message\ServerRequestInterface;
use Tobscure\JsonApi\Document;
use VietVan\FlarumLevels\Api\Serializer\LevelSerializer;
use VietVan\FlarumLevels\Level;

class ListLevelsController extends AbstractListController
{
    public $serializer = LevelSerializer::class;
    
    protected function data(ServerRequestInterface $request, Document $document)
    {
        $actor = $request->getAttribute('actor');
        
        // Ensure the user has permission to view levels
        $actor->assertAdmin();
        
        return Level::orderBy('order')->get();
    }
}
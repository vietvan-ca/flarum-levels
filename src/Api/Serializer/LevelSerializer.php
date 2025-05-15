<?php

namespace VietVan\FlarumLevels\Api\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use VietVan\FlarumLevels\Level;

class LevelSerializer extends AbstractSerializer
{
    protected $type = 'levels';

    protected function getDefaultAttributes($level)
    {
        return [
            'name' => $level->name,
            'description' => $level->description,
            'xp_required' => $level->xp_required,
            'order' => $level->order,
            'color' => $level->color,
            'icon' => $level->icon,
            'is_special' => (bool) $level->is_special
        ];
    }
}

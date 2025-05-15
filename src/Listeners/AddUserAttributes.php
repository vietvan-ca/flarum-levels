<?php

namespace VietVan\FlarumLevels\Listeners;

use Flarum\Api\Serializer\UserSerializer;
use VietVan\FlarumLevels\Level;

class AddUserAttributes
{
    public function __invoke(UserSerializer $serializer, $user, array $attributes)
    {
        $attributes['xp'] = $user->xp;
        $attributes['is_manual_level'] = (bool) $user->is_manual_level;
        
        if ($user->level_id) {
            $level = Level::find($user->level_id);
            if ($level) {
                $attributes['level'] = [
                    'id' => $level->id,
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
        
        return $attributes;
    }
}
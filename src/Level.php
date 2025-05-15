<?php

namespace VietVan\FlarumLevels;

use Flarum\Database\AbstractModel;
use Flarum\User\User;

class Level extends AbstractModel
{
    protected $table = 'levels';

    protected $fillable = [
        'name', 
        'description',
        'xp_required', 
        'order', 
        'color', 
        'icon', 
        'is_special'
    ];

    /**
     * Get the users who have this level.
     */
    public function users()
    {
        return $this->hasMany(User::class, 'level_id');
    }
    
    /**
     * Find the appropriate level for a given XP amount
     */
    public static function findLevelForXP($xp)
    {
        return static::where('is_special', false)
            ->where('xp_required', '<=', $xp)
            ->orderBy('xp_required', 'desc')
            ->first();
    }
}
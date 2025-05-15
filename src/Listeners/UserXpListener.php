<?php

namespace VietVan\FlarumLevels\Listeners;

use Flarum\Post\Event\Posted;
use VietVan\FlarumLevels\Level;

class UserXpListener
{
    /**
     * Award XP when a user creates a post
     */
    public function handle(Posted $event)
    {
        $post = $event->post;
        $user = $post->user;
        
        // Skip if the post is not approved or if it's a private discussion
        if (!$post->isApproved() || $post->discussion->is_private) {
            return;
        }
        
        // Calculate XP to award - can be customized
        $xpToAward = 10;
        
        // Add XP to user
        $this->addXpToUser($user, $xpToAward);
    }
    
    /**
     * Add XP to a user and update their level if needed
     */
    protected function addXpToUser($user, $amount)
    {
        // Don't process if user has a manually assigned level
        if ($user->is_manual_level) {
            return;
        }
        
        // Add XP
        $user->xp += $amount;
        
        // Check if user should level up
        $appropriateLevel = Level::findLevelForXP($user->xp);
        
        if ($appropriateLevel && (!$user->level_id || $user->level_id != $appropriateLevel->id)) {
            $user->level_id = $appropriateLevel->id;
        }
        
        $user->save();
    }
}

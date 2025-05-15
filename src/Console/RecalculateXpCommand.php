<?php

namespace VietVan\FlarumLevels\Console;

use Flarum\Console\AbstractCommand;
use VietVan\FlarumLevels\Level;
use Flarum\User\User;

class RecalculateXpCommand extends AbstractCommand
{
    protected function configure()
    {
        $this
            ->setName('levels:recalculate')
            ->setDescription('Recalculate user levels based on XP');
    }

    protected function fire()
    {
        $this->output->writeln('<info>Recalculating user levels...</info>');
        
        $users = User::where('is_manual_level', false)->get();
        $count = 0;
        
        foreach ($users as $user) {
            $appropriateLevel = Level::findLevelForXP($user->xp);
            
            if ($appropriateLevel && (!$user->level_id || $user->level_id != $appropriateLevel->id)) {
                $user->level_id = $appropriateLevel->id;
                $user->save();
                $count++;
            }
        }
        
        $this->output->writeln("<info>Updated levels for {$count} users.</info>");
    }
}
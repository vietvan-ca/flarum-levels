<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'xp' => ['integer', 'unsigned' => true, 'default' => 0],
    'level_id' => ['integer', 'unsigned' => true, 'nullable' => true],
    'is_manual_level' => ['boolean', 'default' => false]
]);
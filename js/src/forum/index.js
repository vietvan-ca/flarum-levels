import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import UserLevelDisplay from './components/UserLevelDisplay';

app.initializers.add('vietvan-ca-flarum-levels', () => {
  // Add level attributes to User model
  User.prototype.xp = Model.attribute('xp');
  User.prototype.level = Model.attribute('level');
  User.prototype.isManualLevel = Model.attribute('is_manual_level');
  
  // Add level badge to user cards
  extend(UserCard.prototype, 'infoItems', function(items) {
    const user = this.attrs.user;
    const level = user.level();
    
    if (level && app.forum.attribute('canViewLevels')) {
      items.add('level', <UserLevelDisplay user={user} />, 10);
    }
  });
});
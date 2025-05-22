import app from 'flarum/forum/app';
import { extend } from 'flarum/common/extend';
import UserCard from 'flarum/forum/components/UserCard';
import PostUser from 'flarum/forum/components/PostUser';
import Model from 'flarum/common/Model';
import User from 'flarum/common/models/User';
import UserLevelDisplay from './components/UserLevelDisplay';
import icon from 'flarum/common/helpers/icon';

app.initializers.add('vietvan-ca-levels', () => {
  // Add level attributes to User model
  User.prototype.xp = Model.attribute('xp');
  User.prototype.level = Model.attribute('level');
  User.prototype.isManualLevel = Model.attribute('is_manual_level');
  
  // Add level badge to user cards
  extend(UserCard.prototype, 'infoItems', function(items) {
    const user = this.attrs.user;
    const level = user.level();
    
    if (level) {
      items.add('level', <UserLevelDisplay user={user} />, 10);
    }
  });
  
  // Add level to discussion posts (this is what you're missing)
  extend(PostUser.prototype, 'view', function(vdom) {
    // Find the user's level
    const user = this.attrs.post.user();
    if (!user || !user.level()) return;
    
    const level = user.level();
    
    // Create level badge element
    const levelBadge = (
      <span 
        className="PostUser-level" 
        style={level.color ? {backgroundColor: level.color} : {}}
        title={level.description || ''}
      >
        {level.icon && <span className="PostUser-level-icon">{icon(level.icon)}</span>}
        <span className="PostUser-level-name"> {level.name}</span>
      </span>
    );
    
    // If vdom is an array of elements
    if (Array.isArray(vdom.children)) {
      // Find where to insert the level badge (after username)
      // Usually after the first or second element depending on your theme
      if (vdom.children.length > 1) {
        // Insert after username
        vdom.children.splice(2, 0, levelBadge);
      } else {
        // Append at the end
        vdom.children.push(levelBadge);
      }
    }
  });
});
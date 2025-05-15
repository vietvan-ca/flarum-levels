import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import icon from 'flarum/common/helpers/icon';

export default class UserLevelDisplay extends Component {
  view() {
    const user = this.attrs.user;
    const level = user.level();
    
    if (!level) return null;
    
    const iconClass = level.icon || 'fas fa-star';
    const levelColor = level.color || '#0072ff';
    
    // Find the next level if not at max level
    const nextLevel = this.getNextLevel(user);
    const progress = this.calculateProgress(user, level, nextLevel);
    
    return (
      <div className="UserLevelDisplay">
        <div className="UserLevel-badge" style={{ backgroundColor: levelColor }}>
          {level.icon && icon(level.icon)}
          <span className="UserLevel-name">
            {app.translator.trans('vietvan-ca-flarum-levels.forum.user.level_badge', { name: level.name })}
          </span>
        </div>
        
        {nextLevel ? (
          <div className="UserLevel-progress">
            <div className="UserLevel-progressBar">
              <div className="UserLevel-progressValue" style={{ width: progress + '%' }}></div>
            </div>
            <div className="UserLevel-xp">
              {app.translator.trans('vietvan-ca-flarum-levels.forum.user.level_xp', {
                current: user.xp() - level.xp_required,
                next: nextLevel.xp_required - level.xp_required
              })}
            </div>
          </div>
        ) : (
          <div className="UserLevel-maxLevel">
            {app.translator.trans('vietvan-ca-flarum-levels.forum.user.level_max')}
          </div>
        )}
      </div>
    );
  }
  
  getNextLevel(user) {
    const currentLevelXP = user.level().xp_required;
    
    // Get all standard levels (not special)
    const levels = app.store.all('levels')
      .filter(l => !l.is_special)
      .sort((a, b) => a.xp_required - b.xp_required);
    
    // Find the next level after the current one
    const nextLevel = levels.find(l => l.xp_required > currentLevelXP);
    
    return nextLevel || null;
  }
  
  calculateProgress(user, currentLevel, nextLevel) {
    if (!nextLevel) return 100;
    
    const currentXP = user.xp();
    const levelStartXP = currentLevel.xp_required;
    const levelEndXP = nextLevel.xp_required;
    
    const progressXP = currentXP - levelStartXP;
    const totalXPNeeded = levelEndXP - levelStartXP;
    
    return Math.min(Math.floor((progressXP / totalXPNeeded) * 100), 100);
  }
}
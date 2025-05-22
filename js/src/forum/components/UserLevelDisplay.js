import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import icon from 'flarum/common/helpers/icon';

export default class UserLevelDisplay extends Component {
  view() {
    const user = this.attrs.user;
    const level = user.level();
    
    if (!level) return null;
    
    const levelColor = level.color || '#0072ff';
    
    return (
      <div className="UserLevelDisplay">
        <div className="UserLevel-badge" style={{ backgroundColor: levelColor }}>
          {level.icon && icon(level.icon)}
          <span className="UserLevel-name"> {app.translator.trans('vietvan-ca-flarum-levels.forum.user.level_badge', { name: level.name })}</span>
        </div>
      </div>
    );
  }
}
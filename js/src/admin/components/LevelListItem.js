import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';

export default class LevelListItem extends Component {
  view() {
    const level = this.attrs.level;
    
    return (
      <tr className="LevelListItem">
        <td className="LevelListItem-name">
          <span className="LevelName" style={level.attributes.color ? {color: level.attributes.color} : {}}>
            {level.attributes.name}
          </span>
        </td>
        <td className="LevelListItem-xp">
          {level.attributes.xp_required}
        </td>
        <td className="LevelListItem-color">
          <span className="LevelColorDot" style={{backgroundColor: level.attributes.color || '#aaaaaa'}}></span>
          {level.attributes.color || '—'}
        </td>
        <td className="LevelListItem-special">
          {level.attributes.is_special ? 
            <i className="fas fa-check" title={app.translator.trans('vietvan-ca-flarum-levels.admin.levels.special_level')}></i> : 
            '—'
          }
        </td>
        <td className="LevelListItem-order">
          {level.attributes.display_order}
        </td>
        <td className="LevelListItem-actions">
          <Button 
            className="Button Button--icon" 
            icon="fas fa-pencil-alt"
            onclick={() => this.attrs.onEdit(level)}
          />
          <Button 
            className="Button Button--icon" 
            icon="fas fa-trash"
            onclick={() => this.attrs.onDelete(level)}
          />
        </td>
      </tr>
    );
  }
}
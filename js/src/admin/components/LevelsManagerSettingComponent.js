import app from 'flarum/admin/app';
import Component from 'flarum/common/Component';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import LevelListItem from './LevelListItem';
import EditLevelModal from './EditLevelModal';

export default class LevelsManagerSettingComponent extends Component {
  oninit(vnode) {
    super.oninit(vnode);
    
    this.loading = true;
    this.levels = [];
    
    this.loadLevels();
  }
  
  loadLevels() {
    app.request({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + '/levels'
    }).then(result => {
      this.levels = result.data || [];
      this.loading = false;
      m.redraw();
    }).catch(e => {
      this.loading = false;
      m.redraw();
      console.error('Error loading levels:', e);
    });
  }
  
  view() {
    return (
      <div className="LevelsManagerSetting">
        <div className="LevelsManagerSetting-header">
          <p className="LevelsManagerSetting-helpText">
            {app.translator.trans('vietvan-ca-flarum-levels.admin.levels.help_text')}
          </p>
          <Button 
            className="Button Button--primary" 
            icon="fas fa-plus"
            onclick={() => this.addLevel()}
          >
            {app.translator.trans('vietvan-ca-flarum-levels.admin.levels.add')}
          </Button>
        </div>
        
        {this.loading ? (
          <LoadingIndicator />
        ) : (
          <div className="LevelList">
            {this.levels.length === 0 ? (
              <div className="LevelList-empty">
                {app.translator.trans('vietvan-ca-flarum-levels.admin.levels.empty')}
              </div>
            ) : (
              <table className="LevelTable">
                <thead>
                  <tr>
                    <th>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.name')}</th>
                    <th>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.xp_required')}</th>
                    <th>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.color')}</th>
                    <th>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.special')}</th>
                    <th>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.order')}</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {this.levels.map(level => (
                    <LevelListItem 
                      level={level} 
                      onEdit={this.editLevel.bind(this)} 
                      onDelete={this.deleteLevel.bind(this)}
                    />
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    );
  }
  
  // The addLevel, editLevel, and deleteLevel methods are the same as in LevelsPage
  addLevel() {
    app.modal.show(EditLevelModal, {
      onSaved: () => this.loadLevels()
    });
  }
  
  editLevel(level) {
    app.modal.show(EditLevelModal, {
      level,
      onSaved: () => this.loadLevels()
    });
  }
  
  deleteLevel(level) {
    if (confirm(app.translator.trans('vietvan-ca-flarum-levels.admin.levels.delete_confirmation'))) {
      app.request({
        method: 'DELETE',
        url: app.forum.attribute('apiUrl') + '/levels/' + level.id
      }).then(() => {
        this.loadLevels();
      }).catch(e => {
        console.error('Error deleting level:', e);
      });
    }
  }
}
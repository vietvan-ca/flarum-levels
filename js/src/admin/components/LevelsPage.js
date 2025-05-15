import app from 'flarum/admin/app';
import ExtensionPage from 'flarum/admin/components/ExtensionPage';
import Button from 'flarum/common/components/Button';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import LevelListItem from './LevelListItem';
import EditLevelModal from './EditLevelModal';

export default class LevelsPage extends ExtensionPage {
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
  
  content() {
    return (
      <div className="LevelsPage">
        <div className="LevelsPage-header">
          <div className="container">
            <h2>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.title')}</h2>
            <p className="LevelsPage-helpText">
              {app.translator.trans('vietvan-ca-flarum-levels.admin.levels.help_text')}
            </p>
          </div>
        </div>
        
        <div className="LevelsPage-body">
          <div className="container">
            {this.loading ? (
              <LoadingIndicator />
            ) : (
              <div className="LevelList">
                <div className="LevelList-header">
                  <Button 
                    className="Button Button--primary" 
                    icon="fas fa-plus"
                    onclick={() => this.addLevel()}
                  >
                    {app.translator.trans('vietvan-ca-flarum-levels.admin.levels.add')}
                  </Button>
                </div>
                
                <div className="LevelList-items">
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
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  
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
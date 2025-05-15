import app from 'flarum/admin/app';
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Switch from 'flarum/common/components/Switch';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';

export default class EditUserLevelModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
    
    this.user = this.attrs.user;
    this.loading = true;
    this.saving = false;
    this.levels = [];
    
    const userLevel = this.user.attribute('level');
    this.selectedLevelId = userLevel ? userLevel.id : '';
    this.isManualLevel = this.user.attribute('is_manual_level') || false;
    this.xpToAdd = 0;
    
    this.loadLevels();
  }
  
  loadLevels() {
    app.request({
      method: 'GET',
      url: app.forum.attribute('apiUrl') + '/levels'
    }).then(response => {
      this.levels = response.data.map(level => {
        return {
          id: level.id,
          ...level.attributes
        };
      });
      this.levels.sort((a, b) => a.order - b.order);
      this.loading = false;
      m.redraw();
    }).catch(error => {
      this.loading = false;
      m.redraw();
      throw error;
    });
  }
  
  className() {
    return 'EditUserLevelModal Modal--small';
  }
  
  title() {
    return app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.title', {
      username: this.user.username()
    });
  }
  
  content() {
    if (this.loading) {
      return (
        <div className="Modal-body">
          <LoadingIndicator />
        </div>
      );
    }
    
    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <label>
              {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.current_xp')}
            </label>
            <p className="helpText">
              {this.user.attribute('xp') || 0} XP
            </p>
          </div>
          
          <div className="Form-group">
            <label>
              {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.add_xp')}
            </label>
            <input
              className="FormControl"
              type="number"
              value={this.xpToAdd}
              onchange={e => {
                this.xpToAdd = parseInt(e.target.value) || 0;
              }}
              disabled={this.isManualLevel}
            />
          </div>
          
          <div className="Form-group">
            <Switch
              state={this.isManualLevel}
              onchange={value => {
                this.isManualLevel = value;
              }}
            >
              {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.manual_level')}
            </Switch>
            <p className="helpText">
              {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.manual_level_help')}
            </p>
          </div>
          
          <div className="Form-group">
            <label>
              {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.select_level')}
            </label>
            <select
              className="FormControl"
              value={this.selectedLevelId}
              onchange={e => {
                this.selectedLevelId = e.target.value;
              }}
              disabled={!this.isManualLevel}
            >
              <option value="">
                {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.no_level')}
              </option>
              {this.levels.map(level => (
                <option value={level.id} key={level.id}>
                  {level.name} ({level.xp_required} XP)
                </option>
              ))}
            </select>
          </div>
          
          {!this.isManualLevel && !this.selectedLevelId && (
            <div className="Form-group">
              <p className="helpText">
                {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.auto_level_help')}
              </p>
            </div>
          )}
          
          <div className="Form-group">
            <Button
              className="Button Button--primary"
              type="submit"
              loading={this.saving}
              disabled={this.saving}
            >
              {app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.submit')}
            </Button>
          </div>
        </div>
      </div>
    );
  }
  
  onsubmit(e) {
    e.preventDefault();
    
    this.saving = true;
    
    // First, set the manual level status and level if necessary
    app.request({
      method: 'PATCH',
      url: app.forum.attribute('apiUrl') + '/users/' + this.user.id() + '/level',
      body: {
        data: {
          attributes: {
            is_manual_level: this.isManualLevel,
            level_id: this.isManualLevel ? this.selectedLevelId : null
          }
        }
      }
    }).then(() => {
      // Then, if adding XP and not manual level, add the XP
      if (!this.isManualLevel && this.xpToAdd !== 0) {
        return app.request({
          method: 'POST',
          url: app.forum.attribute('apiUrl') + '/users/' + this.user.id() + '/xp',
          body: {
            data: {
              attributes: {
                amount: this.xpToAdd
              }
            }
          }
        });
      }
    }).then(() => {
      this.saving = false;
      app.modal.close();
      m.redraw();
      
      // Reload the user list if we're on the user list page
      if (app.current.matches(UserListPage)) {
        app.current.get('routeName') === 'users.index' && app.current.one('onunload', () => {
          app.store.find('users').then(() => m.redraw());
        });
      }
    }).catch(error => {
      this.saving = false;
      m.redraw();
      throw error;
    });
  }
}
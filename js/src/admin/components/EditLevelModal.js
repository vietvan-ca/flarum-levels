import app from 'flarum/admin/app';
import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Switch from 'flarum/common/components/Switch';
import Stream from 'flarum/common/utils/Stream';

export default class EditLevelModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);
    
    const level = this.attrs.level || {};
    
    this.name = Stream(level.attributes?.name || '');
    this.description = Stream(level.attributes?.description || '');
    this.xpRequired = Stream(level.attributes?.xp_required || 0);
    this.color = Stream(level.attributes?.color || '#0072E3');
    this.icon = Stream(level.attributes?.icon || '');
    this.isSpecial = Stream(!!level.attributes?.is_special);
    this.displayOrder = Stream(level.attributes?.display_order || 0);
    
    this.loading = false;
  }
  
  className() {
    return 'EditLevelModal Modal--small';
  }
  
  title() {
    return this.attrs.level ? 
      app.translator.trans('vietvan-ca-flarum-levels.admin.levels.edit_title') : 
      app.translator.trans('vietvan-ca-flarum-levels.admin.levels.new_level');
  }
  
  content() {
    return (
      <div className="Modal-body">
        <div className="Form">
          <div className="Form-group">
            <label>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.name')}</label>
            <input 
              className="FormControl" 
              type="text"
              bidi={this.name} 
              disabled={this.loading} 
            />
          </div>
          
          <div className="Form-group">
            <label>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.description')}</label>
            <textarea 
              className="FormControl" 
              bidi={this.description} 
              disabled={this.loading}
            />
          </div>
          
          <div className="Form-group">
            <label>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.xp_required')}</label>
            <input 
              className="FormControl" 
              type="number" 
              min="0"
              bidi={this.xpRequired} 
              disabled={this.loading} 
            />
          </div>
          
          <div className="Form-group">
            <label>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.color')}</label>
            <input 
              className="FormControl" 
              type="color" 
              bidi={this.color} 
              disabled={this.loading} 
            />
          </div>
          
          <div className="Form-group">
            <label>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.icon')}</label>
            <input 
              className="FormControl" 
              type="text" 
              placeholder="fas fa-star"
              bidi={this.icon} 
              disabled={this.loading} 
            />
          </div>
          
          <div className="Form-group">
            <label>{app.translator.trans('vietvan-ca-flarum-levels.admin.levels.order')}</label>
            <input 
              className="FormControl" 
              type="number" 
              min="0"
              bidi={this.displayOrder} 
              disabled={this.loading} 
            />
          </div>
          
          <div className="Form-group">
            <Switch 
              state={this.isSpecial()} 
              onchange={this.isSpecial}
            >
              {app.translator.trans('vietvan-ca-flarum-levels.admin.levels.special')}
            </Switch>
          </div>
          
          <div className="Form-group">
            {Button.component({
              type: 'submit',
              className: 'Button Button--primary',
              disabled: this.loading,
              loading: this.loading,
            }, app.translator.trans(this.attrs.level ? 
              'vietvan-ca-flarum-levels.admin.levels.save' : 
              'vietvan-ca-flarum-levels.admin.levels.add'))}
          </div>
        </div>
      </div>
    );
  }
  
  onsubmit(e) {
    e.preventDefault();
    
    this.loading = true;
    
    const data = {
      name: this.name(),
      description: this.description(),
      xp_required: parseInt(this.xpRequired()),
      color: this.color(),
      icon: this.icon(),
      is_special: this.isSpecial(),
      order: parseInt(this.displayOrder())
    };
    
    const url = this.attrs.level ? 
      `${app.forum.attribute('apiUrl')}/levels/${this.attrs.level.id}` : 
      `${app.forum.attribute('apiUrl')}/levels`;
      
    const method = this.attrs.level ? 'PATCH' : 'POST';

    console.log(url, method, data);

    fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': app.session.csrfToken
      },
      body: JSON.stringify({
        data: {
          type: 'levels',
          attributes: data
        }
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      this.loading = false;
      app.modal.close();
      if (this.attrs.onSaved) this.attrs.onSaved();
    })
    .catch(e => {
      this.loading = false;
      console.error('Error saving level:', e);
      m.redraw();
    });
    
    // app.request({
    //   url,
    //   method,
    //   data: {
    //     data: {
    //       type: 'levels',
    //       attributes: data
    //     }
    //   }
    // })
    // .then(() => {
    //   this.loading = false;
    //   app.modal.close();
    //   if (this.attrs.onSaved) this.attrs.onSaved();
    // })
    // .catch(e => {
    //   this.loading = false;
    //   console.error('Error saving level:', e);
    //   m.redraw();
    // });
  }
}
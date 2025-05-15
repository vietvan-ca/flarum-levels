import app from 'flarum/admin/app';
import LevelsPage from './components/LevelsPage';
import EditUserLevelModal from './components/EditUserLevelModal';
import { extend } from 'flarum/common/extend';
import UserListPage from 'flarum/admin/components/UserListPage';
import Button from 'flarum/common/components/Button';
import LevelsManagerSettingComponent from './components/LevelsManagerSettingComponent';


app.initializers.add('vietvan-ca-levels', () => {
  // Helper function to safely get translations or fall back
  function safeTrans(key, fallback) {
    try {
      const result = app.translator.trans(key);
      return typeof result === 'string' ? result : fallback;
    } catch (e) {
      console.warn('Translation missing:', key);
      return fallback;
    }
  }

  app.extensionData
    .for('vietvan-ca-levels')
    .registerPage(LevelsPage)
    .registerSetting({
      setting: 'vietvan-ca-flarum-levels.xp_per_post',
      type: 'number',
      label: safeTrans('vietvan-ca-flarum-levels.admin.settings.xp_per_post', 'XP per post'),
      default: 10
    })
    .registerSetting({
      setting: 'vietvan-ca-flarum-levels.xp_per_discussion',
      type: 'number',
      label: safeTrans('vietvan-ca-flarum-levels.admin.settings.xp_per_discussion', 'XP per discussion'),
      default: 20
    })
    .registerPermission(
      {
        icon: 'fas fa-chart-line',
        label: app.translator.trans('vietvan-ca-flarum-levels.admin.permissions.view_levels'),
        permission: 'vietvan-ca-flarum-levels.view'
      },
      'view'
    )
    .registerPermission(
      {
        icon: 'fas fa-chart-line',
        label: app.translator.trans('vietvan-ca-flarum-levels.admin.permissions.manage_levels'),
        permission: 'vietvan-ca-flarum-levels.manage'
      },
      'moderate'
    );

    // Add a column for level in the user list
    extend(UserListPage.prototype, 'columns', function(columns) {
      columns.add('level', {
        name: app.translator.trans('vietvan-ca-flarum-levels.admin.levels.title'),
        content: user => {
          const level = user.attribute('level');
          return level ? level.name : app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.no_level');
        }
      });
    });

    // Add a button to edit user level in each row's action menu
    extend(UserListPage.prototype, 'userActionItems', function(items, user) {
      items.add('level', Button.component({
        icon: 'fas fa-chart-line',
        className: 'Button UserList-levelBtn',
        onclick: () => app.modal.show(EditUserLevelModal, { user }),
        title: app.translator.trans('vietvan-ca-flarum-levels.admin.edit_user.title', { username: user.username() })
      }, app.translator.trans('vietvan-ca-flarum-levels.admin.levels.title')));
    });
});
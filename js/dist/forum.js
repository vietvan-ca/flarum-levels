/******/ (() => { // webpackBootstrap
/******/ 	// runtime can't be in strict mode because a global variable is assign and maybe created.
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inheritsLoose)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setPrototypeOf.js */ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js");

function _inheritsLoose(t, o) {
  t.prototype = Object.create(o.prototype), t.prototype.constructor = t, (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(t, o);
}


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) {
    return t.__proto__ = e, t;
  }, _setPrototypeOf(t, e);
}


/***/ }),

/***/ "./src/admin/components/EditLevelModal.js":
/*!************************************************!*\
  !*** ./src/admin/components/EditLevelModal.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditLevelModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/utils/Stream */ "flarum/common/utils/Stream");
/* harmony import */ var flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5__);






var EditLevelModal = /*#__PURE__*/function (_Modal) {
  function EditLevelModal() {
    return _Modal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(EditLevelModal, _Modal);
  var _proto = EditLevelModal.prototype;
  _proto.oninit = function oninit(vnode) {
    var _level$attributes, _level$attributes2, _level$attributes3, _level$attributes4, _level$attributes5, _level$attributes6, _level$attributes7;
    _Modal.prototype.oninit.call(this, vnode);
    var level = this.attrs.level || {};
    this.name = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(((_level$attributes = level.attributes) == null ? void 0 : _level$attributes.name) || '');
    this.description = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(((_level$attributes2 = level.attributes) == null ? void 0 : _level$attributes2.description) || '');
    this.xpRequired = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(((_level$attributes3 = level.attributes) == null ? void 0 : _level$attributes3.xp_required) || 0);
    this.color = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(((_level$attributes4 = level.attributes) == null ? void 0 : _level$attributes4.color) || '#0072E3');
    this.icon = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(((_level$attributes5 = level.attributes) == null ? void 0 : _level$attributes5.icon) || '');
    this.isSpecial = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(!!((_level$attributes6 = level.attributes) != null && _level$attributes6.is_special));
    this.displayOrder = flarum_common_utils_Stream__WEBPACK_IMPORTED_MODULE_5___default()(((_level$attributes7 = level.attributes) == null ? void 0 : _level$attributes7.display_order) || 0);
    this.loading = false;
  };
  _proto.className = function className() {
    return 'EditLevelModal Modal--small';
  };
  _proto.title = function title() {
    return this.attrs.level ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.edit_title') : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.new_level');
  };
  _proto.content = function content() {
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.name')), m("input", {
      className: "FormControl",
      type: "text",
      bidi: this.name,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.description')), m("textarea", {
      className: "FormControl",
      bidi: this.description,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.xp_required')), m("input", {
      className: "FormControl",
      type: "number",
      min: "0",
      bidi: this.xpRequired,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.color')), m("input", {
      className: "FormControl",
      type: "color",
      bidi: this.color,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.icon')), m("input", {
      className: "FormControl",
      type: "text",
      placeholder: "fas fa-star",
      bidi: this.icon,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.order')), m("input", {
      className: "FormControl",
      type: "number",
      min: "0",
      bidi: this.displayOrder,
      disabled: this.loading
    })), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_4___default()), {
      state: this.isSpecial(),
      onchange: this.isSpecial
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.special'))), m("div", {
      className: "Form-group"
    }, flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default().component({
      type: 'submit',
      className: 'Button Button--primary',
      disabled: this.loading,
      loading: this.loading
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans(this.attrs.level ? 'vietvan-ca-flarum-levels.admin.levels.save' : 'vietvan-ca-flarum-levels.admin.levels.add')))));
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this = this;
    e.preventDefault();
    this.loading = true;
    var data = {
      name: this.name(),
      description: this.description(),
      xp_required: parseInt(this.xpRequired()),
      color: this.color(),
      icon: this.icon(),
      is_special: this.isSpecial(),
      display_order: parseInt(this.displayOrder())
    };
    var url = this.attrs.level ? flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/levels/" + this.attrs.level.id : flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + "/levels";
    var method = this.attrs.level ? 'PATCH' : 'POST';
    console.log(url, method, data);
    fetch(url, {
      method: method,
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': (flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().session).csrfToken
      },
      body: JSON.stringify({
        data: {
          type: 'levels',
          attributes: data
        }
      })
    }).then(function (response) {
      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }
      return response.json();
    }).then(function (data) {
      _this.loading = false;
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.close();
      if (_this.attrs.onSaved) _this.attrs.onSaved();
    })["catch"](function (e) {
      _this.loading = false;
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
  };
  return EditLevelModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/EditUserLevelModal.js":
/*!****************************************************!*\
  !*** ./src/admin/components/EditUserLevelModal.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditUserLevelModal)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Modal */ "flarum/common/components/Modal");
/* harmony import */ var flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Switch */ "flarum/common/components/Switch");
/* harmony import */ var flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6__);







var EditUserLevelModal = /*#__PURE__*/function (_Modal) {
  function EditUserLevelModal() {
    return _Modal.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(EditUserLevelModal, _Modal);
  var _proto = EditUserLevelModal.prototype;
  _proto.oninit = function oninit(vnode) {
    _Modal.prototype.oninit.call(this, vnode);
    this.user = this.attrs.user;
    this.loading = true;
    this.saving = false;
    this.levels = [];
    var userLevel = this.user.attribute('level');
    this.selectedLevelId = userLevel ? userLevel.id : '';
    this.isManualLevel = this.user.attribute('is_manual_level') || false;
    this.xpToAdd = 0;
    this.loadLevels();
  };
  _proto.loadLevels = function loadLevels() {
    var _this = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'GET',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/levels'
    }).then(function (response) {
      _this.levels = response.data.map(function (level) {
        return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          id: level.id
        }, level.attributes);
      });
      _this.levels.sort(function (a, b) {
        return a.order - b.order;
      });
      _this.loading = false;
      m.redraw();
    })["catch"](function (error) {
      _this.loading = false;
      m.redraw();
      throw error;
    });
  };
  _proto.className = function className() {
    return 'EditUserLevelModal Modal--small';
  };
  _proto.title = function title() {
    return flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.title', {
      username: this.user.username()
    });
  };
  _proto.content = function content() {
    var _this2 = this;
    if (this.loading) {
      return m("div", {
        className: "Modal-body"
      }, m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_6___default()), null));
    }
    return m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form"
    }, m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.current_xp')), m("p", {
      className: "helpText"
    }, this.user.attribute('xp') || 0, " XP")), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.add_xp')), m("input", {
      className: "FormControl",
      type: "number",
      value: this.xpToAdd,
      onchange: function onchange(e) {
        _this2.xpToAdd = parseInt(e.target.value) || 0;
      },
      disabled: this.isManualLevel
    })), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Switch__WEBPACK_IMPORTED_MODULE_5___default()), {
      state: this.isManualLevel,
      onchange: function onchange(value) {
        _this2.isManualLevel = value;
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.manual_level')), m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.manual_level_help'))), m("div", {
      className: "Form-group"
    }, m("label", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.select_level')), m("select", {
      className: "FormControl",
      value: this.selectedLevelId,
      onchange: function onchange(e) {
        _this2.selectedLevelId = e.target.value;
      },
      disabled: !this.isManualLevel
    }, m("option", {
      value: ""
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.no_level')), this.levels.map(function (level) {
      return m("option", {
        value: level.id,
        key: level.id
      }, level.name, " (", level.xp_required, " XP)");
    }))), !this.isManualLevel && !this.selectedLevelId && m("div", {
      className: "Form-group"
    }, m("p", {
      className: "helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.auto_level_help'))), m("div", {
      className: "Form-group"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_4___default()), {
      className: "Button Button--primary",
      type: "submit",
      loading: this.saving,
      disabled: this.saving
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.submit')))));
  };
  _proto.onsubmit = function onsubmit(e) {
    var _this3 = this;
    e.preventDefault();
    this.saving = true;

    // First, set the manual level status and level if necessary
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
      method: 'PATCH',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/users/' + this.user.id() + '/level',
      body: {
        data: {
          attributes: {
            is_manual_level: this.isManualLevel,
            level_id: this.isManualLevel ? this.selectedLevelId : null
          }
        }
      }
    }).then(function () {
      // Then, if adding XP and not manual level, add the XP
      if (!_this3.isManualLevel && _this3.xpToAdd !== 0) {
        return flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().request({
          method: 'POST',
          url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().forum.attribute('apiUrl') + '/users/' + _this3.user.id() + '/xp',
          body: {
            data: {
              attributes: {
                amount: _this3.xpToAdd
              }
            }
          }
        });
      }
    }).then(function () {
      _this3.saving = false;
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().modal.close();
      m.redraw();

      // Reload the user list if we're on the user list page
      if (flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().current.matches(UserListPage)) {
        flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().current.get('routeName') === 'users.index' && flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().current.one('onunload', function () {
          flarum_admin_app__WEBPACK_IMPORTED_MODULE_2___default().store.find('users').then(function () {
            return m.redraw();
          });
        });
      }
    })["catch"](function (error) {
      _this3.saving = false;
      m.redraw();
      throw error;
    });
  };
  return EditUserLevelModal;
}((flarum_common_components_Modal__WEBPACK_IMPORTED_MODULE_3___default()));


/***/ }),

/***/ "./src/admin/components/LevelListItem.js":
/*!***********************************************!*\
  !*** ./src/admin/components/LevelListItem.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelListItem)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);




var LevelListItem = /*#__PURE__*/function (_Component) {
  function LevelListItem() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LevelListItem, _Component);
  var _proto = LevelListItem.prototype;
  _proto.view = function view() {
    var _this = this;
    var level = this.attrs.level;
    return m("tr", {
      className: "LevelListItem"
    }, m("td", {
      className: "LevelListItem-name"
    }, m("span", {
      className: "LevelName",
      style: level.attributes.color ? {
        color: level.attributes.color
      } : {}
    }, level.attributes.name)), m("td", {
      className: "LevelListItem-xp"
    }, level.attributes.xp_required), m("td", {
      className: "LevelListItem-color"
    }, m("span", {
      className: "LevelColorDot",
      style: {
        backgroundColor: level.attributes.color || '#aaaaaa'
      }
    }), level.attributes.color || '—'), m("td", {
      className: "LevelListItem-special"
    }, level.attributes.is_special ? m("i", {
      className: "fas fa-check",
      title: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.special_level')
    }) : '—'), m("td", {
      className: "LevelListItem-order"
    }, level.attributes.display_order), m("td", {
      className: "LevelListItem-actions"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--icon",
      icon: "fas fa-pencil-alt",
      onclick: function onclick() {
        return _this.attrs.onEdit(level);
      }
    }), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--icon",
      icon: "fas fa-trash",
      onclick: function onclick() {
        return _this.attrs.onDelete(level);
      }
    })));
  };
  return LevelListItem;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/LevelsManagerSettingComponent.js":
/*!***************************************************************!*\
  !*** ./src/admin/components/LevelsManagerSettingComponent.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelsManagerSettingComponent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/common/Component */ "flarum/common/Component");
/* harmony import */ var flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_common_Component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LevelListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LevelListItem */ "./src/admin/components/LevelListItem.js");
/* harmony import */ var _EditLevelModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditLevelModal */ "./src/admin/components/EditLevelModal.js");







var LevelsManagerSettingComponent = /*#__PURE__*/function (_Component) {
  function LevelsManagerSettingComponent() {
    return _Component.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LevelsManagerSettingComponent, _Component);
  var _proto = LevelsManagerSettingComponent.prototype;
  _proto.oninit = function oninit(vnode) {
    _Component.prototype.oninit.call(this, vnode);
    this.loading = true;
    this.levels = [];
    this.loadLevels();
  };
  _proto.loadLevels = function loadLevels() {
    var _this = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'GET',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/levels'
    }).then(function (result) {
      _this.levels = result.data || [];
      _this.loading = false;
      m.redraw();
    })["catch"](function (e) {
      _this.loading = false;
      m.redraw();
      console.error('Error loading levels:', e);
    });
  };
  _proto.view = function view() {
    var _this2 = this;
    return m("div", {
      className: "LevelsManagerSetting"
    }, m("div", {
      className: "LevelsManagerSetting-header"
    }, m("p", {
      className: "LevelsManagerSetting-helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.help_text')), m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--primary",
      icon: "fas fa-plus",
      onclick: function onclick() {
        return _this2.addLevel();
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.add'))), this.loading ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), null) : m("div", {
      className: "LevelList"
    }, this.levels.length === 0 ? m("div", {
      className: "LevelList-empty"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.empty')) : m("table", {
      className: "LevelTable"
    }, m("thead", null, m("tr", null, m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.name')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.xp_required')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.color')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.special')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.order')), m("th", null))), m("tbody", null, this.levels.map(function (level) {
      return m(_LevelListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        level: level,
        onEdit: _this2.editLevel.bind(_this2),
        onDelete: _this2.deleteLevel.bind(_this2)
      });
    })))));
  }

  // The addLevel, editLevel, and deleteLevel methods are the same as in LevelsPage
  ;
  _proto.addLevel = function addLevel() {
    var _this3 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_EditLevelModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSaved: function onSaved() {
        return _this3.loadLevels();
      }
    });
  };
  _proto.editLevel = function editLevel(level) {
    var _this4 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_EditLevelModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      level: level,
      onSaved: function onSaved() {
        return _this4.loadLevels();
      }
    });
  };
  _proto.deleteLevel = function deleteLevel(level) {
    var _this5 = this;
    if (confirm(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.delete_confirmation'))) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
        method: 'DELETE',
        url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/levels/' + level.id
      }).then(function () {
        _this5.loadLevels();
      })["catch"](function (e) {
        console.error('Error deleting level:', e);
      });
    }
  };
  return LevelsManagerSettingComponent;
}((flarum_common_Component__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/components/LevelsPage.js":
/*!********************************************!*\
  !*** ./src/admin/components/LevelsPage.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LevelsPage)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/admin/components/ExtensionPage */ "flarum/admin/components/ExtensionPage");
/* harmony import */ var flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/common/components/LoadingIndicator */ "flarum/common/components/LoadingIndicator");
/* harmony import */ var flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _LevelListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LevelListItem */ "./src/admin/components/LevelListItem.js");
/* harmony import */ var _EditLevelModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EditLevelModal */ "./src/admin/components/EditLevelModal.js");







var LevelsPage = /*#__PURE__*/function (_ExtensionPage) {
  function LevelsPage() {
    return _ExtensionPage.apply(this, arguments) || this;
  }
  (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(LevelsPage, _ExtensionPage);
  var _proto = LevelsPage.prototype;
  _proto.oninit = function oninit(vnode) {
    _ExtensionPage.prototype.oninit.call(this, vnode);
    this.loading = true;
    this.levels = [];
    this.loadLevels();
  };
  _proto.loadLevels = function loadLevels() {
    var _this = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
      method: 'GET',
      url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/levels'
    }).then(function (result) {
      _this.levels = result.data || [];
      _this.loading = false;
      m.redraw();
    })["catch"](function (e) {
      _this.loading = false;
      m.redraw();
      console.error('Error loading levels:', e);
    });
  };
  _proto.content = function content() {
    var _this2 = this;
    return m("div", {
      className: "LevelsPage"
    }, m("div", {
      className: "LevelsPage-header"
    }, m("div", {
      className: "container"
    }, m("h2", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.title')), m("p", {
      className: "LevelsPage-helpText"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.help_text')))), m("div", {
      className: "LevelsPage-body"
    }, m("div", {
      className: "container"
    }, this.loading ? m((flarum_common_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default()), null) : m("div", {
      className: "LevelList"
    }, m("div", {
      className: "LevelList-header"
    }, m((flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_3___default()), {
      className: "Button Button--primary",
      icon: "fas fa-plus",
      onclick: function onclick() {
        return _this2.addLevel();
      }
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.add'))), m("div", {
      className: "LevelList-items"
    }, this.levels.length === 0 ? m("div", {
      className: "LevelList-empty"
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.empty')) : m("table", {
      className: "LevelTable"
    }, m("thead", null, m("tr", null, m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.name')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.xp_required')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.color')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.special')), m("th", null, flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.order')), m("th", null))), m("tbody", null, this.levels.map(function (level) {
      return m(_LevelListItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
        level: level,
        onEdit: _this2.editLevel.bind(_this2),
        onDelete: _this2.deleteLevel.bind(_this2)
      });
    }))))))));
  };
  _proto.addLevel = function addLevel() {
    var _this3 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_EditLevelModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      onSaved: function onSaved() {
        return _this3.loadLevels();
      }
    });
  };
  _proto.editLevel = function editLevel(level) {
    var _this4 = this;
    flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().modal.show(_EditLevelModal__WEBPACK_IMPORTED_MODULE_6__["default"], {
      level: level,
      onSaved: function onSaved() {
        return _this4.loadLevels();
      }
    });
  };
  _proto.deleteLevel = function deleteLevel(level) {
    var _this5 = this;
    if (confirm(flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.delete_confirmation'))) {
      flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().request({
        method: 'DELETE',
        url: flarum_admin_app__WEBPACK_IMPORTED_MODULE_1___default().forum.attribute('apiUrl') + '/levels/' + level.id
      }).then(function () {
        _this5.loadLevels();
      })["catch"](function (e) {
        console.error('Error deleting level:', e);
      });
    }
  };
  return LevelsPage;
}((flarum_admin_components_ExtensionPage__WEBPACK_IMPORTED_MODULE_2___default()));


/***/ }),

/***/ "./src/admin/index.js":
/*!****************************!*\
  !*** ./src/admin/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/admin/app */ "flarum/admin/app");
/* harmony import */ var flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_LevelsPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/LevelsPage */ "./src/admin/components/LevelsPage.js");
/* harmony import */ var _components_EditUserLevelModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/EditUserLevelModal */ "./src/admin/components/EditUserLevelModal.js");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/common/extend */ "flarum/common/extend");
/* harmony import */ var flarum_common_extend__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/admin/components/UserListPage */ "flarum/admin/components/UserListPage");
/* harmony import */ var flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/common/components/Button */ "flarum/common/components/Button");
/* harmony import */ var flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_LevelsManagerSettingComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/LevelsManagerSettingComponent */ "./src/admin/components/LevelsManagerSettingComponent.js");







flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().initializers.add('vietvan-ca-levels', function () {
  // Helper function to safely get translations or fall back
  function safeTrans(key, fallback) {
    try {
      var result = flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans(key);
      return typeof result === 'string' ? result : fallback;
    } catch (e) {
      console.warn('Translation missing:', key);
      return fallback;
    }
  }
  flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().extensionData["for"]('vietvan-ca-levels').registerPage(_components_LevelsPage__WEBPACK_IMPORTED_MODULE_1__["default"]).registerSetting({
    setting: 'vietvan-ca-flarum-levels.xp_per_post',
    type: 'number',
    label: safeTrans('vietvan-ca-flarum-levels.admin.settings.xp_per_post', 'XP per post'),
    "default": 10
  }).registerSetting({
    setting: 'vietvan-ca-flarum-levels.xp_per_discussion',
    type: 'number',
    label: safeTrans('vietvan-ca-flarum-levels.admin.settings.xp_per_discussion', 'XP per discussion'),
    "default": 20
  }).registerPermission({
    icon: 'fas fa-chart-line',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('vietvan-ca-flarum-levels.admin.permissions.view_levels'),
    permission: 'vietvan-ca-flarum-levels.view'
  }, 'view').registerPermission({
    icon: 'fas fa-chart-line',
    label: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('vietvan-ca-flarum-levels.admin.permissions.manage_levels'),
    permission: 'vietvan-ca-flarum-levels.manage'
  }, 'moderate');

  // Add a column for level in the user list
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'columns', function (columns) {
    columns.add('level', {
      name: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.title'),
      content: function content(user) {
        var level = user.attribute('level');
        return level ? level.name : flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.no_level');
      }
    });
  });

  // Add a button to edit user level in each row's action menu
  (0,flarum_common_extend__WEBPACK_IMPORTED_MODULE_3__.extend)((flarum_admin_components_UserListPage__WEBPACK_IMPORTED_MODULE_4___default().prototype), 'userActionItems', function (items, user) {
    items.add('level', flarum_common_components_Button__WEBPACK_IMPORTED_MODULE_5___default().component({
      icon: 'fas fa-chart-line',
      className: 'Button UserList-levelBtn',
      onclick: function onclick() {
        return flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().modal.show(_components_EditUserLevelModal__WEBPACK_IMPORTED_MODULE_2__["default"], {
          user: user
        });
      },
      title: flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('vietvan-ca-flarum-levels.admin.edit_user.title', {
        username: user.username()
      })
    }, flarum_admin_app__WEBPACK_IMPORTED_MODULE_0___default().translator.trans('vietvan-ca-flarum-levels.admin.levels.title')));
  });
});

/***/ }),

/***/ "flarum/admin/app":
/*!**************************************************!*\
  !*** external "flarum.core.compat['admin/app']" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/app'];

/***/ }),

/***/ "flarum/admin/components/ExtensionPage":
/*!***********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/ExtensionPage']" ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/ExtensionPage'];

/***/ }),

/***/ "flarum/admin/components/UserListPage":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['admin/components/UserListPage']" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['admin/components/UserListPage'];

/***/ }),

/***/ "flarum/common/Component":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['common/Component']" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/Component'];

/***/ }),

/***/ "flarum/common/components/Button":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Button']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Button'];

/***/ }),

/***/ "flarum/common/components/LoadingIndicator":
/*!***************************************************************************!*\
  !*** external "flarum.core.compat['common/components/LoadingIndicator']" ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/LoadingIndicator'];

/***/ }),

/***/ "flarum/common/components/Modal":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Modal']" ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Modal'];

/***/ }),

/***/ "flarum/common/components/Switch":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['common/components/Switch']" ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/components/Switch'];

/***/ }),

/***/ "flarum/common/extend":
/*!******************************************************!*\
  !*** external "flarum.core.compat['common/extend']" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/extend'];

/***/ }),

/***/ "flarum/common/utils/Stream":
/*!************************************************************!*\
  !*** external "flarum.core.compat['common/utils/Stream']" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = flarum.core.compat['common/utils/Stream'];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_admin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/admin */ "./src/admin/index.js");

})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=forum.js.map
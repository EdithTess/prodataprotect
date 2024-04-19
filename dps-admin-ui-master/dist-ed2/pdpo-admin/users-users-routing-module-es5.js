(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-routing-module"], {
    /***/
    "6MeA":
    /*!***************************************************************************!*\
      !*** ./src/app/modules/user-administration/users/users-routing.module.ts ***!
      \***************************************************************************/

    /*! exports provided: UsersRoutingModule */

    /***/
    function MeA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function () {
        return UsersRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _find_users_find_users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./find-users/find-users.component */
      "3Ice");
      /* harmony import */


      var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./add-user/add-user.component */
      "9i6M");
      /* harmony import */


      var _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./view-user/view-user.component */
      "1Vw/");
      /* harmony import */


      var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../authentication/auth.guard */
      "sF9m");
      /* harmony import */


      var _groups_groups_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./groups/groups.component */
      "Yxfw");

      var routes = [{
        path: 'all',
        component: _find_users_find_users_component__WEBPACK_IMPORTED_MODULE_2__["FindUsersComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: {
          roles: ['view.user.accounts'],
          action: "FIND"
        }
      }, {
        path: 'groups',
        component: _groups_groups_component__WEBPACK_IMPORTED_MODULE_6__["GroupsComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: {
          roles: ['view.user.accounts'],
          action: "FIND"
        }
      }, {
        path: 'create',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_3__["AddUserComponent"]
      }, {
        path: 'view',
        component: _view_user_view_user_component__WEBPACK_IMPORTED_MODULE_4__["ViewUserComponent"]
      }];

      var UsersRoutingModule = function UsersRoutingModule() {
        _classCallCheck(this, UsersRoutingModule);
      };

      UsersRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: UsersRoutingModule
      });
      UsersRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function UsersRoutingModule_Factory(t) {
          return new (t || UsersRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=users-users-routing-module-es5.js.map
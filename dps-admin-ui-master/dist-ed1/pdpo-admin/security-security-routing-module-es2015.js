(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["security-security-routing-module"],{

/***/ "VWr1":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/user-administration/security/security-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: SecurityRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityRoutingModule", function() { return SecurityRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _system_roles_system_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./system-roles/system-roles.component */ "mIHO");
/* harmony import */ var _system_accesses_system_accesses_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./system-accesses/system-accesses.component */ "dGM8");






const routes = [
    {
        path: 'roles', component: _system_roles_system_roles_component__WEBPACK_IMPORTED_MODULE_2__["SystemRolesComponent"],
    },
    {
        path: 'accesses', component: _system_accesses_system_accesses_component__WEBPACK_IMPORTED_MODULE_3__["SystemAccessesComponent"],
    }
];
class SecurityRoutingModule {
}
SecurityRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SecurityRoutingModule });
SecurityRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SecurityRoutingModule_Factory(t) { return new (t || SecurityRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SecurityRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecurityRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=security-security-routing-module-es2015.js.map
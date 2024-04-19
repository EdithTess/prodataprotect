(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-level5-level5-module"],{

/***/ "Cq4R":
/*!**************************************************!*\
  !*** ./src/app/pages/level5/level5.component.ts ***!
  \**************************************************/
/*! exports provided: Level5Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level5Component", function() { return Level5Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.component */ "rnAf");
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/card/card.component */ "4FRi");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["Level 1", "Level 2", "Level 3", "Level 4"]; };
const _c1 = function () { return ["/apps/inbox"]; };
class Level5Component {
    constructor() { }
    ngOnInit() {
    }
}
Level5Component.ɵfac = function Level5Component_Factory(t) { return new (t || Level5Component)(); };
Level5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Level5Component, selectors: [["fury-level5"]], decls: 18, vars: 4, consts: [["fxLayout", "column", 1, "padding"], ["current", "Level 5 - Wow such deep!", 3, "crumbs"], [1, "text", 3, "routerLink"]], template: function Level5Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fury-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Level 5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fury-card-header-subheading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Not as deep as you can go.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "fury-card-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " You went so deep, wow! But this is not even as deep as you can go, Fury supports UNLIMITED Levels in the Menu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Now go ahead and explore the other great pages of Fury. Have you seen the ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "awesome Inbox Component");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_1__["BreadcrumbsComponent"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["FuryCard"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["FuryCardHeader"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["FuryCardHeaderTitle"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["FuryCardHeaderSubTitle"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_2__["FuryCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXZlbDUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Level5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-level5',
                templateUrl: './level5.component.html',
                styleUrls: ['./level5.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "E3/S":
/*!*******************************************************!*\
  !*** ./src/app/pages/level5/level5-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: Level5RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level5RoutingModule", function() { return Level5RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _level5_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level5.component */ "Cq4R");





const routes = [
    {
        path: '',
        component: _level5_component__WEBPACK_IMPORTED_MODULE_2__["Level5Component"]
    }
];
class Level5RoutingModule {
}
Level5RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Level5RoutingModule });
Level5RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Level5RoutingModule_Factory(t) { return new (t || Level5RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Level5RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Level5RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "z9zK":
/*!***********************************************!*\
  !*** ./src/app/pages/level5/level5.module.ts ***!
  \***********************************************/
/*! exports provided: Level5Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level5Module", function() { return Level5Module; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ "q8Jb");
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ "VE2z");
/* harmony import */ var _level5_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level5-routing.module */ "E3/S");
/* harmony import */ var _level5_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./level5.component */ "Cq4R");







class Level5Module {
}
Level5Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: Level5Module });
Level5Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function Level5Module_Factory(t) { return new (t || Level5Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _level5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Level5RoutingModule"],
            _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__["FuryCardModule"],
            _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](Level5Module, { declarations: [_level5_component__WEBPACK_IMPORTED_MODULE_5__["Level5Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _level5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Level5RoutingModule"],
        _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__["FuryCardModule"],
        _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Level5Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _level5_routing_module__WEBPACK_IMPORTED_MODULE_4__["Level5RoutingModule"],
                    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_3__["FuryCardModule"],
                    _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbsModule"]
                ],
                declarations: [_level5_component__WEBPACK_IMPORTED_MODULE_5__["Level5Component"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-level5-level5-module-es2015.js.map
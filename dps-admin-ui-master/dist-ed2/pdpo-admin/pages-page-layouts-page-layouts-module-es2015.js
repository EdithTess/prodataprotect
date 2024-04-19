(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-layouts-page-layouts-module"],{

/***/ "1Zmr":
/*!***********************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layouts.module.ts ***!
  \***********************************************************/
/*! exports provided: PageLayoutsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsModule", function() { return PageLayoutsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layouts-routing.module */ "lsnC");




class PageLayoutsModule {
}
PageLayoutsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutsModule });
PageLayoutsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutsModule_Factory(t) { return new (t || PageLayoutsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _page_layouts_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutsRoutingModule"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "lsnC":
/*!*******************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layouts-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: PageLayoutsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutsRoutingModule", function() { return PageLayoutsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'simple',
        loadChildren: () => Promise.all(/*! import() | page-layout-simple-page-layout-simple-module */[__webpack_require__.e("common"), __webpack_require__.e("page-layout-simple-page-layout-simple-module")]).then(__webpack_require__.bind(null, /*! ./page-layout-simple/page-layout-simple.module */ "sCrH")).then(m => m.PageLayoutSimpleModule)
    },
    {
        path: 'simple-tabbed',
        loadChildren: () => Promise.all(/*! import() | page-layout-simple-tabbed-page-layout-simple-tabbed-module */[__webpack_require__.e("common"), __webpack_require__.e("page-layout-simple-tabbed-page-layout-simple-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./page-layout-simple-tabbed/page-layout-simple-tabbed.module */ "UOrY")).then(m => m.PageLayoutSimpleTabbedModule)
    },
    {
        path: 'card',
        loadChildren: () => Promise.all(/*! import() | page-layout-card-page-layout-card-module */[__webpack_require__.e("common"), __webpack_require__.e("page-layout-card-page-layout-card-module")]).then(__webpack_require__.bind(null, /*! ./page-layout-card/page-layout-card.module */ "+N4F")).then(m => m.PageLayoutCardModule)
    },
    {
        path: 'card-tabbed',
        loadChildren: () => Promise.all(/*! import() | page-layout-card-tabbed-page-layout-card-tabbed-module */[__webpack_require__.e("common"), __webpack_require__.e("page-layout-card-tabbed-page-layout-card-tabbed-module")]).then(__webpack_require__.bind(null, /*! ./page-layout-card-tabbed/page-layout-card-tabbed.module */ "KckV")).then(m => m.PageLayoutCardTabbedModule)
    }
];
class PageLayoutsRoutingModule {
}
PageLayoutsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutsRoutingModule });
PageLayoutsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutsRoutingModule_Factory(t) { return new (t || PageLayoutsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-page-layouts-page-layouts-module-es2015.js.map
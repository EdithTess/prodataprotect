(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-layout-card-tabbed-page-layout-card-tabbed-module"],{

/***/ "IB1K":
/*!*************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card-tabbed/page-layout-card-tabbed.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: PageLayoutCardTabbedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardTabbedComponent", function() { return PageLayoutCardTabbedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout.directive */ "xBcV");
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-header.directive */ "Hbgg");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ "rnAf");
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/shared/page-layout/page-layout-content.directive */ "rvYj");
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@fury/shared/card/card.component */ "4FRi");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.component */ "hqoi");









const _c0 = function () { return ["Page Layouts"]; };
class PageLayoutCardTabbedComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLayoutCardTabbedComponent.ɵfac = function PageLayoutCardTabbedComponent_Factory(t) { return new (t || PageLayoutCardTabbedComponent)(); };
PageLayoutCardTabbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutCardTabbedComponent, selectors: [["fury-page-layout-card-tabbed"]], decls: 33, vars: 2, consts: [["mode", "card"], ["current", "Card Tabbed", 3, "crumbs"], ["label", "Main Tab"], [1, "padding-top"], ["label", "Side Tab"], ["label", "Extra Tab"], ["label", "Additional Tab"], ["label", "Another Tab"], ["label", "One More Tab"], ["label", "Definitely the last Tab"], ["label", "Whoops another Tab"], ["label", "And one last Tab"]], template: function PageLayoutCardTabbedComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fury-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-page-layout-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fury-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab-group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-tab", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-tab", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-tab", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-tab", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-tab", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-tab", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-tab", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-tab", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "fury-card-content", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fury-page-layout-demo-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__["PageLayoutDirective"], _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__["PageLayoutHeaderDirective"], _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_5__["FuryCard"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTab"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_5__["FuryCardContent"], _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_7__["PageLayoutDemoContentComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1jYXJkLXRhYmJlZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutCardTabbedComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-page-layout-card-tabbed',
                templateUrl: './page-layout-card-tabbed.component.html',
                styleUrls: ['./page-layout-card-tabbed.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KckV":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card-tabbed/page-layout-card-tabbed.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: PageLayoutCardTabbedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardTabbedModule", function() { return PageLayoutCardTabbedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout-card-tabbed-routing.module */ "t1oM");
/* harmony import */ var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-layout-card-tabbed.component */ "IB1K");
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../@fury/fury-shared.module */ "WCGO");
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@fury/shared/card/card.module */ "VE2z");
/* harmony import */ var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/page-layout-content/page-layout-demo-content.module */ "R3oc");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");









class PageLayoutCardTabbedModule {
}
PageLayoutCardTabbedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutCardTabbedModule });
PageLayoutCardTabbedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutCardTabbedModule_Factory(t) { return new (t || PageLayoutCardTabbedModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutCardTabbedRoutingModule"],
            _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"],
            _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_5__["FuryCardModule"],
            _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutDemoContentModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutCardTabbedModule, { declarations: [_page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardTabbedComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutCardTabbedRoutingModule"],
        _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"],
        _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_5__["FuryCardModule"],
        _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutDemoContentModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutCardTabbedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutCardTabbedComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _page_layout_card_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutCardTabbedRoutingModule"],
                    _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"],
                    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_5__["FuryCardModule"],
                    _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_6__["PageLayoutDemoContentModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "t1oM":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/page-layout-card-tabbed/page-layout-card-tabbed-routing.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PageLayoutCardTabbedRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutCardTabbedRoutingModule", function() { return PageLayoutCardTabbedRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout-card-tabbed.component */ "IB1K");





const routes = [
    {
        path: '',
        component: _page_layout_card_tabbed_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutCardTabbedComponent"]
    }
];
class PageLayoutCardTabbedRoutingModule {
}
PageLayoutCardTabbedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutCardTabbedRoutingModule });
PageLayoutCardTabbedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutCardTabbedRoutingModule_Factory(t) { return new (t || PageLayoutCardTabbedRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutCardTabbedRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutCardTabbedRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=page-layout-card-tabbed-page-layout-card-tabbed-module-es2015.js.map
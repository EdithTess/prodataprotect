(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-layout-simple-tabbed-page-layout-simple-tabbed-module"], {
    /***/
    "9ubW":
    /*!*****************************************************************************************************!*\
      !*** ./src/app/pages/page-layouts/page-layout-simple-tabbed/page-layout-simple-tabbed.component.ts ***!
      \*****************************************************************************************************/

    /*! exports provided: PageLayoutSimpleTabbedComponent */

    /***/
    function ubW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleTabbedComponent", function () {
        return PageLayoutSimpleTabbedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../@fury/shared/page-layout/page-layout.directive */
      "xBcV");
      /* harmony import */


      var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../@fury/shared/page-layout/page-layout-header.directive */
      "Hbgg");
      /* harmony import */


      var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../@fury/shared/breadcrumbs/breadcrumbs.component */
      "rnAf");
      /* harmony import */


      var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../@fury/shared/page-layout/page-layout-content.directive */
      "rvYj");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/page-layout-content/page-layout-demo-content.component */
      "hqoi");

      var _c0 = function _c0() {
        return ["Page Layouts"];
      };

      var PageLayoutSimpleTabbedComponent = /*#__PURE__*/function () {
        function PageLayoutSimpleTabbedComponent() {
          _classCallCheck(this, PageLayoutSimpleTabbedComponent);
        }

        _createClass(PageLayoutSimpleTabbedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageLayoutSimpleTabbedComponent;
      }();

      PageLayoutSimpleTabbedComponent.ɵfac = function PageLayoutSimpleTabbedComponent_Factory(t) {
        return new (t || PageLayoutSimpleTabbedComponent)();
      };

      PageLayoutSimpleTabbedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageLayoutSimpleTabbedComponent,
        selectors: [["fury-page-layout-simple-tabbed"]],
        decls: 14,
        vars: 2,
        consts: [["current", "Simple Tabbed", 3, "crumbs"], [1, "padding-0"], ["label", "Main Tab"], [1, "padding"], ["label", "Side Tab"], ["label", "Extra Tab"]],
        template: function PageLayoutSimpleTabbedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fury-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-page-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fury-breadcrumbs", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-page-layout-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-tab-group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-tab", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fury-page-layout-demo-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "fury-page-layout-demo-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "fury-page-layout-demo-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__["PageLayoutDirective"], _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__["PageLayoutHeaderDirective"], _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTab"], _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_6__["PageLayoutDemoContentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUtdGFiYmVkLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleTabbedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'fury-page-layout-simple-tabbed',
            templateUrl: './page-layout-simple-tabbed.component.html',
            styleUrls: ['./page-layout-simple-tabbed.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "UOrY":
    /*!**************************************************************************************************!*\
      !*** ./src/app/pages/page-layouts/page-layout-simple-tabbed/page-layout-simple-tabbed.module.ts ***!
      \**************************************************************************************************/

    /*! exports provided: PageLayoutSimpleTabbedModule */

    /***/
    function UOrY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleTabbedModule", function () {
        return PageLayoutSimpleTabbedModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed-routing.module */
      "W+w/");
      /* harmony import */


      var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed.component */
      "9ubW");
      /* harmony import */


      var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/tabs */
      "wZkO");
      /* harmony import */


      var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/page-layout-content/page-layout-demo-content.module */
      "R3oc");
      /* harmony import */


      var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../@fury/fury-shared.module */
      "WCGO");

      var PageLayoutSimpleTabbedModule = function PageLayoutSimpleTabbedModule() {
        _classCallCheck(this, PageLayoutSimpleTabbedModule);
      };

      PageLayoutSimpleTabbedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutSimpleTabbedModule
      });
      PageLayoutSimpleTabbedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutSimpleTabbedModule_Factory(t) {
          return new (t || PageLayoutSimpleTabbedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__["FurySharedModule"], _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleTabbedModule, {
          declarations: [_page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleTabbedComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__["FurySharedModule"], _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleTabbedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleTabbedComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_tabbed_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedRoutingModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_6__["FurySharedModule"], _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "W+w/":
    /*!**********************************************************************************************************!*\
      !*** ./src/app/pages/page-layouts/page-layout-simple-tabbed/page-layout-simple-tabbed-routing.module.ts ***!
      \**********************************************************************************************************/

    /*! exports provided: PageLayoutSimpleTabbedRoutingModule */

    /***/
    function WW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleTabbedRoutingModule", function () {
        return PageLayoutSimpleTabbedRoutingModule;
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


      var _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout-simple-tabbed.component */
      "9ubW");

      var routes = [{
        path: '',
        component: _page_layout_simple_tabbed_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleTabbedComponent"]
      }];

      var PageLayoutSimpleTabbedRoutingModule = function PageLayoutSimpleTabbedRoutingModule() {
        _classCallCheck(this, PageLayoutSimpleTabbedRoutingModule);
      };

      PageLayoutSimpleTabbedRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutSimpleTabbedRoutingModule
      });
      PageLayoutSimpleTabbedRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutSimpleTabbedRoutingModule_Factory(t) {
          return new (t || PageLayoutSimpleTabbedRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleTabbedRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleTabbedRoutingModule, [{
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
//# sourceMappingURL=page-layout-simple-tabbed-page-layout-simple-tabbed-module-es5.js.map
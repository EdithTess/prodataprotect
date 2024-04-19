(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["page-layout-simple-page-layout-simple-module"], {
    /***/
    "fw/Q":
    /*!********************************************************************************************!*\
      !*** ./src/app/pages/page-layouts/page-layout-simple/page-layout-simple-routing.module.ts ***!
      \********************************************************************************************/

    /*! exports provided: PageLayoutSimpleRoutingModule */

    /***/
    function fwQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleRoutingModule", function () {
        return PageLayoutSimpleRoutingModule;
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


      var _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout-simple.component */
      "jIfT");

      var routes = [{
        path: '',
        component: _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleComponent"]
      }];

      var PageLayoutSimpleRoutingModule = function PageLayoutSimpleRoutingModule() {
        _classCallCheck(this, PageLayoutSimpleRoutingModule);
      };

      PageLayoutSimpleRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutSimpleRoutingModule
      });
      PageLayoutSimpleRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutSimpleRoutingModule_Factory(t) {
          return new (t || PageLayoutSimpleRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "jIfT":
    /*!***************************************************************************************!*\
      !*** ./src/app/pages/page-layouts/page-layout-simple/page-layout-simple.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: PageLayoutSimpleComponent */

    /***/
    function jIfT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleComponent", function () {
        return PageLayoutSimpleComponent;
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


      var _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/page-layout-content/page-layout-demo-content.component */
      "hqoi");

      var _c0 = function _c0() {
        return ["Page Layouts"];
      };

      var PageLayoutSimpleComponent = /*#__PURE__*/function () {
        function PageLayoutSimpleComponent() {
          _classCallCheck(this, PageLayoutSimpleComponent);
        }

        _createClass(PageLayoutSimpleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return PageLayoutSimpleComponent;
      }();

      PageLayoutSimpleComponent.ɵfac = function PageLayoutSimpleComponent_Factory(t) {
        return new (t || PageLayoutSimpleComponent)();
      };

      PageLayoutSimpleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: PageLayoutSimpleComponent,
        selectors: [["fury-page-layout-simple"]],
        decls: 5,
        vars: 2,
        consts: [["current", "Simple", 3, "crumbs"]],
        template: function PageLayoutSimpleComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fury-page-layout");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-page-layout-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fury-breadcrumbs", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-page-layout-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "fury-page-layout-demo-content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_1__["PageLayoutDirective"], _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_2__["PageLayoutHeaderDirective"], _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbsComponent"], _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_4__["PageLayoutContentDirective"], _components_page_layout_content_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1zaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'fury-page-layout-simple',
            templateUrl: './page-layout-simple.component.html',
            styleUrls: ['./page-layout-simple.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "sCrH":
    /*!************************************************************************************!*\
      !*** ./src/app/pages/page-layouts/page-layout-simple/page-layout-simple.module.ts ***!
      \************************************************************************************/

    /*! exports provided: PageLayoutSimpleModule */

    /***/
    function sCrH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PageLayoutSimpleModule", function () {
        return PageLayoutSimpleModule;
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


      var _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./page-layout-simple-routing.module */
      "fw/Q");
      /* harmony import */


      var _page_layout_simple_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./page-layout-simple.component */
      "jIfT");
      /* harmony import */


      var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../@fury/fury-shared.module */
      "WCGO");
      /* harmony import */


      var _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/page-layout-content/page-layout-demo-content.module */
      "R3oc");

      var PageLayoutSimpleModule = function PageLayoutSimpleModule() {
        _classCallCheck(this, PageLayoutSimpleModule);
      };

      PageLayoutSimpleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: PageLayoutSimpleModule
      });
      PageLayoutSimpleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function PageLayoutSimpleModule_Factory(t) {
          return new (t || PageLayoutSimpleModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleRoutingModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"], _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutSimpleModule, {
          declarations: [_page_layout_simple_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleRoutingModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"], _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutSimpleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_page_layout_simple_component__WEBPACK_IMPORTED_MODULE_3__["PageLayoutSimpleComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _page_layout_simple_routing_module__WEBPACK_IMPORTED_MODULE_2__["PageLayoutSimpleRoutingModule"], _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_4__["FurySharedModule"], _components_page_layout_content_page_layout_demo_content_module__WEBPACK_IMPORTED_MODULE_5__["PageLayoutDemoContentModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=page-layout-simple-page-layout-simple-module-es5.js.map
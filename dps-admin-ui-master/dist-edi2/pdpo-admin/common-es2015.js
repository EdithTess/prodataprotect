(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "CKU1":
/*!****************************************************************!*\
  !*** ./src/app/modules/models/personal-data-affected.model.ts ***!
  \****************************************************************/
/*! exports provided: $DataAffectedCategoryModel, DataAffectedCategoryModel, DataAffectedSubCategoryModel, PERSONAL_DATA_AFFECTED */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$DataAffectedCategoryModel", function() { return $DataAffectedCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAffectedCategoryModel", function() { return DataAffectedCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAffectedSubCategoryModel", function() { return DataAffectedSubCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PERSONAL_DATA_AFFECTED", function() { return PERSONAL_DATA_AFFECTED; });
class $DataAffectedCategoryModel {
}
class DataAffectedCategoryModel {
}
class DataAffectedSubCategoryModel {
}
const PERSONAL_DATA_AFFECTED = [{
        id: "1",
        name: "Identifiers",
        subCategories: [
            {
                id: "1",
                value: "Name"
            },
            {
                id: "2",
                value: "Nationality"
            },
            {
                id: "3",
                value: "Age"
            },
            {
                id: "4",
                value: "Marital Status"
            },
            {
                id: "5",
                value: "Postal address"
            },
            {
                id: "6",
                value: "E-mail address"
            },
            {
                id: "7",
                value: "Unique personal or online identifie"
            },
            {
                id: "8",
                value: "Account name"
            },
            {
                id: "9",
                value: "Identification number, symbol or  other  particulars  assigned to a person"
            },
            {
                id: "10",
                value: "Social Security numbe"
            },
            {
                id: "11",
                value: "Driver's license or passport number; or"
            },
            {
                id: "12",
                value: "Another  form  of  persistent  or probabilistic identifier that can  identify  a  particular  data subject."
            }
        ]
    },
    {
        id: "2",
        name: "Individual Commercial Information",
        subCategories: [
            {
                id: "1",
                value: "Records of personal propert"
            },
            {
                id: "2",
                value: "Purchasing habits."
            }
        ]
    },
    {
        id: "3",
        name: "Biometric Information",
        subCategories: [
            {
                id: "1",
                value: "Genetic"
            },
            {
                id: "2",
                value: "Physiological."
            },
            {
                id: "3",
                value: "Behavioural."
            },
            {
                id: "4",
                value: "Biological characteristics."
            }
        ]
    },
    {
        id: "4",
        name: "Sensory Data",
        subCategories: [
            {
                id: "1",
                value: "Audio"
            },
            {
                id: "2",
                value: "Visual."
            },
            {
                id: "3",
                value: "Olfactory."
            },
            {
                id: "4",
                value: "Biological characteristics."
            }
        ]
    },
    {
        id: "5",
        name: "Internet or similar network activity",
        subCategories: [
            {
                id: "1",
                value: "Browsing history"
            },
            {
                id: "2",
                value: "Search history"
            },
            {
                id: "3",
                value: "Olfactory."
            },
            {
                id: "4",
                value: "Interaction with a website, application or advertisement"
            }
        ]
    },
    {
        id: "6",
        name: "Geolocation data",
        subCategories: [
            {
                id: "1",
                value: "Geolocation  data  means  data  taken from a user's device or online activity (web  or  app)  which  indicates  the geographical location of that device, including GPS data."
            }
        ]
    },
    {
        id: "7",
        name: "Education information",
        subCategories: [
            {
                id: "1",
                value: "Educational level"
            },
            {
                id: "2",
                value: "Educational qualifications"
            }
        ]
    },
    {
        id: "8",
        name: "Professional or Employment related information",
        subCategories: [
            {
                id: "1",
                value: "Professional association membership detail"
            },
            {
                id: "2",
                value: "Performance evaluations"
            },
            {
                id: "3",
                value: "Disciplinary action"
            }
        ]
    },
    {
        id: "9",
        name: "Inferences drawn from other personal data to create Individual profiles",
        subCategories: [
            {
                id: "1",
                value: "Preferences"
            },
            {
                id: "2",
                value: "Characteristics"
            },
            {
                id: "3",
                value: "Psychological trends"
            },
            {
                id: "3",
                value: "Predispositions"
            },
            {
                id: "3",
                value: "Behaviour"
            },
            {
                id: "3",
                value: "Attitudes"
            },
            {
                id: "3",
                value: "Intelligence"
            },
            {
                id: "3",
                value: "Abilities"
            },
            {
                id: "3",
                value: "Aptitudes"
            }
        ]
    },
    {
        id: "10",
        name: "Special personal data",
        subCategories: [
            {
                id: "1",
                value: "Religious or philosophical beliefs"
            },
            {
                id: "2",
                value: "Political opinion"
            },
            {
                id: "3",
                value: "Sexual life"
            },
            {
                id: "3",
                value: "Predispositions"
            },
            {
                id: "3",
                value: "Financial information"
            },
            {
                id: "3",
                value: "Health status or medical records of an individual"
            }
        ]
    }
];


/***/ }),

/***/ "R3oc":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/components/page-layout-content/page-layout-demo-content.module.ts ***!
  \******************************************************************************************************/
/*! exports provided: PageLayoutDemoContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutDemoContentModule", function() { return PageLayoutDemoContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-layout-demo-content.component */ "hqoi");
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/fury-shared.module */ "WCGO");





class PageLayoutDemoContentModule {
}
PageLayoutDemoContentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageLayoutDemoContentModule });
PageLayoutDemoContentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageLayoutDemoContentModule_Factory(t) { return new (t || PageLayoutDemoContentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__["FurySharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageLayoutDemoContentModule, { declarations: [_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoContentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__["FurySharedModule"]], exports: [_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoContentComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutDemoContentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoContentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_3__["FurySharedModule"]
                ],
                exports: [_page_layout_demo_content_component__WEBPACK_IMPORTED_MODULE_2__["PageLayoutDemoContentComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "hqoi":
/*!*********************************************************************************************************!*\
  !*** ./src/app/pages/page-layouts/components/page-layout-content/page-layout-demo-content.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: PageLayoutDemoContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLayoutDemoContentComponent", function() { return PageLayoutDemoContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return []; };
class PageLayoutDemoContentComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageLayoutDemoContentComponent.ɵfac = function PageLayoutDemoContentComponent_Factory(t) { return new (t || PageLayoutDemoContentComponent)(); };
PageLayoutDemoContentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageLayoutDemoContentComponent, selectors: [["fury-page-layout-demo-content"]], decls: 41, vars: 4, consts: [[1, "margin-0"], [1, "margin-top-0", "secondary-text"], [3, "routerLink"], ["id", "tincidunt-veni-tellus-orci-aenean-consectetuer"], ["src", "assets/img/demo/mountain-cinematic.jpg"]], template: function PageLayoutDemoContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Cinematic Mountain View");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Example Page Layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Aenean eleifend ante maecenas pulvinar montes lorem et pede dis dolor pretium donec dictum. Vici consequat justo enim. Venenatis eget adipiscing luctus lorem. Adipiscing veni amet luctus enim sem libero tellus viverra venenatis aliquam. Commodo natoque quam pulvinar elit.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Eget aenean tellus venenatis. Donec odio tempus. Felis arcu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "pretium metus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " nullam quam aenean sociis quis sem neque vici libero. Venenatis nullam fringilla pretium magnis aliquam nunc vulputate integer augue ultricies cras. Eget viverra feugiat cras ut. Sit natoque montes tempus ligula eget vitae pede rhoncus maecenas consectetuer commodo condimentum aenean.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Tincidunt veni tellus orci aenean consectetuer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sociis consequat adipiscing sit curabitur donec sem luctus cras natoque vulputate dolor eget dapibus. Nec vitae eros ullamcorper laoreet dapibus mus ac ante viverra. A aenean sit augue curabitur et parturient nisi sed enim. Nulla nec quis sit quisque sem commodo ultricies neque. Lorem eget venenatis dui ante luctus ultricies tellus montes. Quis in sapien tempus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Aliquam enim arcu ut. Vulputate pede nisi arcu ut nullam. Ac elit ut ullamcorper aenean dolor pede nec aliquam. Cum enim a. Ut dui phasellus cras. Vivamus pulvinar justo faucibus nec semper lorem nullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "blockquote");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Quis adipiscing ligula donec ullamcorper tellus. Id odio vulputate aliquam nullam vitae tincidunt semper etiam quam donec quis.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Ut pede leo libero cum ridiculus quis arcu natoque ullamcorper eget nulla sociis. Semper condimentum quam integer lorem. Amet ac ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "dis semper eget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " a dictum ligula. Justo eu ut. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque. Ultricies dui vel ipsum eleifend dolor ante donec justo nullam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Eu ridiculus fringilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nam dictum vitae penatibus ligula id sem eget ante faucibus feugiat nascetur vel. Pretium vitae mus rhoncus sit maecenas quam felis orci adipiscing. Aenean parturient eget quam. Leo vel lorem sociis phasellus arcu dolor. Dis donec eu pede.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Venenatis ante veni nullam ridiculus penatibus ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "vidi eu consectetuer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " integer. Vulputate ipsum lorem nascetur rhoncus. Aliquam vitae elit blandit enim eget laoreet. Dapibus leo sociis quis nulla adipiscing amet integer sem ullamcorper in maecenas eu imperdiet.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ante blandit amet ultricies ut in nam massa rhoncus. Eget eu massa nisi quis viverra dapibus aliquam. Id ridiculus lorem ut amet dis orci tellus etiam aenean pellentesque.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Maecenas tempus aenean nulla ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "viverra neque");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " vel nec cras justo sapien condimentum ut varius. Blandit sem etiam vel nullam vulputate sociis amet varius dolor. Vitae a ut. Etiam rhoncus ante sit. Nisi nullam donec dui eu phasellus a elementum elit faucibus nec. Eros eu pulvinar pede luctus sit aenean lorem.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWxheW91dC1kZW1vLWNvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageLayoutDemoContentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-page-layout-demo-content',
                templateUrl: './page-layout-demo-content.component.html',
                styleUrls: ['./page-layout-demo-content.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sFxA":
/*!*********************************************!*\
  !*** ./src/app/services/routing.service.ts ***!
  \*********************************************/
/*! exports provided: RoutingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingService", function() { return RoutingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RoutingService {
    constructor() { }
}
RoutingService.ɵfac = function RoutingService_Factory(t) { return new (t || RoutingService)(); };
RoutingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoutingService, factory: RoutingService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoutingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-investigations-investigation-module"],{

/***/ "0/vc":
/*!***************************************************************!*\
  !*** ./src/app/modules/investigations/investigation-model.ts ***!
  \***************************************************************/
/*! exports provided: InvestigationModel, InvestigationNotes, $DataAffectedCategoryModel, DataAffectedCategoryModel, DataAffectedSubCategoryModel, Investigation, PersonalDataModel, PersonalData, PersonalDataAffected, RemedialActions, INVESTIGATION_JSON, INVESTIGATION_DEMO_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationModel", function() { return InvestigationModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationNotes", function() { return InvestigationNotes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "$DataAffectedCategoryModel", function() { return $DataAffectedCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAffectedCategoryModel", function() { return DataAffectedCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataAffectedSubCategoryModel", function() { return DataAffectedSubCategoryModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Investigation", function() { return Investigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDataModel", function() { return PersonalDataModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalData", function() { return PersonalData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalDataAffected", function() { return PersonalDataAffected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemedialActions", function() { return RemedialActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVESTIGATION_JSON", function() { return INVESTIGATION_JSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVESTIGATION_DEMO_DATA", function() { return INVESTIGATION_DEMO_DATA; });
// import { DataAffectedCategoryModel } from '../models/personal-data-affected.model';
// import { DataAffectedSubCategoryModel } from '../models/personal-data-affected.model';
/*export class ComplaintModel {
    id: any;
    regNo:string;
    personalDataAffected: string[];
    reasonForTheComplaint: string;
    complaintDetails: string;
    remedialAction: string;
    comments: DocumentComment[];
    lastModificationDate: string;
    status: string;
    dataSubject: DataSubjectModel
}
*/
class InvestigationModel {
}
class InvestigationNotes {
}
class $DataAffectedCategoryModel {
}
class DataAffectedCategoryModel {
}
class DataAffectedSubCategoryModel {
}
/*export class Complaint {
    id: any;
    regNo:string;
    personalDataAffected: string[];
    reasonForTheComplaint: string;
    complaintDetails: string;
    remedialAction: string;
    comments: DocumentComment[];
    lastModificationDate: string;
    status: string;
    dataSubject: DataSubjectModel;
    name: string;
    phone:string;
    addressedTo:string;


    constructor(complaint) {
        this.id = complaint.id;
        this.regNo = complaint.regNo;
        this.remedialAction = complaint.remedialAction;
        this.reasonForTheComplaint = complaint.reasonForTheComplaint;
        this.addressedTo = complaint.addressedTo;
        this.dataSubject = complaint.dataSubject;
        this.personalDataAffected = complaint.personalDataAffected;
        this.status = complaint.status;
        this.complaintDetails = complaint.complaintDetails;
        this.lastModificationDate = complaint.lastModificationDate;
        this.name = complaint.dataSubject.name
        this.phone = complaint.dataSubject.name;
        this.comments = complaint.comments;
    }
} */
class Investigation {
    constructor(investigation) {
        this.InvestigationID = investigation.InvestigationID;
        this.InvestigationTrackingNo = investigation.InvestigationTrackingNumber;
        this.EmailAddress = investigation.EmailAdress;
        this.FirstName = investigation.FirstName;
        this.FullDetailsOfInvestigation = investigation.FullDetailsOfInvestigation;
        this.LastName = investigation.LastName;
        this.Organisation = investigation.Organisation;
        this.PhoneNumber = investigation.PhoneNumber;
        this.PhysicalAddress = investigation.PhysicalAddress;
        this.RemedialActions = investigation.RemedialActions;
        this.PersonalDataAffected = investigation.PersonalDataAffected;
        this.comments = investigation.comments;
    }
}
class PersonalDataModel {
}
class PersonalData {
}
var PersonalDataAffected;
(function (PersonalDataAffected) {
    PersonalDataAffected["NATIONALITY"] = "Nationality";
    PersonalDataAffected["AGE"] = "Age / Date of Birth";
    PersonalDataAffected["MARITAL_STATUS"] = "Marital Status";
    PersonalDataAffected["EDUCATION"] = "Education Level";
    PersonalDataAffected["IDENTIFICATION"] = "Identification Number e.g NIN, TIN, Driving Permit Number";
    PersonalDataAffected["IDENTITY_DATA"] = "Identity Data";
    PersonalDataAffected["PHILOSPHICAL_BELIEFS"] = "Philosophical Beliefs";
    PersonalDataAffected["POLITICAL_OPINION"] = "Political Opinion";
    PersonalDataAffected["SEXUAL_LIFE"] = "Sexual Life";
    PersonalDataAffected["FINANCIAL_INFORMATION"] = "Financial Information";
    PersonalDataAffected["MEDICAL"] = "Medical Records";
})(PersonalDataAffected || (PersonalDataAffected = {}));
var RemedialActions;
(function (RemedialActions) {
    RemedialActions["CORRECT_THE_INFORMATION"] = "Correct the information";
    RemedialActions["DELETE_OR_DESTROY_THE_INFORMATION"] = " Delete or Destroy  The information";
    RemedialActions["NOTIFIY_THE_THIRD_PARTIES"] = "Write to or notify the third parties whom then data has been shared";
})(RemedialActions || (RemedialActions = {}));
const INVESTIGATION_JSON = {
    'id': 1,
    'regNo': 'C202100001',
    'personalDataAffected': [PersonalDataAffected.NATIONALITY, PersonalDataAffected.AGE],
    'status': 'Submitted',
    'reasonForTheInvestigation': 'Processing personal data without appropriate security measures',
    'investigationDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
    'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
    'comments': [
        {
            'instanceId': 23,
            'username': 'enmunyagwa',
            'creationDate': '23-02-2021 18:20:20',
            'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
        },
        {
            'instanceId': 23,
            'username': 'enmunyagwa',
            'creationDate': '23-02-2021 18:20:20',
            'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
        }
    ],
    'lastModificationDate': '23-02-2021 18:20:20',
    'dataSubject': {
        'id': 28372,
        'name': 'Munyagwa Enock',
        'phone': '0792310084',
        'email': 'enmunyagwa@gmail.com'
    }
};
const INVESTIGATION_DEMO_DATA = [
    {
        'id': 1,
        'regNo': 'C202100001',
        'addressedTo': 'Uganda Revenue Authority',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY, PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheInvestigation': 'Processing personal data without appropriate security measures',
        'investigationDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
        'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
        'comments': [
            {
                'instanceId': 23,
                'username': 'enmunyagwa',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
            {
                'instanceId': 23,
                'username': 'enmunyagwa',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
            }
        ],
        'lastModificationDate': '23-02-2021 18:20:20',
        'dataSubject': {
            'id': 28372,
            'name': 'Munyagwa Enock',
            'phone': '0792310084',
            'email': 'enmunyagwa@gmail.com'
        }
    },
    {
        'id': 1,
        'regNo': 'C202100003',
        'addressedTo': 'Airtel Uganda',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY, PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheComplaint': 'Infringement / Violation of Act',
        'complaintDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
        'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
        'comments': [
            {
                'instanceId': 23,
                'username': 'jkalungi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
            {
                'instanceId': 23,
                'username': 'mkajubi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
            }
        ],
        'lastModificationDate': '23-02-2021 18:20:20',
        'dataSubject': {
            'id': 28372,
            'name': 'John Kalungi',
            'phone': '0792310084',
            'email': 'jkalungi@gmail.com'
        }
    },
    {
        'id': 1,
        'regNo': 'C202100004',
        'addressedTo': 'Airtel Uganda',
        'personalDataAffected': [PersonalDataAffected.NATIONALITY, PersonalDataAffected.AGE],
        'status': 'Submitted',
        'reasonForTheComplaint': 'Inaccurate personal data in the possession of data controllers',
        'complaintDetails': 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors.',
        'remedialAction': 'Write to or notify the third parties with whom the data has been shared.',
        'comments': [
            {
                'instanceId': 23,
                'username': 'enmunyagwa',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'sd  Lorem Ipsum has been the industry'
            },
            {
                'instanceId': 23,
                'username': 'mkajubi',
                'creationDate': '23-02-2021 18:20:20',
                'comment': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\ Lorem Ipsum has been the industry'
            }
        ],
        'lastModificationDate': '23-02-2021 18:20:20',
        'dataSubject': {
            'id': 28372,
            'name': 'Isaac Akileng',
            'phone': '0792310084',
            'email': 'iakileng@gmail.com'
        }
    },
];


/***/ }),

/***/ "0aR6":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/investigations/components/investigations-find/investigations-find.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: InvestigationsFindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationsFindComponent", function() { return InvestigationsFindComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../@fury/shared/list/list-column.model */ "pbD1");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _services_workflow_service_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../services/workflow-service.service */ "3eU1");
/* harmony import */ var _company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../company-registration/company-registration.service */ "j7tn");
/* harmony import */ var _investigation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../investigation.service */ "u/+h");
/* harmony import */ var _layout_application_timeline_application_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../layout/application-timeline/application-timeline.component */ "2nsv");
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout.directive */ "xBcV");
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout-header.directive */ "Hbgg");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ "rnAf");
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout-content.directive */ "rvYj");
/* harmony import */ var _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../../@fury/shared/list/list.component */ "a+RD");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");


































const _c0 = ["autosize"];
function InvestigationsFindComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsFindComponent_th_7_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestigationsFindComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsFindComponent_td_8_Template_mat_checkbox_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InvestigationsFindComponent_ng_container_9_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r10.name, "");
} }
function InvestigationsFindComponent_ng_container_9_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r15 = ctx.$implicit;
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", row_r15[column_r10.property], " ");
} }
function InvestigationsFindComponent_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvestigationsFindComponent_ng_container_9_ng_container_1_th_1_Template, 2, 1, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvestigationsFindComponent_ng_container_9_ng_container_1_td_2_Template, 2, 1, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", column_r10.property);
} }
function InvestigationsFindComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InvestigationsFindComponent_ng_container_9_ng_container_1_Template, 3, 1, "ng-container", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const column_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", column_r10.isModelProperty);
} }
function InvestigationsFindComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 22);
} }
function InvestigationsFindComponent_td_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsFindComponent_td_12_Template_button_click_1_listener($event) { return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "more_vert");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-menu", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsFindComponent_td_12_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const row_r18 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.manageInvestigation(row_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "settings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Manage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r19);
} }
function InvestigationsFindComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 27);
} }
function InvestigationsFindComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
const _c1 = function () { return ["Investigations"]; };
class InvestigationsFindComponent {
    constructor(dialog, route, authService, router, _workflowService, registrationService, investigationService) {
        this.dialog = dialog;
        this.route = route;
        this.authService = authService;
        this.router = router;
        this._workflowService = _workflowService;
        this.registrationService = registrationService;
        this.investigationService = investigationService;
        // TODO:: Simulating a service with http that returns observables
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.$processingEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$errorsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$resultInvestigationsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.statusList = [];
        this.subscriptions = [];
        this.workflowID = '1';
        this.columns = [
            { name: 'Investigation ID', property: 'InvestigationID', isModelProperty: true, visible: false },
            { name: 'Investigation Tracking Number', property: 'InvestigationTrackingNo', visible: true, isModelProperty: true },
            { name: 'Organisation', property: 'Organisation', visible: true, isModelProperty: true },
            { name: 'Type of Investigation', property: 'InvestigationType', visible: true, isModelProperty: true },
            { name: 'Investigation Status', property: 'InvestigationStatus', visible: true, isModelProperty: true },
            { name: 'Actions', property: 'actions', visible: true },
        ];
        this.pageSize = 10;
        //   super(
        //     authService,
        //     _workflowService, registrationService, 
        //     investigationService
        // );
    }
    // TODO:: Need to hide addressedTo Column from data controllers its mainly for nita data-protection officers
    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]();
        console.log("here");
        this.getInvestigations();
        console.log(this.getInvestigations);
        // complaints
        this.subscriptions['$resultInvestigationsEvent'] = this.$resultInvestigationsEvent.subscribe(result => {
            if (result) {
                this.investigations = result;
                this.dataSource.data = result;
                // this.isLoaded = true;
            }
            else {
                console.log("expected");
            }
        });
        this.route.paramMap.subscribe(params => {
            console.log(params.has('navigationPrams'));
        });
        // this.statusList = this.getGenericDDL(this.statuses, {key: 'code', label: 'description'}, false);
        this.defineSearchFields();
    }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }
    onFilterChange(value) {
        if (!this.dataSource) {
            return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
    }
    ngOnDestroy() {
    }
    defineSearchFields() {
        this.searchFields = [
            {
                label: 'Complaint reference #',
                fieldName: 'complaintReference',
                operators: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["TextFinderOptions"],
                dataType: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DataType"].TEXT
            },
            {
                label: 'Data subject',
                fieldName: 'subjectNames',
                operators: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["TextFinderOptions"],
                dataType: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DataType"].TEXT
            },
            {
                label: 'Form Types',
                fieldName: 'Form',
                operators: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["LookupFinderOptions"],
                dataType: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DataType"].TEXT,
                lookupOptions: this.statusList,
                multiple: true
            },
            {
                label: 'Reason for the complaint',
                fieldName: 'type',
                operators: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["TextFinderOptions"],
                dataType: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DataType"].TEXT
            },
            {
                label: 'Filed Against',
                fieldName: 'compliantAgainst',
                operators: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["TextFinderOptions"],
                dataType: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DataType"].TEXT
            },
            {
                label: 'Registration date',
                fieldName: 'registrationDate',
                operators: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DateFinderOptions"],
                dataType: _fury_shared_list_list_column_model__WEBPACK_IMPORTED_MODULE_1__["DataType"].DATETIME
            },
        ];
    }
    getInvestigations() {
        // tslint:disable-next-line:max-line-length
        this.investigationService.getInvestigations(this.$processingEvent, this.$resultInvestigationsEvent, this.$errorsEvent);
    }
    viewInvestigation(investigation) {
        this.router.navigate(['/investigations/view-investigation'], { state: { InvestigationTrackingNumber: investigation.InvestigationTrackingNo } }).then();
    }
    manageInvestigation(investigation) {
        this.router.navigate(['/investigations/investigations-edit'], { state: { InvestigationTrackingNumber: investigation.InvestigationTrackingNo,
                InvestigationID: investigation.InvestigationID,
            } }).then();
    }
    viewApplicationTimeLine() {
        this.dialog.open(_layout_application_timeline_application_timeline_component__WEBPACK_IMPORTED_MODULE_13__["ApplicationTimelineComponent"], {
            width: '941px',
            height: '595px',
            data: this.workflowTimeLine
        });
    }
}
InvestigationsFindComponent.ɵfac = function InvestigationsFindComponent_Factory(t) { return new (t || InvestigationsFindComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_9__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workflow_service_service__WEBPACK_IMPORTED_MODULE_10__["WorkflowServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_11__["CompanyRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_investigation_service__WEBPACK_IMPORTED_MODULE_12__["InvestigationService"])); };
InvestigationsFindComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationsFindComponent, selectors: [["fury-investigations-find"]], viewQuery: function InvestigationsFindComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
    } }, inputs: { columns: "columns" }, decls: 16, vars: 11, consts: [["mode", "card"], ["current", "Find", 3, "crumbs"], ["name", "Investigations", "finderDialogTitle", "Investigations Finder", 3, "columns", "searchFields", "filterChange"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checkbox"], ["class", "actions-cell", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "actions-cell", "mat-cell", "", 4, "matCellDef"], [4, "ngFor", "ngForOf"], ["matColumnDef", "actions"], ["class", "actions-cell", "mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "clickable route-animations-elements", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "paginator", 3, "pageSize"], ["mat-header-cell", "", 1, "actions-cell"], ["color", "primary", 3, "click"], ["mat-cell", "", 1, "actions-cell"], [3, "matColumnDef", 4, "ngIf"], [3, "matColumnDef"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "", 1, "actions-cell"], ["type", "button", "mat-icon-button", "", 3, "matMenuTriggerFor", "click"], ["yPosition", "below", "xPosition", "before"], ["actionsMenu", "matMenu"], ["mat-menu-item", "", "routerLinkActive", "router-link-active", 3, "click"], ["mat-header-row", ""], ["mat-row", "", 1, "clickable", "route-animations-elements"]], template: function InvestigationsFindComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fury-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-page-layout-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fury-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterChange", function InvestigationsFindComponent_Template_fury_list_filterChange_4_listener($event) { return ctx.onFilterChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InvestigationsFindComponent_th_7_Template, 2, 0, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvestigationsFindComponent_td_8_Template, 2, 0, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvestigationsFindComponent_ng_container_9_Template, 2, 1, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InvestigationsFindComponent_th_11_Template, 1, 0, "th", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, InvestigationsFindComponent_td_12_Template, 11, 1, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InvestigationsFindComponent_tr_13_Template, 1, 0, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InvestigationsFindComponent_tr_14_Template, 1, 0, "tr", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-paginator", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx.columns)("searchFields", ctx.searchFields);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.visibleColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSize", ctx.pageSize);
    } }, directives: [_fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_14__["PageLayoutDirective"], _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_15__["PageLayoutHeaderDirective"], _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbsComponent"], _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_17__["PageLayoutContentDirective"], _fury_shared_list_list_component__WEBPACK_IMPORTED_MODULE_18__["ListComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_20__["MatCheckbox"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSortHeader"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_22__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkActive"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RpZ2F0aW9ucy1maW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestigationsFindComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-investigations-find',
                templateUrl: './investigations-find.component.html',
                styleUrls: ['./investigations-find.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_9__["KeycloakService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _services_workflow_service_service__WEBPACK_IMPORTED_MODULE_10__["WorkflowServiceService"] }, { type: _company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_11__["CompanyRegistrationService"] }, { type: _investigation_service__WEBPACK_IMPORTED_MODULE_12__["InvestigationService"] }]; }, { columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"], { static: true }]
        }], autosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autosize']
        }] }); })();


/***/ }),

/***/ "2nsv":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/application-timeline/application-timeline.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ApplicationTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationTimelineComponent", function() { return ApplicationTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _modules_models_document_workflow_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../modules/models/document-workflow.model */ "6xCn");
/* harmony import */ var angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-mgl-timeline */ "elPL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ApplicationTimelineComponent_mgl_timeline_entry_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Action Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Remark:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Action Performed At:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Performed By:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "---------------------------------------------------------------------------");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const action_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", action_r4.ActionName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", action_r4.ActionRemark, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 4, action_r4.ActionDate, "medium"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", action_r4.PerformedBy, "");
} }
function ApplicationTimelineComponent_mgl_timeline_entry_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mgl-timeline-entry", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("expand", function ApplicationTimelineComponent_mgl_timeline_entry_4_Template_mgl_timeline_entry_expand_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const i_r2 = ctx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onExpandEntry($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mgl-timeline-entry-header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationTimelineComponent_mgl_timeline_entry_4_Template_mgl_timeline_entry_header_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onHeaderClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mgl-timeline-entry-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationTimelineComponent_mgl_timeline_entry_4_ng_container_4_Template, 20, 7, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mgl-timeline-entry-dot", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationTimelineComponent_mgl_timeline_entry_4_Template_mgl_timeline_entry_dot_click_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onDotClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mgl-timeline-entry-side");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const entry_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", entry_r1.StepName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expandAnimationTiming", ctx_r0.contentAnimation ? "200ms ease" : "0ms")("collapseAnimationTiming", ctx_r0.contentAnimation ? "100ms ease" : "0ms");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", entry_r1.ActionsHistory);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](entry_r1.IsCurrent ? "primary" : "accent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("size", ctx_r0.size)("expandAnimationTiming", ctx_r0.dotAnimation ? "200ms ease" : "0ms")("collapseAnimationTiming", ctx_r0.dotAnimation ? "100ms ease" : "0ms");
} }
class ApplicationTimelineComponent {
    constructor(workFlowTimeline, dialogRef) {
        this.workFlowTimeline = workFlowTimeline;
        this.dialogRef = dialogRef;
        this.alternate = true;
        this.toggle = true;
        this.color = false;
        this.size = 40;
        this.expandEnabled = true;
        this.contentAnimation = true;
        this.dotAnimation = true;
        this.side = 'left';
    }
    ngOnInit() {
        this.entries = this.workFlowTimeline.data;
        console.log('keeper of the timeline ' + JSON.stringify(this.workFlowTimeline));
    }
    onExpandEntry(expanded, index) {
        console.log(`Expand status of entry #${index} changed to ${expanded}`);
    }
    onHeaderClick(event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    }
    onDotClick(event) {
        if (!this.expandEnabled) {
            event.stopPropagation();
        }
    }
}
ApplicationTimelineComponent.ɵfac = function ApplicationTimelineComponent_Factory(t) { return new (t || ApplicationTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
ApplicationTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ApplicationTimelineComponent, selectors: [["fury-application-timeline"]], decls: 6, vars: 4, consts: [["mat-dialog-title", ""], [3, "toggle", "alternate", "side"], [3, "expand", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "end center"], [3, "expand"], [3, "click"], [3, "expandAnimationTiming", "collapseAnimationTiming"], [4, "ngFor", "ngForOf"], [3, "size", "expandAnimationTiming", "collapseAnimationTiming", "click"]], template: function ApplicationTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Application Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mgl-timeline", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationTimelineComponent_mgl_timeline_entry_4_Template, 7, 9, "mgl-timeline-entry", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "mat-dialog-actions", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggle", ctx.toggle)("alternate", ctx.alternate)("side", ctx.side);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.entries);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__["ɵb"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__["ɵd"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__["ɵc"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__["ɵe"], angular_mgl_timeline__WEBPACK_IMPORTED_MODULE_3__["ɵf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["md-toolbar[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\nmd-toolbar[_ngcontent-%COMP%]:not(.mat-primary)   .mat-toolbar-row[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  height: auto;\n  padding: 5px 0;\n}\nmd-toolbar[_ngcontent-%COMP%]:not(.mat-primary)   button[_ngcontent-%COMP%] {\n  margin: 5px !important;\n}\nmgl-timeline[_ngcontent-%COMP%]:not(.mobile) {\n  padding: 50px 20px;\n}\nmgl-timeline.mobile[_ngcontent-%COMP%] {\n  padding-right: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxhcHBsaWNhdGlvbi10aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7QUFFSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFOO0FBR0k7RUFDRSxzQkFBQTtBQUROO0FBT0E7RUFDRSxrQkFBQTtBQUpGO0FBT0E7RUFDRSxtQkFBQTtBQUpGIiwiZmlsZSI6ImFwcGxpY2F0aW9uLXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWQtdG9vbGJhciB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcblxuICAmOm5vdCgubWF0LXByaW1hcnkpIHtcbiAgICAmIC5tYXQtdG9vbGJhci1yb3cge1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuXG4gICAgJiBidXR0b24ge1xuICAgICAgbWFyZ2luOiA1cHggIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxufVxuXG5tZ2wtdGltZWxpbmU6bm90KC5tb2JpbGUpIHtcbiAgcGFkZGluZzogNTBweCAyMHB4O1xufVxuXG5tZ2wtdGltZWxpbmUubW9iaWxlIHtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-application-timeline',
                templateUrl: './application-timeline.component.html',
                styleUrls: ['./application-timeline.component.scss']
            }]
    }], function () { return [{ type: _modules_models_document_workflow_model__WEBPACK_IMPORTED_MODULE_2__["WorkFlowTimeline"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "3wlN":
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/investigations/components/investigations-edit/investigations-edit.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: InvestigationsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationsEditComponent", function() { return InvestigationsEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _fury_shared_base_fury_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../@fury/shared/base-fury-form */ "M2Gj");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _services_workflow_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/workflow-service.service */ "3eU1");
/* harmony import */ var _company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../company-registration/company-registration.service */ "j7tn");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _layout_bottomsheets_view_pdf_document_bottomsheet_view_pdf_document_bottomsheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../layout/bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component */ "r9HN");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _services_api_endpoints_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../services/api-endpoints.service */ "7R0Y");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _services_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../services/api.service */ "H+bZ");
/* harmony import */ var _layout_investigation_comments_investigation_comments_investigation_comments_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../layout/investigation-comments/investigation-comments/investigation-comments.component */ "ehGj");
/* harmony import */ var _fury_services_util_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@fury/services/util.service */ "zqeb");
/* harmony import */ var _pages_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../pages/services/snack-bar.service */ "aViL");
/* harmony import */ var _investigation_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../investigation.service */ "u/+h");
/* harmony import */ var _investigation_model__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../investigation-model */ "0/vc");
/* harmony import */ var _complaints_complaints_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../complaints/complaints.service */ "aYi0");
/* harmony import */ var _layout_application_timeline_application_timeline_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../layout/application-timeline/application-timeline.component */ "2nsv");
/* harmony import */ var _layout_dialogs_investigation_dialogs_investigation_notes_investigation_notes_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../layout/dialogs/investigation-dialogs/investigation-notes/investigation-notes.component */ "4tE6");
/* harmony import */ var _layout_dialogs_forward_investigation_forward_investigations_forward_investigations_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../layout/dialogs/forward-investigation/forward-investigations/forward-investigations.component */ "TOhY");
/* harmony import */ var _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../../authentication/authentication.service */ "9Ku7");
/* harmony import */ var _layout_dialogs_investigation_dialogs_investigation_information_gather_more_information_gather_more_information_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../../layout/dialogs/investigation-dialogs/investigation-information/gather-more-information/gather-more-information.component */ "vmEL");
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout.directive */ "xBcV");
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout-header.directive */ "Hbgg");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ "rnAf");
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout-content.directive */ "rvYj");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ "4FRi");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");



























































const _c0 = ["autosize"];
function InvestigationsEditComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.markAsResolved(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Close file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { "margin-left": "10px" }; };
function InvestigationsEditComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.forwardInvestigation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Forward To ODPP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function InvestigationsEditComponent_div_21_div_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notes_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notes_r14.InvestigationNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", notes_r14.FirstName, " ", notes_r14.LastName, "");
} }
function InvestigationsEditComponent_div_21_span_77_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r15.document.Size, " Mbs");
} }
function InvestigationsEditComponent_div_21_span_77_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvestigationsEditComponent_div_21_span_77_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Document: ", ctx_r12.document.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.document && ctx_r12.document.Size);
} }
function InvestigationsEditComponent_div_21_p_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No document found. Please attach");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { width: "100px", height: "100px" }; };
function InvestigationsEditComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fury-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-card-header-heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Investigation Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fury-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Data Subject Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Data subject name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data Subject Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Data Subject Phone");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Organisation under investigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Organisation Contact Person Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Contact Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "General Investigation Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Initial Investigation Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "PDPO Director's investigation notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-grid-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "textarea", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Police Investigation Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, InvestigationsEditComponent_div_21_div_63_Template, 6, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "textarea", 31, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "DPP Investigation Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "textarea", 32, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Evidence Of Investigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_div_21_Template_div_click_75_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onReadDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](77, InvestigationsEditComponent_div_21_span_77_Template, 3, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, InvestigationsEditComponent_div_21_p_78_Template, 2, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutGap", ctx_r2.gap);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-sm", ctx_r2.col2)("@fadeInUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.investigationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.InvestigationNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.document && ctx_r2.document.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.document && !ctx_r2.document.Base64);
} }
function InvestigationsEditComponent_div_22_div_105_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const notes_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](notes_r33.InvestigationNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", notes_r33.FirstName, " ", notes_r33.LastName, "");
} }
function InvestigationsEditComponent_div_22_span_119_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r34.document.Size, " Mbs");
} }
function InvestigationsEditComponent_div_22_span_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InvestigationsEditComponent_div_22_span_119_span_2_Template, 2, 1, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Document: ", ctx_r31.document.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.document && ctx_r31.document.Size);
} }
function InvestigationsEditComponent_div_22_p_120_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No document found. Please attach");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return { "margin-right": "20px" }; };
function InvestigationsEditComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fury-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-card-header-heading");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Investigation Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fury-card-content", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name of Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 39, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Organisation that is affected");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Registration Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 40, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "The number assigned after registration");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Email Address of Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 41, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Contact Email of Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Telephone Number of Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "textarea", 43, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Contact Number of Organisation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Causes of Breach");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Likely Causes of the breach");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "textarea", 45, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "                                ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Please specify if any financial or sensitive personal data that has been affected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Number of data Subjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "textarea", 46, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Subjects affected by breach");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Total Number of Records held");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "textarea", 47, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Breached records as a percentage");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Recovery Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Data recovery details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "textarea", 48, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "If so, please provide details of how and when this occurred. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Prevention Steps");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "textarea", 49, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "mat-hint");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "What steps have been taken to prevent a recurrence of this incident ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "General Investigation Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Initial Investigation Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "PDPO Director's investigation notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-grid-list", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "textarea", 50, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Police Investigation Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](105, InvestigationsEditComponent_div_22_div_105_Template, 6, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "textarea", 31, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "mat-form-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "DPP Investigation Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "textarea", 32, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Evidence Of Investigation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_div_22_Template_div_click_117_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r35.onReadDocument(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](119, InvestigationsEditComponent_div_22_span_119_Template, 3, 2, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](120, InvestigationsEditComponent_div_22_p_120_Template, 2, 0, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-sm", ctx_r3.col2)("@fadeInUp", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.investigationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](78);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.InvestigationNotes);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.document && ctx_r3.document.Name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.document && !ctx_r3.document.Base64);
} }
const _c4 = function () { return ["Investigations"]; };
const _c5 = function () { return { "margin-left": "300px" }; };
class InvestigationsEditComponent extends _fury_shared_base_fury_form__WEBPACK_IMPORTED_MODULE_3__["BaseFuryForm"] {
    constructor(formBuilder, activateRoute, route, dialog, bottomsheet, endpoints, http, service, allDialogRef, auth, utilService, _auth, snackBar, authService, _workflowService, registrationService, investigationService, complaintService) {
        super(authService, _workflowService, registrationService, complaintService);
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.route = route;
        this.dialog = dialog;
        this.bottomsheet = bottomsheet;
        this.endpoints = endpoints;
        this.http = http;
        this.service = service;
        this.allDialogRef = allDialogRef;
        this.auth = auth;
        this.utilService = utilService;
        this._auth = _auth;
        this.snackBar = snackBar;
        this.authService = authService;
        this._workflowService = _workflowService;
        this.registrationService = registrationService;
        this.investigationService = investigationService;
        this.complaintService = complaintService;
        // Simulating A Service
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.personalDataEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.PersonalDataAffected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.investigationDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$processingEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$errorsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$resultInvestigationsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
        this.workflowID = '1';
        this.ActionTakenCheckboxValue = 0;
        this.disableResolve = true;
        this.disableForward = false;
        this.processing = false;
        this.isDirector = false;
        this.isPolice = false;
        this.isODPP = false;
        this.isTechnical = false;
        this.isLegal = false;
        this.InvestigationNotes = new _investigation_model__WEBPACK_IMPORTED_MODULE_20__["InvestigationNotes"];
        //MAin object
        this.application = new _investigation_model__WEBPACK_IMPORTED_MODULE_20__["InvestigationModel"]();
        this.DataSubjectsCategories = [];
        this.investigationReasons = [];
        this.list = [];
        this.permittedActions = [];
        this.dataCategories = [];
        this.$dataCategories = [];
        this.$subCategories = [];
        this.dataSubcategories = [];
        this.dataCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"];
        this.dataSubCategory = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"];
        //Button Config
        this.buttonIcon = 'add_circle_outline';
        this.buttonLabel = 'Add';
        //boolean
        this.isEditingPersonalData = false;
        this.tableEditable = true;
        this.ResolveInvestigation = false;
        this.CanForwardToDPP = false;
        // int
        this.personalDataIndex = 0;
        this.personalNumber = 1;
        this._gap = 16;
        this.gap = `${this._gap}px`;
        this.col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
        this.col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;
        this.InvestigationTrackingNumber = this.route.getCurrentNavigation().extras.state.InvestigationTrackingNumber;
        console.log(this.InvestigationTrackingNumber);
        this.InvestigationID = this.route.getCurrentNavigation().extras.state.InvestigationID;
        console.log(this.InvestigationID);
        this.accesses = authService.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
        console.log(this.accesses);
        console.log(_auth.getUser().id);
        if (this.accesses.includes('resolve.investigation')) {
            this.ResolveInvestigation = true;
        }
        if (this.accesses.includes('forward.investigation')) {
            this.CanForwardToDPP = true;
        }
    }
    ngOnInit() {
        this.initForm();
        this.getInvestigation();
        this.subscriptions['$resultComplaintsEvent'] = this.$resultInvestigationsEvent.subscribe(result => {
            if (result) {
                this.httpSub = this.http.get(this.endpoints.getInvestigationNotes + '?InvestigationTrackingNo=' + this.InvestigationTrackingNumber)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_14__["catchError"])(this.service.handleError))
                    .subscribe((response) => {
                    console.log(response);
                    this.application = result;
                    this.InvestigationNotes = response;
                    console.log(this.InvestigationNotes);
                    console.log(this.application);
                    this.mapFields();
                    this.dialogRef.afterClosed().subscribe(() => {
                        this.allDialogRef.closeAll();
                        this.route.navigate(['/investigations/find']);
                    });
                    this.processing = false;
                }, (error) => {
                    this.processing = false;
                    if (error.error.message) {
                    }
                    else {
                        this.service.determineErrorResponse(error);
                    }
                });
            }
        });
    }
    initForm() {
        this.investigationForm = this.formBuilder.group({
            reasonForTheInvestigation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            InvestigationDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            dataSubjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            dataSubjectPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            dataSubjectEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ContactFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ContactLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ContactEmailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            Organisation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            lastModificationDate: [],
            // for breaches
            OrganisationName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            RegNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            OrganisationEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            OrganisationNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            BreachCauses: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            DataSubjects: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            measures: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            detailsOfRecovery: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            preventionSteps: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            investigationDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            PoliceNotes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            DPPNotes: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])]
        });
    }
    getFormData() {
        const data = {
            SubjectName: this.investigationForm.get('dataSubjectName').value ? this.investigationForm.get('dataSubjectName').value : '',
            SubjectEmail: this.investigationForm.get('dataSubjectEmail').value ? this.investigationForm.get('dataSubjectEmail').value : '',
            SubjectPhone: this.investigationForm.get('dataSubjectPhone').value ? this.investigationForm.get('dataSubjectPhone').value : '',
            SubjectOrganisation: this.investigationForm.get('InvestigationCategory').value ? this.investigationForm.get('InvestigationCategory').value : '',
            InvestigationInformation: this.investigationForm.get('investigationDetails').value ? this.investigationForm.get('investigationDetails').value : '',
        };
        return data;
    }
    get getSamplJson() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_investigation_model__WEBPACK_IMPORTED_MODULE_20__["INVESTIGATION_JSON"]);
    }
    getInvestigation() {
        // tslint:disable-next-line:max-line-length
        this.investigationService.getInvestigation(this.InvestigationTrackingNumber, this.$processingEvent, this.$resultInvestigationsEvent, this.$errorsEvent);
    }
    markAsResolved() {
        const dialogRef = this.dialog.open(_layout_investigation_comments_investigation_comments_investigation_comments_component__WEBPACK_IMPORTED_MODULE_16__["InvestigationCommentsComponent"], {
            width: '1391px',
            height: '595px',
            data: {
                InvestigationTrackingNumber: this.InvestigationTrackingNumber,
                Status: 4,
                ClosingRemarksOwner: this._auth.getUser().id
            }
        });
    }
    mapFields() {
        // for complaints
        this.investigationForm.get('dataSubjectName').setValue(this.application[0].FirstName + ' ' + this.application[0].LastName);
        this.investigationForm.get('dataSubjectPhone').setValue(this.application[0].PhoneNumber);
        this.investigationForm.get('dataSubjectEmail').setValue(this.application[0].EmailAddress);
        this.investigationForm.get('Organisation').setValue(this.application[0].Organisation);
        this.investigationForm.get('ContactFirstName').setValue(this.application[0].ContactPersonFirstName);
        this.investigationForm.get('ContactLastName').setValue(this.application[0].ContactPersonLastName);
        this.investigationForm.get('ContactEmailAddress').setValue(this.application[0].ContactPersonEmailAddress);
        this.investigationForm.get('InvestigationDetails').setValue(this.application[0].InvestigationNotes);
        // for breaches
        this.investigationForm.get('OrganisationName').setValue(this.application[0].OrganisationName);
        this.investigationForm.get('RegNo').setValue(this.application[0].RegNo);
        this.investigationForm.get('OrganisationEmail').setValue(this.application[0].OrganisationEmail);
        this.investigationForm.get('OrganisationNumber').setValue(this.application[0].OrganisationNumber);
        this.investigationForm.get('BreachCauses').setValue(this.application[0].BreachCauses);
        this.investigationForm.get('DataSubjects').setValue(this.application[0].DataSubjects);
        this.investigationForm.get('measures').setValue(this.application[0].measures);
        this.investigationForm.get('detailsOfRecovery').setValue(this.application[0].detailsOfRecovery);
        this.investigationForm.get('preventionSteps').setValue(this.application[0].preventionSteps);
        this.investigationForm.get('investigationDetails').setValue(this.application[0].investigationDetails);
        this.investigationForm.get('PoliceNotes').setValue(this.application[0].PoliceNotes);
        this.investigationForm.get('DPPNotes').setValue(this.application[0].DPPNotes);
    }
    makeNotes() {
        let Status;
        if (this.ResolveInvestigation == true) {
            Status = 3;
        }
        else {
            Status = 2;
        }
        const dialogRef = this.dialog.open(_layout_dialogs_investigation_dialogs_investigation_notes_investigation_notes_component__WEBPACK_IMPORTED_MODULE_23__["InvestigationNotesComponent"], {
            width: '1391px',
            height: '595px',
            data: {
                InvestigationTrackingNumber: this.InvestigationTrackingNumber,
                Status: Status,
                EvidenceOwner: this._auth.getUser().id
            }
        });
    }
    onReadDocument() {
        // console.log('document:', document);
        this.bottomsheetRef = this.bottomsheet.open(_layout_bottomsheets_view_pdf_document_bottomsheet_view_pdf_document_bottomsheet_component__WEBPACK_IMPORTED_MODULE_10__["ViewPdfDocumentBottomsheetComponent"], {
            disableClose: true,
            panelClass: ['view-pdf-document-bottomsheet', 'bottomsheets'],
            data: {
                url: this.document.Base64,
                title: this.document.Name
            }
        });
    }
    viewApplicationTimeLine() {
        this.dialog.open(_layout_application_timeline_application_timeline_component__WEBPACK_IMPORTED_MODULE_22__["ApplicationTimelineComponent"], {
            width: '941px',
            height: '595px',
            data: this.workflowTimeLine
        });
    }
    forwardInvestigation() {
        let Status;
        if (this.ResolveInvestigation == true) {
            Status = 4;
        }
        else {
            Status = 3;
        }
        const dialogRef = this.dialog.open(_layout_dialogs_forward_investigation_forward_investigations_forward_investigations_component__WEBPACK_IMPORTED_MODULE_24__["ForwardInvestigationsComponent"], {
            width: '500px',
            height: '200px',
            data: {
                InvestigationTrackingNumber: this.InvestigationTrackingNumber,
                Status: Status,
                User: this._auth.getUser().id
                // PoliceComments: PoliceComments,
                // isLegal : isLegal
            }
        });
    }
    moreInformation() {
        this.dialog.open(_layout_dialogs_investigation_dialogs_investigation_information_gather_more_information_gather_more_information_component__WEBPACK_IMPORTED_MODULE_26__["GatherMoreInformationComponent"], {
            width: '1391px',
            height: '595px',
            data: {
                InvestigationTrackingNumber: this.InvestigationTrackingNumber,
            }
        }).afterClosed().subscribe((dialogResult) => {
        });
    }
}
InvestigationsEditComponent.ɵfac = function InvestigationsEditComponent_Factory(t) { return new (t || InvestigationsEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_endpoints_service__WEBPACK_IMPORTED_MODULE_13__["ApiEndpointsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_fury_services_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_25__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_18__["SnackBarService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workflow_service_service__WEBPACK_IMPORTED_MODULE_7__["WorkflowServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_8__["CompanyRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_investigation_service__WEBPACK_IMPORTED_MODULE_19__["InvestigationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_complaints_complaints_service__WEBPACK_IMPORTED_MODULE_21__["ComplaintService"])); };
InvestigationsEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestigationsEditComponent, selectors: [["fury-investigations-edit"]], viewQuery: function InvestigationsEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
    } }, inputs: { personalDataList: "personalDataList", isViewOnly: "isViewOnly", personalDataEvent: "personalDataEvent" }, outputs: { PersonalDataAffected: "PersonalDataAffected", investigationDetails: "investigationDetails" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 23, vars: 14, consts: [["mode", "card"], ["current", "Manage", 3, "crumbs"], ["fxLayout", "column", 3, "fxLayoutGap"], [1, "actions-button-padding"], [1, "example-spacer"], ["mat-raised-button", "", "matTooltip", "View Timeline", "class", "actions-button-padding", "color", "primary", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "class", "actions-button-padding", "color", "primary", 3, "ngStyle", "click", 4, "ngIf"], ["mat-raised-button", "", "matTooltip", "View Timeline", "color", "primary", 1, "actions-button-padding", 3, "ngStyle", "click"], ["mat-raised-button", "", "color", "primary", 1, "actions-button-padding", 3, "ngStyle", "click"], ["fxFlex", "noshrink", "fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "start stretch", 3, "fxLayoutGap", 4, "ngIf"], [4, "ngIf"], ["mat-raised-button", "", "matTooltip", "View Timeline", "color", "primary", 1, "actions-button-padding", 3, "click"], ["fxFlex", "noshrink", "fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "start stretch", 3, "fxLayoutGap"], ["fxFlex", "grow", 1, "basic-forms", "route-animations-elements", 3, "fxFlex.gt-sm"], ["fxLayout", "column", 1, "form-padding"], [3, "formGroup"], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "24px"], ["fxFlex", "2 1 auto"], ["formControlName", "dataSubjectName", "matInput", ""], ["formControlName", "dataSubjectEmail", "matInput", ""], ["formControlName", "dataSubjectPhone", "matInput", ""], ["formControlName", "Organisation", "matInput", ""], ["formControlName", "ContactFirstName", "matInput", ""], ["formControlName", "ContactLastName", "matInput", ""], ["formControlName", "ContactEmailAddress", "matInput", ""], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "content"], ["cols", "4", "rowHeight", "4rem"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "InvestigationDetails", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"], ["fxFlex", "2 1 auto", "appearance", "fill"], [4, "ngFor", "ngForOf"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "PoliceNotes", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "DPPNotes", "cdkAutosizeMaxRows", "5"], ["matTooltip", "Open Document", 1, "uploaded-document", 3, "click"], ["src", "./assets/img/pdf.png", "alt", "", 3, "ngStyle"], ["class", "no-document-found", 4, "ngIf"], [1, "no-document-found"], ["fxFlex", "2 2 auto", 3, "ngStyle"], [1, "required-field"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "OrganisationName", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "RegNo", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "OrganisationEmail", "cdkAutosizeMaxRows", "5"], ["fxFlex", "2 2 auto"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "OrganisationNumber", "cdkAutosizeMaxRows", "5"], ["fxFlex", "2 2 auto", "appearance", "fill"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "BreachCauses", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "DataSubjects", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "measures", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "detailsOfRecovery", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "preventionSteps", "cdkAutosizeMaxRows", "5"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "investigationDetails", "cdkAutosizeMaxRows", "5"]], template: function InvestigationsEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fury-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-toolbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-toolbar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvestigationsEditComponent_button_8_Template, 3, 0, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, InvestigationsEditComponent_button_9_Template, 3, 2, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_Template_button_click_10_listener() { return ctx.moreInformation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Request for further investigation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_Template_button_click_13_listener() { return ctx.makeNotes(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Make Notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InvestigationsEditComponent_Template_button_click_16_listener() { return ctx.viewApplicationTimeLine(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "view_timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Application Timeline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, InvestigationsEditComponent_div_21_Template, 79, 9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, InvestigationsEditComponent_div_22_Template, 121, 14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ResolveInvestigation == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.CanForwardToDPP == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application[0].InvestigationComplaintID !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application[0].InvestigationDataBreachID !== null);
    } }, directives: [_fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_27__["PageLayoutDirective"], _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_28__["PageLayoutHeaderDirective"], _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_29__["BreadcrumbsComponent"], _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_30__["PageLayoutContentDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultLayoutGapDirective"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_32__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_34__["MatButton"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_35__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_36__["DefaultStyleDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_37__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_31__["DefaultLayoutAlignDirective"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_38__["FuryCard"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_38__["FuryCardHeader"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_38__["FuryCardHeaderTitle"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_38__["FuryCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_40__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_41__["MatGridTile"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"], _angular_common__WEBPACK_IMPORTED_MODULE_33__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatHint"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RpZ2F0aW9ucy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestigationsEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-investigations-edit',
                templateUrl: './investigations-edit.component.html',
                styleUrls: ['./investigations-edit.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheet"] }, { type: _services_api_endpoints_service__WEBPACK_IMPORTED_MODULE_13__["ApiEndpointsService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClient"] }, { type: _services_api_service__WEBPACK_IMPORTED_MODULE_15__["ApiService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialog"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"] }, { type: _fury_services_util_service__WEBPACK_IMPORTED_MODULE_17__["UtilService"] }, { type: _authentication_authentication_service__WEBPACK_IMPORTED_MODULE_25__["AuthenticationService"] }, { type: _pages_services_snack_bar_service__WEBPACK_IMPORTED_MODULE_18__["SnackBarService"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"] }, { type: _services_workflow_service_service__WEBPACK_IMPORTED_MODULE_7__["WorkflowServiceService"] }, { type: _company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_8__["CompanyRegistrationService"] }, { type: _investigation_service__WEBPACK_IMPORTED_MODULE_19__["InvestigationService"] }, { type: _complaints_complaints_service__WEBPACK_IMPORTED_MODULE_21__["ComplaintService"] }]; }, { personalDataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isViewOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], personalDataEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], PersonalDataAffected: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], investigationDetails: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], autosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autosize']
        }] }); })();


/***/ }),

/***/ "6xCn":
/*!***********************************************************!*\
  !*** ./src/app/modules/models/document-workflow.model.ts ***!
  \***********************************************************/
/*! exports provided: WorkFlowConstants, WorkFlowActions, Action, ActionPerformed, ActionPerformedRequestMoreInfo, WorkFlowTimeline, WorkFlowStep, ActionHistory, ActionMakeaComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkFlowConstants", function() { return WorkFlowConstants; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkFlowActions", function() { return WorkFlowActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPerformed", function() { return ActionPerformed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionPerformedRequestMoreInfo", function() { return ActionPerformedRequestMoreInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkFlowTimeline", function() { return WorkFlowTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkFlowStep", function() { return WorkFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionHistory", function() { return ActionHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionMakeaComment", function() { return ActionMakeaComment; });
class WorkFlowConstants {
    static get REQUEST_MORE_INFO_ACTION() { return 'Request For More Information'; }
    static get TECHNICAL_REVIEW_ACTION() { return 'Technical Review'; }
    static get LEGAL_REVIEW_ACTION() { return 'Legal-review'; }
    static get MAKE_A_COMMENT() { return 'Make a Comment'; }
}
class WorkFlowActions {
}
class Action {
}
class ActionPerformed {
}
class ActionPerformedRequestMoreInfo {
}
class WorkFlowTimeline {
}
class WorkFlowStep {
}
class ActionHistory {
}
class ActionMakeaComment {
}


/***/ }),

/***/ "8JRu":
/*!****************************************************************!*\
  !*** ./src/app/modules/investigations/investigation.module.ts ***!
  \****************************************************************/
/*! exports provided: InvestigationsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationsModule", function() { return InvestigationsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _investigation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./investigation-routing.module */ "jGiM");
/* harmony import */ var _components_investigations_find_investigations_find_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/investigations-find/investigations-find.component */ "0aR6");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/shared/breadcrumbs/breadcrumbs.module */ "q8Jb");
/* harmony import */ var _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../@fury/fury-shared.module */ "WCGO");
/* harmony import */ var _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../@fury/shared/list/list.module */ "0jmt");
/* harmony import */ var _pages_tables_all_in_one_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module */ "6BeY");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../@fury/shared/material-components.module */ "KthW");
/* harmony import */ var _components_investigations_edit_investigations_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/investigations-edit/investigations-edit.component */ "3wlN");
/* harmony import */ var _pages_forms_form_elements_form_elements_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../pages/forms/form-elements/form-elements-routing.module */ "AyUp");
/* harmony import */ var _fury_shared_highlightjs_highlight_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../@fury/shared/highlightjs/highlight.module */ "QMK6");
/* harmony import */ var _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../@fury/shared/card/card.module */ "VE2z");
/* harmony import */ var _layout_comments_comments_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layout/comments/comments.module */ "hVPj");
/* harmony import */ var _pages_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../pages/forms/form-wizard/form-wizard-routing.module */ "VCcF");
/* harmony import */ var _components_view_investigation_view_investigation_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/view-investigation/view-investigation.component */ "RvBr");












// import { FormElementsRoutingModule } from 'src/app/pages/forms/form-elements/form-elements-routing.module';

// import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';

// import { FuryCardModule } from 'src/@fury/shared/card/card.module';




class InvestigationsModule {
}
InvestigationsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvestigationsModule });
InvestigationsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvestigationsModule_Factory(t) { return new (t || InvestigationsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _investigation_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvestigationsRoutingModule"],
            _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
            _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__["FurySharedModule"],
            _pages_forms_form_elements_form_elements_routing_module__WEBPACK_IMPORTED_MODULE_11__["FormElementsRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _pages_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_15__["FormWizardRoutingModule"],
            // Core
            _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
            _layout_comments_comments_module__WEBPACK_IMPORTED_MODULE_14__["CommentsModule"],
            _fury_shared_highlightjs_highlight_module__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
            _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_13__["FuryCardModule"],
            _pages_tables_all_in_one_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_7__["CustomerCreateUpdateModule"],
            _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvestigationsModule, { declarations: [_components_investigations_find_investigations_find_component__WEBPACK_IMPORTED_MODULE_3__["InvestigationsFindComponent"], _components_investigations_edit_investigations_edit_component__WEBPACK_IMPORTED_MODULE_10__["InvestigationsEditComponent"], _components_view_investigation_view_investigation_component__WEBPACK_IMPORTED_MODULE_16__["ViewInvestigationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _investigation_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvestigationsRoutingModule"],
        _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
        _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__["FurySharedModule"],
        _pages_forms_form_elements_form_elements_routing_module__WEBPACK_IMPORTED_MODULE_11__["FormElementsRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _pages_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_15__["FormWizardRoutingModule"],
        // Core
        _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
        _layout_comments_comments_module__WEBPACK_IMPORTED_MODULE_14__["CommentsModule"],
        _fury_shared_highlightjs_highlight_module__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
        _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_13__["FuryCardModule"],
        _pages_tables_all_in_one_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_7__["CustomerCreateUpdateModule"],
        _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestigationsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_investigations_find_investigations_find_component__WEBPACK_IMPORTED_MODULE_3__["InvestigationsFindComponent"], _components_investigations_edit_investigations_edit_component__WEBPACK_IMPORTED_MODULE_10__["InvestigationsEditComponent"], _components_view_investigation_view_investigation_component__WEBPACK_IMPORTED_MODULE_16__["ViewInvestigationComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _investigation_routing_module__WEBPACK_IMPORTED_MODULE_2__["InvestigationsRoutingModule"],
                    _fury_shared_material_components_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                    _fury_fury_shared_module__WEBPACK_IMPORTED_MODULE_5__["FurySharedModule"],
                    _pages_forms_form_elements_form_elements_routing_module__WEBPACK_IMPORTED_MODULE_11__["FormElementsRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _pages_forms_form_wizard_form_wizard_routing_module__WEBPACK_IMPORTED_MODULE_15__["FormWizardRoutingModule"],
                    // Core
                    _fury_shared_list_list_module__WEBPACK_IMPORTED_MODULE_6__["ListModule"],
                    _layout_comments_comments_module__WEBPACK_IMPORTED_MODULE_14__["CommentsModule"],
                    _fury_shared_highlightjs_highlight_module__WEBPACK_IMPORTED_MODULE_12__["HighlightModule"],
                    _fury_shared_card_card_module__WEBPACK_IMPORTED_MODULE_13__["FuryCardModule"],
                    _pages_tables_all_in_one_table_customer_create_update_customer_create_update_module__WEBPACK_IMPORTED_MODULE_7__["CustomerCreateUpdateModule"],
                    _fury_shared_breadcrumbs_breadcrumbs_module__WEBPACK_IMPORTED_MODULE_4__["BreadcrumbsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "RvBr":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/investigations/components/view-investigation/view-investigation.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: ViewInvestigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewInvestigationComponent", function() { return ViewInvestigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _investigation_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../investigation-model */ "0/vc");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/text-field */ "ihCf");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _services_workflow_service_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/workflow-service.service */ "3eU1");
/* harmony import */ var _company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../company-registration/company-registration.service */ "j7tn");
/* harmony import */ var _investigation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../investigation.service */ "u/+h");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _layout_bottomsheets_view_pdf_document_bottomsheet_view_pdf_document_bottomsheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../layout/bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component */ "r9HN");
/* harmony import */ var _fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout.directive */ "xBcV");
/* harmony import */ var _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout-header.directive */ "Hbgg");
/* harmony import */ var _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../../@fury/shared/breadcrumbs/breadcrumbs.component */ "rnAf");
/* harmony import */ var _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../@fury/shared/page-layout/page-layout-content.directive */ "rvYj");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../../@fury/shared/card/card.component */ "4FRi");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
// import { Component, OnInit } from '@angular/core';

// import {Component, OnInit, ViewChild} from '@angular/core';
































const _c0 = ["autosize"];
function ViewInvestigationComponent_mat_form_field_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Other Organisation Complained To");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewInvestigationComponent_mat_grid_tile_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r7.DataSubCategoryName, " ");
} }
function ViewInvestigationComponent_mat_grid_tile_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r8.ComplaintReasonName, " ");
} }
function ViewInvestigationComponent_span_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r4.document.Size, " Mbs");
} }
function ViewInvestigationComponent_p_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No document found. Please attach");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["Complaints"]; };
const _c2 = function () { return { width: "100px", height: "100px" }; };
class ViewInvestigationComponent {
    constructor(formBuilder, activateRoute, route, bottomsheet, authService, _workflowService, registrationService, investigationService) {
        //   super(
        //     authService,
        //     _workflowService,
        //     registrationService,
        //     investigationService
        // );
        this.formBuilder = formBuilder;
        this.activateRoute = activateRoute;
        this.route = route;
        this.bottomsheet = bottomsheet;
        this.authService = authService;
        this._workflowService = _workflowService;
        this.registrationService = registrationService;
        this.investigationService = investigationService;
        // Simulating A Service
        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["ReplaySubject"](1);
        this.data$ = this.subject$.asObservable();
        this.$processingEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$errorsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.$resultInvestigationsEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.subscriptions = [];
        //MAin object
        this.application = new _investigation_model__WEBPACK_IMPORTED_MODULE_3__["InvestigationModel"]();
        //array
        this.personalData = [];
        this.investigationReasons = [];
        this.list = [];
        this.displayColumns = ['nber', 'impact', 'actions'];
        this.resolutionComments = [];
        this._gap = 16;
        this.gap = `${this._gap}px`;
        this.col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
        this.col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;
        // this.operationType = activateRoute.routeConfig.data.action;
        // this.InvestigationTrackingNumber = this.route.getCurrentNavigation().extras.state.InvestigationTrackingNumber;
        // console.log(this.InvestigationTrackingNumber);
        // console.log(this.operationType);
        // if (this.operationType === 'EDIT') {
        //     this.isEditMode = true;
        //     this.application.comments = [];
        // } else if (this.operationType === 'CREATE') {
        //     this.isEditMode = false;
        //     this.application.comments = [];
        // } else if (this.operationType === 'VIEW') {
        //     this.isEditMode = false;
        //     this.isViewOnly = true;
        // }
    }
    ngOnInit() {
        // InitForm
        this.initForm();
        // this.getInvestigation();
        // complaints
        this.subscriptions['$resultComplaintsEvent'] = this.$resultInvestigationsEvent.subscribe(result => {
            if (result) {
                this.application = result;
                console.log(this.application);
                this.mapFields();
            }
        });
        this.disableFieldsByStatus();
        // if (this.isViewOnly) {
        //     this.disableAllControls();
        // }
    }
    mapFields() {
        // this.isApplicationValid = true;
        // this.personalData = this.application.PersonalDataAffected;
        // this.investigationReasons = this.application.ReasonsForInvestigation;
        // console.log(this.application.EvidenceOfInvestigation);
        this.document = {
            Document: null,
            Name: 'Investigation Evidence.pdf',
            Size: null,
        };
        console.log(this.document);
        // this.investigationForm.get('reasonForTheComplaint').setValue(this.application.ReasonsForComplaint);
        // this.investigationForm.get('investigationDetails').setValue(this.application.FullDetailsOfInvestigation);
        // this.investigationForm.get('remedialActions').setValue(this.application.RemedialActions);
        // this.investigationForm.get('lastModificationDate').setValue(this.application.FirstName);
        // this.investigationForm.get('dataSubjectName').setValue(this.application.FirstName + ' ' + this.application.LastName);
        // this.investigationForm.get('dataSubjectPhone').setValue(this.application.PhoneNumber);
        // this.investigationForm.get('dataSubjectEmail').setValue(this.application.EmailAddress);
        this.investigationForm.get('Organisation').setValue(this.application.Organisation);
        this.investigationForm.get('ContactFirstName').setValue(this.application.ContactPersonFirstName);
        this.investigationForm.get('ContactLastName').setValue(this.application.ContactPersonLastName);
        this.investigationForm.get('ContactEmailAddress').setValue(this.application.ContactPersonEmailAddress);
    }
    initForm() {
        this.investigationForm = this.formBuilder.group({
            personalDataAffected: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            reasonForTheComplaint: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            complaintDetails: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            remedialActions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            dataSubjectName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            dataSubjectPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            dataSubjectEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ContactFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ContactLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ContactEmailAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            OrganisationComplainedTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            OtherOrganisationComplainedTo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            ComplaintCategory: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            OrganisationComplainedFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            OtherOrganisationComplainedFrom: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])],
            lastModificationDate: []
        });
    }
    onReadDocument() {
        // console.log('document:', document);
        this.bottomsheetRef = this.bottomsheet.open(_layout_bottomsheets_view_pdf_document_bottomsheet_view_pdf_document_bottomsheet_component__WEBPACK_IMPORTED_MODULE_11__["ViewPdfDocumentBottomsheetComponent"], {
            disableClose: true,
            panelClass: ['view-pdf-document-bottomsheet', 'bottomsheets'],
            data: {
                url: this.document.Base64,
                title: this.document.Name
            }
        });
    }
    disableFieldsByStatus() {
        if (this.application
            && this.application.status !== 'NEW' && this.application.status !== 'STORED'
            && this.application.status === 'ISSUED') {
            this.disableAllControls();
        }
    }
    disableAllControls() {
        this.investigationForm.disable();
    }
    // onCommentChange(comments: DocumentComment[]) {
    //   if (comments) {
    //       this.application.comments = comments;
    //   }
    // }
    formTriggler(operation) {
        switch (operation) {
            case 'EDIT':
                break;
            case 'CREATE':
                break;
            case 'VIEW':
                // this.isViewOnly = true;
                break;
        }
    }
    getComplaint() {
        // tslint:disable-next-line:max-line-length
        this.investigationService.getInvestigation(this.InvestigationTrackingNumber, this.$processingEvent, this.$resultInvestigationsEvent, this.$errorsEvent);
    }
    get getSampleJson() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(_investigation_model__WEBPACK_IMPORTED_MODULE_3__["INVESTIGATION_JSON"]);
    }
}
ViewInvestigationComponent.ɵfac = function ViewInvestigationComponent_Factory(t) { return new (t || ViewInvestigationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_workflow_service_service__WEBPACK_IMPORTED_MODULE_7__["WorkflowServiceService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_8__["CompanyRegistrationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_investigation_service__WEBPACK_IMPORTED_MODULE_9__["InvestigationService"])); };
ViewInvestigationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewInvestigationComponent, selectors: [["fury-view-investigation"]], viewQuery: function ViewInvestigationComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.autosize = _t.first);
    } }, decls: 114, vars: 17, consts: [["mode", "card"], ["current", "View", 3, "crumbs"], ["fxLayout", "column", 3, "fxLayoutGap"], ["fxFlex", "noshrink", "fxLayout", "column", "fxLayout.gt-sm", "row", "fxLayoutAlign.gt-sm", "start stretch", 3, "fxLayoutGap"], ["fxFlex", "grow", 1, "basic-forms", "route-animations-elements", 3, "fxFlex.gt-sm"], ["fxLayout", "column", 1, "form-padding"], [3, "formGroup"], ["fxLayout", "column", "fxLayout.gt-xs", "row", "fxLayoutGap", "8px", "fxLayoutGap.gt-xs", "24px"], ["fxFlex", "2 1 auto"], ["formControlName", "dataSubjectName", "matInput", ""], ["formControlName", "dataSubjectEmail", "matInput", ""], ["formControlName", "dataSubjectPhone", "matInput", ""], ["formControlName", "Organisation", "matInput", ""], ["fxFlex", "2 1 auto", 4, "ngIf"], ["formControlName", "ContactFirstName", "matInput", ""], ["formControlName", "ContactLastName", "matInput", ""], ["formControlName", "ContactEmailAddress", "matInput", ""], ["cols", "4", "rowHeight", "4rem"], [4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutGap", "8px", 1, "content"], ["fxFlex", "2 1 auto", "appearance", "fill"], ["matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "1", "formControlName", "complaintDetails", "cdkAutosizeMaxRows", "5"], ["autosize", "cdkTextareaAutosize"], ["matTooltip", "Open Document", 1, "uploaded-document", 3, "click"], ["src", "./assets/img/pdf.png", "alt", "", 3, "ngStyle"], [4, "ngIf"], ["class", "no-document-found", 4, "ngIf"], ["formControlName", "TechnicalForwardedComments", "matInput", ""], ["formControlName", "LegalForwardedComments", "matInput", ""], ["formControlName", "MoreInformationRequired", "matInput", ""], ["formControlName", "OtherOrganisation", "matInput", ""], [1, "no-document-found"]], template: function ViewInvestigationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "fury-page-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fury-page-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "fury-breadcrumbs", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "fury-page-layout-content", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fury-card", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fury-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fury-card-header-heading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Complaint Information");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "fury-card-content", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Data Subject Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Data subject name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Data Subject Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Data Subject Phone");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Details Organisation complained To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Organisation Complained To");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ViewInvestigationComponent_mat_form_field_35_Template, 4, 0, "mat-form-field", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Organisation Contact Person Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Contact First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Contact Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Contact Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Complaint in Brief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Personal Data Affected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-grid-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ViewInvestigationComponent_mat_grid_tile_58_Template, 2, 1, "mat-grid-tile", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "General Complaint Info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Complaint Reasons");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Reasons for complaints");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-grid-list", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](69, ViewInvestigationComponent_mat_grid_tile_69_Template, 2, 1, "mat-grid-tile", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-form-field", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Complaint Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "textarea", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Evidence Of Complaint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewInvestigationComponent_Template_div_click_79_listener() { return ctx.onReadDocument(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](83, ViewInvestigationComponent_span_83_Template, 2, 1, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, ViewInvestigationComponent_p_84_Template, 2, 0, "p", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Forwarded Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Technical Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Legal Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "More Information Required");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "input", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Investigation Comments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "textarea", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeInRight", undefined)("crumbs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxLayoutGap", ctx.gap);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex.gt-sm", ctx.col2)("@fadeInUp", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.investigationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application.Organisation == undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.personalData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.investigationReasons);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Document: ", ctx.document.Name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.document.Size);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.document && !ctx.document.Base64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.application.InvestigationComments);
    } }, directives: [_fury_shared_page_layout_page_layout_directive__WEBPACK_IMPORTED_MODULE_12__["PageLayoutDirective"], _fury_shared_page_layout_page_layout_header_directive__WEBPACK_IMPORTED_MODULE_13__["PageLayoutHeaderDirective"], _fury_shared_breadcrumbs_breadcrumbs_component__WEBPACK_IMPORTED_MODULE_14__["BreadcrumbsComponent"], _fury_shared_page_layout_page_layout_content_directive__WEBPACK_IMPORTED_MODULE_15__["PageLayoutContentDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_16__["DefaultLayoutAlignDirective"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_17__["FuryCard"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_17__["FuryCardHeader"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_17__["FuryCardHeaderTitle"], _fury_shared_card_card_component__WEBPACK_IMPORTED_MODULE_17__["FuryCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgIf"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridList"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgForOf"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_4__["CdkTextareaAutosize"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__["MatTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_23__["DefaultStyleDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_21__["MatGridTile"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3LWludmVzdGlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewInvestigationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'fury-view-investigation',
                templateUrl: './view-investigation.component.html',
                styleUrls: ['./view-investigation.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_10__["MatBottomSheet"] }, { type: keycloak_angular__WEBPACK_IMPORTED_MODULE_6__["KeycloakService"] }, { type: _services_workflow_service_service__WEBPACK_IMPORTED_MODULE_7__["WorkflowServiceService"] }, { type: _company_registration_company_registration_service__WEBPACK_IMPORTED_MODULE_8__["CompanyRegistrationService"] }, { type: _investigation_service__WEBPACK_IMPORTED_MODULE_9__["InvestigationService"] }]; }, { autosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['autosize']
        }] }); })();


/***/ }),

/***/ "jGiM":
/*!************************************************************************!*\
  !*** ./src/app/modules/investigations/investigation-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: InvestigationsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationsRoutingModule", function() { return InvestigationsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_investigations_find_investigations_find_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/investigations-find/investigations-find.component */ "0aR6");
/* harmony import */ var _authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../authentication/auth.guard */ "sF9m");
/* harmony import */ var _components_investigations_edit_investigations_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/investigations-edit/investigations-edit.component */ "3wlN");







const routes = [
    {
        path: 'find',
        component: _components_investigations_find_investigations_find_component__WEBPACK_IMPORTED_MODULE_2__["InvestigationsFindComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        data: {
            roles: ['view.investigation', 'find.investigation'],
            action: "FIND"
        }
    },
    // {
    //     path: 'view-complaint',
    //     component: ViewComplaintComponent,
    //     canActivate: [AuthGuard], data: {
    //         roles: ['view.complaint'],
    //         action: "VIEW"
    //     }
    // },
    {
        path: 'investigations-edit',
        component: _components_investigations_edit_investigations_edit_component__WEBPACK_IMPORTED_MODULE_4__["InvestigationsEditComponent"],
        canActivate: [_authentication_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]], data: {
            roles: ['view.investigation'],
            action: "VIEW"
        }
    },
];
class InvestigationsRoutingModule {
}
InvestigationsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: InvestigationsRoutingModule });
InvestigationsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function InvestigationsRoutingModule_Factory(t) { return new (t || InvestigationsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](InvestigationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InvestigationsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "u/+h":
/*!*****************************************************************!*\
  !*** ./src/app/modules/investigations/investigation.service.ts ***!
  \*****************************************************************/
/*! exports provided: InvestigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvestigationService", function() { return InvestigationService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var keycloak_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! keycloak-angular */ "aTx8");
/* harmony import */ var _fury_http_HttpUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../@fury/http/HttpUtils */ "3fLY");
/* harmony import */ var _fury_services_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../@fury/services/http.service */ "WVpI");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");









class InvestigationService extends _fury_services_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] {
    constructor(auth, http) {
        super();
        this.auth = auth;
        this.http = http;
        this.baseAPIUri = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backend;
        this.httpUtils = new _fury_http_HttpUtils__WEBPACK_IMPORTED_MODULE_3__["HttpUtils"](auth, http);
    }
    getInvestigations(processingEvent, resultEvent, errorsEvent) {
        const api = this.baseAPIUri + 'v1.0' + '/investigations';
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }
    getInvestigation(InvestigationTrackingNo, processingEvent, resultEvent, errorsEvent) {
        const api = this.baseAPIUri + 'v1.0' + '/investigations/single?InvestigationTrackingNo=' + InvestigationTrackingNo;
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }
    updateInvestigationStatus(processingEvent, resultEvent, errorsEvent) {
        const api = this.baseAPIUri + 'v1.0' + '/update-investigation-status';
        //const request = {'OrganizationID': `${organisationalId}`, 'IssueType': `${IssueType}`};
        // return this.httpUtils.invokePost(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
    }
}
InvestigationService.ɵfac = function InvestigationService_Factory(t) { return new (t || InvestigationService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
InvestigationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: InvestigationService, factory: InvestigationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](InvestigationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: keycloak_angular__WEBPACK_IMPORTED_MODULE_2__["KeycloakService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-investigations-investigation-module-es2015.js.map
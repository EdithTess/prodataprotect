import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild} from '@angular/core';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {
    CertificateDetails, CertificateDetailsResponse,
    CompanyRegistrationModel, DataProtectionActors,
    ROLES_PERFORMED, SecurityMeasuresModel,
    ThirdParties,
    TypeOfOrganisation
} from '../company-registration.model';
import {Observable, of, ReplaySubject, Subscription} from 'rxjs';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {ActivatedRoute, Router} from '@angular/router';
import {DocumentComment} from '../../../../../@fury/shared/base-fury-form.model';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {DataProtectionOfficer} from '../../../models/data-subject.model';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {CompanyRegistrationService} from '../../company-registration.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {Action, ActionPerformed, WorkFlowActions, WorkFlowStep, WorkFlowTimeline} from '../../../models/document-workflow.model';
import {MatDialog} from '@angular/material/dialog';
import {ReviewCommentsComponent} from '../../../../layout/review-comments/review-comments.component';
import {CertPreviewComponent} from '../cert-preview/cert-preview.component';
import {
    Checklist,
    DataPurposes,
    DataSourceCategory, DataSources,
    DataSourceSubCategory, DataSourceSubCategoryChecked,
    NatureOfBusiness,
    NatureOfBusinessSubCat,
    Sector
} from '../../../models/reference.model';
import {ReferenceTableService} from '../../../../services/reference-table.service';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ApplicationTimelineComponent} from '../../../../layout/application-timeline/application-timeline.component';
import {Country} from '../countries/countries.component';
import {difference, differenceBy} from 'lodash-es';
import { ComplaintService } from '../../../complaints/complaints.service';
import { NgModule } from '@angular/core';
import { UpdateRegistrationComponent } from '../update-registration/update-registration.component';


// @ts-ignore
@Component({
    selector: 'fury-edit-company-registration',
    templateUrl: './edit-company-registration.component.html',
    styleUrls: ['./edit-company-registration.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class EditCompanyRegistrationComponent extends BaseFuryForm implements OnInit, OnDestroy {

    // Simulating A Service
    subject$: ReplaySubject<CompanyRegistrationModel> = new ReplaySubject<CompanyRegistrationModel>(1);
    data$: Observable<CompanyRegistrationModel> = this.subject$.asObservable();

    // Output
    @Input() certDetailsEventEmitter = new EventEmitter<CertificateDetails>();

    // FormGroups
    organizationFormGroup: FormGroup;
    personalDataFormGroup: FormGroup;
    thirdPartiesFormGroup: FormGroup;
    childFormGroup: FormGroup;
    securityFormGroup: FormGroup;
    applicantDetails: FormGroup;
    dataProtectionOfficerFormGroup: FormGroup;
    purposeRetentionFormGroup: FormGroup;
    personalDataHeldFormGroup: FormGroup;
    disclosureFormGroup: FormGroup;
    // ViewChild
    @ViewChild('autosize') autosize: CdkTextareaAutosize;
    // Main Object
    application: CompanyRegistrationModel = new CompanyRegistrationModel();
    actionPerformed: ActionPerformed = new ActionPerformed();
    // PageStyle
    private _gap = 16;
    gap = `${this._gap}px`;
    col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
    col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;

    // arrays
    typesOfOrganisation: any[] = [];
    dataProtectionActors: any [] = [];
    sectors: any[] = [];
    dataActors: any [];
    _dataActors: any [];
    dataPurposes = [];
    rolesPerformed: any [] = [];
    accesses: string[];
    refDataSourcesCat: DataSourceCategory[] = [];
    refDataSourceSubCat: DataSourceSubCategory[] = [];
    dataSourceSubCatChecked: DataSourceSubCategoryChecked [] = [];
    permittedActions: Action[] = [];
    dataProtectionOfficers: DataProtectionOfficer[];
    thirdParties: ThirdParties[];
    $sectors: Sector[];
    $natureOfBusiness: NatureOfBusiness[];
    $natureOfBusinessCat: NatureOfBusinessSubCat[];
    $dataPurposes: DataPurposes[] = [];
    $dataSources: DataSources[];
    securityMeasures: SecurityMeasuresModel[];
    countries: Country[];
    selectedDataSourceCategory: DataSourceCategory[] = [];
    selectedDataSourceSubCategory: DataSourceSubCategory[] = [];
    $checklist: Checklist[];
    timeLineAccess: string[] = ['data-protection-officer-director', 'data-protection-officer-nita', 'data-protection-officer-technical', 'data-protection-officer-legal'];
    isOfficer: boolean;
    isApplicant: boolean;
    //
    today = new Date();
    regTrackingNo: string;
    role: string;
    workflowID = '1';
    workflowTimeLine: WorkFlowTimeline;
    currentStep: WorkFlowStep;
    certificateResponse: CertificateDetailsResponse;
    certificateDetails: CertificateDetails;
    // events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
    $resultDocumentEvent: EventEmitter<any> = new EventEmitter();
    $resultRefDataSourceCatEvent: EventEmitter<any> = new EventEmitter();
    $resultReferenceDataSourcesEvent: EventEmitter<any> = new EventEmitter();
    $resultReferenceDataPurposesEvent: EventEmitter<any> = new EventEmitter();
    $resultRefSectorsEvent: EventEmitter<any> = new EventEmitter();
    $resultRefNatureOfBussEvent: EventEmitter<any> = new EventEmitter();
    $resultDocumentCertificate: EventEmitter<any> = new EventEmitter();
    $resultRefNatureOfBussCatEvent: EventEmitter<any> = new EventEmitter();
    $resultRefNatureOfBussSubCatEvent: EventEmitter<any> = new EventEmitter();
    $resultRefChecklistEvent: EventEmitter<any> = new EventEmitter();
    // Subscriptions
    subscriptions: Subscription[] = [];

    constructor(
        private fb: FormBuilder,
        private activateRoute: ActivatedRoute,
        private route: Router,
        public registrationService: CompanyRegistrationService,
        private _referenceService: ReferenceTableService,
        public snackBar: SnackBarService,
        public authService: KeycloakService,
        public _workflowService: WorkflowServiceService,
        public complaintService: ComplaintService,
        private dialog: MatDialog
    ) {
        super(
            authService,
            _workflowService,
            registrationService,
            complaintService,
        );

        this.accesses = authService.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
        this.operationType = activateRoute.routeConfig.data.action;
        this.regTrackingNo = this.route.getCurrentNavigation().extras.state.regTrackingNo;
        if (this.operationType === 'EDIT') {
            this.isEditMode = true;
            this.application.Comments = [];
            this.application.Countries = [];
            this.application.DataProtectionOfficers = [];
            this.application.ThirdParties = [];
            this.application.SecurityMeasure = [];
        } else if (this.operationType === 'CREATE') {
            this.isEditMode = false;
            this.application.Comments = [];
            this.application.DataProtectionOfficers = [];
            this.application.ThirdParties = [];
            this.application.SecurityMeasure = [];
            this.application.Countries = [];
        } else if (this.operationType === 'VIEW') {
            this.isEditMode = false;
            this.isViewOnly = true;
        }

    }


    ngOnInit(): void {
        console.log(
            'ISVIEW' + this.isViewOnly
        );
        this.initForms();
        this.loadReferenceTableDetails();
        // Reference Tables Event
        this.referenceTableSubscriptions();
        this.referenceTables();
        // Disable Form By ApplicationStatus
        this.disableByStatus();
        // if (this.isViewOnly) {
        //     this.disableAllControls();
        // }
        this.loadRegistrationDocumentDetails();
        // this.disableFieldsByStatus();
        this.isOfficer = this.timeLineAccess.includes(this.realmRole);
        this.subscriptions['$resultDocumentCertificate'] = this.$resultDocumentCertificate.subscribe(result => {
            if (result) {
                this.certificateResponse = result;
                this.certificateResponse.data.OrganizationID = this.application.OrganisationName;
            }
        });

        // Company Registration Document Event
        this.subscriptions['$resultDocumentEvent'] = this.$resultDocumentEvent.subscribe(result => {
            if (result) {
                this.application = result;
                this.mapFields();
                if (this.operationType === 'MANAGE') {
                    this.findDocumentActions(1, this.application.CurrentStepID);
                }
                this.getDocumentWorkflow(this.application.RegTrackingNo, this.workflowID);
                this.getIssuedCertDetails(+this.application.OrganisationID);
                this.isLoaded = true;
            }
        });

        // Document Actions
        this.subscriptions['$resultOperations'] = this.$resultWorkFlowActionsEvent.subscribe(result => {
            this.errors = [];
            if (result) {
                this.workFlowActions = result;
                this.hasStepAccess = this.workFlowActions.StepAccess;
                if (this.hasStepAccess) {
                    console.log('this.workFlowActions.Actions:', this.workFlowActions.Actions);
                    this.permittedActions = this.workFlowActions.Actions.filter(access => this.accesses.includes(access.ActionRole));
                    console.log('permittedActions:', this.permittedActions);

                    if (this.permittedActions.length === 0) {
                        this.snackBar.snackBarAlert(
                            'ERROR', 'Unauthorized To Perform Action On This Document ', {
                                duration: 5000
                            }
                        );
                    }
                }
                this.isLoaded = true;
            }
        });

        // Action Performed
        this.subscriptions['$resultPerformActionEvent'] = this.$resultPerformActionEvent.subscribe(result => {
            this.errors = [];
            if (result.message === 'Success') {
                this.loadRegistrationDocumentDetails();
                this.snackBar.snackBarAlert(
                    'SUCCESS', 'Action Was Successfully, Registration Moved To Next Step', {
                        duration: 5000
                    }
                );
                this.permittedActions = [];
            }
        });

        // Action Performed
        this.subscriptions['$resultDocumentWorkflowTimelineEvent'] = this.$resultDocWorkFlowTimelineEvent.subscribe(result => {
            this.errors = [];
            if (result) {
                this.workflowTimeLine = result;
                this.currentStep = this.workflowTimeLine.data.find(
                    step => +step.StepID === this.application.CurrentStepID
                );
                this.application.Status = this.currentStep.StepName;
                // this.applicantDetails.get('status').setValue(this.application.Status);
            }
        });


    }

    // DisableByStatus
    disableByStatus() {
        if ((this.isApplicant && this.application &&
                this.application.CurrentStepName !== 'Application Review - Legal' &&
                this.application.CurrentStepName !== 'Application Review - Legal' &&
                this.application.CurrentStepName !== 'Final Approver' &&
                this.application.CurrentStepName !== 'Application Review - Technical' &&
                this.application.CurrentStepName !== 'Certificate Issued') ||
            (!this.isApplicant)) {
            this.disableAllControls();
        }
    }

    referenceTableSubscriptions() {
        this.subscriptions['$resultRefDataSourceCatEvent'] = this.$resultRefDataSourceCatEvent.subscribe(result => {
            if (result) {
                this.refDataSourcesCat = result;
                this.refDataSourcesCat.filter(
                    e => {
                        e.SubCategories.forEach(
                            subCat => {
                                if (e.SubCategories.indexOf(subCat) > 1) {
                                    const obj = new DataSourceSubCategory();
                                    obj.DataSubCategoryID = subCat.DataSubCategoryID;
                                    obj.DataSubCategory = subCat.DataSubCategory;
                                    obj.checked = false;
                                    e.SubCategories.push(obj);
                                }
                            }
                        );
                    }
                );
            }
        });
        this.subscriptions['$resultRefNatureOfBussEvent'] = this.$resultRefNatureOfBussEvent.subscribe(result => {
            if (result) {
                this.$natureOfBusiness = result;
            }
        });
        this.subscriptions['$resultRefNatureOfBussCatEvent'] = this.$resultRefNatureOfBussCatEvent.subscribe(result => {
            if (result) {
                this.$natureOfBusinessCat = result;
            }
        });
        this.subscriptions['$resultReferenceDataSourcesEvent'] = this.$resultReferenceDataSourcesEvent.subscribe(result => {
            if (result) {
                this.$dataSources = result;
            }
        });
        this.subscriptions['$resultReferenceDataPurposesEvent'] = this.$resultReferenceDataPurposesEvent.subscribe(result => {
            if (result) {
                this.$dataPurposes = result;
            }
        });
        this.subscriptions['$resultRefSectorsEvent'] = this.$resultRefSectorsEvent.subscribe(result => {
            if (result) {
                this.$sectors = result;
            }
        });
        this.subscriptions['$resultRefChecklistEvent'] = this.$resultRefChecklistEvent.subscribe(result => {
            if (result) {
                console.log(JSON.stringify('checklist' + JSON.stringify(result)));
                this.$checklist = result.filter(
                    e =>
                        this.realmRole === 'data-protection-officer-technical' ? e.ChecklistSection === 'Technical' : e.ChecklistSection === 'Legal'
                );
            }
        });
        this.dataActors = [
            {
                OrganisationCategoryId: 1,
                OrganisationCategoryName: 'Data Controller'
            },
            {
                OrganisationCategoryId: 2,
                OrganisationCategoryName: 'Data Processor'
            },
            {
                OrganisationCategoryId: 3,
                OrganisationCategoryName: 'Data Collector'
            },
        ];
    }

    // Get Certificate Details
    getIssuedCertDetails(organisationId: number) {
        this.registrationService.getCertificateDetails(
            this.$processingEvent,
            this.$resultDocumentCertificate,
            this.$errorsEvent,
            organisationId
        );
    }

    onChangeSubCategory(event: MatCheckboxChange, SubCategory: DataSourceSubCategory): void {
        if (event.checked) {
            this.selectedDataSourceSubCategory.push(SubCategory);
        } else {
            this.selectedDataSourceSubCategory.splice(this.selectedDataSourceSubCategory.indexOf(SubCategory), 1);
        }
    }

    // Perform Document Action
    performAction(action: Action) {
        this.dialog.open(ReviewCommentsComponent, {
            width: '1391px',
            height: '595px',
            data: {
                checklist: (action.ActionName === 'Technical-review' || action.ActionName === 'Legal-review') ? this.$checklist : [],
                action: action,
                currentStep: this.application.CurrentStepID
            }
        }).afterClosed().subscribe((dialogResult) => {
            if (dialogResult !== null && dialogResult !== '') {
                const performedAction = new ActionPerformed();
                performedAction.WorkFlowID = this.workflowID;
                performedAction.ActionID = action.ActionID.toString();
                performedAction.RecordTrackingNo = this.application.RegTrackingNo;
                performedAction.CurrentStepID = this.application.CurrentStepID.toString();
                performedAction.Comment = dialogResult.comment;
                performedAction.ActionIsFinal = action.ActionIsFinal;
                performedAction.CheckList = dialogResult.checklist;
                this.performingAction(performedAction);
            }
        });
    }

    // Certificate Preview
    previewCert() {
        this.dialog.open(CertPreviewComponent, {
            // width: '841px',
            // height: '695px',
            panelClass: ['organisation-certificate-dialog', 'dialogs'],
            data: this.certificateResponse.data
        });
    }

    viewApplicationTimeLine() {
        this.dialog.open(ApplicationTimelineComponent, {
            width: '941px',
            height: '595px',
            data: this.workflowTimeLine
        });
    }

    referenceTables() {
        this.typesOfOrganisation = Object.entries(TypeOfOrganisation).map(([key, value]) => ({key: key, value: value}));
        // this.dataActors = Object.entries(DataProtectionActors).map(([key, value]) => ({key: key, value: value}));
        this.rolesPerformed = Object.entries(ROLES_PERFORMED).map(([key, value]) => ({key: key, value: value}));
    }

    disableAllControls() {
        this.applicantDetails.disable();
        this.dataProtectionOfficerFormGroup.disable();
        this.personalDataHeldFormGroup.disable();
        this.purposeRetentionFormGroup.disable();
        this.disclosureFormGroup.disable();
    }

    onCommentChange(comments: DocumentComment[]) {
        if (comments) {
            this.application.Comments = comments;
        }
    }

    initForms() {

        this.applicantDetails = this.fb.group({
            organizationName: [],
            DPPActCategory: [],
            OrganizationTypeID: [],
            SectorID: [],
            Location: [],
            PhoneNumber: [],
            EmailAddress: [],
            NatureOfBusinessCat: [],
            NatureOfBusinessSubCat: [],
        });
        this.dataProtectionOfficerFormGroup = this.fb.group({
            DPOName: [],
            DPOPhysicalAddress: [],
            PhoneNumberCode: [],
            DPOPhoneNumber: [],
            DPOEmailAddress: [],
            DPOPositionInOrganisation: [],
            DPORequired: []
        });
        this.disclosureFormGroup = this.fb.group({
            disclosePersonalData: [],
            StoreDataOutsideCountry: []
        });

        this.purposeRetentionFormGroup = this.fb.group({
            Purpose: [],
            SpecifyTheLaw: [],
            ServiceOrProductProvided: [],
            SpecifyLegalObligation: [],
            TotalRecordsAtRegistration: [],
            RecordPercentageGrowth: [],
            RetentionPeriod: []
        });

        this.personalDataHeldFormGroup = this.fb.group({
            SourceOfDataID: [],
            PersonalDataCollected: []
        });

        this.securityFormGroup = this.fb.group({});
    }


    loadRegistrationDocumentDetails() {
        this.registrationService.getRegistrationByReferenceNumber(
            this.$processingEvent, this.$resultDocumentEvent, this.$errorsEvent, this.regTrackingNo);
    }

    loadReferenceTableDetails() {
        // this.registrationService.getDataSource(this.$processingEvent, this.$resultReferenceDataSourcesEvent, this.$errorsEvent);
        // this.referenceService.getSubCategories(this.$processingEvent, this.$resultRefDataSourceCatEvent, this.$errorsEvent);
        // this.referenceService.getDataPurposes(this.$processingEvent, this.$resultReferenceDataPurposesEvent, this.$errorsEvent);
        // this.referenceService.getSectors(this.$processingEvent, this.$resultRefSectorsEvent, this.$errorsEvent);
        // this.referenceService.getNatureOfBusiness(this.$processingEvent, this.$resultRefNatureOfBussEvent, this.$errorsEvent);
        // this.referenceService.getChecklist(this.$processingEvent, this.$resultRefChecklistEvent, this.$errorsEvent);
    }

    onDataProtectionOfficerChange($event: DataProtectionOfficer[]) {
        this.dataProtectionOfficers = $event;
    }

    onSecurityModelChange($event: SecurityMeasuresModel[]) {
        this.application.SecurityMeasure = $event;
    }

    onCountriesChange($event: Country[]) {
        this.application.Countries = $event;
    }

    onDataThirdPartiesChange($event: ThirdParties[]) {
        this.application.ThirdParties = $event;
    }

    filter(data) {
        console.log(data.value);
    }

    mapFields() {
        this.isApplicationValid = true;
        // generalFormGroup
        if (this.application.OrganisationCategory.length > 0) {
            const tempArr = [];
            this.application.OrganisationCategory.forEach(e => tempArr.push(e.OrganisationCategoryId));
            this.applicantDetails.get('DPPActCategory').setValue(tempArr);
        }
        this.applicantDetails.get('organizationName').setValue(this.application.OrganisationName);
        this.applicantDetails.get('OrganizationTypeID').setValue(this.application.OrganizationTypeID);
        this.applicantDetails.get('SectorID').setValue(this.application.SectorID);
        this.applicantDetails.get('Location').setValue(this.application.Location);
        this.applicantDetails.get('PhoneNumber').setValue(this.application.PhoneNumber);
        this.applicantDetails.get('EmailAddress').setValue(this.application.EmailAddress);
        if (this.application.NatureOfBusiness.length > 0) {
            this.applicantDetails.get('NatureOfBusinessCat').setValue(
                this.application.NatureOfBusiness[0].NatureOfBusinessCatID
            );
            const tempArr = [];
            // this.referenceService.getNatureOfBusinessSubCat(
            //     this.application.NatureOfBusiness[0].NatureOfBusinessCatID,
            //     this.$processingEvent, this.$resultRefNatureOfBussCatEvent, this.$errorsEvent
            // );
            this.application.NatureOfBusiness.forEach(e => tempArr.push(e.NatureOfBusinessSubatID));
            this.applicantDetails.get('NatureOfBusinessSubCat').setValue(
                tempArr
            );
        }
        this.dataProtectionOfficerFormGroup.get('DPORequired').setValue(this.application.DPORequired);
        this.dataProtectionOfficerFormGroup.get('DPOName').setValue(this.application.DPOName);
        this.dataProtectionOfficerFormGroup.get('DPOPhysicalAddress').setValue(this.application.DPOPhysicalAddress);
        this.dataProtectionOfficerFormGroup.get('DPOPhoneNumber').setValue(this.application.DPOPhoneNumber);
        this.dataProtectionOfficerFormGroup.get('DPOEmailAddress').setValue(this.application.DPOEmailAddress);
        this.dataProtectionOfficerFormGroup.get('DPOPositionInOrganisation').setValue(this.application.DPOPositionInOrganisation);
        if (this.application.Purpose.length > 0) {
            const tempArr = [];
            this.application.Purpose.forEach(e => tempArr.push(e.DataPurposeID));
            this.purposeRetentionFormGroup.get('Purpose').setValue(tempArr);
        }

        this.purposeRetentionFormGroup.get('SpecifyTheLaw').setValue(this.application.SpecifyTheLaw);
        this.purposeRetentionFormGroup.get('ServiceOrProductProvided').setValue(this.application.ServiceOrProductProvided);
        this.purposeRetentionFormGroup.get('SpecifyLegalObligation').setValue(this.application.SpecifyLegalObligation);
        this.purposeRetentionFormGroup.get('TotalRecordsAtRegistration').setValue(this.application.TotalRecordsAtRegistration);
        this.purposeRetentionFormGroup.get('RecordPercentageGrowth').setValue(this.application.RecordPercentageGrowth);
        this.purposeRetentionFormGroup.get('RetentionPeriod').setValue(this.application.RetentionPeriod);
        if (this.application.SourceOfDataID.length > 0) {
            const tempArr = [];
            this.application.SourceOfDataID.forEach(e => tempArr.push(e.DataSourceID));
            console.log('dataSources' + tempArr);
            console.log('SourcesCategory' + JSON.stringify(this.$dataSources));
            this.personalDataHeldFormGroup.get('SourceOfDataID').setValue(tempArr);
            // this.personalDataHeldFormGroup.get('PersonalDataCollected').setValue(tempArr);
        }
        // if (this.refDataSourcesCat.length > 0) {
        //     console.log('here');
        //     if (this.application.PersonalDataCollected.length > 0) {
        //         const tempArr = [];
        //         this.application.PersonalDataCollected.forEach(e => {
        //             const obj = new DataSourceSubCategoryChecked();
        //             obj.DataSubCategoryID = +e.DataSubCategoryID;
        //             obj.DataSubCategory = e.DataSubCategory;
        //             obj.checked = false;
        //             tempArr.push(obj);
        //         });
        //         this.refDataSourcesCat.filter(
        //             e => {
        //                 e.SubCategories.forEach((s) => {
        //                         if (e.SubCategories.indexOf(s) > 1) {
        //                             tempArr.find(a => {
        //                                 if (s.DataSubCategory === a.DataSubCategory) {
        //                                     s.checked = true;
        //                                     console.log('checked');
        //                                 } else {
        //                                     s.checked = false;
        //                                 }
        //                                 e.SubCategories.push(s);
        //                             });
        //                         }
        //                     }
        //                 )
        //                 ;
        //                 // e.SubCategories.forEach((s) => tempArr.find(a => {
        //                 //         if (s.DataSubCategory === a.DataSubCategory) {
        //                 //             s.checked = true;
        //                 //             console.log('checked');
        //                 //             // this.personalDataHeldFormGroup.get('PersonalDataCollected').setValue(e.checked);
        //                 //         }
        //                 //     })
        //                 // );
        //             }
        //         );
        //
        //         // this.dataSourceSubCatChecked.map((e) => tempArr.find(a => {
        //         //     if (e.DataSubCategory === a.DataSubCategory) {
        //         //         e.checked = true;
        //         //         // this.personalDataHeldFormGroup.get('PersonalDataCollected').setValue(e.checked);
        //         //     }
        //         // }));
        //         // this.updateChecked();
        //         console.log('checked===>' + JSON.stringify(this.refDataSourcesCat));
        //     }
        // }

        this.disclosureFormGroup.get('disclosePersonalData')
            .setValue(this.application.PersonalDataIsForDisclosure);
        this.disclosureFormGroup.get('StoreDataOutsideCountry')
            .setValue(this.application.StoreDataOutsideCountry);

    }

    updateChecked() {
        this.dataSourceSubCatChecked.every(t => t.checked);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach((subscription) => subscription.unsubscribe());
    }

    Update(){
        this.dialog.open(UpdateRegistrationComponent, {

           
        });



    }

    
}

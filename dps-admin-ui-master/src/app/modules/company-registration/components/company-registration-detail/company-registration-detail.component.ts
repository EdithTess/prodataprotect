import {HttpClient} from '@angular/common/http';
import {AfterContentInit, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {
    ApiPayload,
    Country,
    CountryOfTransfer,
    DataCategory,
    DataProtectionOfficer,
    DataPurposes,
    DataSource,
    DataSubCategory,
    FileUpload,
    MainActivity,
    NatureOfBusinessCat,
    NatureOfBusinessSubCat,
    OrganisationCategory,
    OrganisationType,
    Sector,
    SecurityMeasure,
    ThirdParty,
    ChildrenDataPurpose
} from '../../../../services/api.model';
import {catchError, filter, map, startWith} from 'rxjs/operators';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {ApiEndpointsService} from '../../../../services/api-endpoints.service';
import {ApiService} from '../../../../services/api.service';
import {OrgNoticeComponent} from '../../../../layout/dialogs/org-registration/org-notice/org-notice.component';
import {OrgMainActivityComponent} from '../../../../layout/dialogs/org-registration/org-main-activity/org-main-activity.component';
import {
    OrgDataProtectionOfficerComponent
} from '../../../../layout/dialogs/org-registration/org-data-protection-officer/org-data-protection-officer.component';
import {
    OrgSecurityMeasuresComponent
} from '../../../../layout/dialogs/org-registration/org-security-measures/org-security-measures.component';
import {OrgThirdPartyComponent} from '../../../../layout/dialogs/org-registration/org-third-party/org-third-party.component';
import {OrgCountryComponent} from '../../../../layout/dialogs/org-registration/org-country/org-country.component';
import {OrgUploadComponent} from '../../../../layout/dialogs/org-upload/org-upload.component';
import {OrgForm3DialogComponent} from '../../../../layout/dialogs/org-registration/org-form3-dialog/org-form3-dialog.component';
import {
    OrgRegistrationPreviewDialogComponent
} from '../../../../layout/dialogs/org-registration/org-registration-preview-dialog/org-registration-preview-dialog.component';
import {SuccessfulMessageDialogComponent} from '../../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import {
    Action,
    ActionPerformed,
    ActionPerformedRequestMoreInfo,
    WorkFlowConstants,
    WorkFlowStep,
    WorkFlowTimeline
} from '../../../models/document-workflow.model';
import {CertificateDetails, CertificateDetailsResponse, CheckListed, CompanyRegistrationModel} from '../company-registration.model';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {$RequestMoreInfoField, Checked, Checklist, RequestMoreInfoField} from '../../../models/reference.model';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {CompanyRegistrationService} from '../../company-registration.service';
import {ReviewCommentsComponent} from '../../../../layout/review-comments/review-comments.component';
import {CertPreviewComponent} from '../cert-preview/cert-preview.component';
import {ApplicationTimelineComponent} from '../../../../layout/application-timeline/application-timeline.component';
import {ReferenceTableService} from '../../../../services/reference-table.service';
import {AuthenticationService} from '../../../../authentication/authentication.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ViewPdfDocumentBottomsheetComponent } from '../../../../layout/bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component';
import { environment } from '../../../../../environments/environment';
import { ComplaintService } from '../../../complaints/complaints.service';

@Component({
  selector: 'fury-company-registration-detail',
  templateUrl: './company-registration-detail.component.html',
  styleUrls: ['./company-registration-detail.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class CompanyRegistrationDetailComponent extends BaseFuryForm implements OnInit, OnDestroy, AfterContentInit  {

  dialogRef;
    bottomsheetRef;
    processing = false;
    formGeneralInformation: FormGroup;
    formOrganisationDetails: FormGroup;
    formPersonalDataHeld: FormGroup;
    formPurposeRetention: FormGroup;
    formSecurityMeasures: FormGroup;
    formThirdParties: FormGroup;
    formChildrenData: FormGroup;
    selectedIndex = 0;
    OrganisationID: any;
    // selectedIndex = 3;
    // isLinear = true;
    isLinear = false;
    today = new Date();
    contactInformation = true;
    sectors: Sector[];
    countries: Country[];
    selected = false;
    DPOSelected = false;
    organisationCategories: OrganisationCategory[] = [];
    selectedOrganisationCategories: OrganisationCategory[] = [];
    organisationTypes: OrganisationType[];
    dataSources: DataSource[];
    selectedDataSources: DataSource[] = [];
    httpSub: Subscription;
    MainActivitiesDisplayedColumns: string[] = ['Count', 'MainActivity', 'Actions'];
    dpoDisplayedColumns: string[] = ['Count', 'Name', 'Telephone', 'Email', 'PhysicalAddress', 'Actions'];
    securityMeasuresDisplayedColumns: string[] = ['Count', 'SecurityMeasure', 'Actions'];
    thirdPartyDisplayedColumns: string[] = ['Count', 'NameOfThirdParty', 'Purpose', 'Actions'];
    countryDisplayedColumns: string[] = ['Count', 'Country', 'Purpose', 'Description', 'Actions'];
    mainActivities: MainActivity[] = [];
    mainActivitiesDataSource: MatTableDataSource<MainActivity>;
    dataProtectionOfficers: DataProtectionOfficer[] = [];
    dpoDataSource: MatTableDataSource<DataProtectionOfficer>;
    securityMeasures: SecurityMeasure[] = [];
    securityMeasureDataSource: MatTableDataSource<SecurityMeasure>;
    thirdParties: ThirdParty[] = [];
    thirdPartyDataSource: MatTableDataSource<ThirdParty>;
    countriesOfTransfer: CountryOfTransfer[] = [];
    countriesDataSource: MatTableDataSource<CountryOfTransfer>;
    selectedDataCategory: DataCategory[] = [];
    selectedDataSubCategory: DataSubCategory[] = [];
    dataCategories: DataCategory[];
    dataPurposes: DataPurposes[];
    childDataPurposes: ChildrenDataPurpose[] = [];
    selectedChildDataPurposes: ChildrenDataPurpose[] = [];
    selectedDataPurposes: DataPurposes[] = [];
    natureOfBusinessCat: NatureOfBusinessCat[] = [];
    natureOfBusinessSubCat: NatureOfBusinessSubCat[] = [];
    selectedNatureOfBusinessSubCat: NatureOfBusinessSubCat[] = [];
    SpecifyTheLaw = false;
    ServiceOrProductProvided = false;
    showChildrenDataFields = false;
    SpecifyLegalObligation = false;
    document: FileUpload | null;
    documentForm3: FileUpload | null;
    proofOfPayment: FileUpload | null;
    OrganizationType = null;
    SectorName = null;
    NatureOfBusinessCat = null;
    CountryOfIncorporation = null;
    RegTrackingNo: string;
    
    //
    role: string;
    workflowID = '1';
    workflowTimeLine: WorkFlowTimeline;
    currentStep: WorkFlowStep;
    certificateResponse: CertificateDetailsResponse;
    certificateDetails: CertificateDetails;
    accesses: string[];
    regTrackingNo: string;
    timeLineAccess: string[] = ['data-protection-officer-director', 'data-protection-officer-nita', 'data-protection-officer-technical', 'data-protection-officer-legal'];
    isOfficer: boolean;
    isApplicant: boolean;
    _hasRequestMoreInfo = false;
    _StepRequestingForMoreInfo = 0;
    requestMoreInfoFields: RequestMoreInfoField[] = [];
    canDownloadCertificate = false;
    $checklist: Checklist[];
    // Main Object
    application: CompanyRegistrationModel = new CompanyRegistrationModel();
    permittedActions: Action[] = [];
    // Subscriptions
    subscriptions: Subscription[] = [];
    $resultRefChecklistEvent: EventEmitter<any> = new EventEmitter();
    formFieldSections: { SectionID: number; SectionName: string; Count: number }[] = []
    personalDataCollectedCheckBoxEnabled = false;
    dataCategory = new FormControl();

    @ViewChild('MainActivityPaginator', {static: false}) MainActivityPaginator: MatPaginator;
    @ViewChild('MainActivityMatSort', {static: false}) MainActivityMatSort: MatSort;
    @ViewChild('dpoPaginator', {static: false}) dpoPaginator: MatPaginator;
    @ViewChild('dpoMatSort', {static: false}) dpoMatSort: MatSort;
    @ViewChild('securityMeasurePaginator', {static: false}) securityMeasurePaginator: MatPaginator;
    @ViewChild('securityMeasureMatSort', {static: false}) securityMeasureMatSort: MatSort;
    @ViewChild('thirdPartyPaginator', {static: false}) thirdPartyPaginator: MatPaginator;
    @ViewChild('thirdPartyMatSort', {static: false}) thirdPartyMatSort: MatSort;
    @ViewChild('countryOfTransferPaginator', {static: false}) countryOfTransferPaginator: MatPaginator;
    @ViewChild('countryOfTransferMatSort', {static: false}) countryOfTransferMatSort: MatSort;
    @Input() checked: Boolean;

    OrganizationID: number;
    cat: number[] = [];
    organisationcategories: any;
    natureOfbusinesses: any;
    natureOfbusinesses_arr: any = [];
    sourceofdata: any;
    sourceofdata_arr: any = [];
    childDataPurposeResults:any = [];
    purpose: any;
    purpose_arr: any = [];

    _updateAttachment = false;
    _updateForm3Attachment = false;
    _updateProofOfPayment = false;
    securityMeasuresEnabled = false;
    thirdPartiesEnabled = false;
    countriesOfTransferEnabled = false;


  constructor(
    private formBuilder: FormBuilder,
    private service: ApiService,
    private endpoints: ApiEndpointsService,
    private dialog: MatDialog,
    private bottomsheet: MatBottomSheet,
    private http: HttpClient,
    private route: Router,
    public snackBar: SnackBarService,
    private activateRoute: ActivatedRoute,
    private changeDetector: ChangeDetectorRef,
    public authService: KeycloakService,
    public _authService: AuthenticationService,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    private referenceService: ReferenceTableService,
    public complaintService: ComplaintService,
  ) {


    super(
      authService,
      _workflowService,
      registrationService,
      complaintService
    );

    this.accesses = authService.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
    this.operationType = activateRoute.routeConfig.data.action;
    this.regTrackingNo = this.route.getCurrentNavigation().extras.state.regTrackingNo;

    this.pageTitle();


   }

   pageTitle() {
    const pageTitle = this.isOfficer ? this.application.OrganisationName + 'Application' : ' My Application';
    this.service.updatePageTitle(['Organisations', pageTitle]);
}

   

ngOnInit(): void {
  this.formGeneralInformation = this.formBuilder.group({
      OrganizationName: new FormControl('', [Validators.required]),
      DPPActCategory: new FormControl('', [Validators.required]),
      OrganizationTypeID: new FormControl('', [Validators.required]),
      CountryOfIncorporation: new FormControl('', [Validators.required]),
      URSBNumber: new FormControl(''),
      SectorID: new FormControl('', [Validators.required]),
      OtherSector: new FormControl('', [Validators.maxLength(50)]),
      Location: new FormControl('', [Validators.required]),
      PhoneNumberCode: new FormControl('', [Validators.required]),
      PhoneNumber: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9 ]+$/),
      ]),
      EmailAddress: new FormControl('', [
          Validators.required,
          Validators.email
      ]),
      // NatureOfBusiness: new FormControl('', [Validators.required]),
      NatureOfBusinessCat: new FormControl('', [Validators.required]),
      NatureOfBusinessSubCat: new FormControl('', [Validators.required]),
  });

  this.formOrganisationDetails = this.formBuilder.group({
      DPORequired: new FormControl(''),
      DPOName: new FormControl(''),
      DPOPhysicalAddress: new FormControl(''),
      PhoneNumberCode: new FormControl(''),
      DPOPhoneNumber: new FormControl(''),
      DPOEmailAddress: new FormControl(''),
      DPOPositionInOrganisation: new FormControl(''),
  });

  this.formPersonalDataHeld = this.formBuilder.group({
      SourceOfDataID: new FormControl('', [Validators.required]),
  });

  this.formPurposeRetention = this.formBuilder.group({
      Purpose: new FormControl('', [Validators.required]),
      SpecifyTheLaw: new FormControl(''),
      ServiceOrProductProvided: new FormControl(''),
      SpecifyLegalObligation: new FormControl(''),
      TotalRecordsAtRegistration: new FormControl('', [Validators.pattern(/^[0-9,]+$/)]),
      RecordPercentageGrowth: new FormControl('', [
          Validators.pattern(/^[0-9,]+$/),
          Validators.max(100),
      ]),
      RetentionPeriod: new FormControl('', [
          Validators.required,
          Validators.pattern(/^[0-9,]+$/),
          Validators.max(100),
      ]),
  });

  this.formSecurityMeasures = this.formBuilder.group({
      RegistrationConsent: new FormControl('', [Validators.required]),
      RegistrationDoneBy: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z ]+$/)]),
      TechnicalComments: new FormControl(),
      LegalComments: new FormControl(),
      DirectorComments: new FormControl(),
  });

  this.formChildrenData = this.formBuilder.group({
      CollectChildrenData: new FormControl('', [Validators.required]),
      PurposeForCollection: new FormControl(''),
    });

  this.formThirdParties = this.formBuilder.group({
      PersonalDataIsForDisclosure: new FormControl('', [Validators.required]),
      StoreDataOutsideCountry: new FormControl('', [Validators.required]),
  });

  // this.Listeners();
  // console.log('operationType:', this.operationType);
  if (this.operationType === 'CREATE' || this.operationType === 'MANAGE') {
      this.Listeners();
  }
  
  // Set OfficerRole
  this.isOfficer = this.timeLineAccess.includes(this.realmRole);
  // Fetch Checklist
  this.referenceService.getChecklist(this.$processingEvent, this.$resultRefChecklistEvent, this.$errorsEvent);

  this.formGeneralInformation.valueChanges
      .pipe(
          filter(() => this.formGeneralInformation.valid)
      ).subscribe(val => localStorage.setItem('STEP_1', JSON.stringify(val)));
}

ngAfterContentInit(): void {
  this.OrganizationID = 156;
  this.getDataFromMultipleRequests();
}

private getDataFromMultipleRequests(): void {
  this.httpSub = this.fetchMultiple(this.regTrackingNo)
  .pipe(catchError(this.service.handleError))
  .subscribe((responseList) => {

    
      this.countries = responseList[0];

      this.organisationCategories = [
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

      this.childDataPurposes = [
          {
            ChildDataID: 1,
            ChildDataPurpose: 'Carried out with prior consent of the parent,guardian, or  any other person having authority to make decisions on behalf of the child '
          },
          {
            ChildDataID: 2,
            ChildDataPurpose: 'Necessary to comply with the law'
          },
          {
            ChildDataID: 3,
            ChildDataPurpose: 'For research or statistical purposes'
          }
        ]


      this.formGeneralInformation.get('PhoneNumberCode').patchValue('256');
      this.formOrganisationDetails.get('PhoneNumberCode').patchValue('256');

      this.dataSources = responseList[1];

      this.organisationTypes = responseList[2];

      this.sectors = responseList[3];

      this.dataCategories = responseList[4];

      this.dataPurposes = responseList[5];

      this.natureOfBusinessCat = responseList[6];



      this.fetchSingleApplication(responseList[7], responseList[8]);



      this.processing = false;
  }, (error) => {
      this.processing = false;
      this.service.determineErrorResponse(error);
  });        
}


private fetchMultiple(OrgID: any): Observable<any[]> {
  this.processing = true;
  const reqCountries = this.http.get<ApiPayload>(this.endpoints.countries);
  const reqDataSources = this.http.get<ApiPayload>(this.endpoints.dataSources);
  const reqOrganisationType = this.http.get<ApiPayload>(this.endpoints.organisationType);
  const reqSector = this.http.get<ApiPayload>(this.endpoints.sector);
  const reqDataSubcategories = this.http.get<ApiPayload>(this.endpoints.dataSubcategories);
  const reqDataPurpose = this.http.get<ApiPayload>(this.endpoints.dataPurpose);
  const reqNatureOfBusiness = this.http.get<ApiPayload>(this.endpoints.natureOfBusiness);
  const reqFetchOrganisatioDetails = this.http.get<ApiPayload>(this.endpoints.getOrgRegDetails, {params: {RegTrackingNo: OrgID}});
  const reviewComments = this.http.get<ApiPayload>(this.endpoints.getReviewComments, {params: {RegTrackingNo: OrgID}});

  // tslint:disable-next-line:max-line-length
  return forkJoin([reqCountries, reqDataSources, reqOrganisationType, reqSector, reqDataSubcategories, reqDataPurpose, reqNatureOfBusiness, reqFetchOrganisatioDetails, reviewComments]);
}


private Listeners(): void {
  // STEP ONE
  this.formGeneralInformation.get('DPPActCategory').valueChanges.subscribe((value) => {
      const values: number[] = value;
      this.selectedOrganisationCategories.length = 0;

      this.organisationCategories.filter((item) => {
          if (values.includes(item.OrganisationCategoryId)) {
              this.selectedOrganisationCategories.push(item);
          }
      });
  });

  this.formGeneralInformation.get('OrganizationTypeID').valueChanges.subscribe((value) => {
      if (value !== 4) {
          this.formGeneralInformation.get('CountryOfIncorporation').setValidators([Validators.required]);
          this.formGeneralInformation.get('URSBNumber').setValidators([Validators.required]);
      } else {
          this.formGeneralInformation.get('CountryOfIncorporation').clearValidators();
          this.formGeneralInformation.get('CountryOfIncorporation').reset();
          this.formGeneralInformation.get('URSBNumber').clearValidators();
          this.formGeneralInformation.get('URSBNumber').reset();
          this.CountryOfIncorporation = null;
      }

      this.formGeneralInformation.controls['CountryOfIncorporation'].updateValueAndValidity();
      this.formGeneralInformation.controls['URSBNumber'].updateValueAndValidity();
  });

  this.formGeneralInformation.get('SectorID').valueChanges.subscribe((value) => {
      if (value === 14) {
          this.formGeneralInformation.get('OtherSector').setValidators([Validators.required]);
      } else {
          this.formGeneralInformation.get('OtherSector').clearValidators();
          this.formGeneralInformation.get('OtherSector').reset();
      }

      this.formGeneralInformation.controls['OtherSector'].updateValueAndValidity();
  });

  this.formGeneralInformation.get('NatureOfBusinessCat').valueChanges.subscribe((value) => {
      if (value) { 
          this.onNatureOfBusinessCatSelected(value);
      }
  });

  this.formGeneralInformation.get('NatureOfBusinessSubCat').valueChanges.subscribe((value) => {
      const values: number[] = value;
      this.selectedNatureOfBusinessSubCat.length = 0;

      this.natureOfBusinessSubCat.filter((item) => {
          if (values.includes(item.NatureOfBusinessSubCatId)) {
              this.selectedNatureOfBusinessSubCat.push(item);
          }
      });
  });

  // STEP TWO
  this.formOrganisationDetails.get('DPORequired').valueChanges.subscribe((value) => {

      if (value === 'Yes') {
          this.formOrganisationDetails.get('DPOName').setValidators([Validators.required, Validators.pattern(/^[a-zA-Z ]+$/), ]);
          this.formOrganisationDetails.get('DPOPhysicalAddress').setValidators([Validators.required]);
          this.formOrganisationDetails.get('DPOPhoneNumber').setValidators([Validators.required, Validators.pattern(/^[0-9 ]+$/)]);
          this.formOrganisationDetails.get('DPOEmailAddress').setValidators([Validators.required, Validators.email]);
          this.formOrganisationDetails.get('DPOPositionInOrganisation').setValidators([Validators.required]);
      } else {
          this.formOrganisationDetails.get('DPOName').clearValidators();
          this.formOrganisationDetails.get('DPOName').reset();
          this.formOrganisationDetails.get('DPOPhysicalAddress').clearValidators();
          this.formOrganisationDetails.get('DPOPhysicalAddress').reset();
          this.formOrganisationDetails.get('DPOPhoneNumber').clearValidators();
          this.formOrganisationDetails.get('DPOPhoneNumber').reset();
          this.formOrganisationDetails.get('DPOEmailAddress').clearValidators();
          this.formOrganisationDetails.get('DPOEmailAddress').reset();
          this.formOrganisationDetails.get('DPOPositionInOrganisation').clearValidators();
          this.formOrganisationDetails.get('DPOPositionInOrganisation').reset();
      }

      this.formOrganisationDetails.controls['DPOName'].updateValueAndValidity();
      this.formOrganisationDetails.controls['DPOPhysicalAddress'].updateValueAndValidity();
      this.formOrganisationDetails.controls['DPOPhoneNumber'].updateValueAndValidity();
      this.formOrganisationDetails.controls['DPOEmailAddress'].updateValueAndValidity();
      this.formOrganisationDetails.controls['DPOPositionInOrganisation'].updateValueAndValidity();
  });

  // STEP THREE
  this.formPersonalDataHeld.get('SourceOfDataID').valueChanges.subscribe((value) => {
      const values: number[] = value;
      this.selectedDataSources.length = 0;

      this.dataSources?.filter((item) => {
          if (values.includes(item.DataSourceID)) {
              this.selectedDataSources.push(item);
          }
      });
  });

  
    ///CHILDREN DATA PURPOSES

    this.formChildrenData.get('PurposeForCollection').valueChanges.subscribe((value) => {
        const values: number[] = value;
        this.selectedChildDataPurposes.length = 0;
  
        this.childDataPurposes.filter((item) => {
          if (values.includes(item.ChildDataID)) {
            this.selectedChildDataPurposes.push(item);
          }
        });
  
        console.log(this.selectedChildDataPurposes);
      });

  // STEP FOUR
  this.formPurposeRetention.get('Purpose').valueChanges.subscribe((value) => {
      const values: number[] = value;

      this.selectedDataPurposes.length = 0;

      // Reset all the fields first
      this.SpecifyTheLaw = false;
      this.ServiceOrProductProvided = false;
      this.SpecifyLegalObligation = false;
      this.formPurposeRetention.get('SpecifyTheLaw').clearValidators();
      this.formPurposeRetention.get('SpecifyTheLaw').reset();
      this.formPurposeRetention.get('ServiceOrProductProvided').clearValidators();
      this.formPurposeRetention.get('ServiceOrProductProvided').reset();
      this.formPurposeRetention.get('SpecifyLegalObligation').clearValidators();
      this.formPurposeRetention.get('SpecifyLegalObligation').reset();

      values?.filter((item) => {
          if (item === 1) {
              this.SpecifyTheLaw = true;
              this.formPurposeRetention.get('SpecifyTheLaw').setValidators([Validators.required]);
          }

          if (item === 3) {
              this.ServiceOrProductProvided = true;
              this.formPurposeRetention.get('ServiceOrProductProvided').setValidators([Validators.required]);
          }

          if (item === 6) {
              this.SpecifyLegalObligation = true;
              this.formPurposeRetention.get('SpecifyLegalObligation').setValidators([Validators.required]);
          }
      });

      this.formPurposeRetention.controls['SpecifyTheLaw'].updateValueAndValidity();
      this.formPurposeRetention.controls['ServiceOrProductProvided'].updateValueAndValidity();
      this.formPurposeRetention.controls['SpecifyLegalObligation'].updateValueAndValidity();

      this.dataPurposes.filter((item) => {
          if (values.includes(item.DataPurposeID)) {
              this.selectedDataPurposes.push(item);
          }
      });

      this.changeDetector.detectChanges();
  });

  this.formPurposeRetention.get('RecordPercentageGrowth').valueChanges.subscribe((value) => {

      if (value > 100) {
          this.formPurposeRetention.get('RecordPercentageGrowth').patchValue(100);
      }

      this.changeDetector.detectChanges();
  });

  this.formPurposeRetention.get('RetentionPeriod').valueChanges.subscribe((value) => {

      if (value > 100) {
          this.formPurposeRetention.get('RetentionPeriod').patchValue(100);
      }

      this.changeDetector.detectChanges();
  });

  // STEP FIVE
  this.formThirdParties.get('PersonalDataIsForDisclosure').valueChanges.subscribe((value) => {        
      if (value === 'No') {
          this.thirdParties.length = 0;

          this.thirdPartyDataSource = new MatTableDataSource(this.thirdParties);

          setTimeout(() => {
              this.thirdPartyDataSource.paginator = this.thirdPartyPaginator;
              this.thirdPartyDataSource.sort = this.thirdPartyMatSort;
          });
      }
  });

  this.formThirdParties.get('StoreDataOutsideCountry').valueChanges.subscribe((value) => {
      if (value === 'No') {
          this.countriesOfTransfer.length = 0;

          this.countriesDataSource = new MatTableDataSource(this.countriesOfTransfer);

          setTimeout(() => {
              this.countriesDataSource.paginator = this.countryOfTransferPaginator;
              this.countriesDataSource.sort = this.countryOfTransferMatSort;
          });            
      }
  });
}

private onShowNotice(): void {
  this.dialogRef = this.dialog.open(OrgNoticeComponent, {
      panelClass: ['organisation-data-protection-officer-dialog', 'dialogs'],
      disableClose: true,
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: DataProtectionOfficer }) => {

  });
}

getOrganizationNameErrorMessage(): string {
  return this.formGeneralInformation.get('OrganizationName').hasError('required') ? 'Please enter a value' : '';
}

getURSBNumberErrorMessage(): string {
  return this.formGeneralInformation.get('URSBNumber').hasError('required') ? 'Please enter a value' : '';
}

getSelectErrorMessage(): string {
  return this.formGeneralInformation.get('DPPActCategory').hasError('required')
  || this.formGeneralInformation.get('OrganizationTypeID').hasError('required')
  || this.formGeneralInformation.get('CountryOfIncorporation').hasError('required')
  || this.formGeneralInformation.get('SectorID').hasError('required')
  || this.formGeneralInformation.get('NatureOfBusinessCat').hasError('required')
  || this.formGeneralInformation.get('NatureOfBusinessSubCat').hasError('required')
  || this.formPersonalDataHeld.get('SourceOfDataID').hasError('required')
  || this.formPurposeRetention.get('Purpose').hasError('required')
      ? 'Please choose a value' : '';
}

getTelephoneNumberErrorMessage(): string {
  return this.formGeneralInformation.get('PhoneNumber').hasError('required') ? 'Please enter a value' :
      this.formGeneralInformation.get('PhoneNumber').hasError('pattern') ? 'Wrong Phone number' : '';
}

getEmailAddressErrorMessage(): string {
  return this.formGeneralInformation.get('EmailAddress').hasError('required') ? 'Please enter a value' :
      this.formGeneralInformation.get('EmailAddress').hasError('email') ? 'Wrong Email Address.' : '';
}

getOtherSectorErrorMessage(): string {
  return this.formGeneralInformation.get('OtherSector').hasError('required') ? 'Please enter a value' : '';
}

getLocationErrorMessage(): string {
  return this.formGeneralInformation.get('Location').hasError('required') ? 'Please enter a location' : '';
}

getDPONameErrorMessage(): string {
  return this.formOrganisationDetails.get('DPOName').hasError('required') ? 'Please enter a value' :
      this.formOrganisationDetails.get('DPOName').hasError('pattern') ? 'Please enter a correct name' : '';
}

getDPOPhysicalAddressErrorMessage(): string {
  return this.formOrganisationDetails.get('DPOPhysicalAddress').hasError('required') ? 'Please enter a location' : '';
}

getDPOPhoneNumberErrorMessage(): string {
  return this.formOrganisationDetails.get('DPOPhoneNumber').hasError('required') ? 'Please enter a value' :
      this.formOrganisationDetails.get('DPOPhoneNumber').hasError('pattern') ? 'Wrong Phone number' : '';
}

getDPOEmailAddressErrorMessage(): string {
  return this.formOrganisationDetails.get('DPOEmailAddress').hasError('required') ? 'Please enter a value' :
      this.formOrganisationDetails.get('DPOEmailAddress').hasError('email') ? 'Wrong Email Address.' : '';
}

getDPOPositionInOrganisationErrorMessage(): string {
  return this.formOrganisationDetails.get('DPOPositionInOrganisation').hasError('required') ? 'Please enter a value' : '';
}

getRequiredErrorMessage(): string {
  return this.formPurposeRetention.get('SpecifyTheLaw').hasError('required')
  || this.formPurposeRetention.get('ServiceOrProductProvided').hasError('required')
  || this.formPurposeRetention.get('SpecifyLegalObligation').hasError('required')
      ? 'Please enter a value' : '';
}

getPatternErrorMessage(): string {
  return this.formPurposeRetention.get('TotalRecordsAtRegistration').hasError('pattern')
      ? 'Please enter correct information' : '';
}

getRetentionPeriodErrorMessage(): string {
  return this.formPurposeRetention.get('RetentionPeriod').hasError('required') ? 'Please enter a value' :
      this.formPurposeRetention.get('RetentionPeriod').hasError('max') ? 'Maximum of 100' :
          this.formPurposeRetention.get('RetentionPeriod').hasError('pattern') ? 'Not valid' : '';
}

getRecordPercentageGrowthErrorMessage(): string {
  return this.formPurposeRetention.get('RecordPercentageGrowth').hasError('max') ? 'Maximum of 100' :
      this.formPurposeRetention.get('RecordPercentageGrowth').hasError('pattern') ? 'Not valid' : '';
}

getCheckboxErrorMessage(): string {
  return this.formSecurityMeasures.get('RegistrationConsent').hasError('max') ? 'This field is required' : '';
}

getRegistrationDoneByErrorMessage(): string {
  return this.formSecurityMeasures.get('RegistrationDoneBy').hasError('required') ? 'Please enter a value' :
      this.formSecurityMeasures.get('RegistrationDoneBy').hasError('pattern') ? 'Please enter a correct name' : '';
}

updateCollecthildrenData(event){

  console.log(event.value);

  if(event.value == 'Yes'){
    this.showChildrenDataFields = true;
    this.formChildrenData.get('PurposeForCollection').setValidators([Validators.required]);

    this.formChildrenData.controls['PurposeForCollection'].updateValueAndValidity();
  }
  else{
    this.showChildrenDataFields = false;

    this.formChildrenData.get('PurposeForCollection').setValidators([]);

    this.formChildrenData.get('PurposeForCollection').reset();

    this.formChildrenData.controls['PurposeForCollection'].updateValueAndValidity();
  }
}

onAddMainActivity(): void {
  this.dialogRef = this.dialog.open(OrgMainActivityComponent, {
      panelClass: ['organisation-main-activity-dialog', 'dialogs'],
      disableClose: true,
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: MainActivity }) => {
      if (result.status) {
          let found = false;
          this.mainActivities.filter((activity) => {
              if (activity.Activity === result.row.Activity) {
                  found = true;
              }
          });

          if (found) {
              this.service.openSnackBar('Sorry, this record already exists', 'error-lg');
          } else {
              this.mainActivities.push(result.row);
          }

          this.mainActivitiesDataSource = new MatTableDataSource(this.mainActivities);

          setTimeout(() => {
              this.mainActivitiesDataSource.paginator = this.MainActivityPaginator;
              this.mainActivitiesDataSource.sort = this.MainActivityMatSort;
          });
      }
  });
}

onEditMainActivity(row: MainActivity): void {
  this.dialogRef = this.dialog.open(OrgMainActivityComponent, {
      panelClass: ['organisation-main-activity-dialog', 'dialogs'],
      disableClose: true,
      data: {row}
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: MainActivity }) => {
      if (result.status) {

          this.mainActivities[this.mainActivities.indexOf(row)] = {
              Activity: result.row.Activity,
          };

          this.mainActivitiesDataSource = new MatTableDataSource(this.mainActivities);

          setTimeout(() => {
              this.mainActivitiesDataSource.paginator = this.MainActivityPaginator;
              this.mainActivitiesDataSource.sort = this.MainActivityMatSort;
          });
      }
  });
}

onRemoveMainActivity(row: MainActivity): void {
  this.mainActivities.splice(this.mainActivities.indexOf(row), 1);

  this.mainActivitiesDataSource = new MatTableDataSource(this.mainActivities);

  setTimeout(() => {
      this.mainActivitiesDataSource.paginator = this.MainActivityPaginator;
      this.mainActivitiesDataSource.sort = this.MainActivityMatSort;
  });
}

onAddADPO(): void {
  this.dialogRef = this.dialog.open(OrgDataProtectionOfficerComponent, {
      panelClass: ['organisation-data-protection-officer-dialog', 'dialogs'],
      disableClose: true,
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: DataProtectionOfficer }) => {
      if (result.status) {
          let found = false;
          this.dataProtectionOfficers.filter((dpo) => {
              if (dpo.EmailAddress === result.row.EmailAddress || dpo.PhoneNumber === result.row.PhoneNumber) {
                  found = true;
              }
          });

          if (found) {
              this.service.openSnackBar('Sorry, this record already exists', 'error-lg');
          } else {
              this.dataProtectionOfficers.push(result.row);
          }

          this.dpoDataSource = new MatTableDataSource(this.dataProtectionOfficers);

          setTimeout(() => {
              this.dpoDataSource.paginator = this.dpoPaginator;
              this.dpoDataSource.sort = this.dpoMatSort;
          });
      }
  });
}

onEditDPO(row: DataProtectionOfficer): void {
  this.dialogRef = this.dialog.open(OrgDataProtectionOfficerComponent, {
      panelClass: ['organisation-data-protection-officer-dialog', 'dialogs'],
      disableClose: true,
      data: {row}
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: DataProtectionOfficer }) => {
      if (result.status) {

          this.dataProtectionOfficers[this.dataProtectionOfficers.indexOf(row)] = {
              Name: result.row.Name,
              EmailAddress: result.row.EmailAddress,
              PhoneNumber: result.row.PhoneNumber,
              PhysicalAddress: result.row.PhysicalAddress,
              PositionInOrganisation: result.row.PositionInOrganisation,
          };

          this.dpoDataSource = new MatTableDataSource(this.dataProtectionOfficers);

          setTimeout(() => {
              this.dpoDataSource.paginator = this.dpoPaginator;
              this.dpoDataSource.sort = this.dpoMatSort;
          });
      }
  });
}

onRemoveDPO(row: DataProtectionOfficer): void {
  this.dataProtectionOfficers.splice(this.dataProtectionOfficers.indexOf(row), 1);

  this.dpoDataSource = new MatTableDataSource(this.dataProtectionOfficers);

  setTimeout(() => {
      this.dpoDataSource.paginator = this.dpoPaginator;
      this.dpoDataSource.sort = this.dpoMatSort;
  });
}

onAddSecurityMeasure(): void {
  this.dialogRef = this.dialog.open(OrgSecurityMeasuresComponent, {
      panelClass: ['organisation-security-measure-dialog', 'dialogs'],
      disableClose: true,
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: SecurityMeasure }) => {
      if (result.status) {
          let found = false;
          this.securityMeasures.filter((item) => {
              if (item.SecurityMeasure === result.row.SecurityMeasure) {
                  found = true;
              }
          });

          if (found) {
              this.service.openSnackBar('Sorry, this record already exists', 'error-lg');
          } else {
              this.securityMeasures.push(result.row);
          }

          this.securityMeasureDataSource = new MatTableDataSource(this.securityMeasures);

          setTimeout(() => {
              this.securityMeasureDataSource.paginator = this.securityMeasurePaginator;
              this.securityMeasureDataSource.sort = this.securityMeasureMatSort;
          });
      }
  });
}

onEditSecurityMeasure(row: SecurityMeasure): void {
  this.dialogRef = this.dialog.open(OrgSecurityMeasuresComponent, {
      panelClass: ['organisation-security-measure-dialog', 'dialogs'],
      disableClose: true,
      data: {row}
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: SecurityMeasure }) => {
      if (result.status) {

          this.securityMeasures[this.securityMeasures.indexOf(row)] = {
              SecurityMeasure: result.row.SecurityMeasure,
          };

          this.securityMeasureDataSource = new MatTableDataSource(this.securityMeasures);

          setTimeout(() => {
              this.securityMeasureDataSource.paginator = this.securityMeasurePaginator;
              this.securityMeasureDataSource.sort = this.securityMeasureMatSort;
          });
      }
  });
}

onRemoveSecurityMeasure(row: SecurityMeasure): void {
  this.securityMeasures.splice(this.securityMeasures.indexOf(row), 1);

  this.securityMeasureDataSource = new MatTableDataSource(this.securityMeasures);

  setTimeout(() => {
      this.securityMeasureDataSource.paginator = this.securityMeasurePaginator;
      this.securityMeasureDataSource.sort = this.securityMeasureMatSort;
  });
}

onAddAThirdParty(): void {
  this.dialogRef = this.dialog.open(OrgThirdPartyComponent, {
      panelClass: ['organisation-third-party-dialog', 'dialogs'],
      disableClose: true,
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: ThirdParty }) => {
      if (result.status) {
          let found = false;

          this.thirdParties.filter((party) => {
              if (party.ThirdPartyName === result.row.ThirdPartyName) {
                  found = true;
              }
          });

          if (found) {
              this.service.openSnackBar('Sorry, this record already exists', 'error-lg');
          } else {
              this.thirdParties.push(result.row);
          }

          this.thirdPartyDataSource = new MatTableDataSource(this.thirdParties);

          setTimeout(() => {
              this.thirdPartyDataSource.paginator = this.thirdPartyPaginator;
              this.thirdPartyDataSource.sort = this.thirdPartyMatSort;
          });
      }
  });
}

onEditThirdParty(row: ThirdParty): void {
  this.dialogRef = this.dialog.open(OrgThirdPartyComponent, {
      panelClass: ['organisation-third-party-dialog', 'dialogs'],
      disableClose: true,
      data: {row}
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: ThirdParty }) => {
      if (result.status) {

          this.thirdParties[this.thirdParties.indexOf(row)] = {
              ThirdPartyName: result.row.ThirdPartyName,
              Purpose: result.row.Purpose,
          };

          this.thirdPartyDataSource = new MatTableDataSource(this.thirdParties);

          setTimeout(() => {
              this.thirdPartyDataSource.paginator = this.thirdPartyPaginator;
              this.thirdPartyDataSource.sort = this.thirdPartyMatSort;
          });
      }
  });
}

onRemoveThirdParty(row: ThirdParty): void {
  this.thirdParties.splice(this.thirdParties.indexOf(row), 1);

  this.thirdPartyDataSource = new MatTableDataSource(this.thirdParties);

  setTimeout(() => {
      this.thirdPartyDataSource.paginator = this.thirdPartyPaginator;
      this.thirdPartyDataSource.sort = this.thirdPartyMatSort;
  });
}

onAddACountry(): void {
  this.dialogRef = this.dialog.open(OrgCountryComponent, {
      panelClass: ['organisation-country-dialog', 'dialogs'],
      disableClose: true,
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: CountryOfTransfer }) => {
      if (result.status) {
          let found = false;
          this.countriesOfTransfer.filter((party) => {
              if (party.Country === result.row.Country) {
                  found = true;
              }
          });

          if (found) {
              this.service.openSnackBar('Sorry, this record already exists', 'error-lg');
          } else {
              this.countriesOfTransfer.push(result.row);
          }

          this.countriesDataSource = new MatTableDataSource(this.countriesOfTransfer);

          setTimeout(() => {
              this.countriesDataSource.paginator = this.countryOfTransferPaginator;
              this.countriesDataSource.sort = this.countryOfTransferMatSort;
          });
      }
  });
}

onEditCountry(row: CountryOfTransfer): void {
  this.dialogRef = this.dialog.open(OrgCountryComponent, {
      panelClass: ['organisation-country-dialog', 'dialogs'],
      disableClose: true,
      data: {row}
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: CountryOfTransfer }) => {
      if (result.status) {
          this.countriesOfTransfer[this.countriesOfTransfer.indexOf(row)] = {
              CountryID: result.row.CountryID,
              Country: result.row.Country,
              Purpose: result.row.Purpose,
              Description: result.row.Description,
          };

          this.countriesDataSource = new MatTableDataSource(this.countriesOfTransfer);

          setTimeout(() => {
              this.countriesDataSource.paginator = this.countryOfTransferPaginator;
              this.countriesDataSource.sort = this.countryOfTransferMatSort;
          });
      }
  });
}

onRemoveCountry(row: CountryOfTransfer): void {
  this.countriesOfTransfer.splice(this.countriesOfTransfer.indexOf(row), 1);

  this.countriesDataSource = new MatTableDataSource(this.countriesOfTransfer);

  setTimeout(() => {
      this.countriesDataSource.paginator = this.countryOfTransferPaginator;
      this.countriesDataSource.sort = this.countryOfTransferMatSort;
  });
}

onUploadAttachments(): void {
  this.dialogRef = this.dialog.open(OrgUploadComponent, {
      panelClass: ['organisation-upload-dialog', 'dialogs'],
      disableClose: true,
      data: {
          multiple: false
      }
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: FileUpload }) => {
      // console.log('row:', result.row);

      if (result.status) {
          this.document = result.row;
      }
  });
}

onRemoveDocument(): void {
  this.document = null;
}

onDownloadForm3(): void {
  // this.formGeneralInformation.get('OrganizationName').patchValue('Applied Principles Consulting');
  // this.formGeneralInformation.get('Location').patchValue('Bukoto street 764');

  this.dialogRef = this.dialog.open(OrgForm3DialogComponent, {
      panelClass: ['organisation-form-3-dialog', 'dialogs'],
      disableClose: true,
      data: {
          OrganisationName: this.formGeneralInformation.get('OrganizationName').value,
          PhysicalAddress: this.formGeneralInformation.get('Location').value,
          Date: new Date()
      }
  });
}

onUploadProofOfPayment(): void {
  this.dialogRef = this.dialog.open(OrgUploadComponent, {
      panelClass: ['organisation-upload-dialog', 'dialogs'],
      disableClose: true,
      data: {
          multiple: false
      }
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: FileUpload }) => {

      if (result.status) {
          this.proofOfPayment = result.row;
      }
  });
}

onRemoveProofOfPaymen(): void {
  this.proofOfPayment = null;
}

onUploadForm3Attachments(): void {
  this.dialogRef = this.dialog.open(OrgUploadComponent, {
      panelClass: ['organisation-upload-dialog', 'dialogs'],
      disableClose: true,
      data: {
          multiple: false
      }
  });

  this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: FileUpload }) => {
      if (result.status) {
          this.documentForm3 = result.row;
      }
  });
}

onRemoveForm3Document(): void {
  this.documentForm3 = null;
}

onChangeSubCategory(event: MatCheckboxChange, SubCategory: DataSubCategory): void {
  if (event.checked) {
      this.selectedDataSubCategory.push(SubCategory);
  } else {
      this.selectedDataSubCategory.splice(this.selectedDataSubCategory.indexOf(SubCategory), 1);
  }
}

private getFormData(): any {

  return {
    
    OrganisationID: this.OrganisationID.toString(),
    RegTrackingNo: this.regTrackingNo,
    OrganisationName: this.formGeneralInformation.get('OrganizationName').value,
    OrganisationCategory: this.selectedOrganisationCategories ? this.selectedOrganisationCategories : [],
    OrganizationTypeID: this.formGeneralInformation.get('OrganizationTypeID').value ? this.formGeneralInformation.get('OrganizationTypeID').value : 0,
    CountryOfIncorporation: this.formGeneralInformation.get('CountryOfIncorporation').value ? this.formGeneralInformation.get('CountryOfIncorporation').value : 0,
    URSBNumber: this.formGeneralInformation.get('URSBNumber').value ? this.formGeneralInformation.get('URSBNumber').value : '',
    SectorID: this.formGeneralInformation.get('SectorID').value ? this.formGeneralInformation.get('SectorID').value : 0,
    OtherSector: this.formGeneralInformation.get('OtherSector').value ? this.formGeneralInformation.get('OtherSector').value : '',
    Location: this.formGeneralInformation.get('Location').value ? this.formGeneralInformation.get('Location').value : '',
    // tslint:disable-next-line:max-line-length
    // PhoneNumber: this.formGeneralInformation.get('PhoneNumberCode').value + (this.formGeneralInformation.get('PhoneNumber').value).replaceAll(' ', ''),
    // EmailAddress: this.formGeneralInformation.get('EmailAddress').value,
    PhoneNumber: this.formGeneralInformation.get('PhoneNumberCode').value + (this.formGeneralInformation.get('PhoneNumber').value).replaceAll(' ', ''),
    EmailAddress: this.formGeneralInformation.get('EmailAddress').value,
    NatureOfBusinessCatID: this.formGeneralInformation.get('NatureOfBusinessCat').value ? this.formGeneralInformation.get('NatureOfBusinessCat').value : 0,
    NatureOfBusiness: this.selectedNatureOfBusinessSubCat ? this.selectedNatureOfBusinessSubCat : [],
    
    DPORequired: this.formOrganisationDetails.get('DPORequired').value,
    DPOName: this.formOrganisationDetails.get('DPORequired').value === 'Yes' ? this.formOrganisationDetails.get('DPOName').value : '',
    DPOPhysicalAddress: this.formOrganisationDetails.get('DPORequired').value === 'Yes' ? this.formOrganisationDetails.get('DPOPhysicalAddress').value : '',
    // tslint:disable-next-line:max-line-length
    DPOPhoneNumber: this.formOrganisationDetails.get('DPOPhoneNumber').value ? this.formOrganisationDetails.get('PhoneNumberCode').value + (this.formOrganisationDetails.get('DPOPhoneNumber').value).replaceAll(' ', '') : '',
    // tslint:disable-next-line:max-line-length
    DPOEmailAddress: this.formOrganisationDetails.get('DPORequired').value === 'Yes' ? this.formOrganisationDetails.get('DPOEmailAddress').value : '',
    DPOPositionInOrganisation: this.formOrganisationDetails.get('DPORequired').value === 'Yes' ? this.formOrganisationDetails.get('DPOPositionInOrganisation').value : '',
    SourceOfDataID: this.selectedDataSources ? this.selectedDataSources : [],
    PersonalDataCollected: this.selectedDataSubCategory ? this.selectedDataSubCategory : [],
    Purpose: this.selectedDataPurposes ? this.selectedDataPurposes : [],
    SpecifyTheLaw: this.formPurposeRetention.get('SpecifyTheLaw').value ? this.formPurposeRetention.get('SpecifyTheLaw').value : '',
    ServiceOrProductProvided: this.formPurposeRetention.get('ServiceOrProductProvided').value ? this.formPurposeRetention.get('ServiceOrProductProvided').value : '',
    SpecifyLegalObligation: this.formPurposeRetention.get('SpecifyLegalObligation').value ? this.formPurposeRetention.get('SpecifyLegalObligation').value : '',
    // tslint:disable-next-line:max-line-length
    TotalRecordsAtRegistration: this.formPurposeRetention.get('TotalRecordsAtRegistration').value ? parseInt(this.formPurposeRetention.get('TotalRecordsAtRegistration').value, 10) : 0,
    RecordPercentageGrowth: this.formPurposeRetention.get('RecordPercentageGrowth').value ? parseInt(this.formPurposeRetention.get('RecordPercentageGrowth').value, 10) : 0,
    // RetentionPeriod: this.formPurposeRetention.get('RetentionPeriod').value,
    RetentionPeriod: this.formPurposeRetention.get('RetentionPeriod').value ? parseInt(this.formPurposeRetention.get('RetentionPeriod').value, 10) : 0,
    PersonalDataIsForDisclosure: this.formThirdParties.get('PersonalDataIsForDisclosure').value ? this.formThirdParties.get('PersonalDataIsForDisclosure').value : '',
    ThirdParties: this.thirdParties ? this.thirdParties : [],
    StoreDataOutsideCountry: this.formThirdParties.get('StoreDataOutsideCountry').value ? this.formThirdParties.get('StoreDataOutsideCountry').value : '',
    Countries: this.countriesOfTransfer ? this.countriesOfTransfer : [],
    SecurityMeasures: this.securityMeasures ? this.securityMeasures : [],
    Attachment: this.document ? this.document.Base64 : '',
    Form3Attachment: this.documentForm3 ? this.documentForm3.Base64 : '',
    RegistrationConsent: this.formSecurityMeasures.get('RegistrationConsent').value ? true : false,
    RegistrationDoneBy: this.formSecurityMeasures.get('RegistrationDoneBy').value ? this.formSecurityMeasures.get('RegistrationDoneBy').value : '',
    //PRN : this.formGeneralInformation.get('PRN').value ? this.formGeneralInformation.get('PRN').value : '',
    ChildrenDataPurpose: this.selectedChildDataPurposes ? this.selectedChildDataPurposes : [],
    CollectChildrenData: this.formChildrenData.get('CollectChildrenData').value ? this.formChildrenData.get('CollectChildrenData').value : '',
    ProofOfPayment: this.proofOfPayment ? this.proofOfPayment.Base64 : '',
  
  };
}



onNatureOfBusinessCatSelected(NatureOfBusinessCatId): void {
  // tslint:disable-next-line:max-line-length
  this.httpSub = this.http.get<NatureOfBusinessSubCat[]>(this.endpoints.natureOfBusiness + '?NatureOfBusinessSubCat=' + NatureOfBusinessCatId)
  .pipe(catchError(this.service.handleError))
  .subscribe((response) => {

    this.natureOfBusinessSubCat = response;

  }, (error) => {
    this.processing = false;
    this.service.determineErrorResponse(error);
  });
}
fetchSingleApplication(response, comments): void {
  this.application = response;

  console.log(comments.data.data.length);
  console.log(comments.data.data);


  // console.log('application:', this.application);
  // console.log('_StepRequestingForMoreInfo:', this._StepRequestingForMoreInfo);

  this.hasRequestForMoreInfo(this.application.RegTrackingNo);
  this.findDocumentActions(1, this.application.CurrentStepID);
  this.getDocumentWorkflow(this.application.RegTrackingNo, this.workflowID);

  // console.log('object:', this.application);

  if (this.application.CurrentStepName === 'Certificate Issued') {
      if (this.isOfficer) {
          this.getIssuedCertDetails(+this.application.OrganisationID);
      } else {
          this.getIssuedCertDetails(parseInt(this.application.OrganisationID, 10));
      }
  }

  this.formGeneralInformation.get('OrganizationName').patchValue(this.application.OrganisationName);
  this.organisationcategories = this.application.OrganisationCategory;

  this.organisationcategories.filter((item) => {
      this.cat.push(item.OrganisationCategoryId);
  });

  this.OrganisationID = this.application.OrganisationID;
  this.formGeneralInformation.get('DPPActCategory').patchValue(this.cat);

  this.formGeneralInformation.get('OrganizationTypeID').patchValue(this.application.OrganizationTypeID);
  this.formGeneralInformation.get('URSBNumber').patchValue(this.application.URSBNumber);
  this.formGeneralInformation.get('SectorID').patchValue(this.application.SectorID);
  this.formGeneralInformation.get('CountryOfIncorporation').patchValue(response['CountryOfIncorporation']);
  this.formGeneralInformation.get('OtherSector').patchValue(response['OtherSector']);
  this.formGeneralInformation.get('Location').patchValue(this.application.Location);
  this.formGeneralInformation.get('PhoneNumberCode').patchValue(this.application.PhoneNumber.substring(0, 3));
  this.formGeneralInformation.get('PhoneNumber').patchValue(this.application.PhoneNumber.substring(3, 13));
  this.formGeneralInformation.get('EmailAddress').patchValue(this.application.EmailAddress);

  if (response['NatureOfBusiness'].length) {
      this.formGeneralInformation.get('NatureOfBusinessCat').patchValue(response['NatureOfBusiness'][0]['NatureOfBusinessCatID']);
      this.natureOfbusinesses = response['NatureOfBusiness'];

      this.onNatureOfBusinessCatSelected(response['NatureOfBusiness'][0]['NatureOfBusinessCatID']);
      
      let _selectedNatureOfBusinessSubCat: NatureOfBusinessSubCat[] = [];
      this.natureOfbusinesses.filter((item) => {
          this.natureOfbusinesses_arr.push(item.NatureOfBusinessSubatID);

          _selectedNatureOfBusinessSubCat.push({
              NatureOfBusinessSubCatId: item.NatureOfBusinessSubatID,
              NatureOfBusinessSubCategoryName: item.NatureOfBusinessSubCategoryName
          });
      });
      
      this.formGeneralInformation.get('NatureOfBusinessSubCat').patchValue(this.natureOfbusinesses_arr);
      this.selectedNatureOfBusinessSubCat = _selectedNatureOfBusinessSubCat;
  }


  // STEP TWO
  this.formOrganisationDetails.get('DPORequired').patchValue(response['DPORequired']);

  this.formOrganisationDetails.get('DPOName').patchValue(response['DPOName']);
  this.formOrganisationDetails.get('DPOPhysicalAddress').patchValue(response['DPOPhysicalAddress']);
  this.formOrganisationDetails.get('PhoneNumberCode').patchValue(response['DPOPhoneNumber'].substring(0, 3));
  this.formOrganisationDetails.get('DPOPhoneNumber').patchValue(response['DPOPhoneNumber'].substring(3, 13));
  this.formOrganisationDetails.get('DPOEmailAddress').patchValue(response['DPOEmailAddress']);
  this.formOrganisationDetails.get('DPOPositionInOrganisation').patchValue(response['DPOPositionInOrganisation']);

  // STEP THREE
  this.sourceofdata = response['SourceOfDataID'];
  this.sourceofdata.filter((item) => {
      this.sourceofdata_arr.push(item.DataSourceID);
  });

  /// CHILDREN DATA 

  this.formChildrenData.get('CollectChildrenData').patchValue(response['CollectChildrenData']);
  if(response['CollectChildrenData'] == 'Yes'){
      this.showChildrenDataFields = true;
      this.childDataPurposes = response['ChildrenDataPurpose']
      let _selectedChildrenDataPurposes: ChildrenDataPurpose[] = [];
      this.childDataPurposes.filter((item) => {

          this.childDataPurposeResults.push(item.ChildDataID);
      })


      this.formChildrenData.get('PurposeForCollection').patchValue(this.childDataPurposeResults);
  }

 

  const personalDataCollected: DataSubCategory[] = response['PersonalDataCollected'];

  this.dataCategories.filter((category) => {
      personalDataCollected.filter((selectedCat) => {
          if (category.DataCategoryID === selectedCat.DataCategoryID) {
              category.SubCategories.filter((subCat) => {
                  personalDataCollected.filter((selectedSubCat) => {
                      if (subCat.DataSubCategoryID === selectedSubCat.DataSubCategoryID) {
                          subCat.IsChecked = true;
                          this.selectedDataSubCategory.push(subCat);
                      }
                  });
              });
          }
      });
  });

  // STEP FOUR
  this.formPersonalDataHeld.get('SourceOfDataID').patchValue(this.sourceofdata_arr);

  this.purpose = response['Purpose'];
  let _selectedDataPurposes: DataPurposes[]  = []

  this.purpose.filter((item) => {
      if (item.DataPurposeID === 1) {
          this.SpecifyTheLaw = true;
          this.formPurposeRetention.get('SpecifyTheLaw').setValidators([Validators.required]);
      }

      if (item.DataPurposeID === 3) {
          this.ServiceOrProductProvided = true;
          this.formPurposeRetention.get('ServiceOrProductProvided').setValidators([Validators.required]);
      }

      if (item.DataPurposeID === 6) {
          this.SpecifyLegalObligation = true;
          this.formPurposeRetention.get('SpecifyLegalObligation').setValidators([Validators.required]);
      }

      this.purpose_arr.push(item.DataPurposeID);

      _selectedDataPurposes.push(item);
  });
  
  this.formPurposeRetention.get('Purpose').patchValue(this.purpose_arr);
  this.selectedDataPurposes = _selectedDataPurposes;

  this.formPurposeRetention.get('SpecifyTheLaw').patchValue(response['SpecifyTheLaw']);
  this.formPurposeRetention.get('ServiceOrProductProvided').patchValue(response['ServiceOrProductProvided']);
  this.formPurposeRetention.get('SpecifyLegalObligation').patchValue(response['SpecifyLegalObligation']);
  this.formPurposeRetention.get('TotalRecordsAtRegistration').patchValue(response['TotalRecordsAtRegistration']);
  this.formPurposeRetention.get('RecordPercentageGrowth').patchValue(response['RecordPercentageGrowth']);
  this.formPurposeRetention.get('RetentionPeriod').patchValue(response['RetentionPeriod']);

  // this.formPurposeRetention.get('RegistrationConsent').patchValue('');

  // STEP FIVE
  this.formThirdParties.get('PersonalDataIsForDisclosure').patchValue(response['PersonalDataIsForDisclosure'].replace(/\s/g, ''));
  this.thirdParties = response['ThirdParties'];
  this.thirdPartyDataSource = new MatTableDataSource(this.thirdParties);

  setTimeout(() => {
      this.thirdPartyDataSource.paginator = this.thirdPartyPaginator;
      this.thirdPartyDataSource.sort = this.thirdPartyMatSort;
  });
  this.thirdPartyDataSource = new MatTableDataSource(response['ThirdParties']);

  this.formThirdParties.get('StoreDataOutsideCountry').patchValue(response['StoreDataOutsideCountry']);
  this.countriesOfTransfer = response['Countries'];
  this.countriesDataSource = new MatTableDataSource(this.countriesOfTransfer);

  setTimeout(() => {
      this.countriesDataSource.paginator = this.countryOfTransferPaginator;
      this.countriesDataSource.sort = this.countryOfTransferMatSort;
  });

  // STEP SIX
  this.securityMeasures = response['SecurityMeasures'];
  this.securityMeasureDataSource = new MatTableDataSource(this.securityMeasures);
  setTimeout(() => {
      this.securityMeasureDataSource.paginator = this.securityMeasurePaginator;
      this.securityMeasureDataSource.sort = this.securityMeasureMatSort;
  });

  // Supporting Documents.
  this.document = { 
      Document: null, 
      Name: 'Supporting Documentation.pdf', 
      Size: null, 
      Base64: this.application.Attachment 
  };

  this.documentForm3 = { 
      Document: null, 
      Name: 'Form 3.pdf', 
      Size: null, 
      Base64: this.application.Form3Attachment 
  };

  this.proofOfPayment = {
      Document: null, 
      Name: 'Proof of Payment.pdf', 
      Size: null, 
      Base64: this.application.ProofOfPayment 
  };

  // console.log('document:', this.document);
  // console.log('documentForm3:', this.documentForm3);
  // console.log('proofOfPayment:', this.proofOfPayment);

  this.formSecurityMeasures.get('RegistrationConsent').patchValue('true');
  this.formSecurityMeasures.get('RegistrationDoneBy').patchValue(this.application.RegistrationDoneBy);
}

onSubmit(): void {
  this.processing = true;
  // console.log('save the registration information:', this.getFormData());

  this.httpSub = this.http.post<ApiPayload>(this.endpoints.orgRegistration, this.getFormData())
      .pipe(catchError(this.service.handleError))
      .subscribe((response) => {

          // console.log('response:', response);

          // Clear all the form Data

          // console.log('response:', response);
          // Show the dialog window for processing payment.

          this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
              panelClass: ['successful-message-dialog', 'dialogs'],
              disableClose: true,
              data: {
                  title: response.message['title'],
                  message: response.message['body'],
                  status: response.code === 200 ? true : false,
              }
          });

          this.dialogRef.afterClosed().subscribe(() => {
              window.location.reload();
          });

          this.processing = false;
      }, (error) => {
          this.processing = false;

          if (error.error.message) {
              this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
                  panelClass: ['successful-message-dialog', 'dialogs'],
                  disableClose: true,
                  data: {
                      title: error.error.message['title'],
                      message: error.error.message['body'],
                      status: false,
                  }
              });
          } else {
              this.service.determineErrorResponse(error);
          }
      });
}

ngOnDestroy(): void {
  if (this.httpSub) { this.httpSub.unsubscribe(); }
  if (this.bottomsheetRef) { this.bottomsheetRef.dismiss(); }
}

onReadDocument(document: FileUpload): void {
  // console.log('document:', document);
  this.bottomsheetRef = this.bottomsheet.open(ViewPdfDocumentBottomsheetComponent, {
      disableClose: true,
      panelClass: ['view-pdf-document-bottomsheet', 'bottomsheets'],
      data: {
        url: document.Base64,
        title: document.Name
      }
  });      
}

getSelectedPurpose(): string {
  let _purpose = '';
  this.selectedDataPurposes.filter((item, index: number) => {
      _purpose += (index > 0 ? ', ' : '') +  item.DataPurpose 
  });

  return _purpose;
}

getSelectedNatureOfBusinessSubCat(): string {
  let _subcategories = '';
  this.selectedNatureOfBusinessSubCat.filter((item, index: number) => {
      _subcategories += (index > 0 ? ', ' : '') +  item.NatureOfBusinessSubCategoryName 
  });

  return _subcategories;
}


onSubmitChanges(): void {

  this.processing = true;
  // console.log('save the registration information:', this.getFormData());

  this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateOrganisationRegistrationDetails, this.getFormData())
      .pipe(catchError(this.service.handleError))
      .subscribe((response) => {

          this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
              panelClass: ['successful-message-dialog', 'dialogs'],
              disableClose: true,
              data: {
                  title: response.message['title'],
                  message: response.message['body'],
                  status: response.code === 200 ? true : false,
              }
          });

          this.dialogRef.afterClosed().subscribe(() => {
              window.location.reload();
          });

          this.processing = false;
      }, (error) => {
          this.processing = false;

          if (error.error.message) {
              this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
                  panelClass: ['successful-message-dialog', 'dialogs'],
                  disableClose: true,
                  data: {
                      title: error.error.message['title'],
                      message: error.error.message['body'],
                      status: false,
                  }
              });
          } else {
              this.service.determineErrorResponse(error);
          }
      });
}



}

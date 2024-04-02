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
import { CancellationCommentsComponent } from '../../../../layout/dialogs/cancellation-comments/cancellation-comments.component';



@Component({
  selector: 'fury-view-cancel-registration',
  templateUrl: './view-cancel-registration.component.html',
  styleUrls: ['./view-cancel-registration.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ViewCancelRegistrationComponent extends BaseFuryForm implements OnInit, OnDestroy, AfterContentInit {

  
  dialogRef;
  bottomsheetRef;
  processing = false;
  formCancelRegistration: FormGroup;
  selectedIndex = 0;
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
  showApprovalButton = false;
  documentNotice: FileUpload | null;
  OrganizationType = null;
  SectorName = null;
  NatureOfBusinessCat = null;
  CountryOfIncorporation = null;
  
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


  OrganizationID: number;



  uploadedDocument = false

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
   }

  ngOnInit(): void {
    console.log(this.regTrackingNo);

    this.formCancelRegistration = this.formBuilder.group({
      ReasonForCancellation: new FormControl('', [Validators.required]),
    });
  }

  
  ngAfterContentInit(): void {

    this.OrganizationID = 156;
    this.getCancelRegistration();

  }
     
  ngOnDestroy(): void {
    if (this.httpSub) { this.httpSub.unsubscribe(); }
    if (this.bottomsheetRef) { this.bottomsheetRef.dismiss(); }
}



  getCancelRegistration(){

    this.httpSub = this.http.get<ApiPayload>(this.endpoints.getCancelRegistration + '?RegTrackingNo='+ this.regTrackingNo)
      .pipe(catchError(this.service.handleError))
      .subscribe((response) => {
        console.log(response.data);
        this.formCancelRegistration.get('ReasonForCancellation').patchValue(response.data[0].ReasonForCancellation);

        this.documentNotice = {
          Document: null, 
          Name: 'Notice to cancel registration.pdf', 
          Size: null, 
          Base64: response.data[0].Attachment
      };

      if(response.data[0].CancellationApproval  == 0){

        this.showApprovalButton =  true;
      }
        
      
      }, (error) => {
        this.processing = false;
  
        if (error.error.message) {
          this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
            panelClass: ['successful-message-dialog', 'dialogs'],
            disableClose: true,
            data: {
              title: error.error.message['title'] ? error.error.message['title'] : 'Operation Failed',
              message: error.error.message['body'] ? error.error.message['body'] : environment.technicalErrorResponse,
              status: false,
            }
          });
        } else {
          this.service.determineErrorResponse(error);
        }
      });

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


  approveCancellation(){

    this.dialog.open(CancellationCommentsComponent, {
      width: '941px',
      height: '595px',
      data: this.regTrackingNo
  });
  }

  }



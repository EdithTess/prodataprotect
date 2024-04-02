import {AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {forkJoin,Observable,Subscription} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {
    ComponyRegistrationObject,
    CancelRegistration
} from '../company-registration.model';
import {
    DataType, DateFinderOptions,
    IFinderField,
    ListColumn,
    LookupFinderOptions,
    TextFinderOptions
} from '../../../../../@fury/shared/list/list-column.model';
import {
  ApiPayload,
  FileUpload,
    
} from '../../../../services/api.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {CompanyRegistrationService} from '../../company-registration.service';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {AuthenticationService} from '../../../../authentication/authentication.service';
import {ComplaintService} from '../../../complaints/complaints.service';
import { OrgUploadComponent } from '../../../../layout/dialogs/org-upload/org-upload.component';
import {ApiService} from '../../../../services/api.service';
import { SuccessfulMessageDialogComponent } from '../../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { environment } from '../../../../../environments/environment';
import {ApiEndpointsService} from '../../../../services/api-endpoints.service';

@Component({
  selector: 'fury-cancel-registration',
  templateUrl: './cancel-registration.component.html',
  styleUrls: ['./cancel-registration.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class CancelRegistrationComponent extends BaseFuryForm implements OnInit, AfterViewInit {

operationType = '';
RegTrackingNo: string;
processing=false;
realmRole: string;
dialogRef;
// Array
httpSub: Subscription;
accesses: any [] = [];
formCancelRegistration: FormGroup;
document: FileUpload | null;
// Subscriptions
subscriptions: Subscription[] = [];

cancelRegistration: CancelRegistration[];
// Events
$processingEvent: EventEmitter<boolean> = new EventEmitter();
$errorsEvent: EventEmitter<any> = new EventEmitter();
$resultCompaniesEvent: EventEmitter<CancelRegistration> = new EventEmitter();
// Boolean
isProcessing = false;
isOrganisation = false;
@Input()
columns: ListColumn[] = [
    {name: 'Registration N0', property: 'RegTrackingNo', visible: true, isModelProperty: true},
    {name: 'Reason for Cancellation', property: 'ReasonForCancellation', visible: true, isModelProperty: true},
    {name: 'Status', property: 'CancellationApproval', visible: true, isModelProperty: true},
    {name: 'Actions', property: 'actions', visible: true},
] as ListColumn[];
pageSize = 10;
dataSource: MatTableDataSource<CancelRegistration> | null;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

// Search fields
searchFields: IFinderField[];

  constructor(
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private http: HttpClient,
    private service: ApiService,
    private route: ActivatedRoute,
    private endpoints: ApiEndpointsService,
    public _auth: AuthenticationService,
    private router: Router,
    private auth: KeycloakService,
    private authenticationService: AuthenticationService,
    public registrationService: CompanyRegistrationService,
    public _workflowService: WorkflowServiceService,
    public complaintService:ComplaintService
   
  ) {
    super(
      auth,
      _workflowService,
      registrationService,
      complaintService,
  );

  this.operationType = route.routeConfig.data.action;
   }

  ngOnInit(): void {

    if (this.auth.getKeycloakInstance().resourceAccess['dps-frontend']) {
      this.accesses = this.auth.getKeycloakInstance().resourceAccess['dps-frontend'].roles;

  }

  
  this.formCancelRegistration = this.formBuilder.group({
    ReasonForCancellation: new FormControl('', [Validators.required]),
  });

  if (this.auth.getKeycloakInstance().realmAccess) {
      if(this.auth.getKeycloakInstance().realmAccess.roles.includes('organisation')){
          this.isOrganisation = true;

          this.httpSub = this.fetchMultiple()
          .pipe(catchError(this.service.handleError))
          .subscribe((responseList) => {
            console.log(responseList[0][0]);

            if(!(responseList[1].data[0].CerificateNumber)){

              this.dialogRef.afterClosed().subscribe(() => {
                this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
                  panelClass: ['successful-message-dialog', 'dialogs'],
                  disableClose: true,
                  data: {
                    title:  'Error',
                    message: 'Organisation does not have a valid certificate',
                    status: false,
                  }
                });
                this.router.navigate(['/']);
              });
            }
           
            this.RegTrackingNo =  responseList[0][0].RegTrackingNo;
      
            
      
            this.processing = false;
          }, (error) => {
            this.processing = false;
            this.service.determineErrorResponse(error);
          });
      }
  }

   


  // Processing event
  this.subscriptions['$processingEvent'] = this.$processingEvent.subscribe(isProcessing => this.isProcessing = isProcessing);

  this.dataSource = new MatTableDataSource();

  // registeredCompanies
  this.subscriptions['$resultCompaniesEvent'] = this.$resultCompaniesEvent.subscribe(result => {
      if (result) {
        console.log(result);
          this.cancelRegistration = result;
          this.dataSource.data = result;
          this.isLoaded = true;
      }
  });

  this.loadRegistrationCancelRequests();

  

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
}


private getFormData(): any {

  return {
    
    
    ReasonForCancellation: this.formCancelRegistration.get('ReasonForCancellation').value ? this.formCancelRegistration.get('ReasonForCancellation').value : '',
    Attachment: this.document ? this.document.Base64 : '',
    RegTrackingNo: this.RegTrackingNo,
    
  
  };
}

// TODO:: Need to hide addressedTo Column from data controllers its mainly for nita data-protection officers
get visibleColumns() {
  return this.columns.filter(column => column.visible).map(column => column.property);
}

onSubmit(): void {
  this.processing = true;
  console.log(this.getFormData());
  console.log('save the registration information:', this.getFormData());

  this.httpSub = this.http.post<ApiPayload>(this.endpoints.cancelRegistration, this.getFormData())
  .pipe(catchError(this.service.handleError))
  .subscribe((response) => {
    
    this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
      panelClass: ['successful-message-dialog', 'dialogs'],
      disableClose: true,
      data: {
        title:  'Success',
        message: 'Request to cancel registration has been sent',
        status: true,
      }
    });
    this.router.navigate(['/']);

    this.processing = false;
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

onFilterChange(value) {
  if (!this.dataSource) {
      return;
  }
  value = value.trim();
  value = value.toLowerCase();
  this.dataSource.filter = value;
}

loadRegistrationCancelRequests() {

  

  this.registrationService.getRequestsToCancel( this.$processingEvent, this.$resultCompaniesEvent, this.$errorsEvent);
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
    console.log('row:', result.row);

    if (result.status) {
      this.document = result.row;
    }
  });
}

onRemoveDocument(): void {
  this.document = null;
}


private fetchMultiple(): Observable<any[]> {
  
  const registrationDetails = this.http.get<ApiPayload>(this.endpoints.getOrgDetailsById, { params: { OrganizationID: this._auth.getOrganisationID() } });
  const certificate =  this.http.get<ApiPayload>(this.endpoints.checkCertificate, { params: { OrganizationID: this._auth.getOrganisationID() } });
  // tslint:disable-next-line:max-line-length
  return forkJoin([
    registrationDetails, certificate
  ]);
}


manageRegistration(registration) {
  
      this.router.navigate(['/company-registration/view-cancel-registration'],
          {state: {regTrackingNo: registration.RegTrackingNo}}).then();
  

}


}

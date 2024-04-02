import {Component, OnInit, EventEmitter,ViewChild, Inject, Input, Output} from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {scaleInAnimation} from '../../../../../@fury/animations/scale-in.animation';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Observable, of, ReplaySubject} from 'rxjs';
import { DocumentComment } from '../../../../../@fury/shared/base-fury-form.model';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import {Action, ActionPerformed, WorkFlowActions, WorkFlowStep, WorkFlowTimeline, ActionMakeaComment} from '../../../models/document-workflow.model';
import {forkJoin, Subscription} from 'rxjs';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {OrgNoticeComponent} from '../../../../layout/dialogs/org-registration/org-notice/org-notice.component';
import {ComplaintCommentsComponent} from '../../../../layout/complaint-comments/complaint-comments.component';
import { ViewPdfDocumentBottomsheetComponent } from '../../../../layout/bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component';
import { ApiPayload, FileUpload } from '../../../../services/api.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ForwardMessageDialogComponent } from '../../../../layout/dialogs/forward-message-dialog/forward-message-dialog.component';
import { HttpClient } from '@angular/common/http';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { catchError } from 'rxjs/operators';
import { ApiService } from '../../../../services/api.service';
import { environment } from '../../../../../environments/environment';
import {UtilService} from '../../../../../@fury/services/util.service';
import {DataSubjectModel} from '../../../models/data-subject.model';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import { MoreInformationComponent } from '../../../../layout/dialogs/more-information/more-information.component';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import {SuccessfulMessageDialogComponent } from '../../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';

import { ComplaintService } from '../../../complaints/complaints.service';
import { AuthenticationService } from '../../../../authentication/authentication.service';

@Component({
  selector: 'fury-ura-payments',
  templateUrl: './ura-payments.component.html',
  styleUrls: ['./ura-payments.component.scss']
})
export class UraPaymentsComponent extends BaseFuryForm implements OnInit {


  processing = false;
  httpSub: Subscription;
  success_message = false;
  dialogRef;
  isLinear = false;
  selected_role_id:string;
  selected_role_name:string;
  showPRN = false;
  Organisation_User_ID : any;

  current_prn : String;
  current_search_code : String;

  formCreateAccount: FormGroup;


  constructor(    
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private route: Router,
    private dialog: MatDialog,
    private bottomsheet: MatBottomSheet,
    private endpoints: ApiEndpointsService,
    private http: HttpClient,
    private service: ApiService,
    private allDialogRef: MatDialog,
    private auth: KeycloakService,
    public _auth: AuthenticationService,
    private utilService: UtilService,
    public snackBar: SnackBarService,
    public authService: KeycloakService,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    public complaintService: ComplaintService,) 
    { 
      super(
        authService,
        _workflowService,
        registrationService,
        complaintService
    );


    this.Organisation_User_ID = _auth.getUser().organisation_id;
    console.log(this.Organisation_User_ID);

    }


  ngOnInit(): void {


    this.formCreateAccount = this.formBuilder.group({

      email: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),
      phone_number: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]),


    });
  }

  ngAfterViewInit(): void {
    this.httpSub = this.fetchRoles()
    .pipe(catchError(this.service.handleError))
    .subscribe((responseList) => {

      this.processing = false;
    }
    , (error) => {
        this.processing = false;
        this.service.determineErrorResponse(error);
      });  
}


  onSubmit(){

    console.log(this.getFormData());
    this.httpSub = this.http.post<ApiPayload>(this.endpoints.generatePRN, this.getFormData())
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      console.log(response.data);
    
      this.current_prn = response.data.PRN;
      this.current_search_code = response.data.SearchCode
      this.showPRN = true;
      
      this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
        disableClose: true,
        data: {
          title: 'URA PRN',
          message: 'PRN Generated successfully',
          status: true,
        }
      });

      this.processing = false;
    }, (error) => {
      this.processing = false;

      if (error.error.message) {
        this.dialogRef = this.dialog.open( ForwardMessageDialogComponent, {
          panelClass: ['forward-message-dialog', 'dialogs'],
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


  getFirstNameErrorMessage(): string {
    return this.formCreateAccount.get('FirstName').hasError('required') 
    || this.formCreateAccount.get('ContactFirstName').hasError('required') ? 'Please enter a value' :
    this.formCreateAccount.get('FirstName').hasError('pattern') 
    || this.formCreateAccount.get('ContactFirstName').hasError('pattern') ? 'Please enter a correct name' : '';
  }

  getLastNameErrorMessage(): string {
    return this.formCreateAccount.get('LastName').hasError('required') 
    || this.formCreateAccount.get('ContactLastName').hasError('required') ? 'Please enter a value' :
    this.formCreateAccount.get('LastName').hasError('pattern')
    || this.formCreateAccount.get('ContactLastName').hasError('pattern') ? 'Please enter a correct name' : '';
  }

  getTelephoneNumberErrorMessage(): string {
    return this.formCreateAccount.get('PhoneNumber').hasError('required') ? 'Please enter a value' : 
    this.formCreateAccount.get('PhoneNumber').hasError('pattern') ? 'Wrong Phone number' : ''
  }

  getEmailAddressErrorMessage(): string {
    return this.formCreateAccount.get('ContactEmailAddress').hasError('required') ? 'Please enter a value' :
    this.formCreateAccount.get('EmailAddress').hasError('email') 
    || this.formCreateAccount.get('ContactEmailAddress').hasError('email')  ? 'Wrong Email Address.' : '';
  }

  private getFormData(): any {
    
    const data = {
        
      phone_number: this.formCreateAccount.get('phone_number').value,
      email: this.formCreateAccount.get('email').value,
      organisation_user_id : this.Organisation_User_ID

    }

    return data;
  }


  private fetchRoles(): Observable<any[]> {
    this.processing = true;

    const Roles = this.http.get<ApiPayload>(this.endpoints.getKeycloakRoles);
   
    return forkJoin([Roles]);
}


onChangeOfRole(event, Role){
  this.selected_role_id = Role.RoleID

  this.selected_role_name = Role.RoleName
}

}

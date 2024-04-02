import { Component, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef, OnInit, Input,ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import escape from 'lodash-es/escape';
import { PolicyDialogComponent } from '../policy-dialog/policy-dialog.component';
import { DpoDialogComponent } from '../dpo-dialog/dpo-dialog.component';
import { StaffDialogComponent } from '../staff-dialog/staff-dialog.component';
import { ThirdpartyDialogComponent } from '../thirdparty-dialog/thirdparty-dialog.component';
import { ComplaintsDialogComponent } from '../complaints-dialog/complaints-dialog.component';
import { BreachesDialogComponent } from '../breaches-dialog/breaches-dialog.component';
import { ImpactDialogComponent } from '../impact-dialog/impact-dialog.component';
import { AuditsDialogComponent } from '../audits-dialog/audits-dialog.component';
import { CompanyRegistrationService } from '../../company-registration/company-registration.service';
import { CompanyRegistrationModel, ComponyRegistrationObject } from '../../company-registration/components/company-registration.model'; // Assuming this is the correct path
import {DataServiceError} from '../../../../@fury/shared/HttpModel';
import {Observable, of, ReplaySubject, Subscription, throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ComplianceReportService } from '../compliance-report.service';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../authentication/authentication.service';
import {fadeInRightAnimation} from '../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../@fury/animations/fade-in-up.animation';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap } from 'rxjs/operators';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccessfulMessageDialogComponent } from '../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { DialogFormInputComponent } from '../dialog-form-input/dialog-form-input.component';

interface SupportDPO {
  PolicyandProcedure: string;
  ApprovalDate: string;
  ReviewDate: string;
  NumberOfTrainings: number;
}
interface DPOTraining {
  name_of_training: string;
  who_conducted_training: string;
  date_of_training:string;
}
interface StaffTraining {
  department: string;
  total_staff_to_be_trained: number;
  number_completed_training: number;
}
interface ThirdPartyTraining {
  example_of_agent: string;
  number_of_agents: number;
  NumberOfTrainedAgents: number;
}
interface Complaints {
  year_of_complaint: string;
  status_of_complaint: string;
  number_of_complaints_received: number;
}
interface Breaches {
  year_of_breach: string;
  status_of_breach: string;
  number_of_breaches: number;
  measures_taken_to_address_gaps: string;
  number_of_records_lost: number;
  frequent_cause_of_breach: string;
}
interface Impact {
  data_or_activity: string;
  date_concluded: string;
}
interface Audit {
  year_of_audit:string;
  category_of_audit: string;
  number_of_audits: number;
  Resolutionstatus:string;
  Resolutiondetails: string;
}

@Component({
  selector: 'app-formapp',
  templateUrl: './compliance-reports-component.component.html',
  styleUrls: ['./compliance-reports-component.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue:{
      showError: true
    }
  }]
})
export class ComplianceReportsComponent {
  
    @Input()
    //things for Renewal check
    isRenewalConditionMet: boolean = false;
    dialogRef;
    //end Renewal check
    completed=false;
    pageSize = 5;
  
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;


  private _gap = 16;
  gap = `${this._gap}px`;
  orgName: string[] = [];
  orgCategory: string = '';
  orgRegDate: string[] = [];
  orgRegNo: string[] = [];
  orgRenewal: string[] = [];
  orgMyID: any[];
  orgEmail: string[] = [];
  issueDate: string= '';
  expiryDate: string= '';
// for my reports




  supportTeamDPO: SupportDPO[] = [];
  displayedColumns: string[] = ['PolicyandProcedure', 'ApprovalDate', 'ReviewDate', 'NumberOfTrainings'];
  dataSource!: MatTableDataSource<SupportDPO>;
  //DPO Training 
  DPOTrainingArray: DPOTraining[] = [];
  DPOColumns: string[] = ['name_of_training', 'who_conducted_training', 'date_of_training'];
  DPODataSource!: MatTableDataSource<DPOTraining>;
  //End of DPO Training 
  
  //Staff Training 
  StaffTrainingArray: StaffTraining[] = [];
  StaffColumns: string[] = ['department', 'total_staff_to_be_trained', 'number_completed_training'];
  StaffDataSource!: MatTableDataSource<StaffTraining>;
  //End of Staff Training 
 
  //ThirdParty Training 
  ThirdPartyTrainingArray: ThirdPartyTraining[] = [];
  ThirdPartyColumns: string[] = ['example_of_agent', 'number_of_agents', 'NumberOfTrainedAgents'];
  ThirdPartyDataSource!: MatTableDataSource<ThirdPartyTraining>;
  //End of ThirdParty Training
  
  //complaints  
  ComplaintsArray: Complaints[] = [];
  ComplaintsColumns: string[] = ['year_of_complaint', 'status_of_complaint', 'number_of_complaints_received'];
  ComplaintsDataSource!: MatTableDataSource<Complaints>;
  //End of complaints 

  //Breaches  
  BreachesArray: Breaches[] = [];
  BreachesColumns: string[] = ['year_of_breach', 'status_of_breach', 'number_of_breaches','measures_taken_to_address_gaps','number_of_records_lost','frequent_cause_of_breach'];
  BreachesDataSource!: MatTableDataSource<Breaches>;
  //End of Breaches

  //Impact  
  ImpactArray: Impact[] = [];
  ImpactColumns: string[] = ['data_or_activity', 'date_concluded'];
  ImpactDataSource!: MatTableDataSource<Impact>;
  //End of Impact

  //Audits  
  AuditArray: Audit[] = [];
  AuditColumns: string[] = ['year_of_audit', 'category_of_audit','number_of_audits','Resolutionstatus','Resolutiondetails'];
  AuditDataSource!: MatTableDataSource<Audit>;
  //End of Audits

  backgroundGroup = this._formBuilder.group({
    reportingPeriodCrtl: ['']
  });

  registrationPdpOfficeGroup = this._formBuilder.group({
    changeParticularsCtrl: ['',Validators.required],
    selectedOption: ['yes']
  });

  leadershipOversightGroup = this._formBuilder.group({
    dpOReportingLineCtrl: ['', Validators.required],
    hasJobDescription: ['no'],
    hasPerfApraisal: ['no'],
    DPOJobDescriptionCtrl: [''],
    ReasonCtrl:['']
  });

  policiesAndProcedureGroup = this._formBuilder.group({
    PolicyandProcedure2: ['',Validators.required],
    ApprovalDate: [''],
    ReviewDate: [''],
    NumberOfTrainings: [''],
  });

  trainingAndAwarenessGroup = this._formBuilder.group({
    name_of_training2: [''],
    has_value:['',Validators.required],
    totalStaffTraineeCtrl: ['',Validators.required],    
    haveThirdParty: ['no']
  });

  complaintsGroup = this._formBuilder.group({
    yearOfCompliment: [''],
    statusOfCompliment: [''],
    numberOfCompliments: [''],
    haveComplaints: ['no']
  });

  dataBreachesGroup = this._formBuilder.group({
    haveBreaches: ['no']
  });
  impactGroup = this._formBuilder.group({
    haveImpact: ['no']
  });

  auditGroup = this._formBuilder.group({
    haveAudits: ['no']
  });

  conclusionGroup = this._formBuilder.group({
    text: ['', Validators.required],
    NameOfPersonSubmitting: ['', Validators.required],
    TitleOfPersonSubmitting: ['', Validators.required],
    Checkbox: ['', Validators.requiredTrue]
  });
  
  isSubmitButtonDisabled: boolean;
  CommentByUpdateStatus: any;
  myexpirywarningDate: any;
 

  openAuditsDialog(): void {
    const dialogRef = this.dialog.open(AuditsDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.AuditArray.push(result);
        this.AuditDataSource.data = this.AuditArray;
      }
    });
  }
  openImpactDialog(): void {
    const dialogRef = this.dialog.open(ImpactDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ImpactArray.push(result);
        this.ImpactDataSource.data = this.ImpactArray;
      }
    });
  }
  openBreachesDialog(): void {
    const dialogRef = this.dialog.open(BreachesDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.BreachesArray.push(result);
        this.BreachesDataSource.data = this.BreachesArray;
      }
    });
  }
  openComplaintsDialog(): void {
    const dialogRef = this.dialog.open(ComplaintsDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ComplaintsArray.push(result);
        this.ComplaintsDataSource.data = this.ComplaintsArray;
      }
    });
  }
  openThirdPartyDialog(): void {
    const dialogRef = this.dialog.open(ThirdpartyDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.ThirdPartyTrainingArray.push(result);
        this.ThirdPartyDataSource.data = this.ThirdPartyTrainingArray;
      }
    });
  }
  openStaffDialog(): void {
    const dialogRef = this.dialog.open(StaffDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.StaffTrainingArray.push(result);
        this.StaffDataSource.data = this.StaffTrainingArray;
        if(this.StaffDataSource.data.length>0){
          this.trainingAndAwarenessGroup.get('totalStaffTraineeCtrl').setValue('yes');
        }
        else{
          this.trainingAndAwarenessGroup.get('totalStaffTraineeCtrl').setValue('');
        }
      }
    });
  }

  openDPODialog(): void {
    const dialogRef = this.dialog.open(DpoDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.DPOTrainingArray.push(result);
        this.DPODataSource.data = this.DPOTrainingArray;

        if(this.DPODataSource.data.length>0){
          this.trainingAndAwarenessGroup.get('has_value').setValue('yes');
        }
        else{
          this.trainingAndAwarenessGroup.get('has_value').setValue('');
        }
      }
    });
  }
  openDialog(){
    const dialogRef = this.dialog.open(PolicyDialogComponent, {
      height: 'auto',
      width: 'auto'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.supportTeamDPO.push(result);
        this.dataSource.data = this.supportTeamDPO;

        if(this.dataSource.data.length>0){
          this.policiesAndProcedureGroup.get('PolicyandProcedure2').setValue('yes');
        }
        else{
          this.policiesAndProcedureGroup.get('PolicyandProcedure2').setValue('');
        }
      }
    });
  };
  
  isEditable = true;
  

  constructor(private http: HttpClient,
    private cdref: ChangeDetectorRef,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public registrationService: CompanyRegistrationService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private route2: Router,
    private complianceReportService: ComplianceReportService)
    {
    
    //  = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.isSubmitButtonDisabled = true; // Initialize the button as disabled
    //Call fetchMinimalData and use its subscription
    //First Important method to run to check Renewal status
    this.fetchMinimalData().subscribe(() => {
      if (!this.orgRenewal.includes('Certificate Issued')) {
        this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
          panelClass: ['successful-message-dialog', 'dialogs'],
          disableClose: true,
          data: {
            title: 'No Current Certificate Issued.',
            message: 'Please complete your Renewal/Application Process and try again.',
            status: false,
          }
        });

        this.dialogRef.afterClosed().subscribe(() => {
          this.route2.navigate(
            ['/company-registration/view'],
            { state: { regTrackingNo: this.orgRegNo[0] }}
          ).then();
        });
      } 
      else {
        
      // begin status check
      //Allow users to submit report once otherwise lock them out
      this.http.get<any>(`${this.baseAPIUri}v1.0/compliance-report/compliance-report/single?OrganizationID=${this.orgMyID}`).subscribe(
        (response) => {
          if (response && response.compliance_reports && response.compliance_reports.length > 0) {
            this.CommentByUpdateStatus = response.compliance_reports[0].CommentedBy;

            if (this.CommentByUpdateStatus === 'PDPO-EDIT') {
              //Allow the user to proceed to submit another report;
      
            } else {
              // Show a message to the user that they've already submitted the report
              this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
                panelClass: ['successful-message-dialog', 'dialogs'],
                disableClose: true,
                data: {
                  title: 'Annual Compliance Report Already Submitted.',
                  message: 'Your Annual Compliance Report has already been submitted. Please wait for review from the Personal Data Protection Office.',
                  status: false,
                }
              });
      
              this.dialogRef.afterClosed().subscribe(() => {
                this.route2.navigate(
                  ['/company-registration/view'],
                  { state: { regTrackingNo: this.orgRegNo[0] }}
                ).then();
              });
            }
          }
        },
        (error) => {
          console.error('Error fetching checking comment on report data:', error);
        }
      );
      // end status check

        this.orgRenewalData();
        this.dataSource = new MatTableDataSource([]);
        this.DPODataSource = new MatTableDataSource([]);
        this.StaffDataSource = new MatTableDataSource([]);
        this.ThirdPartyDataSource = new MatTableDataSource([]);
        this.ComplaintsDataSource = new MatTableDataSource([]);
        this.BreachesDataSource = new MatTableDataSource([]);
        this.ImpactDataSource = new MatTableDataSource([]);
        this.AuditDataSource = new MatTableDataSource([]);
      }

      
      
    });
    
    // this.conclusionGroup.get('Checkbox').valueChanges.subscribe((value) => {
    //   console.log(':');
    // });
  }
   
  checkFormValidity(): void {
    if (this.trainingAndAwarenessGroup.valid && this.policiesAndProcedureGroup.valid && this.conclusionGroup.valid && this.registrationPdpOfficeGroup.valid && this.leadershipOversightGroup.valid) {
      this.isSubmitButtonDisabled = false; // Enable the button if the form is valid
    } else {
      this.isSubmitButtonDisabled = true; // Disable the button if the form is invalid
    }
  }
  collectTableData(): SupportDPO[] {
    
    return this.supportTeamDPO.map(policy => {
      return {
        PolicyandProcedure: policy.PolicyandProcedure,
        ApprovalDate: policy.ApprovalDate,
        ReviewDate: policy.ReviewDate,
        NumberOfTrainings: policy.NumberOfTrainings // Convert string to number
      };
    });
  }
  collectDPOData(): DPOTraining[] {
    return this.DPOTrainingArray.map(dpo => {
      return {
        name_of_training: dpo.name_of_training,
        who_conducted_training: dpo.who_conducted_training,
        date_of_training: dpo.date_of_training
      };
    });
  }
  collectStaffData(): StaffTraining[] {
    return this.StaffTrainingArray.map(dpo => {
      return {
        department: dpo.department,
        total_staff_to_be_trained: dpo.total_staff_to_be_trained,
        number_completed_training: dpo.number_completed_training
      };
    });
  }
  collectThirdData(): ThirdPartyTraining[] {
    return this.ThirdPartyTrainingArray.map(x => {
      return {
        example_of_agent: x.example_of_agent,
        number_of_agents: x.number_of_agents,
        NumberOfTrainedAgents: x.NumberOfTrainedAgents
      };
    });
  }
  collectComplaintsData(): Complaints[] {
    return this.ComplaintsArray.map(x => {
      return {
        year_of_complaint: x.year_of_complaint,
        status_of_complaint: x.status_of_complaint,
        number_of_complaints_received: x.number_of_complaints_received
      };
    });
  }
  collectBreachesData(): Breaches[] {
    return this.BreachesArray.map(x => {
      return {
        year_of_breach: x.year_of_breach,
        status_of_breach: x.status_of_breach,
        number_of_breaches: x.number_of_breaches,
        measures_taken_to_address_gaps: x.measures_taken_to_address_gaps,
        number_of_records_lost: x.number_of_records_lost,
        frequent_cause_of_breach: x.frequent_cause_of_breach
      };
    });
  }
  collectImpactData(): Impact[] {
    return this.ImpactArray.map(x => {
      return {
        data_or_activity: x.data_or_activity,
        date_concluded: x.date_concluded
      };
    });
  }
  collectAuditsData(): Audit[] {
    return this.AuditArray.map(x => {
      return {
        year_of_audit: x.year_of_audit,
        category_of_audit: x.category_of_audit,
        number_of_audits: x.number_of_audits,
        Resolutionstatus: x.Resolutionstatus,
        Resolutiondetails: x.Resolutiondetails
      };
    });
  }
  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  orgRenewalData(): void{
    const renewalapi = this.baseAPIUri + 'v1.0' + '/certificate/details?OrganizationID=' + this.orgMyID;
    this.http.get(renewalapi).subscribe(
      (response: any) => {
        
        if(response.IssueDate){
          this.issueDate = this.datePipe.transform(response.IssueDate, 'yyyy-MMMM-dd');
          this.expiryDate = this.datePipe.transform(response.ExpiryDate, 'yyyy-MMMM-dd');
          this.myexpirywarningDate = response.ExpiryDate;
        }
        else{
          this.issueDate = 'Loading...please wait';
          this.expiryDate = 'Loading...please wait';
        }
        if(new Date(this.myexpirywarningDate) < new Date()){
          this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
            panelClass: ['successful-message-dialog', 'dialogs'],
            disableClose: true,
            data: {
              title: 'Reminder to Renew Your Certificate.',
              message: 'Your registration with the Personal Data Protection Office (PDPO) is due for renewal. Failure to renew your registration by the expiry date may result in penalties and the loss of your active status with PDPO.',
              status: false
            }
          });
        }
      },
      (error) => {
        console.error('Error Fetching Renewal Data:', error);
      }
    );
  }

  fetchMinimalData(): Observable<any>{
    const api2 = this.baseAPIUri + 'v1.0' + '/org-registration/byorgid/single?OrganizationID=' + this.authenticationService.getOrganisationID();
    return this.http.get<any[]>(api2).pipe(
      map((response) => {
        this.orgName = response.map(item => item.OrganisationName);
        this.orgEmail = response.map(item => item.EmailAddress);
             
        // Extract OrganisationCategoryNames and join them with commas
        const orgCategoryNames: string[] = response.map((item) =>
          item.OrganisationCategory.map((category) => category.OrganisationCategoryName)
        );
        this.orgCategory = orgCategoryNames.join(', ');
        this.orgRegNo = response.map(item => item.RegTrackingNo);
        this.orgRegDate = response.map(item => item.EnteredOn);
        this.orgMyID = response.map(item => item.OrganisationID);
        this.orgRenewal = response.map(item => item.CurrentStepName);
      }),
      catchError((error) => {
        console.error('Error fetching data:', error);
        return throwError(error);
      })
    );
  }

  //Submission Logic
  private baseAPIUri = environment.backend;
  handleSubmit(): void{

    const changeParticulars = this.registrationPdpOfficeGroup.get('changeParticularsCtrl')?.value;
    const changeParticularsPayload = {
      Detail: changeParticulars
    };
    const dpOReportingLine = this.leadershipOversightGroup.get('dpOReportingLineCtrl')?.value;
    const DPOJobDescription = this.leadershipOversightGroup.get('DPOJobDescriptionCtrl')?.value;
    const Reason = this.leadershipOversightGroup.get('ReasonCtrl')?.value;
    const changeLeadershipPayload = {
      Detail: dpOReportingLine,
      DPOJobDescription: DPOJobDescription,
      DPOResponsibility: Reason
    };
    const conclusions = this.conclusionGroup.get('text')?.value;
    const nameofperson = this.conclusionGroup.get('NameOfPersonSubmitting')?.value;
    const titleofperson = this.conclusionGroup.get('TitleOfPersonSubmitting')?.value;
    const changeConclusionPayload = {
      text: conclusions,
      NameOfPersonSubmitting: nameofperson,
      TitleOfPersonSubmitting: titleofperson
    };
    
    const tableData = this.collectTableData();
    const DPOData = this.collectDPOData();
    const StaffData = this.collectStaffData();
    const thirdData = this.collectThirdData();
    const ComplaintsData = this.collectComplaintsData();
    const breachesData=this.collectBreachesData();
    const ImpactData = this.collectImpactData();
    const auditData =  this.collectAuditsData();    
    
    const payload = {
      organizationID: parseInt(this.orgMyID.toString(),10),
      registration_changes: [changeParticularsPayload],
      leadership_and_oversight: [changeLeadershipPayload],
      notice_policy_procedure: tableData,
      dpo_training: DPOData,
      staff_training: StaffData,
      third_party_contractor: thirdData,
      complaints: ComplaintsData,
      breaches: breachesData,
      impact_assessment: ImpactData,
      audits : auditData,
      conclusion: [changeConclusionPayload],
      orgName: this.orgName.toString(),
      orgEmail: this.orgEmail.toString()
    };
    
    //console.log('My Payload is here...')
    //console.log(payload)
    //send to our backend!
    
    const api3 = this.baseAPIUri + 'v1.0' + '/compliance-report/compliance-report/single';

    this.http.post(api3, payload).subscribe(
      response => {
        //console.log('Response from backend:', response);

        //on submission, set to organisation has submitted report
        
        this.complianceReportService.markFormSubmitted(this.authenticationService.getOrganisationID());
        
        // handle the response from the backend here
        this.snackBar.open('Compliance Report Submitted Successfully. Please wait for review by PDPO Team', 'Close', {
          duration: 8000, // 8 seconds
        });
        this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
          panelClass: ['successful-message-dialog', 'dialogs'],
          disableClose: true,
          data: {
            title: 'Successfully Submitted Your Compliance Report.',
            message: 'Compliance Report Submitted. Please wait for review from the PDPO Team.',
            status: true
          }
        });
  
        this.dialogRef.afterClosed().subscribe(() => {
          this.route2.navigate(['/compliance-and-reports/find-compliance-reports']);
        });
      },
      error => {
        console.error('Error sending data:', error);
        // Handle error scenarios
      }
    );
    
  }

  //Dialog for conditional Submission
   openConfirmationDialog(): void {
    const dialogRef = this.dialog.open(DialogFormInputComponent, {
      data: {
        title: 'Confirm Submission',
        message: 'Are you sure you want to submit this Report? This report can only be submitted once.',
        status: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // The user clicked 'Yes' in the confirmation dialog
        this.handleSubmit();
      }
    });
  }
}

// Another Dialog Component

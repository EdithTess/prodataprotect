import { Component, EventEmitter } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ChangeDetectorRef, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import escape from 'lodash-es/escape';
import { CompanyRegistrationService } from '../../company-registration/company-registration.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { AuthenticationService } from '../../../authentication/authentication.service';
import {fadeInRightAnimation} from '../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../@fury/animations/fade-in-up.animation';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { KeycloakService } from 'keycloak-angular';
import { DatePipe } from '@angular/common';
import { PolicyDialogComponent } from '../policy-dialog/policy-dialog.component';
import { DpoDialogComponent } from '../dpo-dialog/dpo-dialog.component';
import { StaffDialogComponent } from '../staff-dialog/staff-dialog.component';
import { ThirdpartyDialogComponent } from '../thirdparty-dialog/thirdparty-dialog.component';
import { ComplaintsDialogComponent } from '../complaints-dialog/complaints-dialog.component';
import { BreachesDialogComponent } from '../breaches-dialog/breaches-dialog.component';
import { ImpactDialogComponent } from '../impact-dialog/impact-dialog.component';
import { AuditsDialogComponent } from '../audits-dialog/audits-dialog.component';
import { SuccessfulMessageDialogComponent } from '../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { ComplianceReportService } from '../compliance-report.service';
import * as html2pdf from 'html2pdf.js';

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
  selector: 'fury-view-compliance-report',
  templateUrl:'./view-compliance-report.component.html',
  styleUrls: ['./view-compliance-report.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})


export class ViewComplianceReportComponent implements OnInit {

  private _gap = 16;
  gap = `${this._gap}px`;
  dialogRef;
  isReportEditable: boolean = false;

  orgName: string[] = [];
  changeParticulars: string = '';
  // internationalday: string = '';
  dpoReporting: string = '';
  dpoJOBDESC: string = '';
  Reason: string = '';
  feedback: string = '';
  nameOfPerson: string = '';
  titleOfPerson: string = '';
  PDPOcomment: string = '';
  commented_by: string = '';

  orgCategory: string = '';
  orgRegDate: string[] = [];
  orgRegNo: string[] = [];
  orgRenewal: string[] = [];
  orgMyID: any[];
// for my reports
  pdfContent: string;




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


  commentGroup = this._formBuilder.group({
    PDPOcomment: ['',Validators.required],
    commentBy: ['PDPO']
  })

  backgroundGroup = this._formBuilder.group({
    overviewCtrl: ['', Validators.required],
    roleCtrl: ['', Validators.required],
    statutoryCrtl: ['', Validators.required],
    financialYearCtrl: ['', Validators.required],
    reportingPeriodCrtl: ['']
  });
  registrationPdpOfficeGroup = this._formBuilder.group({
    changeParticularsCtrl: ['',Validators.required],
    selectedOption: ['yes']
  });
  leadershipOversightGroup = this._formBuilder.group({
    dpOReportingLineCtrl: ['', Validators.required],
    registrationNumberCtrl: [''],
    hasJobDescription: [''],
    hasPerfApraisal: [''],
    DPOJobDescriptionCtrl: [''],
    ReasonCtrl:['']
  });
  policiesAndProcedureGroup = this._formBuilder.group({
    PolicyandProcedure: [''],
    ApprovalDate: [''],
    ReviewDate: [''],
    NumberOfTrainings: [''],
  });
  trainingAndAwarenessGroup = this._formBuilder.group({
    nameOfTrainingCtrl: [''],
    whoConductedTrainingCtrl: [''],
    trainingConductedStartDateCtrl: [''],
    trainingDeptCtrl: [''],
    totalStaffTraineeCtrl: [''],
    totalSuccesfulTrainingCrtl: [''],
    thirdpartyCategory: [''],
    thirdPartyTypeAgent: [''],
    noOfAgents: '',
    haveThirdParty: ['']
  });
  // internationaldayGroup = this._formBuilder.group({
  //   internationaldayCtrl: ['',Validators.required],
  //   selectedOption: ['yes']
  // });
  complaintsGroup = this._formBuilder.group({
    yearOfCompliment: [''],
    statusOfCompliment: [''],
    numberOfCompliments: [''],
    haveComplaints: ['']
  });
  dataBreachesGroup = this._formBuilder.group({
    // yearOfCompliment: [''],
    // statusOfCompliment: [''],
    // numberOfCompliments: ['']
    haveBreaches: ['yes']
  });
  impactGroup = this._formBuilder.group({
    // yearOfCompliment: [''],
    // statusOfCompliment: [''],
    // numberOfCompliments: ['']
    haveImpact: ['']
  });
  auditGroup = this._formBuilder.group({
    haveAudits: ['yes']
  });
  conclusionGroup = this._formBuilder.group({
    text: ['', Validators.required],
    NameOfPersonSubmitting: ['', Validators.required],
    TitleOfPersonSubmitting: ['', Validators.required],
    commentedBy: [''] 
  });
 
  isSubmitButtonDisabled: boolean;
  reportdate: any;

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
  ComplianceReportId: string;
  theOrganizationID: string;
  isOrganizationRole: boolean;
  isLegalRole: boolean;
  issueDate: string= '';
  expiryDate: string= '';
  orgEmail: string='';
  isDataLoaded: boolean = false;
  
  constructor(private auth: KeycloakService,
    private http: HttpClient,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    public registrationService: CompanyRegistrationService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute,
    private cdRef: ChangeDetectorRef,
    private snackBar: MatSnackBar,
    private datePipe: DatePipe,
    private route2: Router,
    private cdr: ChangeDetectorRef)
    {
      this.dataSource = new MatTableDataSource([]);
      this.DPODataSource = new MatTableDataSource([]);
      this.StaffDataSource = new MatTableDataSource([]);
      this.ThirdPartyDataSource = new MatTableDataSource([]);
      this.ComplaintsDataSource = new MatTableDataSource([]);
      this.BreachesDataSource = new MatTableDataSource([]);
      this.ImpactDataSource = new MatTableDataSource([]);
      this.AuditDataSource = new MatTableDataSource([]);
      this.isOrganizationRole = this.auth.getKeycloakInstance().realmAccess.roles.includes('organisation');
      this.isLegalRole = this.auth.getKeycloakInstance().realmAccess.roles.includes('data-protection-officer-legal');
      
    }
  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      this.ComplianceReportId = params.id;
      this.theOrganizationID = params.orgid;
      this.reportdate = params.reportdate
      //console.log(params.id);
      this.fetchMinimalData(this.theOrganizationID);
      // this.orgRenewalData();
      //console.log(params.orgid);
      this.fetchDataFromAPI(this.ComplianceReportId);
      
    });
    
    // Code for PDF generation
    this.pdfContent = ``;
    this.cdr.detectChanges();
  }

  
  toggleUserSubmissionStatus() {
    if (this.commented_by === "PDPO-EDIT") {
      this.commented_by = "PDPO";
    } else {
      this.commented_by = "PDPO-EDIT";
    }
  }

  private baseAPIUri = environment.backend;
  
  fetchDataFromAPI(reportId: string): void {
    const apiUrl = this.baseAPIUri + 'v1.0' + '/compliance-report/compliance-reports/single/report?compliance_report_id='+reportId;
    this.http.get(apiUrl).subscribe((response: any) => {
      if (response && response.compliance_report) {
        const complianceReport = response.compliance_report;
        this.changeParticulars = complianceReport.registration_changes[0].Detail
        this.dpoReporting = complianceReport.leadership_and_oversight[0].Detail
        this.dpoJOBDESC = complianceReport.leadership_and_oversight[0].DPOJobDescription
        //updating the frontend radio buttons
        this.leadershipOversightGroup.get('hasJobDescription').setValue(
          this.dpoJOBDESC.trim().length > 0 ? 'yes' : 'no'
        );
        this.Reason  = complianceReport.leadership_and_oversight[0].DPOResponsibility
        this.leadershipOversightGroup.get('hasPerfApraisal').setValue(
          this.Reason.trim().length > 0 ? 'yes' : 'no'
        );
        this.feedback = complianceReport.conclusion[0].text
        this.nameOfPerson = complianceReport.conclusion[0].NameOfPersonSubmitting
        this.titleOfPerson = complianceReport.conclusion[0].TitleOfPersonSubmitting
        if (complianceReport.workflow_comments[0] && complianceReport.workflow_comments[0].comment_text !== null) {
          this.PDPOcomment = complianceReport.workflow_comments[0].comment_text;
        } else {
          this.PDPOcomment = '';
        }
        if (complianceReport.workflow_comments[0] && complianceReport.workflow_comments[0].commented_by !== null) {
          this.commented_by = complianceReport.workflow_comments[0].commented_by;
          //console.log("assigned comment")
          //console.log(this.commented_by)
        } else {
          this.commented_by = '';
        } 

        const policyData = [];
        if (complianceReport.notice_policy_procedure) {
          complianceReport.notice_policy_procedure.forEach((policy) => {
            policyData.push({
              PolicyandProcedure: policy.PolicyandProcedure,
              ApprovalDate: policy.ApprovalDate,
              ReviewDate: policy.ReviewDate,
              NumberOfTrainings: policy.NumberOfTrainings,
            });
          });
        } else {
          console.log("The array is empty or does not contain any objects.");
        }
        this.dataSource = new MatTableDataSource(policyData);

        const dpoData = [];
        if (complianceReport.dpo_training) {
          complianceReport.dpo_training.forEach((training) => {
            dpoData.push({
              name_of_training: training.name_of_training,
              who_conducted_training: training.who_conducted_training,
              date_of_training: training.date_of_training,
            });
          });
        } else {
          console.log("DPO training data is missing or undefined.");
        }
        this.DPODataSource = new MatTableDataSource(dpoData);
  
        this.StaffDataSource = new MatTableDataSource([]);
        if (complianceReport.staff_training) {
          complianceReport.staff_training.forEach((training) => {
            this.StaffDataSource = new MatTableDataSource([{
              department: training.department,
              total_staff_to_be_trained: training.total_staff_to_be_trained,
              number_completed_training: training.number_completed_training,
            }]);
            
          });
        } else {
          console.log("Staff training data is missing or undefined.");
        }
  
        this.ThirdPartyDataSource = new MatTableDataSource([]);
        if (complianceReport.third_party_contractor) {
          complianceReport.third_party_contractor.forEach((contractor) => {
            this.ThirdPartyDataSource = new MatTableDataSource([{
              example_of_agent: contractor.example_of_agent,
              number_of_agents: contractor.number_of_agents,
              NumberOfTrainedAgents: contractor.NumberOfTrainedAgents,
            }]);
          });
        } else {
          this.trainingAndAwarenessGroup.get('haveThirdParty').setValue('no');
          console.log("Third-party contractor data is missing or undefined.");
        } 
        //Frontend update for thirdPartyDataSource Array to toggle radio buttons
        this.trainingAndAwarenessGroup.get('haveThirdParty').setValue(
          this.ThirdPartyDataSource.data.length > 0 ? 'yes' : 'no'
        );
        
        this.ComplaintsDataSource = new MatTableDataSource([]);
        if (complianceReport.complaints) {
          complianceReport.complaints.forEach((complaint) => {
            this.ComplaintsDataSource = new MatTableDataSource([{
              year_of_complaint: complaint.year_of_complaint,
              status_of_complaint: complaint.status_of_complaint,
              number_of_complaints_received: complaint.number_of_complaints_received,
            }]);
            
          });
        } else {
          this.complaintsGroup.get('haveComplaints').setValue('no')
          console.log("Complaint data is missing or undefined.");
        }
        //complaints radio buttons
        this.complaintsGroup.get('haveComplaints').setValue(
          this.ComplaintsDataSource.data.length > 0 ? 'yes' : 'no'
        );

        this.BreachesDataSource = new MatTableDataSource([]);
        if (complianceReport.breaches) {
          complianceReport.breaches.forEach((breach) => {
            this.BreachesDataSource = new MatTableDataSource([{
              year_of_breach: breach.year_of_breach,
              status_of_breach: breach.status_of_breach,
              number_of_breaches: breach.number_of_breaches,
              measures_taken_to_address_gaps: breach.measures_taken_to_address_gaps,
              number_of_records_lost: breach.number_of_records_lost,
              frequent_cause_of_breach: breach.frequent_cause_of_breach,
            }]);
            
          });
        } else {
          this.dataBreachesGroup.get('haveBreaches').setValue('no')
          console.log("Breach data is missing or undefined.");
        }
        // Breaches radio buttons
        this.dataBreachesGroup.get('haveBreaches').setValue(
          this.BreachesDataSource.data.length > 0 ? 'yes' : 'no'
        );

        this.ImpactDataSource = new MatTableDataSource([]);
        if (complianceReport.impact_assessment) {
          complianceReport.impact_assessment.forEach((impact) => {
            this.ImpactDataSource = new MatTableDataSource([{
              data_or_activity: impact.data_or_activity,
              date_concluded: impact.date_concluded,
            }]);
            
          });
        } else {
          this.impactGroup.get('haveImpact').setValue('no')
          console.log("Impact assessment data is missing or undefined.");
        }
        // Impact radio buttons
        this.impactGroup.get('haveImpact').setValue(
          this.ImpactDataSource.data.length > 0 ? 'yes' : 'no'
        );

        this.AuditDataSource = new MatTableDataSource([]);
        if (complianceReport.audits) {
          complianceReport.audits.forEach((audit) => {
            this.AuditDataSource = new MatTableDataSource([{
              year_of_audit: audit.year_of_audit,
              category_of_audit: audit.category_of_audit,
              number_of_audits: audit.number_of_audits,
              Resolutionstatus: audit.Resolutionstatus,
              Resolutiondetails: audit.Resolutiondetails,
            }]);
            
          });
        } else {
          this.auditGroup.get('haveAudits').setValue('no')
          console.log("Audit data is missing or undefined.");
        }
        // Audits radio buttons
        this.auditGroup.get('haveAudits').setValue(
          this.AuditDataSource.data.length > 0 ? 'yes' : 'no'
        );


        this.cdRef.detectChanges();
        // for the button to be enabled
        
        //pdf content
        // this.pdfContent += this.contentToAppend;
        this.isDataLoaded = true;
      } else {
        // Handle the case where the response doesn't match the expected structure
        console.error('Invalid API response format.');
      }
    });
  }

  fetchMinimalData(theOrganizationID: string): void{

    const api2 = this.baseAPIUri + 'v1.0' + '/org-registration/single?RegTrackingNo='+theOrganizationID;
    this.http.get(api2).subscribe(
      (response: any) => {
        
        this.orgName = response.OrganisationName;
        this.orgRegNo = response.RegTrackingNo;
        this.orgRegDate = response.EnteredOn;
        this.orgMyID = response.OrganisationID;
        this.orgEmail = response.EmailAddress;
        // Extract OrganisationCategoryNames and join them with commas
        const orgCategoryNames: string[] = response.OrganisationCategory.map((category) => category.OrganisationCategoryName);
        this.orgCategory = orgCategoryNames.join(', ');
        this.orgRenewalData();
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }
  
  orgRenewalData(): void{
    const renewalapi = this.baseAPIUri + 'v1.0' + '/certificate/details?OrganizationID=' + this.orgMyID;
    this.http.get(renewalapi).subscribe(
      (response: any) => {
        
        if(response.IssueDate){
          this.issueDate = this.datePipe.transform(response.IssueDate, 'yyyy-MMMM-dd');
          this.expiryDate = this.datePipe.transform(response.ExpiryDate, 'yyyy-MMMM-dd');
        }
        else{
          this.issueDate = 'Loading...please wait';
          this.expiryDate = 'Loading...please wait';
        }
        
      },
      (error) => {
        console.error('Error Fetching Renewal Data:', error);
      }
    );
  }

  onAddComment(): void {
    if (this.commentGroup.valid) {
      const OrganizationID = this.orgMyID;
      const ComplianceReportID = this.ComplianceReportId;
      const comment = this.commentGroup.get('PDPOcomment').value;
  
      // Define the request body with the data to update
      const requestBody = {
        OrganizationID,
        ComplianceReportID,
        comment_text: comment,
        commented_by: this.commented_by,
        orgName: this.orgName.toString(),
        orgEmail: this.orgEmail,
      };
      
      //console.log("report ID",ComplianceReportID)
      //console.log(requestBody)
      // Define the headers for the PUT request (if needed)
      const headers = new HttpHeaders({
        'Content-Type': 'application/json', // Adjust the content type as needed
      });

      const params = new HttpParams()
      .set('OrganizationID', OrganizationID.toString())
      .set('ComplianceReportID', ComplianceReportID)
      .set('comment_text', comment)
      .set('commented_by', this.commented_by);
  
      const apiUrl = `${this.baseAPIUri}v1.0/compliance-report/compliance-report/single`;

      // Perform the PUT request
      this.http.put(apiUrl, requestBody, { headers, params })
        .subscribe(
          (response) => {
            // Show a success snackbar
            this.snackBar.open('Review Comment added successfully', 'Close', {
              duration: 3000, // 3 seconds
            });
  
            // Reload the page after a delay
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          },
          (error) => {
            // Handle API call error here
            console.error('Error adding comment:', error);
          }
        );
    } else {
      // Form is invalid, show an error message or handle as needed
      console.log('Form is invalid');
    }
  }
  

  // Edits start here
  checkFormValidity(): void {
    if (this.conclusionGroup.valid && this.registrationPdpOfficeGroup.valid && this.leadershipOversightGroup.valid) {
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
  

  //handle Edit button
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
    // const internationalday = this.internationaldayGroup.get('internationaldayCtrl')?.value;
    // const internationaldayPayload = {
    //   Detail: internationalday
    // };
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
      compliance_report_id: this.ComplianceReportId,
      organizationID: parseInt(this.orgMyID.toString(),10),
      registration_changes: [changeParticularsPayload],
      leadership_and_oversight: [changeLeadershipPayload],
      notice_policy_procedure: tableData,
      dpo_training: DPOData,
      staff_training: StaffData,
      third_party_contractor: thirdData,
      // internationalday: [internationaldayPayload],
      complaints: ComplaintsData,
      breaches: breachesData,
      impact_assessment: ImpactData,
      audits : auditData,
      conclusion: [changeConclusionPayload]
    };
    
    //console.log('My Update Payload is here...')
    //console.log(payload)
    //send to our backend!
    
    const api4 = this.baseAPIUri + 'v1.0' + '/compliance-report/compliance-reports/single/report';

    this.http.put(api4, payload).subscribe(
      response => {
        //console.log('Response from backend:', response);
        // handle the response from the backend here
        this.snackBar.open('Compliance Report Updated Successfully.', 'Close', {
          duration: 8000, // 8 seconds
        });
        this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
          panelClass: ['successful-message-dialog', 'dialogs'],
          disableClose: true,
          data: {
            title: 'Successfully Updated Your Compliance Report',
            message: 'Compliance Report Updated Please wait for review from the PDPO Team.',
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

  generatePDF() {
    //console.log('Generating PDF...');
  
    // HTML for Report

    const pdfContainer = `
    <style>
      .cover-page {
          size: A4;
          text-align: center;
          height: 110vh; 
          display: flex;
          flex-direction: column;
          justify-content: center;
      }
      .page {
        page-break-before: always;
       }
      .main-content {
          margin-top: 350px; 
      }
      .footer-image {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        text-align: center; /* Center the image horizontally */
      }
      .datedate{
        margin-top: 150px; 
      }
      table {
        border-collapse: collapse;
        width: 100%;
      }

      th, td {
        border: 1px solid #000; 
        padding: 8px;
        text-align: left;
      }

      tr:nth-child(even) {
        background-color: #f2f2f2;
      }

      th {
        background-color: #cccccc; 
      }
    </style>
    <div class="cover-page">
        <h1><strong>${this.orgName}</strong></h1>
        <h2><strong>Annual Data Protection and Privacy Compliance Report</strong></h2>
        <h2><strong>to</strong></h2>
        <h2><strong>Personal Data Protection Office</strong></h2>
        <h2><strong>(PDPO)</strong></h2><br><br><br><br><br><br><br><br>
        <h2>
          <b>
            <time datetime="${this.reportdate}" class="datedate">${new Date(this.reportdate).toLocaleString('en-US', { year: 'numeric', month: 'long' })}</time>
          </b>
        </h2>
        
    </div>

    <div class="page">
    <h3>1. INTRODUCTION</h3>
    <h4>1.1 Background</h4>
        <small>
            <p>
                The Personal Data Protection Office (PDPO) was established to oversee the implementation of and enforce the Data Protection and Privacy Act and its regulations. According to regulation 50, all registered data collectors, processors, and controllers must submit a summary to the PDPO within ninety (90) days after the end of each financial year, including:
            </p>
            <ol>
                <li>All received complaints and their statuses (resolved or pending).</li>
                <li>All data breaches and the actions taken to address them.</li>
            </ol>
            <p>
                Regulation 4(b) of the Data Protection and Privacy Regulations empowers the PDPO to coordinate, supervise, and monitor data-related matters. The PDPO aims to enhance compliance by expanding the annual compliance report's scope for better adherence to the Act.
            </p>
            <p>
                The PDPO's financial year aligns with the government's year, running from 1st July to 30th June, as per the National Information Technology Authority, Uganda (NITA-U) Act of 2009, section 30. In compliance with this requirement, <strong [style.color]="'#1976d2'">${this.orgName}</strong> hereby submits its annual Data Protection and Privacy compliance report to the PDPO.
            </p>
        </small>
        
    </div>
     
    <div class="page">
      <h3>2. REGISTRATION WITH PERSONAL DATA PROTECTION OFFICE</h3>
      <h4>2.1 RENEWAL STATUS</h4>
        <blockquote>
          <p>
            <strong>${this.orgName}</strong> was registered on <strong>${this.issueDate}</strong> as a <strong>${this.orgCategory}</strong> under registration number <strong>${this.orgRegNo}</strong>. 
            The date for renewal of its registration is <strong>${this.expiryDate}</strong>.
          </p>
        </blockquote>
      <h4>2.2 CHANGES IN REGISTERED PARTICULARS</h4>
        <blockquote>
          <p>
            ${this.changeParticulars}
          </p>
        </blockquote>
      </div>
    <div class="page">
      <h3>3. LEADERSHIP AND OVERSIGHT</h3>
      <h4>3.1 Reporting line and team of staff supporting Data Protection Officer</h4>
        <blockquote>
          <p>
              ${this.dpoReporting}
          </p>
        </blockquote>
      <h4>3.2 Does the DPO have a job description addressing specific responsibilities as detailed in regulation 47(3) of the Data Protection & Privacy Regulations?</h4>
        <blockquote>
          <p>
            ${this.leadershipOversightGroup.get('hasJobDescription').value === 'yes' ? `<strong>${this.dpoJOBDESC}</strong>` : 'NO'}
          </p>
        </blockquote>
      <h4>3.3 Does the most recent perfomance appraisal of the DPO encompass responsibilities set out by regulations 47(30) ?</h4>
        <blockquote>
          <p>
            ${this.leadershipOversightGroup.get('hasPerfApraisal').value === 'yes' ? `<strong>${this.Reason}</strong>` : 'NO'}
          </p>
        </blockquote>
      </div>
    <div class="page">
      <h3>4. NOTICES, POLICIES AND PROCEDURES</h3>
      <p>
        <strong>${this.orgName}’s</strong> management approved the following notices/statements/disclosures, policies and procedures which are available to all staff in the policies and procedures section of the shared folder on the intranet and data subjects for notices/statements/disclosures.
      </p>
          <table>
          <thead>
            <tr>
              <th>Policy Name</th>
              <th>Approval Date</th>
              <th>Review Date</th>
              <th>Number of Trainings on Policy</th>
            </tr>
          </thead>
          <tbody>
            ${this.dataSource.data.map(row => `
              <tr>
                <td>${row.PolicyandProcedure}</td>
                <td>${row.ApprovalDate}</td>
                <td>${row.ReviewDate}</td>
                <td>${row.NumberOfTrainings}</td>
              </tr>`).join('')}
          </tbody>
        </table>
      </div>
      <div class="page" style="padding-top: 5px;">
        <h3>5. TRAINING AND AWARENESS</h3>
        <h4>DPO Training</h4>
        <table>
          <thead>
            <tr>
              <th>Training Name</th>
              <th>Conducted By</th>
              <th>Training Date</th>
            </tr>
          </thead>
          <tbody>
            ${this.DPODataSource.data.map(row => `
              <tr>
                <td>${row.name_of_training}</td>
                <td>${row.who_conducted_training}</td>
                <td>${row.date_of_training}</td>
              </tr>`).join('')}
          </tbody>
        </table>
        <h4>Staff Training</h4>
        <table>
          <thead>
            <tr>
              <th>Department</th>
              <th>Total Staff to be Trained</th>
              <th>Number of Staff that completed Training</th>
            </tr>
          </thead>
          <tbody>
            ${this.StaffDataSource.data.map(row => `
              <tr>
                <td>${row.department}</td>
                <td>${row.total_staff_to_be_trained}</td>
                <td>${row.number_completed_training}</td>
              </tr>`).join('')}
          </tbody>
        </table>
        <h4>Do you have an Agent, 3rd party or Contractor?</h4>
        ${this.trainingAndAwarenessGroup.get('haveThirdParty').value === 'yes' 
        ? `<table>
            <thead>
              <tr>
                <th>Example of Agent, 3rdParty or Contractor</th>
                <th>Total Number of Agents, 3rdParty or Contractors</th>
                <th>Number of Agents, 3rdParties or Contractors Trained</th>
              </tr>
            </thead>
            <tbody>
              ${this.ThirdPartyDataSource.data.map(row => `
                <tr>
                  <td>${row.example_of_agent}</td>
                  <td>${row.number_of_agents}</td>
                  <td>${row.NumberOfTrainedAgents}</td>
                </tr>`).join('')}
            </tbody>
          </table>` 
        : 'NO'}
      </div>
      <div class="page" style="padding-top: 5px;">
        <h3>6. COMPLAINTS RELATED TO DATA PROTECTION AND PRIVACY (IF APPLICABLE)</h3>
        <h4>Did you have any Complaints ?</h4>
        ${this.complaintsGroup.get('haveComplaints').value === 'yes' 
        ? `<table>
            <thead>
              <tr>
                <th>Year Complaints were Received</th>
                <th>Status of Complaints</th>
                <th>Number of Complaints Received</th>
              </tr>
            </thead>
            <tbody>
              ${this.ComplaintsDataSource.data.map(row => `
                <tr>
                  <td>${row.year_of_complaint}</td>
                  <td>${row.status_of_complaint}</td>
                  <td>${row.number_of_complaints_received}</td>
                </tr>`).join('')}
            </tbody>
          </table>` 
        : 'NO'}
      </div>
      <div class="page" style="padding-top: 5px;">
        <h3>7. DATA SECURITY BREACHES (IF APPLICABLE)</h3>
        <h4>Did you experience any Data Security Breaches?</h4>
        ${this.dataBreachesGroup.get('haveBreaches').value === 'yes' 
        ? `<table>
            <thead>
              <tr>
                <th>Year Breach Occured</th>
                <th>Status of Breach</th>
                <th>Number of Breaches</th>
                <th>Measures to address Gaps</th>
                <th>No. of Records Affected</th>
                <th>Frequent cause of Breach</th>
              </tr>
            </thead>
            <tbody>
              ${this.BreachesDataSource.data.map(row => `
                <tr>
                  <td>${row.year_of_breach}</td>
                  <td>${row.status_of_breach}</td>
                  <td>${row.number_of_breaches}</td>
                  <td>${row.measures_taken_to_address_gaps}</td>
                  <td>${row.number_of_records_lost}</td>
                  <td>${row.frequent_cause_of_breach}</td>
                </tr>`).join('')}
            </tbody>
          </table>` 
        : 'NO'}
      </div>
      <div class="page" style="padding-top: 5px;">
        <h3>8. DATA PROTECTION IMPACT ASSESSMENT (IF APPLICABLE)</h3>
        ${this.impactGroup.get('haveImpact').value === 'yes' 
        ? `<table>
            <thead>
              <tr>
                <th>Data collection/processing activity</th>
                <th>Date Data Protection Impact assessment concluded</th>
              </tr>
            </thead>
            <tbody>
              ${this.ImpactDataSource.data.map(row => `
                <tr>
                  <td>${row.data_or_activity}</td>
                  <td>${row.date_concluded}</td>
                </tr>`).join('')}
            </tbody>
          </table>` 
        : 'NONE'}
      </div>
      <div class="page" style="padding-top: 5px;">
        <h3>9. DATA PROTECTION AND PRIVACY AUDITS (IF APPLICABLE)</h3>
        <h4>Did you have any audits carried out?</h4>
        ${this.auditGroup.get('haveAudits').value === 'yes' 
        ? `<table>
            <thead>
              <tr>
                <th>Year Of Audit</th>
                <th>Category of Audit</th>
                <th>Number of Audits</th>
                <th>Resolution Status</th>
                <th>Resolution Details</th>
              </tr>
            </thead>
            <tbody>
              ${this.AuditDataSource.data.map(row => `
                <tr>
                  <td>${row.year_of_audit}</td>
                  <td>${row.category_of_audit}</td>
                  <td>${row.number_of_audits}</td>
                  <td>${row.Resolutionstatus}</td>
                  <td>${row.Resolutiondetails}</td>
                </tr>`).join('')}
            </tbody>
          </table>` 
        : 'NONE'}
      </div>
      <div class="page" style="padding-top: 5px;">
        <h3>10. CONCLUSION</h3>
        <h4>Feedback on Compliance</h4>
        <p>
          ${this.feedback}
        </p>
        <h4>
          <strong>Declaration</strong>
        </h4>
        <p>
          I, <strong>${this.nameOfPerson}</strong>, on behalf of <strong>${this.orgName}</strong>, hereby declare that the information provided in this Data Protection and Privacy Annual Compliance Report is accurate, complete, and up-to-date to the best of my knowledge.
        </p>
        <p>
          NAME OF PERSON SUBMITTING THE REPORT: <span><strong>${this.nameOfPerson}</strong></span>
        </p>
        <p>
          TITLE OF PERSON SUBMITTING THE REPORT: <span><strong>${this.titleOfPerson}</strong></span>
        </p>
        <p>
          DATE REPORT SUBMITTED TO PDPO: <span><strong>${this.reportdate}</strong></span>
        </p>
      </div>

    `;

    const options = {
      margin: 10,
      filename: 'Annual Compliance Report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
    };
  
    html2pdf().from(pdfContainer).set(options).save();
  }
  // PDF content


  
}

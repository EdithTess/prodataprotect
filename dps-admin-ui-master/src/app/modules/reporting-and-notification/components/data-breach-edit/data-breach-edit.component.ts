import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {ChangeDetectorRef, Component,EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {SuccessfulMessageDialogComponent } from '../../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { ForwardMessageDialogComponent } from '../../../../layout/dialogs/forward-message-dialog/forward-message-dialog.component';
import {
    BREACH_JSON,
    BreachControlModel, BREACHES_JSON,
    BreachModel, CAUSE_OF_BREACH,
    CauseOfBreach, IMPACT_OF_BREACH,
    ImpactOfBreachModel,
    PersonalData,
    PersonalDataModel,
    PolicyModel,
    BreachCauses,
    PotentialHarms,
    BreachDescriptionQuestions,
    PotentialConsequenceModel
} from '../../breach-model';
import { DatePipe } from '@angular/common';
import { ComplaintCommentsComponent } from '../../../../layout/complaint-comments/complaint-comments.component';
import * as moment from 'moment'
import { environment } from '../../../../../environments/environment';
import { ApiPayload, Organisation, OrganisationDetails } from '../../../../services/api.model';
import {AuthenticationService} from '../../../../authentication/authentication.service';

import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {ComplaintModel, PersonalDataAffected} from '../../../complaints/complaints-model';
import {KeycloakService} from 'keycloak-angular';
import {forkJoin, Observable, of, ReplaySubject, Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {filter} from 'rxjs/operators';
import { scaleInAnimation } from '../../../../../@fury/animations/scale-in.animation';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { ComplaintService } from '../../../complaints/complaints.service';
import { ApiService } from '../../../../services/api.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { CategoryDisplayComponent } from '../../../../layout/dialogs/category-display/category-display.component';
import { MatDialog } from '@angular/material/dialog';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { BreachCommentsComponent } from '../breach-comments/breach-comments.component';
import { ForwardCommentsComponent } from '../../../../layout/dialogs/forward-comments/forward-comments.component';
import {DataBreachService} from '../../data-breach.service';
import { BreachInvestigationsComponent } from '../../../../layout/dialogs/breach-investigations/breach-investigations/breach-investigations.component';
import { Moment } from 'moment';
import { OrgBreachPreviewComponent } from '../../../../layout/dialogs/Breach-review/org-breach-preview/org-breach-preview.component';
import { BreachRequestForInformationComponent } from '../../../../layout/dialogs/breach-request-for-information/breach-request-for-information.component';
import { BreachManageMoreInformationComponent } from '../../../../layout/dialogs/breach-manage-more-information/breach-manage-more-information.component';
@Component({
    selector: 'fury-data-breach-edit',
    templateUrl: './data-breach-edit.component.html',
    styleUrls: ['./data-breach-edit.component.scss'],
    animations: [fadeInRightAnimation, fadeInUpAnimation, scaleInAnimation]
})
export class DataBreachEditComponent extends BaseFuryForm implements OnInit {

    // Simulating A Service
    subject$: ReplaySubject<BreachModel> = new ReplaySubject<BreachModel>(1);
    data$: Observable<BreachModel> = this.subject$.asObservable();
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<any> = new EventEmitter();
    $resultComplaintsEvent: EventEmitter<BreachModel> = new EventEmitter();

    @ViewChild('autosize') autosize: CdkTextareaAutosize;
    // Main object
    processing = false;
    accesses: string[];
    httpSub: Subscription;
    dialogRef;
    showManageRequestInfo = false;
    showManageButtons = false;
    disableResolve = true;
    disableForward = true;
    isDirector = false;
    DataBreachTrackingNo;
    LegalComments: string;
    TechnicalComments: string;
    organisation_name: string[];
    email: string[];
    RegTrackingNo: string[];
    PhoneNumber: number[];
    ActionTakenCheckboxValue = 0;
    DataRecoveredCheckboxValue = 0;
    DataSubjectsCategories = [];
    CausesOfBreach : CauseOfBreach[] = [];                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    DataBreachTrackingNumber: string;
    selectedBreachDescriptionQuestions : BreachDescriptionQuestions[] = [];
    notSelectedBreachDescriptionQuestions :BreachDescriptionQuestions[] = [];
    FirstSelectedBreachDescription : BreachDescriptionQuestions[];
    SecondSelectedBreachDescription : BreachDescriptionQuestions[];
    TotalSelectedBreachDescription : BreachDescriptionQuestions[];
    TotalSelectedPotentialHarms : PotentialConsequenceModel[];
    selectedPotentialHarms = [];
    notSelectedPotentialHarms = [];
    PotentialHarmsQuestions:PotentialHarms[];
    BreachDescriptionQuestions: BreachDescriptionQuestions[] = [];
    breachDescriptionQuestionsCount;
    PotentialHarmsCount;
    breachPotentialConsequences : [];
    BreachCauses: BreachCauses[];
    PotentialHarms: PotentialHarms[] = [];
    PotentialHarmsFirst:PotentialHarms[];
    PotentialHarmsSecond:PotentialHarms[];
    organisation: OrganisationDetails[];
    application: BreachModel = new BreachModel();
    policy: PolicyModel = new PolicyModel();
    policies: PolicyModel[] = [];
    personalData: PersonalData[] = [];
    personalDataAffected: PersonalDataModel[] = [];
    breachDetails: FormGroup;
    OrganisationDetails: FormGroup;
    additionalInfo: FormGroup;
    containmentAndRecovery: FormGroup;
    miscellaneous: FormGroup;
    breachConsequences: FormGroup;
    potentialHarms: FormGroup;
    OtherpotentialHarms: FormGroup;
    singleOrganisation: Organisation | null;
    impactOfBreaches: ImpactOfBreachModel[] = [];
    causeOfBreaches: CauseOfBreach [] = [];
    controls?:BreachControlModel[] = [];
    _controls?:BreachControlModel[] = [];
    dataActors: any [];
    _dataActors: any [];
    isOfficer: boolean;
    isCompanyOfficer: boolean;
    pontentialConsequences: PotentialConsequenceModel [] = [];
    dataSource: MatTableDataSource<BreachModel> | null;
    breaches: BreachModel[];
    applicantDetails: FormGroup;
    BreachDescriptionQuestionsFirst: BreachDescriptionQuestions[];
    BreachDescriptionQuestionsSecond: BreachDescriptionQuestions[];
    subscriptions: Subscription[] = [];
    pipe = new DatePipe('en-US');
    isLinear = false;
    OrganisationID;
    minDate:any;
    maxDate:any;
    ActualOrganisationID;


    phonePrefixOptions = ['+1', '+27', '+44', '+49', '+61', '+91'];

    passwordInputType = 'password';

    list = [];
    _displayColumns: string [] = ['value', 'details'];
    OrganisationNumber;

    levels = ['Negligible', 'Limited', 'Significant', 'Maximum'];

    constructor(private fb: FormBuilder,
                private service: ApiService,
                private endpoints: ApiEndpointsService,
                private http: HttpClient,
                private cd: ChangeDetectorRef,
                private activateRoute: ActivatedRoute,
                private auth: KeycloakService,
                private dialog: MatDialog,
                private allDialogRef: MatDialog,
                public authService: KeycloakService,
                public _auth: AuthenticationService,
                private route: Router,
                public _workflowService: WorkflowServiceService,
                public registrationService: CompanyRegistrationService,
                public complaintService: ComplaintService,
                public dataBreachService: DataBreachService,
                private snackbar: MatSnackBar) {
        super(
            authService,
            _workflowService,
            registrationService,
            complaintService
        );

 
        this.operationType = activateRoute.routeConfig.data.action;
        this.accesses = authService.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
        this.OrganisationID = _auth.getUser();
        console.log(this.OrganisationID)
      
        if (this.operationType === 'EDIT') {
            this.isEditMode = true;
            this.application.policies = [];
            this.application.personalDataAffected = [];
            this.application.impactOfBreach = [];
            this.application.controls = [];
            this.application.potentialConsequences = [];
            this.isEditMode = true;
        } else if (this.operationType === 'CREATE') {
            this.isEditMode = false;
            this.application.policies = [];
            this.application.personalDataAffected = [];
            this.application.impactOfBreach = [];
            this.application.controls = [];
            this.application.potentialConsequences = [];
        } else if (this.operationType === 'VIEW') {
            this.isEditMode = false;
            this.isViewOnly = true;
            this.showManageButtons = true;
        }
    }

    ngOnInit() {


        this.maxDate = new Date();


        if (this.operationType === 'EDIT') {

            this.DataBreachTrackingNo = history.state.DataBreachTrackingNo;
            
        }
        else if(this.operationType === 'VIEW'){
            
            this.DataBreachTrackingNo = history.state.DataBreachTrackingNo;
        }
        this.OrganisationDetails = this.fb.group({
            OrganisationName: new FormControl('', [Validators.required]),
            RegNo: new FormControl('', [Validators.required]),
            //DPOName: new FormControl('', [Validators.required]),
            DPOEmail: new FormControl('', [Validators.required]),
            DPONumber: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)])
        });
        
        this.isOfficer = this.auth.isUserInRole('data-protection-officer-nita');
        this.isCompanyOfficer = this.auth.isUserInRole('data-protection-officer');
        /**
         * Horizontal Stepper
         * @type {FormGroup}
         */
        this.getCauseOfBreachJson.subscribe(causeOfBreaches => {
            this.causeOfBreaches = causeOfBreaches;
        });
        this.breachDetails = this.fb.group({
            incidentDate: [null, Validators.required],
            delayInReporting: [null],
            delayInReportings: [null],
            reasonForDelay: [null, Validators.required],
            causesOfBreach: [],
            measures:[null, Validators.required],
            FullDetailsOfComplaint: [null, Validators.required],
            DetailsOfComplaint: [null, Validators.required]
     
        });

        this.containmentAndRecovery = this.fb.group({
            actionTaken: [null],
            detailsOfActionTaken: [null],
            hasDataBeenRecovered: [null],
            detailsOfRecovery: [null],
            dateOfRecovery: [null],
            preventionSteps: [null],
        });

        this.breachConsequences = this.fb.group({

        });

        this.additionalInfo = this.fb.group({

        });

        this.potentialHarms = this.fb.group({
            
        });

        this.OtherpotentialHarms = this.fb.group({

        });

        if(this.accesses.includes('director-rights')){

            this.isDirector = true;
        }

      
        if (this.isViewOnly) {
            this.disableAllControls();
            this.getBreach()

            this.subscriptions['$resultComplaintsEvent'] = this.$resultComplaintsEvent.subscribe(result => {
                if (result) {

                    this.TotalSelectedBreachDescription = result[0].PotentialConsequences;
                    const QuestionCount = result[0].PotentialConsequences.length;
                    console.log(QuestionCount);
                    const middleIndex = Math.ceil(result[0].PotentialConsequences / 2)
                    console.log(typeof(result[0].PotentialConsequences));
                    this.FirstSelectedBreachDescription = result[0].PotentialConsequences.slice(0, middleIndex);
                    console.log(this.FirstSelectedBreachDescription);
                    this.SecondSelectedBreachDescription = result[0].PotentialConsequences.slice(-middleIndex);
                    console.log(this.SecondSelectedBreachDescription);

                    this.TotalSelectedPotentialHarms = result[0].PotentialHarms;



                    this.TechnicalComments = result[0].TechnicalComments
                    this.LegalComments = result[0].LegalComments

                    if(this.accesses.includes('technical-rights') ){

                        if(result[0].BreachStatusID == 1){
            
                            this.disableForward = false;
                        }
                        else if(result[0].BreachStatusID == 7){
                            this.showManageRequestInfo = true
                            this.disableForward = true;
                        }
                        else{
                            this.disableForward = true;
                        }     
                    
                    }
                    else if(this.accesses.includes('legal-rights')){
                        if(result[0].BreachStatusID == 3){
            
                            this.disableForward = false;
                        }
                        else if(result[0].BreachStatusID == 8){
                            this.showManageRequestInfo = true
                            this.disableForward = true;
                        }
                        else{
                            this.disableForward = true;
                        }
                    }
            
                    else if(this.accesses.includes('director-rights')){
                        if(result[0].BreachStatusID == 4){
            
                            this.disableResolve = false;
                        }
                        else{
                            this.disableResolve = true;
                        }
                    }
            
                    else{
                        this.disableForward = true;
                    }
            
                   
                    this.httpSub =  this.fetchOrganisation(result[0].OrganisationID)
                    .pipe(catchError(this.service.handleError))
                    .subscribe((responseList) => {
                    
                    this.mapFields(result, responseList[0]);

                }
                , (error) => {
                    this.processing = false;
                    this.service.determineErrorResponse(error);
                  });  
                }
                else{
                    console.log("expected");
                }
            });

        }

    }

    ngAfterViewInit(): void {
        this.httpSub = this.fetchMultiple()
        .pipe(catchError(this.service.handleError))
        .subscribe((responseList) => {
        
          this.breachDescriptionQuestionsCount = responseList[0].length;
          console.log(this.breachDescriptionQuestionsCount);
          const middleIndex = Math.ceil(responseList[0].length / 2)
          this.BreachDescriptionQuestionsFirst = responseList[0].splice(0, middleIndex);
          console.log(this.BreachDescriptionQuestionsFirst);
          this.BreachDescriptionQuestionsSecond = responseList[0].splice(-middleIndex);
          console.log(this.BreachDescriptionQuestionsSecond);

          this.BreachDescriptionQuestions = this.BreachDescriptionQuestionsFirst.concat(this.BreachDescriptionQuestionsSecond);
          console.log(this.BreachDescriptionQuestions);

          this.PotentialHarmsCount = responseList[2].length;


          this.BreachCauses = responseList[1];

          const middleIndex2 = Math.ceil(responseList[2].length / 2)
          this.PotentialHarmsFirst = responseList[2].splice(0, middleIndex2);
          this.PotentialHarmsSecond = responseList[2].splice(-middleIndex2);


          this.PotentialHarmsQuestions = this.PotentialHarmsFirst.concat(this.PotentialHarmsSecond);
            
          console.log(responseList[3]);
          this.prefillOrganisationDetails(responseList[3]);

          this.processing = false;
        }
        , (error) => {
            this.processing = false;
            this.service.determineErrorResponse(error);
          });  
    }

    changePotentialHarmsValue(event, question: PotentialHarms){

        console.log(event.value)
        const questionValue = event.value;

        if(questionValue.startsWith('Yes')){
        
            const questionID = questionValue.substring(questionValue.indexOf("-") + 1);
            this.selectedPotentialHarms.push(question);
            console.log(this.selectedPotentialHarms.length);

            var index = this.notSelectedPotentialHarms.indexOf(question);
            if (index !== -1) {
            this.notSelectedPotentialHarms.splice(index, 1);
            }
            console.log(this.notSelectedPotentialHarms.length);
        
        }
        else{
            
            const questionID = questionValue.substring(questionValue.indexOf("-") + 1);
       
            this.notSelectedPotentialHarms.push(question);
            var index = this.selectedPotentialHarms.indexOf(question);
            if (index !== -1) {
            this.selectedPotentialHarms.splice(index, 1);
            }
            console.log(this.selectedPotentialHarms);
        } 
    }

    changeBreachDescriptionValue(event, question: BreachDescriptionQuestions){
    
        console.log(event.value)
        const questionValue = event.value;

        if(questionValue.startsWith('Yes')){
        
            const questionID = questionValue.substring(questionValue.indexOf("-") + 1);
            this.selectedBreachDescriptionQuestions.push(question);
            

            var index = this.notSelectedBreachDescriptionQuestions.indexOf(question);
            if (index !== -1) {
            this.notSelectedBreachDescriptionQuestions.splice(index, 1);
            
            }
            console.log(this.selectedBreachDescriptionQuestions);
            
        
        }
        else{
            
            const questionID = questionValue.substring(questionValue.indexOf("-") + 1);
       
            this.notSelectedBreachDescriptionQuestions.push(question);
            var index = this.selectedBreachDescriptionQuestions.indexOf(question);
            if (index !== -1) {
            this.selectedBreachDescriptionQuestions.splice(index, 1);
            }
            console.log(this.selectedBreachDescriptionQuestions)
            
        }

    }

    private fetchMultiple(): Observable<any[]> {
        this.processing = true;

        const OrganisationDetails = this.http.get<ApiPayload>(this.endpoints.getOrgDetailsById + '?OrganizationID='+this.OrganisationID.organisation_id);
        const BreachDescriptionQuestions = this.http.get<ApiPayload>(this.endpoints.getBreachDescriptionDetails);
        const CausesOfBreach = this.http.get<ApiPayload>(this.endpoints.getBreachCauses);
        const PotentialHarms = this.http.get<ApiPayload>(this.endpoints.getPotentialHarms);
        return forkJoin([BreachDescriptionQuestions, CausesOfBreach, PotentialHarms, OrganisationDetails]);
    }

                
    mapFields(result, organisation) {


        console.log(organisation);
        console.log(result[0]);

        //console.log(this.pipe.transform(result[0].IncidentDate, 'dd/MM/yyyy'));

        this.OrganisationDetails.get('OrganisationName').setValue(organisation[0].OrganisationName);
        this.OrganisationDetails.get('RegNo').setValue(organisation[0].RegTrackingNo);
        this.OrganisationDetails.get('DPOEmail').setValue(organisation[0].EmailAddress);
        this.OrganisationDetails.get('DPONumber').setValue(organisation[0].PhoneNumber);
        this.breachDetails.get('incidentDate').setValue(new Date(result[0].IncidentDate));

        var index = result[0].CategoriesOfDataSubjectAffected.split(',').indexOf('adults');
        if (index !== -1) {
            this.breachDetails.get('delayInReporting').setValue(true);
        }

        var index = result[0].CategoriesOfDataSubjectAffected.split(',').indexOf('children');
        if (index !== -1) {
            this.breachDetails.get('delayInReportings').setValue(true);
        }


        this.breachDetails.get('causesOfBreach').setValue(result[0].BreachCauses);
        this.breachDetails.get('reasonForDelay').setValue(result[0].NumberOfDataSubjects.toString());
        this.breachDetails.get('measures').setValue(result[0].NumberOfRecordsHeld.toString());
        this.breachDetails.get('FullDetailsOfComplaint').setValue(result[0].DetailedDataBreachCause);
        this.breachDetails.get('DetailsOfComplaint').setValue(result[0].RemedialActionsTaken);
        this.containmentAndRecovery.get('actionTaken').setValue(result[0]);
        this.containmentAndRecovery.get('detailsOfActionTaken').setValue(result[0].ActionTakenToMinimizeDetails);
        this.containmentAndRecovery.get('hasDataBeenRecovered').setValue(result[0]);
        this.containmentAndRecovery.get('detailsOfRecovery').setValue(result[0].DataPlacedAtRiskRecoveredDetails);
        this.containmentAndRecovery.get('dateOfRecovery').setValue(result[0].DataRecoveryDate);
        this.containmentAndRecovery.get('preventionSteps').setValue(result[0].PreventiveStepsToPreventRecurrence);
       
    }
    disableAllControls() {
        this.breachDetails.disable();
        this.containmentAndRecovery.disable();
    }

    showPassword() {
        this.passwordInputType = 'text';
        this.cd.markForCheck();
    }

    hidePassword() {
        this.passwordInputType = 'password';
        this.cd.markForCheck();
    }

    submit() {
        this.snackbar.open('Breach Submitted Succefully your reference is DAB/16/10/21/4651', null, {
            duration: 5000
        });
    }

    onPolicyChange(policies: PolicyModel[]) {
        this.application.policies = policies;
    }

    onPersonalDataChange($event: PersonalDataModel []) {
        this.personalDataAffected = $event;
    }

    acceptData($event: PersonalDataModel []){
        this.personalDataAffected = $event;
    }

    filter(data) {
        console.log(data.value);
    }

    onChangeBreachImpact($event: ImpactOfBreachModel []) {
        this.impactOfBreaches = $event;
    }


    onChangeConsquenceEvent($event: PotentialConsequenceModel []) {
        this.pontentialConsequences = $event;
    }


    onBreachControlEvent($event: BreachControlModel []) {
        this.controls = $event;
    }

    formTriggler(operation: string) {
        switch (operation) {
            case 'EDIT':
                break;
            case 'CREATE':
                break;
            case  'VIEW':
                this.isViewOnly = true;
                break;
        }
    }

    get getSampleJson() {
        return of(IMPACT_OF_BREACH.map(document => document));
    }

    get getCauseOfBreachJson() {
        return of(CAUSE_OF_BREACH.map(document => document));
    }


    get getData() {
        return of(BREACH_JSON);
    }


    getFormData(){

        const momentDate = new Date(this.breachDetails.get('incidentDate').value); // Replace event.value with your date value
        const formattedDate = moment(momentDate).format("YYYY-MM-DD");

        const momentDates2 = new Date(this.containmentAndRecovery.get('dateOfRecovery').value); // Replace event.value with your date value
        const formattedDate2 = moment(momentDates2).format("YYYY-MM-DD");
       

        const data = {
            OrganisationID:parseInt(this.ActualOrganisationID),  
            IncidentDate: formattedDate,
            organisation_name: this.OrganisationDetails.get('OrganisationName').value,
            RegTrackingNo: this.OrganisationDetails.get('RegNo').value,
            PhoneNumber: this.OrganisationDetails.get('DPONumber').value,
            email: this.OrganisationDetails.get('DPOEmail').value,
            CategoriesOfDataSubjectAffected: this.DataSubjectsCategories.toString(),
            NumberOfDataSubjects: this.breachDetails.get('reasonForDelay').value ? parseInt(this.breachDetails.get('reasonForDelay').value) : '',
            DetailedDataBreachCause: this.breachDetails.get('FullDetailsOfComplaint').value,
            NumberOfRecordsHeld: parseInt(this.breachDetails.get('measures').value),
            RemedialActionsTaken: this.breachDetails.get('DetailsOfComplaint').value,
            PotentialConsequences: this.selectedBreachDescriptionQuestions,
            PotentialHarms: this.selectedPotentialHarms,
            IsActionTakenToMinimize: this.ActionTakenCheckboxValue,
            ActionTakenToMinimizeDetails:this.containmentAndRecovery.get('detailsOfActionTaken').value ? this.containmentAndRecovery.get('detailsOfActionTaken').value : '', 
            IsDataPlacedAtRiskRecovered: this.DataRecoveredCheckboxValue,
            DataPlacedAtRiskRecoveredDetails:this.containmentAndRecovery.get('detailsOfRecovery').value ? this.containmentAndRecovery.get('detailsOfRecovery').value : '', 
            DataRecoveryDate:this.containmentAndRecovery.get('dateOfRecovery').value ? formattedDate2 : '', 
            PreventiveStepsToPreventRecurrence:this.containmentAndRecovery.get('preventionSteps').value ? this.containmentAndRecovery.get('preventionSteps').value : '', 
            PersonalDataAffected: this.personalDataAffected,
            BreachCauses: this.CausesOfBreach, 
          }
      
          return data;

    }

    onPreviewForm(download: boolean): void {
        this.dialogRef = this.dialog.open(OrgBreachPreviewComponent, {
          panelClass: ['org-breach-preview', 'dialogs'],
          disableClose: true,
          data: {
            download: download,
            row: this.getFormData(),
            
          }
        });   
      }

    onSubmit(): void{

        console.log(this.getFormData())

        this.httpSub = this.http.post<ApiPayload>(this.endpoints.reportBreach, this.getFormData())
        .pipe(catchError(this.service.handleError))
        .subscribe((response) => {
          this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
            disableClose: true,
            data: {
              title: 'Breach Submission',
              message: 'Breach Report Created Successfully',
              status: true,
            }
          });

          this.dialogRef.afterClosed().subscribe(() => {
            
            this.route.navigate(['/']);
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
    
    markAsResolved(){
        
        const dialogRef = this.dialog.open(BreachCommentsComponent, {
                    width: '1391px',
                    height: '595px',
                    data: {
                        DataBreachTrackingNumber:this.DataBreachTrackingNo,
                        Status: 5,
                        isDirector: this.isDirector,
                        TechnicalComments: this.TechnicalComments,
                        LegalComments: this.LegalComments
                        
                    }     
                });

       
    }

    forwardComplaint(): void{

        let statusID;
        let TechnicalComments;
        let isLegal;
        if(this.accesses.includes('technical-rights') ){
              statusID = 3;
              isLegal = false;
         }
         else if(this.accesses.includes('legal-rights')){
              TechnicalComments = this.TechnicalComments;
              statusID = 4;
              isLegal = true;
         }

        const dialogRef = this.dialog.open(ForwardCommentsComponent, {
            width: '1391px',
            height: '595px',
            data: {
                DataBreachTrackingNumber:this.DataBreachTrackingNo,
                Status: statusID,   
                TechnicalComments: TechnicalComments,
                isLegal : isLegal
            }     
        });
      }

      moreInformation(): void {

        this.dialog.open(BreachRequestForInformationComponent, {
            width: '1391px',
            height: '595px',
            data: {
                DataBreachTrackingNumber:this.DataBreachTrackingNo,
                
            }
            
        }).afterClosed().subscribe((dialogResult) => {
                
            
        });

      }


    ActionTakenCheckboxChange(event: MatCheckboxChange){
        if(event.checked){
            this.ActionTakenCheckboxValue = 1;

        } 
        else{
            this.ActionTakenCheckboxValue = 0;
        }
    }


    DataRecoveredCheckboxChange(event: MatCheckboxChange){
        if(event.checked){
            this.DataRecoveredCheckboxValue = 1;
            console.log("here1");

        } 
        else{
            this.DataRecoveredCheckboxValue = 0;
            console.log("here2");
        }
    }


    ChildrenDataSubjectCategoryChange(event: MatCheckboxChange){
        if(event.checked){
            if(this.DataSubjectsCategories.indexOf('children') == -1) {
                this.DataSubjectsCategories.push('children');
            }
            
            console.log("here1");

        } 
        else{
            var index = this.DataSubjectsCategories.indexOf('children');
            if (index !== -1) {
            this.DataSubjectsCategories.splice(index, 1);
            }
        }
    }


    AdultDataSubjectCategoryChange(event: MatCheckboxChange){
        if(event.checked){
            if(this.DataSubjectsCategories.indexOf('adults') == -1) {
                this.DataSubjectsCategories.push('adults');
            }
            
            console.log("here1");

        } 
        else{
            var index = this.DataSubjectsCategories.indexOf('adults');
            if (index !== -1) {
            this.DataSubjectsCategories.splice(index, 1);
            }
        }
    }

    markUnderInvestigation(){
        
        this.dialog.open(BreachInvestigationsComponent, {
            width: '1391px',
            height: '595px',
            data: {
                BreachTrackingNumber:this.DataBreachTrackingNo,
                Status: 2
            }
            
        }).afterClosed().subscribe((dialogResult) => {
                
            
        });
    }

    

    onChangeOfBreachCauses(event, Cause){
        if(event.source._selected == true){
            if(this.CausesOfBreach.indexOf(Cause) == -1) {
                this.CausesOfBreach.push(Cause);
            }
        }
        else{
            var index = this.CausesOfBreach.indexOf(Cause);
            if (index !== -1) {
            this.CausesOfBreach.splice(index, 1);
            }
        }
        console.log(this.CausesOfBreach);
    }


    getBreach() {
        

        // tslint:disable-next-line:max-line-length
        this.dataBreachService.getBreach(this.$processingEvent, this.$resultComplaintsEvent, this.$errorsEvent, this.DataBreachTrackingNo);
    }


    fetchOrganisation(organisation){

        const OrganisationDetails = this.http.get<ApiPayload>(this.endpoints.getOrganisationDetailsById + '?OrganizationID='+organisation);

        return forkJoin([OrganisationDetails]);

    }


    prefillOrganisationDetails(organisation){

        console.log(organisation);
        this.ActualOrganisationID = organisation[0].OrganisationID;
        this.OrganisationDetails.get('OrganisationName').setValue(this.OrganisationID.organisation_name);
        this.OrganisationDetails.get('RegNo').setValue(organisation[0].RegTrackingNo);
        this.OrganisationDetails.get('DPOEmail').setValue(organisation[0].EmailAddress);
        this.OrganisationDetails.get('DPONumber').setValue(organisation[0].PhoneNumber);
    }



    manageRequestInfo(){


        this.httpSub = this.http.get<ApiPayload>(this.endpoints.CheckBreachRequestForInfo + '?DataBreachTrackingNo='+ this.DataBreachTrackingNo)
        .pipe(catchError(this.service.handleError))
        .subscribe((response) => {
          console.log(response.data.Comments);
          this.dialogRef = this.dialog.open(BreachManageMoreInformationComponent, {
            width: '1391px',
            height: '595px',
            data: {
                DataBreachTrackingNumber:this.DataBreachTrackingNo,
                RequestedInformation : response.data.Comments,  
            }
          });
    
          this.dialogRef.afterClosed().subscribe(() => {
            this.route.navigate(['/reporting-and-notification/find/all']);
          });
    
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


    



}

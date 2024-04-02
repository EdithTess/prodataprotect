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
import {Subscription} from 'rxjs';
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
import { ForwardCommentsComponent } from '../../../../layout/dialogs/forward-comments/forward-comments.component';
import {
    $DataAffectedCategoryModel,
    DataAffectedCategoryModel,
    DataAffectedSubCategoryModel
} from '../../../models/personal-data-affected.model';
import { InvestigationCommentsComponent } from '../../../../layout/investigation-comments/investigation-comments/investigation-comments.component';
import {UtilService} from '../../../../../@fury/services/util.service';
import {DataSubjectModel} from '../../../models/data-subject.model';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import { MoreInformationComponent } from '../../../../layout/dialogs/more-information/more-information.component';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { InvestigationService } from '../../investigation.service';
import { Investigation, InvestigationModel, InvestigationNotes,INVESTIGATION_DEMO_DATA, INVESTIGATION_JSON, PersonalData, PersonalDataModel, PersonalDataAffected } from '../../investigation-model';
import { ComplaintService } from '../../../complaints/complaints.service';
import { ApplicationTimelineComponent } from '../../../../layout/application-timeline/application-timeline.component';
import { InvestigationNotesComponent } from '../../../../layout/dialogs/investigation-dialogs/investigation-notes/investigation-notes.component';
import { ForwardInvestigationsComponent } from '../../../../layout/dialogs/forward-investigation/forward-investigations/forward-investigations.component';
import { AuthenticationService } from '../../../../authentication/authentication.service';
import { GatherMoreInformationComponent } from '../../../../layout/dialogs/investigation-dialogs/investigation-information/gather-more-information/gather-more-information.component';

@Component({
  selector: 'fury-investigations-edit',
  templateUrl: './investigations-edit.component.html',
  styleUrls: ['./investigations-edit.component.scss']
})
export class InvestigationsEditComponent extends BaseFuryForm implements OnInit {

  // Simulating A Service
  subject$: ReplaySubject<InvestigationModel> = new ReplaySubject<InvestigationModel>(1);
  data$: Observable<InvestigationModel> = this.subject$.asObservable();
  
  
  @Input() personalDataList: PersonalDataModel[];
  @Input() isViewOnly: boolean;
  @Input() personalDataEvent = new EventEmitter<PersonalDataModel[]>();
  @Output() PersonalDataAffected = new EventEmitter<PersonalDataModel[]>();
  @Output() investigationDetails = new EventEmitter<InvestigationModel[]>();

  InvestigationTrackingNumber: string;
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultInvestigationsEvent: EventEmitter<Investigation> = new EventEmitter();
  subscriptions: Subscription[] = [];
  dialogRef;
  bottomsheetRef;
  workflowID = '1';
  workflowTimeLine: WorkFlowTimeline;
  currentStep: WorkFlowStep;
  accesses: string[];
  ActionTakenCheckboxValue = 0;
  disableResolve = true;
  disableForward = false;
  processing = false;
  httpSub: Subscription;
  isDirector = false;
  isPolice = false;
  isODPP = false;
  isTechnical = false;
  isLegal = false;
  ComplaintSourceID : number;
  InvestigationID: number;
  InvestigationNotes : InvestigationNotes = new InvestigationNotes;
  
  document: FileUpload | null;

  investigationForm: FormGroup;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  //MAin object
  application: InvestigationModel = new InvestigationModel();
  //array
  PersonalData: string [];
  personalData: string[];
  DataSubjectsCategories = [];
  investigationReasons: any[] = [];
  list = [];
  permittedActions: Action[] = [];
  dataCategories: DataAffectedCategoryModel [] = [];
  $dataCategories: any [] = [];
  $subCategories: any [] = [];
  dataSubcategories: DataAffectedCategoryModel [] = [];
  dataCategory = new FormControl;
  dataSubCategory = new FormControl;
  //Button Config
  buttonIcon = 'add_circle_outline';
  buttonLabel = 'Add';
  //boolean
  isEditingPersonalData = false;
  tableEditable: boolean = true;
  ResolveInvestigation = false;
  CanForwardToDPP = false;
  // int
  personalDataIndex = 0;
  personalNumber = 1;
  
  private _gap = 16;
  gap = `${this._gap}px`;
  col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
  col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;

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
    private utilService: UtilService,
    public _auth: AuthenticationService,
    public snackBar: SnackBarService,
    public authService: KeycloakService,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    public investigationService: InvestigationService,
    public complaintService: ComplaintService,
  ) {
    super(
        authService,
        _workflowService,
        registrationService,
        complaintService
    );

    this.InvestigationTrackingNumber = this.route.getCurrentNavigation().extras.state.InvestigationTrackingNumber;
    console.log(this.InvestigationTrackingNumber);
    this.InvestigationID = this.route.getCurrentNavigation().extras.state.InvestigationID;
    console.log(this.InvestigationID);
    this.accesses = authService.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
    console.log(this.accesses);
    console.log(_auth.getUser().id);

    if(this.accesses.includes('resolve.investigation')){

        this.ResolveInvestigation = true;
    }
    if(this.accesses.includes('forward.investigation')){

        this.CanForwardToDPP = true;
    }

   }

  ngOnInit(): void {

    this.initForm();

    this.getInvestigation();

    this.subscriptions['$resultComplaintsEvent'] = this.$resultInvestigationsEvent.subscribe(result => {
        if (result) {

            this.httpSub = this.http.get<InvestigationNotes>(this.endpoints.getInvestigationNotes +'?InvestigationTrackingNo='+this.InvestigationTrackingNumber,)
            .pipe(catchError(this.service.handleError))
            .subscribe((response) => {

                console.log(response);

                this.application= result;

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
               
              } else {
                this.service.determineErrorResponse(error);
              }
            });
 
           
        }
     
      });

       

  }

  initForm() {
    this.investigationForm = this.formBuilder.group({

        reasonForTheInvestigation: ['', Validators.compose([Validators.required])],
        InvestigationDetails: ['', Validators.compose([Validators.required])],
        dataSubjectName: ['', Validators.compose([Validators.required])],
        dataSubjectPhone: ['', Validators.compose([Validators.required])],
        dataSubjectEmail: ['', Validators.compose([Validators.required])],
        ContactFirstName: ['', Validators.compose([Validators.required])],
        ContactLastName: ['', Validators.compose([Validators.required])],
        ContactEmailAddress: ['', Validators.compose([Validators.required])],
        Organisation: ['', Validators.compose([Validators.required])],
        lastModificationDate: [],

        // for breaches
        OrganisationName: ['', Validators.compose([Validators.required])],
        RegNo: ['', Validators.compose([Validators.required])],
        OrganisationEmail: ['', Validators.compose([Validators.required])],
        OrganisationNumber: ['', Validators.compose([Validators.required])],
        BreachCauses: ['', Validators.compose([Validators.required])],
        DataSubjects: ['', Validators.compose([Validators.required])],
        measures: ['', Validators.compose([Validators.required])],
        detailsOfRecovery: ['', Validators.compose([Validators.required])],
        preventionSteps: ['', Validators.compose([Validators.required])],
        investigationDetails: ['', Validators.compose([Validators.required])],
        PoliceNotes: ['', Validators.compose([Validators.required])],
        DPPNotes: ['', Validators.compose([Validators.required])]

    });
}

private getFormData(): any {

    const data = {
        SubjectName: this.investigationForm.get('dataSubjectName').value ? this.investigationForm.get('dataSubjectName').value : '',
        SubjectEmail: this.investigationForm.get('dataSubjectEmail').value ? this.investigationForm.get('dataSubjectEmail').value : '',
        SubjectPhone: this.investigationForm.get('dataSubjectPhone').value ? this.investigationForm.get('dataSubjectPhone').value : '',
        SubjectOrganisation: this.investigationForm.get('InvestigationCategory').value ? this.investigationForm.get('InvestigationCategory').value : '',
        InvestigationInformation: this.investigationForm.get('investigationDetails').value ? this.investigationForm.get('investigationDetails').value : '',
        // PersonalDataAffected: this.personalDataFormGroup.get('dataCategory').value ? this.personalDataFormGroup.get('dataCategory').value: '',
    }

    return data;
  }

get getSamplJson(){
    return of (INVESTIGATION_JSON);
}

getInvestigation() {
    // tslint:disable-next-line:max-line-length
    this.investigationService.getInvestigation(this.InvestigationTrackingNumber,this.$processingEvent, this.$resultInvestigationsEvent, this.$errorsEvent);
}

markAsResolved(){
        
    const dialogRef = this.dialog.open(InvestigationCommentsComponent, {
                width: '1391px',
                height: '595px',
                data: {
                    InvestigationTrackingNumber:this.InvestigationTrackingNumber,
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

makeNotes(): void{

    let Status;

    if(this.ResolveInvestigation == true){

        Status =3
    }
    else{
        Status=2
    }

    const dialogRef = this.dialog.open(InvestigationNotesComponent, {

        width: '1391px',
        height: '595px',
        data: {
            InvestigationTrackingNumber:this.InvestigationTrackingNumber,
            Status : Status,
            EvidenceOwner: this._auth.getUser().id
        }

    });

  }

  onReadDocument(): void {
    // console.log('document:', document);
    this.bottomsheetRef = this.bottomsheet.open(ViewPdfDocumentBottomsheetComponent, {
        disableClose: true,
        panelClass: ['view-pdf-document-bottomsheet', 'bottomsheets'],
        data: {
          url: this.document.Base64,
          title: this.document.Name
        }
    });      
}

viewApplicationTimeLine() {
    this.dialog.open(ApplicationTimelineComponent, {
        width: '941px',
        height: '595px',
        data: this.workflowTimeLine
    });
}

forwardInvestigation(): void{

    let Status;

    if(this.ResolveInvestigation == true){

        Status = 4;
    }
    else{
        Status=3;
    }

    const dialogRef = this.dialog.open(ForwardInvestigationsComponent, {
        width: '500px',
        height: '200px',
        data: {
            InvestigationTrackingNumber:this.InvestigationTrackingNumber,
            Status: Status,   
            User: this._auth.getUser().id
            // PoliceComments: PoliceComments,
            // isLegal : isLegal
        }     
    });
  }

  moreInformation(): void {

    this.dialog.open(GatherMoreInformationComponent, {
        width: '1391px',
        height: '595px',
        data: {
            InvestigationTrackingNumber:this.InvestigationTrackingNumber,
            
        }
        
    }).afterClosed().subscribe((dialogResult) => {
            
        
    });

  }

   
           


}

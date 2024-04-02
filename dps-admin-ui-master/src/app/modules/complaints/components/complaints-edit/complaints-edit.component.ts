import {Component, OnInit, EventEmitter,ViewChild, Inject, Input, Output} from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {Complaint, COMPLAINT_JSON, BREACHES_JSON, BREACH_JSON, ComplaintModel, RemedialActions, PersonalDataModel, PersonalData} from '../../complaints-model';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {scaleInAnimation} from '../../../../../@fury/animations/scale-in.animation';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Observable, of, ReplaySubject} from 'rxjs';
import { DocumentComment } from '../../../../../@fury/shared/base-fury-form.model';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { ComplaintService } from '../../complaints.service';
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
    DataAffectedSubCategoryModel,
    PERSONAL_DATA_AFFECTED
} from '../../../models/personal-data-affected.model';

import { ComplaintManageMoreInformationComponent } from '../../../../layout/dialogs/complaint-manage-more-information/complaint-manage-more-information.component';
import {UtilService} from '../../../../../@fury/services/util.service';
import {DataSubjectModel} from '../../../models/data-subject.model';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import { MoreInformationComponent } from '../../../../layout/dialogs/more-information/more-information.component';
import { MatCheckbox, MatCheckboxChange } from '@angular/material/checkbox';
import { OrgUploadComponent } from '../../../../layout/dialogs/org-upload/org-upload.component';
import { SaveMessageComponent } from '../../../../layout/dialogs/save-changes/save-message/save-message.component';
import { SuccessfulMessageDialogComponent } from '../../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { DownloadComplaintComponent } from '../../../../layout/dialogs/download-complaint/download-complaint.component';
@Component({
    selector: 'fury-complaints-edit',
    templateUrl: './complaints-edit.component.html',
    styleUrls: ['./complaints-edit.component.scss'],
    animations: [fadeInRightAnimation, fadeInUpAnimation, scaleInAnimation]
})
export class ComplaintsEditComponent extends BaseFuryForm implements OnInit {

    // Simulating A Service
    subject$: ReplaySubject<ComplaintModel> = new ReplaySubject<ComplaintModel>(1);
    data$: Observable<ComplaintModel> = this.subject$.asObservable();

    // Simulating A DataCategory and SubCategory
    sub$: ReplaySubject<DataAffectedCategoryModel> = new ReplaySubject<DataAffectedCategoryModel>(1);
    dat$: Observable<DataAffectedCategoryModel> = this.sub$.asObservable();
  
    ComplaintTrackingNumber: string;
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<any> = new EventEmitter();
    $resultComplaintsEvent: EventEmitter<Complaint> = new EventEmitter();
    subscriptions: Subscription[] = [];
    dialogRef;
    bottomsheetRef;
    accesses: string[];
    ActionTakenCheckboxValue = 0;
    disableResolve = true;
    disableForward = false;
    processing = false;
    httpSub: Subscription;
    isDirector = false;
    ComplaintSourceID : number;
    manageRequestForInfo = false;
    RequestedInforamationTrack = [];
    
    document: FileUpload | null;

    complaintForm: FormGroup;

    ComplaintEvidence: any;

    personalDataFormGroup: FormGroup;
    @ViewChild('autosize') autosize: CdkTextareaAutosize;
    //MAin object
    application: ComplaintModel = new ComplaintModel();
    //array
    PersonalData: string [];
    personalData: string[];
    DataSubjectsCategories = [];
    personalDataAffected: PersonalDataModel[] = [];
    complaintReasons: any[] = [];
    list = [];
    displayColumns: string [] = ['nber', 'personalDataCategory', 'personalDataSubCategory', 'actions'];
    permittedActions: Action[] = [];
    dataCategories: DataAffectedCategoryModel [] = [];
    $dataCategories: DataAffectedCategoryModel [] = [];
    $subCategories: any [] = [];
    
    dataCategory = new FormControl;
    dataSubCategory = new FormControl;
    //Button Config
    buttonIcon = 'add_circle_outline';
    buttonLabel = 'Add';
    //boolean
    isEditingPersonalData = false;
    tableEditable: boolean = true;
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
        public snackBar: SnackBarService,
        public authService: KeycloakService,
        public _workflowService: WorkflowServiceService,
        public registrationService: CompanyRegistrationService,
        public complaintService: ComplaintService,
        
    ) {
        super(
            authService,
            _workflowService,
            registrationService,
            complaintService
        );
        this.accesses = authService.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
        console.log(this.accesses);
       
        this.operationType = activateRoute.routeConfig.data.action;
        this.ComplaintTrackingNumber = this.route.getCurrentNavigation().extras.state.ComplaintTrackingNumber;
        this.ComplaintSourceID = this.route.getCurrentNavigation().extras.state.ComplaintSourceID;
        console.log(this.operationType);
        if (this.operationType === 'EDIT') {
            this.isEditMode = true;
            this.application.comments = [];
            this.application.personalDataAffected = [];
        } else if (this.operationType === 'CREATE') {
            this.isEditMode = false;
            this.application.comments = [];
            this.application.personalDataAffected = [];
        } else if (this.operationType === 'VIEW') {
            if(this.ComplaintSourceID == 1){

                this.isEditMode = true;
                this.isViewOnly = false;
                
            }
            else{
                this.isEditMode = false;
                this.isViewOnly = true;
            }
           
        }
    }

    ngOnInit(): void {

      this.initForm();

        //if (this.personalDataList) {
            //this.personalDataList.forEach(personalData => this.list.push(personalData));
       // }
       console.log(this.sampleJson);
        this.sampleJson().subscribe(dataCategories => {
            this.$dataCategories = dataCategories;
        });
        this.$subCategories;
        

        if(this.accesses.includes('resolve.director.complaint')){

            this.isDirector = true;
        }

        console.log(this.$dataCategories);


        this.getComplaint();

      // complaints
      this.subscriptions['$resultComplaintsEvent'] = this.$resultComplaintsEvent.subscribe(result => {
        if (result) {

        this.httpSub = this.http.get<ApiPayload>(this.endpoints.GetComplaintRequestForInfo + '?ComplaintTrackingNo='+ this.ComplaintTrackingNumber)
        .pipe(catchError(this.service.handleError))
        .subscribe((response) => {
       

            this.RequestedInforamationTrack = response.data
    
            this.processing = false;
          }, (error) => {

            this.processing = false;
    
         
          });
   
 
            this.application= result;
            console.log(this.application);


            

            if(this.accesses.includes('resolve.technical.complaint') ){

                if(this.application.StatusID == 2){

                    this.disableForward = false;
                }
                else if(this.application.StatusID == 8){
                    this.manageRequestForInfo = true;
                    this.disableForward = true;
                }
                else{
                    this.disableForward = true;
                }     
            
            }
            else if(this.accesses.includes('resolve.legal.complaint')){
                if(this.application.StatusID == 3){

                    this.disableForward = false;
                }
                else if(this.application.StatusID == 9){
                    this.manageRequestForInfo = true;
                    this.disableForward = true;
                }
                else{
                    this.disableForward = true;
                }
            }
            else{
                this.disableForward = true;
            }


            
            if(this.application.StatusID == 4 && this.accesses.includes('resolve.director.complaint')){
                this.disableResolve = false;
            }
            else if(this.application.FormID == 6){

                if(this.accesses.includes('resolve.technical.complaint') ){

                    this.disableResolve = false;
                
                }
                else{
                    this.disableResolve = true;
                    
                }

            }
            else if(this.application.FormID == 9 || this.application.FormID==11){
                if(this.accesses.includes('resolve.legal.complaint') && this.application.StatusID == 3){

                    this.disableResolve = false;
                
                }
                else{
                    this.disableResolve = true;
                }
            }
           
            
       
          this.mapFields();
        }

        if (result) {
 
            this.application= result;
            console.log(this.application);

            
            
            
       
          this.mapFields();
        }
      });

     
      this.disableFieldsByStatus();
      if (this.isViewOnly) {
          this.disableAllControls();
      }
    }

    // private initMainObject() {
    //     this.personalData = new PersonalDataModel();
    // }

    

    mapFields() {
        this.isApplicationValid = true;
        this.personalData = this.application.PersonalDataAffected;
        this.complaintReasons = this.application.ReasonsForComplaint;
        console.log(this.application);
   
        this.complaintForm.get('reasonForTheComplaint').setValue(this.application.ReasonsForComplaint);
        this.complaintForm.get('complaintDetails').setValue(this.application.FullDetailsOfComplaint);
        this.complaintForm.get('remedialActions').setValue(this.application.RemedialActions);
        this.complaintForm.get('lastModificationDate').setValue(this.application.FirstName);
        this.complaintForm.get('dataSubjectName').setValue(this.application.FirstName + ' ' + this.application.LastName);
        this.complaintForm.get('dataSubjectPhone').setValue(this.application.PhoneNumber);
        this.complaintForm.get('dataSubjectEmail').setValue(this.application.EmailAddress);
        this.complaintForm.get('ComplaintCategory').setValue(this.application.ComplainerCategory);
        this.complaintForm.get('OrganisationComplainedTo').setValue(this.application.OrganisationComplainedToName);
        this.complaintForm.get('ContactFirstName').setValue(this.application.ContactPersonFirstName);
        this.complaintForm.get('ContactLastName').setValue(this.application.ContactPersonLastName);
        this.complaintForm.get('ContactEmailAddress').setValue(this.application.ContactPersonEmailAddress);
        this.complaintForm.get('TechnicalForwardedComments').setValue(this.application.TechnicalComments);
        this.complaintForm.get('LegalForwardedComments').setValue(this.application.LegalComments);
        this.complaintForm.get('MoreInformationRequired').setValue(this.application.MoreInformation);
        this.isApplicationValid = true;
      
        this.personalData = this.application.PersonalDataAffected;
        this.complaintReasons = this.application.ReasonsForComplaint;
        console.log(this.application.EvidenceOfComplaint);
  
        this.ComplaintEvidence = { 
          Document: null, 
          Name: 'Complaint Evidence.pdf', 
          Size: null, 
          Base64: this.application.EvidenceOfComplaint
      };
  
    }

    initForm() {
        this.complaintForm = this.formBuilder.group({
            personalDataAffected: ['', Validators.compose([Validators.required])],
            reasonForTheComplaint: ['', Validators.compose([Validators.required])],
            complaintDetails: ['', Validators.compose([Validators.required])],
            remedialActions: ['', Validators.compose([Validators.required])],
            dataSubjectName: ['', Validators.compose([Validators.required])],
            dataSubjectPhone: ['', Validators.compose([Validators.required])],
            dataSubjectEmail: ['', Validators.compose([Validators.required])],
            ContactFirstName: ['', Validators.compose([Validators.required])],
            ContactLastName: ['', Validators.compose([Validators.required])],
            ContactEmailAddress: ['', Validators.compose([Validators.required])],
            OrganisationComplainedTo: ['', Validators.compose([Validators.required])],
            OtherOrganisationComplainedTo: ['', Validators.compose([Validators.required])],
            ComplaintCategory: ['', Validators.compose([Validators.required])],
            OrganisationComplainedFrom: ['', Validators.compose([Validators.required])],
            OtherOrganisationComplainedFrom: ['', Validators.compose([Validators.required])],
            TechnicalForwardedComments: ['', Validators.compose([Validators.required])],
            LegalForwardedComments: ['', Validators.compose([Validators.required])],
            MoreInformationRequired: ['', Validators.compose([Validators.required])],
            lastModificationDate: []
        });


        this.personalDataFormGroup = this.formBuilder.group(
            {
                dataCategory: [null, Validators.required],
                dataSubCategory: [null, Validators.required]
                
            }
        );
    }

    ActionTakenCheckboxChange(event: MatCheckboxChange){
        if(event.checked){
            this.ActionTakenCheckboxValue = 1;

        } 
        else{
            this.ActionTakenCheckboxValue = 0;
        }
    }

    onReadDocument(): void {
        // console.log('document:', document);
        this.bottomsheetRef = this.bottomsheet.open(ViewPdfDocumentBottomsheetComponent, {
            disableClose: true,
            panelClass: ['view-pdf-document-bottomsheet', 'bottomsheets'],
            data: {
              url: this.ComplaintEvidence.Base64,
              title: this.ComplaintEvidence.Name
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
        this.complaintForm.disable();
    }

    onCommentChange(comments: DocumentComment[]) {
        if (comments) {
            this.application.comments = comments;
        }
    }

    onPersonalDataChange($event: PersonalDataModel []) {
        this.personalDataAffected = $event;
    }


    acceptData($event: PersonalDataModel []){
        this.personalDataAffected = $event;
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

    get getData() {
        return of(BREACH_JSON);
    }
    

    private getFormData(): any {

        const SubjectName  = this.complaintForm.get('dataSubjectName').value ? this.complaintForm.get('dataSubjectName').value : '';

        const SplitNames = SubjectName.split(' ');
        const FirstName  = SplitNames[0];
        const LastName = SplitNames[1];

        console.log(SplitNames)


        const data = {
            ComplainantFirstName: FirstName,
            ComplainantLastName: LastName,
            ComplainantEmailAddress: this.complaintForm.get('dataSubjectEmail').value ? this.complaintForm.get('dataSubjectEmail').value : '',
            ComplainantPhoneNumber: this.complaintForm.get('dataSubjectPhone').value ? this.complaintForm.get('dataSubjectPhone').value : '',
            ComplainantPhysicalAddress : '',
            ComplainerCategory: 'Individual',
            IsCustomerToOrganisation: 'Yes',
            Organisation: this.complaintForm.get('OrganisationComplainedTo').value ? this.complaintForm.get('OrganisationComplainedTo').value : '',
            ComplaintTrackingNo:this.ComplaintTrackingNumber,
            ComplaintEvidence: this.ComplaintEvidence.Base64 ? this.ComplaintEvidence.Base64 : '',
            ContactFirstName: this.complaintForm.get('ContactFirstName').value ? this.complaintForm.get('ContactFirstName').value : '',
            ContactLastName: this.complaintForm.get('ContactLastName').value ? this.complaintForm.get('ContactLastName').value : '',
            ContactEmailAddress: this.complaintForm.get('ContactEmailAddress').value ? this.complaintForm.get('ContactEmailAddress').value : '',
            ContactPhoneNumber: '',
            FullDetailsOfComplaint: this.complaintForm.get('complaintDetails').value ? this.complaintForm.get('complaintDetails').value : '',
            PersonalDataAffected: this.personalDataFormGroup.get('dataCategory').value ? this.personalDataFormGroup.get('dataCategory').value: '',
        }

        return data;
      }

    get getSampleJson() {
        return of(COMPLAINT_JSON);
    }

    get getSamplJson(){
        return of (BREACHES_JSON);
    }

    getComplaint() {
        // tslint:disable-next-line:max-line-length
        this.complaintService.getComplaint(this.ComplaintTrackingNumber,this.$processingEvent, this.$resultComplaintsEvent, this.$errorsEvent);
    }

    private initForms(): void {
        this.personalDataFormGroup = this.formBuilder.group(
            {
                dataCategory: [null, Validators.required],
                dataSubCategory: [null, Validators.required]
                
            }
        );
    }
    
    markUnderInvestigation(){
        
        this.dialog.open(ComplaintCommentsComponent, {
            width: '1391px',
            height: '595px',
            data: {
                ComplaintTrackingNumber:this.ComplaintTrackingNumber,
                Status: 5
            }
            
        }).afterClosed().subscribe((dialogResult) => {
                
            
        });
    }


    markAsResolved(){
        
        const dialogRef = this.dialog.open(ComplaintCommentsComponent, {
                    width: '1391px',
                    height: '595px',
                    data: {
                        ComplaintTrackingNumber:this.ComplaintTrackingNumber,
                        Status: 6,
                        isDirector: this.isDirector
                        
                    }     
                });

       
    }

    onForward(): void{
        this.processing = true;
        
    
        this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateComplaintStatus, this.getFormData())
        .pipe(catchError(this.service.handleError))
        .subscribe((response) => {
          this.dialogRef = this.dialog.open(ForwardMessageDialogComponent, {
            panelClass: ['forward-message-dialog', 'dialogs'],
            disableClose: true,
            data: {
              title: 'Update Complaint Status',
              message: 'Forwarded successfully',
              status: response.code === 200 ? true : false,
            }
          });
    
          this.dialogRef.afterClosed().subscribe(() => {
            this.allDialogRef.closeAll();
            this.route.navigate(['/complaints/find']);
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

      forwardComplaint(): void{

        let statusID;
        if(this.accesses.includes('resolve.technical.complaint') ){
             statusID = 3;
        }
        else if(this.accesses.includes('resolve.legal.complaint')){
             statusID = 4;
        }

        const dialogRef = this.dialog.open(ComplaintCommentsComponent, {
            width: '1391px',
            height: '595px',
            data: {
                ComplaintTrackingNumber:this.ComplaintTrackingNumber,
                Status: statusID,
                
            }     
        });
      }

      moreInformation(): void {

        this.dialog.open(MoreInformationComponent, {
            width: '1391px',
            height: '595px',
            data: {
                ComplaintTrackingNumber:this.ComplaintTrackingNumber,
                
            }
            
        }).afterClosed().subscribe((dialogResult) => {
                
            
        });

      }

      onSave(): void{

        const Complaint =this.getFormData();

        console.log(Complaint);

        this.processing = true;
    
        this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateComplaint, this.getFormData())
        .pipe(catchError(this.service.handleError))
        .subscribe((response) => {
          this.dialogRef = this.dialog.open(SaveMessageComponent, {
            panelClass: ['save-message-dialog', 'dialogs'],
            disableClose: true,
            data: {
              title: 'Save Message',
              message: 'Edit saved successfully',
              status: response.code === 200 ? true : false,
            }
          });


          this.dialogRef.afterClosed().subscribe(() => {
            this.allDialogRef.closeAll();
            this.route.navigate(['/complaints/find']);
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

    //   addOrUpdatePersonalData(option: number): void {
    //     if (this.personalDataFormGroup.valid) {
    //         if (this.checkForDuplicates(option)) {
    //             this.snackBar.snackBarAlert(
    //                 'Error', 'Potential Consquence Already exist in the Table, Please Update', {
    //                     duration: 3000
    //                 }
    //             );
    //         } else {
    //             this.mapFormControlToControl(1);
    //             if (option === 1) {
    //                 this.list.push(this.personalData);
    //                 this.personalDataList.push(this.personalData);
    //                 this.list = [...this.list];
    //             } else {
    //                 this.list[this.personalDataIndex] = this.personalData;
    //                 this.personalDataList[this.personalDataIndex] = this.personalData;
    //                 this.list = [...this.personalDataList];
    //             }
    //             this.resetPersonalData();
    //         }
    //         console.log(this.list)
    //         this.PersonalDataAffected.emit(this.personalDataList);
    //     }
    // }

    // resetPersonalData() {
    //     this.personalDataFormGroup.reset();
    //     this.personalData = new PersonalDataModel();
    //     this.validatePolicyLabels(1);
    //     this.managePersonalData(1);
    // }

    // validatePolicyLabels(option: number) {
    //     if (option === 1) {
    //         this.buttonIcon = 'add_circle_outline';
    //         this.buttonLabel = 'Add new personal data';
    //     } else {
    //         this.buttonIcon = 'save';
    //         this.buttonLabel = 'Save';
    //     }
    // }

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

    onSelectCategory(category) {
        this.$subCategories = [];
        var categories = this.$dataCategories.find(categories => categories === category.value);
        categories.subCategories.forEach(
            element => this.$subCategories.push(element)
        );
        this.personalDataFormGroup.get('dataSubCategory').enable();
    }

    disableSubCategories() {
        if (this.$subCategories.length === 0) {
            this.personalDataFormGroup.get('dataSubCategory').disable();
        }
    }

    // managePersonalData(option: number, id ?: number) {
    //     if (option === 2) {
    //         this.personalData = this.personalDataList[id];
    //         this.isEditingPersonalData = true;
    //         this.personalDataIndex = id;
    //         this.mapFormControlToControl(option);
    //     } else {
    //         this.isEditingPersonalData = false;
    //         this.personalData = new PersonalDataModel();
    //         this.personalDataIndex = 0;
    //     }
    //     this.validatePolicyLabels(option);
    // }


    //private checkForDuplicates(option: number) {
    //    const personalData = this.personalDataFormGroup.get('dataCategory').value;
    //    const _personalData = this.personalDataFormGroup.get('dataSubCategory').value;
    //    console.log(_personalData);
    //    if (option === 1) {
    //        return !!(this.personalDataList.find(item => item.dataCategory === personalData));
    //    } else { return null; }
    //}

    // editItem(index: number) {
    //     // Store the index of the item to be modified
    //     this.personalDataIndex = index;
    //     this.personalData = this.personalDataList[this.personalDataIndex];
    //     this.isEditingPersonalData = true;
    //     // Map item to form fields
    //     this.mapFormControlToControl(index);
    //     this.validatePolicyLabels(2);
    // }

    // deleteItem(index: number) {
    //     this.list.splice(index, 1);
    //     this.personalDataList.splice(index, 1);
    //     this.list = [...this.list];
    //     // Send items to parent
    //     this.personalDataEvent.emit(this.personalDataList);
    //     this.isEditingPersonalData = false;
    // }

    // private mapFormControlToControl(option: number) {
    //     if (option === 1) {
    //         this.personalData.dataCategory = this.personalDataFormGroup.get('dataCategory').value;
    //         this.personalData.dataSubCategory = this.personalDataFormGroup.get('dataSubCategory').value;
            
    //     } else {
    //         this.personalDataFormGroup.get('dataCategory').setValue(this.personalData.dataCategory);
    //         this.personalDataFormGroup.get('dataSubCategory').setValue(this.personalData.dataSubCategory);
            
    //     }
    // }

    // // isValidForm() {
    // //     let formValid = this.personalDataFormGroup.valid;
    // //     return formValid;
    // }

    sampleJson() {
         return of(PERSONAL_DATA_AFFECTED.map(document => document));
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
            this.ComplaintEvidence = result.row;
          }
          console.log(this.ComplaintEvidence);
        });
      }


      manageRequestForMoreInfo(){


        this.httpSub = this.http.get<ApiPayload>(this.endpoints.CheckComplaintRequestForInfo + '?ComplaintTrackingNo='+ this.ComplaintTrackingNumber)
        .pipe(catchError(this.service.handleError))
        .subscribe((response) => {
          console.log(response.data.Comments);
          this.dialogRef = this.dialog.open(ComplaintManageMoreInformationComponent, {
            width: '1391px',
            height: '595px',
            data: {
                ComplaintTrackingNumber:this.ComplaintTrackingNumber,
                RequestedInformation : response.data.Comments,  
            }
          });
    
          this.dialogRef.afterClosed().subscribe(() => {
            this.allDialogRef.closeAll();
            this.route.navigate(['/complaints/find']);
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

      getRequestInfoData(): any{

        return{

            ComplaintTrackingNo: this.ComplaintTrackingNumber,
            RequestCategory: 'Complaints'
       
          }
      }

      onPreviewForm(download: boolean): void {

        this.dialogRef = this.dialog.open(DownloadComplaintComponent, {
          panelClass: ['download-complaint-dialog', 'dialogs'],
          disableClose: true,
          data: {
            download: download,
            row: this.application
            
          }
        });

      }

    
}

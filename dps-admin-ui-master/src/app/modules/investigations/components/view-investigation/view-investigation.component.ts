// import { Component, OnInit } from '@angular/core';
import {AfterViewInit,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {Investigation, INVESTIGATION_JSON, InvestigationModel, PersonalDataAffected, RemedialActions} from '../../investigation-model';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {scaleInAnimation} from '../../../../../@fury/animations/scale-in.animation';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {Observable, of, ReplaySubject} from 'rxjs';
import { DocumentComment } from '../../../../../@fury/shared/base-fury-form.model';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { InvestigationService } from '../../investigation.service';
import { Subscription} from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { ThrowStmt } from '@angular/compiler';
import {FileUpload} from '../../../../services/api.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ViewPdfDocumentBottomsheetComponent } from '../../../../layout/bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component';


@Component({
  selector: 'fury-view-investigation',
  templateUrl: './view-investigation.component.html',
  styleUrls: ['./view-investigation.component.scss']
})
export class ViewInvestigationComponent implements OnInit {

    // Simulating A Service
    subject$: ReplaySubject<InvestigationModel> = new ReplaySubject<InvestigationModel>(1);
    data$: Observable<InvestigationModel> = this.subject$.asObservable();
    investigations: Investigation[];
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<any> = new EventEmitter();
    $resultInvestigationsEvent: EventEmitter<Investigation> = new EventEmitter();
    InvestigationTrackingNumber: string;
    subscriptions: Subscription[] = [];
    selectedValue: string;
    document: FileUpload | null;
    bottomsheetRef;
    
    
  
    investigationForm: FormGroup;

    @ViewChild('autosize') autosize: CdkTextareaAutosize;
    //MAin object
    application: InvestigationModel = new InvestigationModel();
    //array
    personalData: any[] = [];
    investigationReasons: any[] = [];
    list = [];
    displayColumns: string [] = ['nber', 'impact', 'actions'];
    resolutionComments: any[] = [];

    private _gap = 16;
    gap = `${this._gap}px`;
    col2 = `1 1 calc(50% - ${this._gap / 2}px)`;
    col3 = `1 1 calc(33.3333% - ${this._gap / 1.5}px)`;

  

  constructor(

    private formBuilder: FormBuilder,
      private activateRoute: ActivatedRoute,
      private route: Router,
      private bottomsheet: MatBottomSheet,
      public authService: KeycloakService,
      public _workflowService: WorkflowServiceService,
      public registrationService: CompanyRegistrationService,
      public investigationService: InvestigationService

  ) {

    //   super(
    //     authService,
    //     _workflowService,
    //     registrationService,
    //     investigationService
    // );

    // this.operationType = activateRoute.routeConfig.data.action;
    // this.InvestigationTrackingNumber = this.route.getCurrentNavigation().extras.state.InvestigationTrackingNumber;
    // console.log(this.InvestigationTrackingNumber);
    // console.log(this.operationType);
    // if (this.operationType === 'EDIT') {
    //     this.isEditMode = true;
    //     this.application.comments = [];
    // } else if (this.operationType === 'CREATE') {
    //     this.isEditMode = false;
    //     this.application.comments = [];
    // } else if (this.operationType === 'VIEW') {
    //     this.isEditMode = false;
    //     this.isViewOnly = true;
    // }

   }

  ngOnInit(): void {

    // InitForm
    this.initForm();

    // this.getInvestigation();

    // complaints
    this.subscriptions['$resultComplaintsEvent'] = this.$resultInvestigationsEvent.subscribe(result => {
      if (result) {

        this.application= result;
        console.log(this.application);
     
        this.mapFields();
      }
    });

   
    this.disableFieldsByStatus();
    // if (this.isViewOnly) {
    //     this.disableAllControls();
    // }

  }

  mapFields() {
    // this.isApplicationValid = true;
  
    // this.personalData = this.application.PersonalDataAffected;
    // this.investigationReasons = this.application.ReasonsForInvestigation;
    // console.log(this.application.EvidenceOfInvestigation);

    this.document = { 
      Document: null, 
      Name: 'Investigation Evidence.pdf', 
      Size: null, 
      // Base64: this.application.EvidenceOfInvestigation
  };
  console.log(this.document);
   
 

    // this.investigationForm.get('reasonForTheComplaint').setValue(this.application.ReasonsForComplaint);
    // this.investigationForm.get('investigationDetails').setValue(this.application.FullDetailsOfInvestigation);
    // this.investigationForm.get('remedialActions').setValue(this.application.RemedialActions);
    // this.investigationForm.get('lastModificationDate').setValue(this.application.FirstName);
    // this.investigationForm.get('dataSubjectName').setValue(this.application.FirstName + ' ' + this.application.LastName);
    // this.investigationForm.get('dataSubjectPhone').setValue(this.application.PhoneNumber);
    // this.investigationForm.get('dataSubjectEmail').setValue(this.application.EmailAddress);
    this.investigationForm.get('Organisation').setValue(this.application.Organisation);
    this.investigationForm.get('ContactFirstName').setValue(this.application.ContactPersonFirstName);
    this.investigationForm.get('ContactLastName').setValue(this.application.ContactPersonLastName);
    this.investigationForm.get('ContactEmailAddress').setValue(this.application.ContactPersonEmailAddress);

    
}

initForm() {
  this.investigationForm = this.formBuilder.group({
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
      lastModificationDate: []
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

disableFieldsByStatus() {
  if (this.application
      && this.application.status !== 'NEW' && this.application.status !== 'STORED'
      && this.application.status === 'ISSUED') {
      this.disableAllControls();
  }
}

disableAllControls() {
  this.investigationForm.disable();
}

// onCommentChange(comments: DocumentComment[]) {
//   if (comments) {
//       this.application.comments = comments;
//   }
// }

formTriggler(operation: string) {
  switch (operation) {
      case 'EDIT':
          break;
      case 'CREATE':
          break;
      case  'VIEW':
          // this.isViewOnly = true;
          break;
  }
}

getComplaint() {
// tslint:disable-next-line:max-line-length
this.investigationService.getInvestigation(this.InvestigationTrackingNumber,this.$processingEvent, this.$resultInvestigationsEvent, this.$errorsEvent);
}

get getSampleJson() {
  return of(INVESTIGATION_JSON);
}

}

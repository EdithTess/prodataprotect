// import { Component, OnInit } from '@angular/core';
import {AfterViewInit,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
// import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {Complaint, COMPLAINT_JSON, ComplaintModel, PersonalDataAffected, RemedialActions} from '../../complaints-model';
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
import { Subscription} from 'rxjs';
import { MatSelect } from '@angular/material/select';
import { ThrowStmt } from '@angular/compiler';
import {FileUpload} from '../../../../services/api.model';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ViewPdfDocumentBottomsheetComponent } from '../../../../layout/bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component';



@Component({
  selector: 'fury-view-complaint',
  templateUrl: './view-complaint.component.html',
  styleUrls: ['./view-complaint.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ViewComplaintComponent extends BaseFuryForm implements OnInit {

  // Simulating A Service
  subject$: ReplaySubject<ComplaintModel> = new ReplaySubject<ComplaintModel>(1);
  data$: Observable<ComplaintModel> = this.subject$.asObservable();
  complaints: Complaint[];
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultComplaintsEvent: EventEmitter<Complaint> = new EventEmitter();
  ComplaintTrackingNumber: string;
  subscriptions: Subscription[] = [];
  selectedValue: string;
  document: FileUpload | null;
  bottomsheetRef;

  complaintForm: FormGroup;

  @ViewChild('autosize') autosize: CdkTextareaAutosize;
  //MAin object
  application: ComplaintModel = new ComplaintModel();
  //array
  personalData: any[] = [];
  complaintReasons: any[] = [];
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
      public complaintService: ComplaintService
  ) {
      super(
          authService,
          _workflowService,
          registrationService,
          complaintService
      );
      this.operationType = activateRoute.routeConfig.data.action;
      this.ComplaintTrackingNumber = this.route.getCurrentNavigation().extras.state.ComplaintTrackingNumber;
      console.log(this.ComplaintTrackingNumber);
      console.log(this.operationType);
      if (this.operationType === 'EDIT') {
          this.isEditMode = true;
          this.application.comments = [];
      } else if (this.operationType === 'CREATE') {
          this.isEditMode = false;
          this.application.comments = [];
      } else if (this.operationType === 'VIEW') {
          this.isEditMode = false;
          this.isViewOnly = true;
      }
  }

  ngOnInit(): void {
      // InitForm
      this.initForm();

      this.getComplaint();

      // complaints
      this.subscriptions['$resultComplaintsEvent'] = this.$resultComplaintsEvent.subscribe(result => {
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

  mapFields() {
      this.isApplicationValid = true;
    
      this.personalData = this.application.PersonalDataAffected;
      this.complaintReasons = this.application.ReasonsForComplaint;
      console.log(this.application.EvidenceOfComplaint);

      this.document = { 
        Document: null, 
        Name: 'Complaint Evidence.pdf', 
        Size: null, 
        Base64: this.application.EvidenceOfComplaint
    };
    console.log(this.document);
     
   

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
      this.complaintForm.disable();
  }

  onCommentChange(comments: DocumentComment[]) {
      if (comments) {
          this.application.comments = comments;
      }
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

  getComplaint() {
    // tslint:disable-next-line:max-line-length
    this.complaintService.getComplaint(this.ComplaintTrackingNumber,this.$processingEvent, this.$resultComplaintsEvent, this.$errorsEvent);
}

  get getSampleJson() {
      return of(COMPLAINT_JSON);
  }

}

import {Component, EventEmitter, Input, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {ComplaintService} from '../../modules/complaints/complaints.service';

import { Complaint, ComplaintModel } from '../../modules/complaints/complaints-model';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {ApiEndpointsService} from '../../services/api-endpoints.service';
import {ApiService} from '../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
import {SuccessfulMessageDialogComponent} from '../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { environment } from '../../../environments/environment';
import { ResolutionUploadComponent } from '../dialogs/resolution-upload/resolution-upload.component';
import { ApiPayload, FileUpload } from '../../services/api.model';
import { AppropriateSecurityMeasuresLetterComponent } from '../dialogs/appropriate-security-measures-letter/appropriate-security-measures-letter.component';
import { InfringementLetterComponent } from '../dialogs/infringement-letter/infringement-letter.component';
import { ViolationOfTheActLetterComponent } from '../dialogs/violation-of-the-act-letter/violation-of-the-act-letter.component';
// import { ForwardMessageDialogComponent } from '../dialogs/forward-message-dialog/forward-message-dialog.component';


@Component({
  selector: 'fury-breach-comments',
  templateUrl: './breach-comments.component.html',
  styleUrls: ['./breach-comments.component.scss']
})
export class BreachCommentsComponent implements OnInit {

  BreachCommentsFormGroup = this.fb.group({});
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultComplaintsEvent: EventEmitter<Complaint> = new EventEmitter();
  httpSub: Subscription;
  processing = false;
  public data;
  dialogRef;
  previewDialog;
  evidenceDocument: FileUpload | null;

  constructor(

    private fb: FormBuilder,
    private endpoints: ApiEndpointsService,
    private http: HttpClient,
    private service: ApiService,
    private dialog: MatDialog,
    private route: Router,
    private allDialogRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public parent_data: any
  ) { }

  ngOnInit(): void {

    this.BreachCommentsFormGroup = this.fb.group({

      Comments: new FormControl('', [Validators.required]),
      TechnicalForwardedComments: new FormControl(''),
      LegalForwardedComments : new FormControl('')
    });


    this.BreachCommentsFormGroup.get('TechnicalForwardedComments').setValue(this.parent_data.TechnicalComments);
    this.BreachCommentsFormGroup.get('LegalForwardedComments').setValue(this.parent_data.TechnicalComments);

    console.log(this.parent_data);
  }

  private getBreachData(): any {

    return {
      Comments: this.BreachCommentsFormGroup.get('Comments').value,
      DataBreachTrackingNo: this.parent_data.DataBreachTrackingNumber,
      Status: this.parent_data.Status,
    };
  }

  

  onSubmit(): void {
    this.processing = true;
    console.log('Comments:', this.getBreachData());

    this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateComplaintStatus, this.getBreachData())
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
        panelClass: ['successful-message-dialog', 'dialogs'],
        disableClose: true,
        data: {
          title: 'Update Breach Status',
          message: response.message,
          status: response.code === 200 ? true : false,
        }
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.allDialogRef.closeAll();
        this.route.navigate(['/breaches/find']);
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

  onUploadAttachments(): void {
    this.dialogRef = this.dialog.open(ResolutionUploadComponent, {
      panelClass: ['resolution-upload-dialog', 'dialogs'],
      disableClose: true,
      data: {
        multiple: false,
        maxSize: 3
      }
    });

    this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: FileUpload }) => {
      // console.log('row:', result.row);

      if (result.status) {
        this.evidenceDocument = result.row;
        console.log(this.evidenceDocument);
      }
    });     
  }

}

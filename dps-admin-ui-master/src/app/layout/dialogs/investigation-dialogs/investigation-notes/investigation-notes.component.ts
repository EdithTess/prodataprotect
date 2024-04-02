import {Component, EventEmitter, Input, Inject, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
// import {ComplaintService} from '../../modules/complaints/complaints.service';
import { InvestigationService } from '../../../../modules/investigations/investigation.service';
import { Investigation, InvestigationModel } from '../../../../modules/investigations/investigation-model';
// import { Complaint, ComplaintModel } from '../../modules/complaints/complaints-model';
import {forkJoin, Observable, Subscription} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
// import {ApiEndpointsService} from '../../services/api-endpoints.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
// import {ApiService} from '../../services/api.service';
import { ApiService } from '../../../../services/api.service';
import {MatDialog} from '@angular/material/dialog';
import { Router } from '@angular/router';
// import {SuccessfulMessageDialogComponent} from '../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { SuccessfulMessageDialogComponent } from '../../successful-message-dialog/successful-message-dialog.component';
// import { environment } from '../../../environments/environment';
import { environment } from '../../../../../environments/environment';
import { ResolutionUploadComponent } from '../../resolution-upload/resolution-upload.component';
// import { ResolutionUploadComponent } from '../dialogs/resolution-upload/resolution-upload.component';
// import { ApiPayload, FileUpload } from '../../services/api.model';
import { ApiPayload, FileUpload } from '../../../../services/api.model';
@Component({
  selector: 'fury-investigation-notes',
  templateUrl: './investigation-notes.component.html',
  styleUrls: ['./investigation-notes.component.scss']
})
export class InvestigationNotesComponent implements OnInit {

  InvestigationCommentsFormGroup = this.fb.group({});
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultComplaintsEvent: EventEmitter<Investigation> = new EventEmitter();
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

    this.InvestigationCommentsFormGroup = this.fb.group({

      Comments: new FormControl('', [Validators.required]),
    });

    console.log(this.parent_data);

  }

  private getFormData(): any {

    return {
      
      Notes: this.InvestigationCommentsFormGroup.get('Comments').value,
      InvestigationTrackingNo: this.parent_data.InvestigationTrackingNumber,
      InvestigationStatus: this.parent_data.Status,
      InvestigationEvidenceFile: '',
      RequestInformation: 0,
      RequestInformtationQuery:'',
      EvidenceOwner:this.parent_data.EvidenceOwner
    };
  }

  onSubmit(): void {
    this.processing = true;
    console.log('Comments:', this.getFormData());

    this.httpSub = this.http.post<ApiPayload>(this.endpoints.makeInvestigationNotes, this.getFormData())
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
        panelClass: ['successful-message-dialog', 'dialogs'],
        disableClose: true,
        data: {
          title: 'Make Investigation Notes',
          message: response.message,
          status: response.code === 200 ? true : false,
        }
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.allDialogRef.closeAll();
        this.route.navigate(['/investigations/find']);
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

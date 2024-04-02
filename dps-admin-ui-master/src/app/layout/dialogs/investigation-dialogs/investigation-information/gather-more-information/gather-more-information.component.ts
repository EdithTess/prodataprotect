import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiEndpointsService } from '../../../../../services/api-endpoints.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../../../services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessfulMessageDialogComponent } from '../../../successful-message-dialog/successful-message-dialog.component';
import { environment } from '../../../../../../environments/environment';
import { ApiPayload } from '../../../../../services/api.model';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'fury-gather-more-information',
  templateUrl: './gather-more-information.component.html',
  styleUrls: ['./gather-more-information.component.scss']
})
export class GatherMoreInformationComponent implements OnInit {

  processing = false;
  httpSub: Subscription;
  InvestigationFormGroup = this.fb.group({});
  dialogRef;
  public data;
  Status: FormControl;

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

    this.InvestigationFormGroup = this.fb.group({

      Comments: new FormControl('', [Validators.required]),
      Status: new FormControl('', [Validators.required]),
    });

  }

  private getFormData(): any {

    return{
      Comments: this.InvestigationFormGroup.get('Comments').value,
      InvestigationTrackingNo: this.parent_data.InvestigationTrackingNumber,
      Status: parseInt(this.InvestigationFormGroup.get('Status').value),
    };
  }

  onSubmit(): void {
    this.processing = true;
    console.log('Comments:', this.getFormData());

    this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateInvestigationStatus, this.getFormData())
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
        panelClass: ['successful-message-dialog', 'dialogs'],
        disableClose: true,
        data: {
          title: 'Update Investigation Status',
          message: 'More information required successfully',
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


}

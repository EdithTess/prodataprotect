import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
// import { ApiEndpointsService } from '../../../services/api-endpoints.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { HttpClient } from '@angular/common/http';
// import { ApiService } from '../../../services/api.service';
import { ApiService } from '../../../../services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
// import { SuccessfulMessageDialogComponent } from '../successful-message-dialog/successful-message-dialog.component';
import { SuccessfulMessageDialogComponent } from '../../successful-message-dialog/successful-message-dialog.component';
// import { environment } from '../../../../environments/environment';
import { environment } from '../../../../../environments/environment';
// import { ApiPayload } from '../../../services/api.model';
import { ApiPayload } from '../../../../services/api.model';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'fury-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.scss']
})
export class UpdateRegistrationComponent implements OnInit {

  processing = false;
  httpSub: Subscription;
  
  InvestigationCommentsFormGroup = this.fb.group({});
  dialogRef;
  public data;

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

    console.log(this.parent_data.data)


  }

  private getData(): any {

    return{
    
      OrganisationID: this.parent_data.OrganisationID,
      Status: this.parent_data.Status,
      new_data: this.parent_data.data

    }
  }

  onSubmit(): void {

    if(this.processing = true){

      console.log('Comments:', this.getData());

    if(this.parent_data.Status == 'approved'){
      
      this.httpSub = this.http.post<ApiPayload>(this.endpoints.completeUpdate, this.parent_data.data)
      .pipe(catchError(this.service.handleError))
      .subscribe((response) => {
        this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
          panelClass: ['successful-message-dialog', 'dialogs'],
          disableClose: true,
          data: {
            title: 'Approve Registration Details Change',
            message: 'Success',
            status: response.code === 200 ? true : false,
          }
        });
  
        this.dialogRef.afterClosed().subscribe(() => {
          this.allDialogRef.closeAll();
          this.route.navigate(['/company-registration/find']);
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
    else{

    this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateRegistrationUpdateStatus, this.getData())
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
        panelClass: ['successful-message-dialog', 'dialogs'],
        disableClose: true,
        data: {
          title: 'Approve Registration Details Change',
          message: 'Success',
          status: response.code === 200 ? true : false,
        }
      });

      this.dialogRef.afterClosed().subscribe(() => {
        this.allDialogRef.closeAll();
        this.route.navigate(['/company-registration/find']);
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

  }

  onCancel(){

    this.dialogRef.afterClosed().subscribe(() => {
      this.allDialogRef.closeAll();
      this.route.navigate(['/company-registration/manage-registration-update']);
    });


  }

}

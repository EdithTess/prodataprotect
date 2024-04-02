import { Component, OnInit, Inject, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ApiEndpointsService } from '../../../services/api-endpoints.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SuccessfulMessageDialogComponent } from '../successful-message-dialog/successful-message-dialog.component';
import { environment } from '../../../../environments/environment';
import { ApiPayload } from '../../../services/api.model';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'fury-forward-comments',
  templateUrl: './forward-comments.component.html',
  styleUrls: ['./forward-comments.component.scss']
})
export class ForwardCommentsComponent implements OnInit {

  processing = false;
  httpSub: Subscription;
  ComplaintCommentsFormGroup = this.fb.group({});
  BreachCommentsFormGroup = this.fb.group({});
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
  ) { 

    
  }

  ngOnInit(): void {
    this.BreachCommentsFormGroup = this.fb.group({

      Comments: new FormControl('', [Validators.required]),
      TechnicalForwardedComments:  new FormControl('')
    });

    this.BreachCommentsFormGroup.get('TechnicalForwardedComments').setValue(this.parent_data.TechnicalComments);

  }
    

    private getBreachData(): any {

      return{
        Comments: this.BreachCommentsFormGroup.get('Comments').value,
        DataBreachTrackingNo: this.parent_data.DataBreachTrackingNumber,
        Status: this.parent_data.Status,
        RequestInformation:0,
        EvidenceFile: ''
      }
    }

    onSubmit(): void {

      if(this.processing = true){

        console.log('Comments:', this.getBreachData());
  
      this.httpSub = this.http.post<ApiPayload>(this.endpoints.updateBreachStatus, this.getBreachData())
      .pipe(catchError(this.service.handleError))
      .subscribe((response) => {
        this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
          panelClass: ['successful-message-dialog', 'dialogs'],
          disableClose: true,
          data: {
            title: 'Update Breach Status',
            message: 'Breach forwarded successfully',
            status: response.code === 200 ? true : false,
          }
        });
  
        this.dialogRef.afterClosed().subscribe(() => {
          this.allDialogRef.closeAll();
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

    
      
         
  }



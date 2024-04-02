import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpBackend } from '@angular/common/http';
import { ApiService } from '../../../services/api.service';
import { ApiEndpointsService } from '../../../services/api-endpoints.service';
import { DatePipe } from '@angular/common';
import { catchError } from 'rxjs/operators';
import * as html2pdf from 'html2pdf.js';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { findLastKey } from 'lodash-es';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

interface Data {
  ComplaintForm: any,
  ComplaintReasonName,
  ResolutionComments,
  OrganisationComplainedFrom: string,
  Date: Date;
  autoDownload: boolean,
  
}

@Component({
  selector: 'fury-appropriate-security-measures-letter',
  templateUrl: './appropriate-security-measures-letter.component.html',
  styleUrls: ['./appropriate-security-measures-letter.component.scss']
})
export class AppropriateSecurityMeasuresLetterComponent implements OnInit {

  downloading = false;
  processing = false;
  public data;
  todayDate: Date = new Date();
  pipe = new DatePipe('en-US');
  todayWithPipe = null;
  isDirector = false;
  accesses: string[];
  

  constructor(
    private dialogRef: MatDialogRef<AppropriateSecurityMeasuresLetterComponent>,
    private http: HttpBackend,
    private service: ApiService,
    private endpoints: ApiEndpointsService,
    @Inject(MAT_DIALOG_DATA) public parent_data: any,
  
 
  ) { 
    
  }

  ngOnInit(): void {


    this.todayWithPipe = this.pipe.transform(Date.now(), 'dd-MM-yyyy');

    console.log(this.parent_data);

  
  }

  onCloseWindow(): void {
    this.dialogRef.close();
  }
  

  

  onDownload(): void {

    setTimeout(() => {
      this.service.openSnackBar('Downloading. Please wait.', 'success');

      const options = {
        filename: this.data.ComplaintForm.FirstName + "'s Complaint Letter.pdf",
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: {
          scale: 2,
          backgroundColor: null,
        },
        jspdf: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait'
        },
        margin: 15,
      };
  
      const content: Element = document.getElementById('letterBodyContainer');
  
      html2pdf()
      .from(content)
      .set(options)
      .save()
      .then((onFulfilled) => {
  
        setTimeout(() => {
          this.downloading = false;

          this.onCloseWindow();
          
          this.service.openSnackBar('Downloaded. Please check in your downloads.', 'success-lg');
        }, 1000);

      }); 
    }, 500);

  }
}



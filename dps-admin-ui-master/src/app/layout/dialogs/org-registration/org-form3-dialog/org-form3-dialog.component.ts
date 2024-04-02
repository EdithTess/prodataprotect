import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { catchError } from 'rxjs/operators';
import * as html2pdf from 'html2pdf.js';
import { forkJoin, Observable, Subscription } from 'rxjs';
import { ApiService } from '../../../../services/api.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';

interface Data {
  OrganisationName: string;
  PhysicalAddress: string;
  Date: Date;
}

@Component({
  selector: 'app-org-form3-dialog',
  templateUrl: './org-form3-dialog.component.html',
  styleUrls: ['./org-form3-dialog.component.scss']
})
export class OrgForm3DialogComponent implements OnInit {

  donwloading = true;

  constructor(
    private dialogRef: MatDialogRef<OrgForm3DialogComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Data,
    private http: HttpClient,
    private service: ApiService,
    private endpoints: ApiEndpointsService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit(): void {
    this.onDownloadLetter();
  }

  onCloseWindow(): void {
    this.dialogRef.close();
  }

  getDateSuperscript(): string {
    return this.service.getDateSuperscript(parseInt(this.datePipe.transform(this.data.Date, 'd')));
  }

  onDownloadLetter(): void {

    setTimeout(() => {
      this.service.openSnackBar('Downloading. Please wait.', 'nuetral');

      const options = {
        filename: this.data.OrganisationName + ' - Form 3.pdf',
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
          this.donwloading = false;

          this.onCloseWindow();
          
          this.service.openSnackBar('Downloaded. Please check in your downloads.', 'success-lg');
        }, 1000);

      }); 
    }, 500);
  }
}


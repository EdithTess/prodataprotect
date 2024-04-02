import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, NgModule  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../../services/api.service';
import * as html2pdf from 'html2pdf.js';
import {BaseFuryForm} from '../../../../@fury/shared/base-fury-form';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'fury-download-complaint',
  templateUrl: './download-complaint.component.html',
  styleUrls: ['./download-complaint.component.scss']
})

export class DownloadComplaintComponent implements OnInit {

  downloading = false;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<DownloadComplaintComponent>,
    @Inject(MAT_DIALOG_DATA) public data, 
    private service: ApiService,
  ) { }

  ngOnInit(): void {

    console.log('data:', this.data);

    if (this.data.download) {
      this.onDownloadLetter();
    }
  }

  onCloseWindow(): void {
    this.dialogRef.close();
  } 

  onDownloadLetter(): void {
    this.downloading = true;

    setTimeout(() => {
      this.service.openSnackBar('Downloading. Please wait.', 'nuetral');

      const options = {
        filename: this.data.row.ComplaintTrackingNo + ' - Complaint.pdf',
        image: { type: 'jpeg', quality: 1.00 },
        html2canvas: {
          scale: 2,
          backgroundColor: null,
        },
        jspdf: {
          unit: 'in',
          format: 'letter',
          orientation: 'portrait'
        },
        margin: [10, 2, 2, 2],
      };
  
      const content: Element = document.getElementById('letterBodyContainer');
  
      html2pdf()
      .from(content)
      .set(options)
      .save()
      .then((onFulfilled) => {
  
        setTimeout(() => {
          this.downloading = false;

          if (this.data.download) {
            this.onCloseWindow();
          }
          
          this.service.openSnackBar('Downloaded. Please check in your downloads.', 'success-lg');
        }, 1000);

      }); 
    }, 1000);
  }  

}

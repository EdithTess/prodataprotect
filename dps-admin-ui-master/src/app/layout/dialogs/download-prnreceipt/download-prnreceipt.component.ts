import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, NgModule  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import * as html2pdf from 'html2pdf.js';
import { ApiService } from '../../../services/api.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'fury-download-prnreceipt',
  templateUrl: './download-prnreceipt.component.html',
  styleUrls: ['./download-prnreceipt.component.scss']
})
export class DownloadPRNReceiptComponent implements OnInit {

  downloading = false;

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<DownloadPRNReceiptComponent>,
    private service: ApiService,
  
  ) { }

  ngOnInit(): void {
    
    console.log(this.data);
    this.onDownloadLetter();
  }


  onCloseWindow(): void {
    this.dialogRef.close();
  } 

  onDownloadLetter(): void {
    this.downloading = true;

    setTimeout(() => {
      this.service.openSnackBar('Downloading. Please wait.', 'nuetral');

      var opt = {
        margin:       [0, 0, 0, 0],
        filename:     'PRN-SLIP.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2},
        jsPDF:        { unit: 'in', format: 'a3', orientation: 'portrait' }
      };
  
      const content: Element = document.getElementById('downloadable-content');
      console.log(content);
  
      html2pdf()
      .from(content)
      .set(opt)
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

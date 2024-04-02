import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { CountryOfTransfer, DataProtectionOfficer, DataPurposes, DataSource, DataSubCategory, FileUpload, NatureOfBusinessSubCat, SecurityMeasure, ThirdParty } from 'src/app/services/api.model';
import { DataCategory, DataPurposes, NatureOfBusinessCat, NatureOfBusinessSubCat, DataSubCategory, Organisation, OrganisationDetails, } from '../../../../services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { ApiService } from '../../../../services/api.service';
import * as html2pdf from 'html2pdf.js';



interface FormData {
  organisation_name: string;
  URSBNumber: string;
  PhoneNumber: string;
  EmailAddress: string;
  incidentDate: string;
  causesOfBreach: string;
  delayInReporting: string;
  delayInReportings: string;
  reasonForDelay: number;
  NumberOfRecordsHeld: number;
  FullDetailsOfComplaint: string;
  DetailsOfComplaint: string;
  personalData: string;
  actionTaken: string;
  detailsOfActionTaken: string;
  hasDataBeenRecovered: string;
  detailsOfRecovery: string;
  dateOfRecovery: string;
  preventionSteps: string;
  BreachDescription: string;
  HarmDescription: string;
  BreachDoneBy : string;
  
}

@Component({
  selector: 'fury-org-breach-preview',
  templateUrl: './org-breach-preview.component.html',
  styleUrls: ['./org-breach-preview.component.scss']
})
export class OrgBreachPreviewComponent implements OnInit {

  downloading = false;

  constructor(
    private dialogRef: MatDialogRef<OrgBreachPreviewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: ApiService,
  ) { }

  ngOnInit(): void {


    console.log(this.data);

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
        filename: this.data.row.OrganisationName + ' - Registration.pdf',
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

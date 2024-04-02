import { DatePipe } from '@angular/common';
import { ChangeDetectorRef, Component, Inject, OnInit, NgModule  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
// import { CountryOfTransfer, DataProtectionOfficer, DataPurposes, DataSource, DataSubCategory, FileUpload, NatureOfBusinessSubCat, SecurityMeasure, ThirdParty } from 'src/app/services/api.model';
import { CountryOfTransfer, DataProtectionOfficer, DataPurposes, DataSource, DataSubCategory, FileUpload, NatureOfBusinessSubCat, SecurityMeasure, ThirdParty } from '../../../../services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { ApiService } from '../../../../services/api.service';
import * as html2pdf from 'html2pdf.js';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { CommonModule } from '@angular/common';


interface Data { 
  download: boolean; 
  row: FormData, 
  Attachment: FileUpload; 
  Form3: FileUpload;
  ProofOfPayment: FileUpload;
  OrganizationType: string;
  Sector: string;
  NatureOfBusinessCat: string;
  CountryOfIncorporation: string;
}

interface FormData {
  OrganisationName: string;
  OrganisationCategory: string;
  OrganizationTypeID: string;
  CountryOfIncorporation: string;
  URSBNumber: string;
  SectorID: string;
  OtherSector: string;
  Location: string;
  PhoneNumber: string;
  EmailAddress: string;
  NatureOfBusinessCatID: number;
  NatureOfBusiness: NatureOfBusinessSubCat[],
  DPORequired: string;
  DPOName: string;
  DPOPhysicalAddress: string;
  DPOPhoneNumber: string;
  DPOEmailAddress: string;
  DPOPositionInOrganisation: string;
  SourceOfDataID: DataSource[],
  PersonalDataCollected: DataSubCategory[],
  Purpose: DataPurposes[],
  SpecifyTheLaw: string;
  ServiceOrProductProvided: string;
  SpecifyLegalObligation: string;
  TotalRecordsAtRegistration: number;
  RecordPercentageGrowth: number;
  RetentionPeriod: number;
  PersonalDataIsForDisclosure: string;
  ThirdParties: ThirdParty[],
  StoreDataOutsideCountry: string;
  Countries: CountryOfTransfer[],
  SecurityMeasures: SecurityMeasure[],
  Attachment: string;
  Form3Attachment : string;
  RegistrationConsent: string;
  RegistrationDoneBy: string;
  ProofOfPayment : string;
}

@Component({
  selector: 'app-org-registration-preview-dialog',
  templateUrl: './org-registration-preview-dialog.component.html',
  styleUrls: ['./org-registration-preview-dialog.component.scss']
})
export class OrgRegistrationPreviewDialogComponent implements OnInit {

  downloading = false;

  constructor(
    private dialog: MatDialog,
    private dialogRef: MatDialogRef<OrgRegistrationPreviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Data,
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


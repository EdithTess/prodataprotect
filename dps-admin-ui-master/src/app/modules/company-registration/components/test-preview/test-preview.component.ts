
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// tslint:disable-next-line:max-line-length
// import { CountryOfTransfer, DataProtectionOfficer, DataPurposes, DataSource, DataSubCategory, FileUpload, NatureOfBusinessSubCat, SecurityMeasure, ThirdParty } from 'src/app/services/api.model';
import * as html2pdf from 'html2pdf.js';



interface Data {
  download: boolean;
  row: FormData;
  Attachment: any;
  Form3: any;
  ProofOfPayment: any;
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
  NatureOfBusiness: any [];
  DPORequired: string;
  DPOName: string;
  DPOPhysicalAddress: string;
  DPOPhoneNumber: string;
  DPOEmailAddress: string;
  DPOPositionInOrganisation: string;
  SourceOfDataID: any [];
  PersonalDataCollected: any [];
  Purpose: any [];
  SpecifyTheLaw: string;
  ServiceOrProductProvided: string;
  SpecifyLegalObligation: string;
  TotalRecordsAtRegistration: number;
  RecordPercentageGrowth: number;
  RetentionPeriod: number;
  PersonalDataIsForDisclosure: string;
  ThirdParties: any [];
  StoreDataOutsideCountry: string;
  Countries: any [];
  SecurityMeasures: any [];
  Attachment: string;
  Form3Attachment: string;
  RegistrationConsent: string;
  RegistrationDoneBy: string;
  ProofOfPayment: string;
}

@Component({
  selector: 'fury-test-preview',
  templateUrl: './test-preview.component.html',
  styleUrls: ['./test-preview.component.scss']
})

export class TestPreviewComponent implements OnInit {

  downloading = false;

  constructor(
      private dialogRef: MatDialogRef<TestPreviewComponent>,
      @Inject(MAT_DIALOG_DATA) public data: Data,
      // private service: ApiService,
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
      // this.service.openSnackBar('Downloading. Please wait.', 'nuetral');

      const options = {
        filename: 'Registration.pdf',
        image: { type: 'jpeg', quality: 1.00 },
        html2canvas: {
          scale: 2,
          backgroundColor: null,
        },
        jspdf: {
          unit: 'in',
          format: 'letter',
          orientation: 'landscape '
        },
        margin: 1,
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

              // this.service.openSnackBar('Downloaded. Please check in your downloads.', 'success-lg');
            }, 1000);

          });
    }, 1000);
  }
}


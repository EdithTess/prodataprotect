import {Component, ElementRef, EventEmitter, Input, Output, OnInit, ViewChild, Inject, OnChanges} from '@angular/core';
import * as html2pdf from 'html2pdf.js';
import {CertificateDetails} from '../company-registration.model';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Data} from '@angular/router';
import {ApiService} from '../../../../services/api.service';
import {DatePipe} from '@angular/common';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../company-registration.service';
import { ComplaintService } from '../../../complaints/complaints.service';
import {ApiEndpointsService} from '../../../../services/api-endpoints.service';
import { environment } from '../../../../../environments/environment';


@Component({
    selector: 'fury-company-cert',
    templateUrl: './company-cert.component.html',
    styleUrls: ['./company-cert.component.scss']
})
export class CompanyCertComponent extends BaseFuryForm implements OnInit, OnChanges {

    @Input() certificateData: CertificateDetails;
    @Output() closeWindow = new EventEmitter();
    downloading = false;
    QRCode;
    @ViewChild('pdfContainer') pdfContainer: ElementRef;

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: Data,
        private service: ApiService,
        private datePipe: DatePipe,
        public authService: KeycloakService,
        public _workerService: WorkflowServiceService,
        public registrationService: CompanyRegistrationService,
        public complaintService: ComplaintService,
        private endpoints: ApiEndpointsService,
    ) {
       super(
           authService,
           _workerService,
           registrationService,
           complaintService,
       );
    }

    isApplicant: boolean;

    ngOnInit(): void {
        this.isApplicant = this.authService.getKeycloakInstance().hasRealmRole('organisation');
        this.QRCode = environment.baseClientURL+'verify-certificate/'+this.certificateData.OrgRegNumber;
    }

    ngOnChanges(): void {

    }

  
getDateSuperscript(): string {        

    return this.service.getDateSuperscript(parseInt(this.datePipe.transform(this.data.IssueDate, 'd')));

}


   certificateController(): void{
   
    var today = new Date();
    this.data.IssueDate = today.toDateString();

  
    var ExpiryDate = new Date('2024-04-24 23:43:27.857'); 

  
    if (today > ExpiryDate) {
       
        var newYear = today.getFullYear() + 1; 
        this.data.IssuedDate = this.data.IssuedDate.replace(today.getFullYear(), newYear);
    }
 
    };



    openPdf(): void {
        this.downloading = true;

        if (this.isApplicant) {
            this.updateCertificateDownloadCount(this.certificateData.OrgRegNumber);
        }

        setTimeout(() => {
            const element = document.getElementById('letterBodyContainer');

            const opt = {
                margin: 0,
                filename: this.certificateData.OrgRegNumber + ' Certificate.pdf',
                image: {
                    type: 'jpeg',
                    quality: 0.98
                },
                html2canvas: {
                    scale: 2,
                },
                jsPDF: {
                    unit: 'in',
                    format: 'letter',
                    orientation: 'landscape'
                }
            };

            // New Promise-based usage:
            html2pdf()
            .from(element)
            .set(opt)
            .save()
            .then((onFulfilled) => {

                setTimeout(() => {
                    this.downloading = false;

                    this.service.openSnackBar('Downloaded. Please check in your downloads.', 'success');
                }, 1000);

            });

        }, 1000);

    }


}

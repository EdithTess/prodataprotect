import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder} from '@angular/forms';
import {CertificateDetails} from '../company-registration.model';
import { CompanyCertComponent } from '../company-cert/company-cert.component';

@Component({
  selector: 'fury-cert-preview',
  templateUrl: './cert-preview.component.html',
  styleUrls: ['./cert-preview.component.scss']
})
export class CertPreviewComponent implements OnInit, AfterViewInit {

  @ViewChild(CompanyCertComponent) companyCertComponent!: CompanyCertComponent;

  constructor(@Inject(MAT_DIALOG_DATA) public certDetails: CertificateDetails,
              private dialogRef: MatDialogRef<CertPreviewComponent>,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    console.log(this.certDetails);
  }

  ngAfterViewInit(): void {
  }

}

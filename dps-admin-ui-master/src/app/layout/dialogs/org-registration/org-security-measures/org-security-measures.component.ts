import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { SecurityMeasure } from 'src/app/services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { SecurityMeasure } from '../../../../services/api.model';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'fury-app-org-security-measures',
  templateUrl: './org-security-measures.component.html',
  styleUrls: ['./org-security-measures.component.scss']
})
export class OrgSecurityMeasuresComponent implements OnInit {

  processing = false;
  form: FormGroup;
  status = false;
  today = new Date();
  measure: SecurityMeasure;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: SecurityMeasure },
    private dialogRef: MatDialogRef<OrgSecurityMeasuresComponent>,
    private formBuilder: FormBuilder,
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      SecurityMeasure: new FormControl('', [Validators.required]),
    });    

    if (this.data) {
      this.updateForm();
    }   
  }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this.measure
    });
  }  

  private updateForm(): void {
    this.form.patchValue({
      SecurityMeasure: this.data.row.SecurityMeasure,
    });
  }

  private getFormData(): any {
    this.measure = this.form.value;
  }  

  onSave(): void {
    this.processing = true;

    this.getFormData();

    setTimeout(() => {
      this.status = true;

      this.form.reset();

      this.onCloseDialog();
      
      this.processing = false;
    }, 100);
  }
}


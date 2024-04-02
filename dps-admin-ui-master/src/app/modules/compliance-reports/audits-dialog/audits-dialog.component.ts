import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-audits-dialog',
  templateUrl: './audits-dialog.component.html',
  styleUrls: ['./audits-dialog.component.scss']
})
export class AuditsDialogComponent implements OnInit {

  AuditsForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<AuditsDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.AuditsForm = this._formBuilder.group({
      year_of_audit: [0, Validators.required],
      category_of_audit: ['', Validators.required],
      number_of_audits: [0, Validators.required],
      Resolutionstatus: ['', Validators.required],
      Resolutiondetails: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.AuditsForm.valid) {
      this.dialogRef.close(this.AuditsForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}
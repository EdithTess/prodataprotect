import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-complaints-dialog',
  templateUrl: './complaints-dialog.component.html',
  styleUrls: ['./complaints-dialog.component.scss']
})
export class ComplaintsDialogComponent implements OnInit {

  ComplaintsForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ComplaintsDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.ComplaintsForm = this._formBuilder.group({
      year_of_complaint: [0, Validators.required],
      status_of_complaint: ['', Validators.required],
      number_of_complaints_received: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.ComplaintsForm.valid) {
      this.dialogRef.close(this.ComplaintsForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-staff-dialog',
  templateUrl: './staff-dialog.component.html',
  styleUrls: ['./staff-dialog.component.scss']
})
export class StaffDialogComponent implements OnInit {

  StaffForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<StaffDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.StaffForm = this._formBuilder.group({
      department: ['', Validators.required],
      total_staff_to_be_trained: [0, Validators.required],
      number_completed_training: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.StaffForm.valid) {
      this.dialogRef.close(this.StaffForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}

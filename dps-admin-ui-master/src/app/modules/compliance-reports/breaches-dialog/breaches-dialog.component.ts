import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-breaches-dialog',
  templateUrl: './breaches-dialog.component.html',
  styleUrls: ['./breaches-dialog.component.scss']
})
export class BreachesDialogComponent implements OnInit {

  BreachesForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<BreachesDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.BreachesForm = this._formBuilder.group({
      year_of_breach: [0, Validators.required],
      status_of_breach: ['', Validators.required],
      number_of_breaches: [0, Validators.required],
      measures_taken_to_address_gaps: ['', Validators.required],
      number_of_records_lost: [0],
      frequent_cause_of_breach: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.BreachesForm.valid) {
      this.dialogRef.close(this.BreachesForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}
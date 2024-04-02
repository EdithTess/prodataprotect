import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-impact-dialog',
  templateUrl: './impact-dialog.component.html',
  styleUrls: ['./impact-dialog.component.scss']
})
export class ImpactDialogComponent implements OnInit {

  ImpactForm: FormGroup;
  maxDate: string;

  constructor(
    public dialogRef: MatDialogRef<ImpactDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
    
    this.ImpactForm = this._formBuilder.group({
      data_or_activity: ['', Validators.required],
      date_concluded: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.ImpactForm.valid) {
      this.dialogRef.close(this.ImpactForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}

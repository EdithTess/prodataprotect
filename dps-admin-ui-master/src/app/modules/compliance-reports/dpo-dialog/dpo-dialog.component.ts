import { AfterViewInit, Component, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-dpo-dialog',
  templateUrl: './dpo-dialog.component.html',
  styleUrls: ['./dpo-dialog.component.scss']
})
export class DpoDialogComponent implements OnInit{

  DPOForm: FormGroup;
  maxDate: string;
  
  constructor(
    public dialogRef: MatDialogRef<DpoDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
    
    this.DPOForm = this._formBuilder.group({
      name_of_training: ['', Validators.required],
      who_conducted_training: ['', Validators.required],
      date_of_training: ['', Validators.required]
    });
    
  }


  onSubmit() {
    if (this.DPOForm.valid) {
      this.dialogRef.close(this.DPOForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-policy-dialog',
  templateUrl: './policy-dialog.component.html',
  styleUrls: ['./policy-dialog.component.scss']
})
export class PolicyDialogComponent implements OnInit {
  
  policyForm: FormGroup;
  
  maxDate: string;
  constructor(
    public dialogRef: MatDialogRef<PolicyDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }
  
  
  ngOnInit(): void {
    const today = new Date();
    this.maxDate = today.toISOString().split('T')[0];
    
    this.policyForm = this._formBuilder.group({
      PolicyandProcedure: ['', Validators.required],
      ApprovalDate: ['', Validators.required],
      ReviewDate: ['', Validators.required],
      NumberOfTrainings: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.policyForm.valid) {
      this.dialogRef.close(this.policyForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }
}


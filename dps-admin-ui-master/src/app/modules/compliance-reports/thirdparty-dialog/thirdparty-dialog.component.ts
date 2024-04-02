import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'fury-thirdparty-dialog',
  templateUrl: './thirdparty-dialog.component.html',
  styleUrls: ['./thirdparty-dialog.component.scss']
})
export class ThirdpartyDialogComponent implements OnInit {

  ThirdPartyForm: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<ThirdpartyDialogComponent>,
    private _formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.ThirdPartyForm = this._formBuilder.group({
      example_of_agent: ['', Validators.required],
      number_of_agents: [0, Validators.required],
      NumberOfTrainedAgents: [0, Validators.required]
    });
  }

  onSubmit() {
    if (this.ThirdPartyForm.valid) {
      this.dialogRef.close(this.ThirdPartyForm.value);
    }
  }

  onCancel() {
      this.dialogRef.close();
  }

}
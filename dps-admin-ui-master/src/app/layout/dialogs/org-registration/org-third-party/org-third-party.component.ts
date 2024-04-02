import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';
// import { ThirdParty } from 'src/app/services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { ThirdParty } from '../../../../services/api.model';
import { ApiService } from '../../../../services/api.service';

@Component({
  selector: 'app-org-third-party',
  templateUrl: './org-third-party.component.html',
  styleUrls: ['./org-third-party.component.scss']
})
export class OrgThirdPartyComponent implements OnInit {

  processing = false;
  form: FormGroup;
  status = false;
  today = new Date();
  thirdParties: ThirdParty;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: ThirdParty },
    private dialogRef: MatDialogRef<OrgThirdPartyComponent>,
    private formBuilder: FormBuilder,
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      ThirdPartyName: new FormControl('', [Validators.required]),
      Purpose: new FormControl('', [Validators.required]),
    });    

    if (this.data) {
      this.updateForm();
    }   
  }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this.thirdParties
    });
  }  

  private updateForm(): void {
    this.form.patchValue({
      ThirdPartyName: this.data.row.ThirdPartyName,
      Purpose: this.data.row.Purpose,
    });
  }

  private getFormData(): any {
    this.thirdParties = this.form.value;
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


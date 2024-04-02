import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';
// import { DataProtectionOfficer } from 'src/app/services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
// import { DataProtectionOfficer } from '../../../../modules/models/data-subject.model';
import { ApiService } from '../../../../services/api.service';
import { DataProtectionOfficer } from '../../../../services/api.model';

@Component({
  selector: 'app-org-data-protection-officer',
  templateUrl: './org-data-protection-officer.component.html',
  styleUrls: ['./org-data-protection-officer.component.scss']
})
export class OrgDataProtectionOfficerComponent implements OnInit {

  processing = false;
  form: FormGroup;
  status = false;
  today = new Date();
  _dataProtectionOfficers: DataProtectionOfficer;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: DataProtectionOfficer },
    private dialogRef: MatDialogRef<OrgDataProtectionOfficerComponent>,
    private formBuilder: FormBuilder,
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Name: new FormControl(''),
      EmailAddress: new FormControl(''),
      PhoneNumber: new FormControl(''),
      PhysicalAddress: new FormControl(''),
      PositionInOrganisation: new FormControl(''),
    });    

    if (this.data) {
      this.updateForm();
    }   
  }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this._dataProtectionOfficers
    });
  }  

  private updateForm(): void {
    this.form.patchValue({
      ID:  this.data.row.ID,
      Name: this.data.row.Name,
      PositionInOrganisation: this.data.row.PositionInOrganisation,
      EmailAddress: this.data.row.EmailAddress,
      PhoneNumber: this.data.row.PhoneNumber,
      PhysicalAddress: this.data.row.PhysicalAddress,
    });
  }

  private getFormData(): any {
    console.log('this.form.value:', this.form.value);

    this._dataProtectionOfficers = this.form.value;
  }  

  onSave(): void {
    this.processing = true;

    this.getFormData();

    setTimeout(() => {
      this.status = true;

      this.form.reset();

      this.onCloseDialog();
      
      this.processing = false;
    }, 500);
  }
}


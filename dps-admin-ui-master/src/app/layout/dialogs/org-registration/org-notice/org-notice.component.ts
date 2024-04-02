import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';
// import { DataProtectionOfficer } from 'src/app/services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { DataProtectionOfficer } from '../../../../services/api.model';
import { ApiService } from '../../../../services/api.service';


@Component({
  selector: 'app-org-notice',
  templateUrl: './org-notice.component.html',
  styleUrls: ['./org-notice.component.scss']
})
export class OrgNoticeComponent implements OnInit {

  processing = false;
  form: FormGroup;
  status = false;
  today = new Date();
  _dataProtectionOfficers: DataProtectionOfficer;

  constructor(
    private dialogRef: MatDialogRef<OrgNoticeComponent>,
    private formBuilder: FormBuilder,
    private service: ApiService,
  ) { }

  ngOnInit(): void {
   
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }  

  onSave(): void {
    this.processing = true;
    
    setTimeout(() => {
      this.status = true;

      this.form.reset();

      this.onCloseDialog();
      
      this.processing = false;
    }, 500);
  }
}


import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
// import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';
import { MainActivity } from '../../../../services/api.model';
// import { MainActivity } from 'src/app/services/api.model';
import { ApiService } from '../../../../services/api.service';
// import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-org-main-activity',
  templateUrl: './org-main-activity.component.html',
  styleUrls: ['./org-main-activity.component.scss']
})
export class OrgMainActivityComponent implements OnInit {

  processing = false;
  form: FormGroup;
  status = false;
  today = new Date();
  _mainActivities: MainActivity;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: MainActivity },
    private dialogRef: MatDialogRef<OrgMainActivityComponent>,
    private formBuilder: FormBuilder,
    private service: ApiService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      Activity: new FormControl(''),
    });    

    if (this.data) {
      this.updateForm();
    }   
  }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this._mainActivities
    });
  }  

  private updateForm(): void {
    this.form.patchValue({
      MainActivityID:  this.data.row.MainActivityID,
      Activity: this.data.row.Activity,
    });
  }

  private getFormData(): any {
    
    this._mainActivities = {
      Activity: this.form.get('Activity').value,
    }
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


import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
// import { ApiEndpointsService } from 'src/app/services/api-endpoints.service';
// import { ApiPayload, Country, CountryOfTransfer } from 'src/app/services/api.model';
// import { ApiService } from 'src/app/services/api.service';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { ApiPayload, Country, CountryOfTransfer } from '../../../../services/api.model';
import { ApiService } from '../../../../services/api.service';



@Component({
  selector: 'app-org-country',
  templateUrl: './org-country.component.html',
  styleUrls: ['./org-country.component.scss']
})
export class OrgCountryComponent implements OnInit {

  processing = false;
  form: FormGroup;
  status = false;
  today = new Date();
  country: CountryOfTransfer;
  countries: Country[] = [];
  httpSub: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: CountryOfTransfer },
    private dialogRef: MatDialogRef<OrgCountryComponent>,
    private formBuilder: FormBuilder,
    private service: ApiService,
    private http: HttpClient,
    private endpoints: ApiEndpointsService
  ) { }

  ngOnInit(): void {
    this.Fetch();
    
    this.form = this.formBuilder.group({
      Country: new FormControl('', [Validators.required]),
      Purpose: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
    });    

    if (this.data) {
      this.updateForm();
    }   
  }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this.country
    });
  }  

  private updateForm(): void {
    this.form.patchValue({
      Country: this.data.row.CountryID,
      Purpose: this.data.row.Purpose,
      Description: this.data.row.Description,
    });
  }

  private Fetch(): void {
    this.httpSub = this.http.get<Country[]>(this.endpoints.countries)
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {

      this.countries = response;

    }, (error) => {
      this.processing = false;
      this.service.determineErrorResponse(error);
    }); 
  }

  private getFormData(): any {
    let country = null;

    this.countries.filter((item) => {
      if (item.CountryID === this.form.get('Country').value) {
        country = item.Name;
      }
    });

    this.country = {
      CountryID: this.form.get('Country').value,
      Country: country,
      Purpose: this.form.get('Purpose').value,
      Description: this.form.get('Description').value,
    };
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


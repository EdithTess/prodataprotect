import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {UtilService} from '../../../../../@fury/services/util.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {ReferenceTableService} from '../../../../services/reference-table.service';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'fury-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnChanges {

  countryFormGroup: FormGroup;
  country: Country = new Country();
  // arrays
  errors: string[] = [];
  // list = [];
  list: MatTableDataSource<Country>;

  displayColumns: string [] = ['nber', 'country', 'purpose', 'description', 'actions'];

  // events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
  $resultRefCountriesEvent: EventEmitter<any> = new EventEmitter();
  $countries: CountryModel[] = [];
  subscriptions: Subscription[] = [];
  @Input() countries: Country[];
  @Input() isViewOnly: boolean;
  @Output() countryEvent = new EventEmitter<Country[]>();
  @Input() storeDataOutSideCountry: string;
  // Button Config
  buttonIcon = 'add_circle_outline';
  buttonLabel = 'Add';
  // boolean
  isEditingCountry = false;
  tableEditable = true;
  // int
  countryIndex = 0;
  countryNumber = 1;

  constructor(
      private fb: FormBuilder,
      private auth: KeycloakService,
      private utilService: UtilService,
      public snackBar: SnackBarService,
      private referenceService: ReferenceTableService,
  ) {
  }

  ngOnChanges(): void {
    // Initialize list of countries
    if (this.countries) {
      this.list = new MatTableDataSource<Country>(this.countries);
    }
  }

  ngOnInit(): void {
    this.initForm();

    this.initMainObject();
    this.subscriptions['$resultRefCountriesEvent'] = this.$resultRefCountriesEvent.subscribe(result => {
      if (result) {
        this.$countries = result;
      }
    });
    this.loadReferenceTableDetails();
  }

  private initForm(): void {

    this.countryFormGroup = this.fb.group({
      Country: new FormControl('', [Validators.required]),
      Purpose: new FormControl('', [Validators.required]),
      Description: new FormControl('', [Validators.required]),
    });
  }

  private initMainObject() {
    this.country = new Country();
  }

  addOrUpdateCountry(option: number): void {
    if (this.countryFormGroup.valid) {
      this.mapFormControlToControl(1);
      if (option === 1) {
        this.list.data.push(this.country);
        this.countries.push(this.country);
        this.list.data = [...this.list.data];
      } else {
        this.list[this.countryIndex] = this.country;
        this.countries[this.countryIndex] = this.country;
        this.list.data = [...this.countries];
      }
      // Send new country to parent
      this.countryEvent.emit(this.countries);
      // rest form and item object
      this.resetCountry();
    }
  }

  private mapFormControlToControl(option: number) {
    if (option === 1) {
      this.country.Country = this.countryFormGroup.get('Country').value;
      this.country.Purpose = this.countryFormGroup.get('Purpose').value;
      this.country.Description = this.countryFormGroup.get('Description').value;
    } else {
      this.countryFormGroup.get('Country').setValue(this.country.Country);
      this.countryFormGroup.get('Purpose').setValue(this.country.Purpose);
      this.countryFormGroup.get('Description').setValue(this.country.Description);
    }
  }

  resetCountry() {
    this.countryFormGroup.reset();
    this.country = new Country();
    this.validateCountryLabels(1);
    this.manageCountry(1);
  }

  validateCountryLabels(option: number) {
    if (option === 1) {
      this.buttonIcon = 'add_circle_outline';
      this.buttonLabel = 'Add Country';
    } else {
      this.buttonIcon = 'save';
      this.buttonLabel = 'Save';
    }
  }

  manageCountry(option: number, id ?: number) {
    if (option === 2) {
      this.country = this.countries[id];
      this.isEditingCountry = true;
      this.countryIndex = id;
      this.mapFormControlToControl(option);
    } else {
      this.isEditingCountry = false;
      this.country = new Country();
      this.countryIndex = 0;
    }
    this.validateCountryLabels(option);
  }

  editItem(index: number) {
    // Store the index of the item to be modified
    this.countryIndex = index;
    this.country = this.countries[this.countryIndex];
    this.isEditingCountry = true;
    // Map item to form fields
    this.mapFormControlToControl(index);
    this.validateCountryLabels(2);
  }

  loadReferenceTableDetails() {
    this.referenceService.getCountries(this.$processingEvent, this.$resultRefCountriesEvent, this.$errorsEvent);
  }

  deleteItem(index: number) {
    this.list.data.splice(index, 1);
    this.countries.splice(index, 1);
    this.list.data = [...this.list.data];
    // Send items to parent
    this.countryEvent.emit(this.countries);
    this.isEditingCountry = false;
  }

  isValidForm() {
    return this.countryFormGroup.valid;
  }
}

export class Country {
  Country: string;
  Purpose: string;
  Description: string;
}

export interface CountryModel {
  CountryID: number;
  Iso: string;
  Name: string;
  PhoneCode: string;
}

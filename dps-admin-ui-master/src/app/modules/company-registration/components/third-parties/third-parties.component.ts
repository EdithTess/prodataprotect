import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ThirdParties} from '../company-registration.model';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {UtilService} from '../../../../../@fury/services/util.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'fury-third-parties',
  templateUrl: './third-parties.component.html',
  styleUrls: ['./third-parties.component.scss']
})
export class ThirdPartiesComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() thirdParties: ThirdParties[];
  @Input() isViewOnly: boolean;
  @Input() disclosePersonalData: string;
  @Output() thirdPartiesEvent: EventEmitter<ThirdParties[]> = new EventEmitter<ThirdParties[]>();

  thirdParty: ThirdParties = new ThirdParties();

  thirdPartyFormGroup: FormGroup;
  disclosePersonalDataTrimmed = '';
  subscriptions: Subscription[] = [];

  // arrays
  errors: string[] = [];
  list: MatTableDataSource<ThirdParties>;
  displayColumns: string [] = ['nber', 'ThirdPartyName', 'purposeOfDisclosure', 'actions'];
  $impactOfBreaches: ThirdParties [] = [];

  // events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
  // Button Config
  buttonIcon = 'add_circle_outline';
  buttonLabel = 'Add';
  // boolean
  isEditingThirdParty = false;
  tableEditable = true;
  // int
  thirdPartiesIndex = 0;
  thirdPartiesNumber = 1;
  thirdPartiesList: any;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(
      private fb: FormBuilder,
      public snackBar: SnackBarService
  ) {
  }


  ngOnInit(): void {
    this.initForms();
    this.initMainObject();
  }

  ngOnChanges(): void {
    if (this.thirdParties) {
      this.list = new MatTableDataSource<ThirdParties>(this.thirdParties);
      this.list.paginator = this.paginator;
    }
  }

  ngAfterViewInit() {
  }

  private initMainObject() {
    this.thirdParty = new ThirdParties();
  }

  private initForms(): void {
    this.thirdPartyFormGroup = this.fb.group(
        {
          // contactPerson: [null, Validators.required],
          thirdPartyName: [null, Validators.required],
          purposeOfDisclosure: [null, Validators.required],
          // phoneNumber: [null, Validators.required],
        }
    );
  }

  addOrUpdateThirdParties(option: number): void {
    if (this.thirdPartyFormGroup.valid) {
      this.mapFormControlToControl(1);
      if (option === 1) {
        this.list.data.push(this.thirdParty);
        this.thirdParties.push(this.thirdParty);
        this.list.data = [...this.list.data];
      } else {
        this.list[this.thirdPartiesIndex] = this.thirdParty;
        this.thirdParties[this.thirdPartiesIndex] = this.thirdParty;
        this.list.data = [...this.thirdParties];
      }
      this.thirdPartiesEvent.emit(this.thirdParties);
      this.resetControl();
    }
  }

  resetControl() {
    this.thirdPartyFormGroup.reset();
    this.thirdParty = new ThirdParties();
    this.validateThirdPartiesLabels(1);
    this.manageControl(1);
  }

  validateThirdPartiesLabels(option: number) {
    if (option === 1) {
      this.buttonIcon = 'add_circle_outline';
      this.buttonLabel = 'Add new thirdParty data';
    } else {
      this.buttonIcon = 'save';
      this.buttonLabel = 'Save';
    }
  }

  manageControl(option: number, id ?: number) {
    if (option === 2) {
      this.thirdParty = this.thirdParties[id];
      this.isEditingThirdParty = true;
      this.thirdPartiesIndex = id;
      this.mapFormControlToControl(option);
    } else {
      this.isEditingThirdParty = false;
      this.thirdParty = new ThirdParties();
      this.thirdPartiesIndex = 0;
    }
    this.validateThirdPartiesLabels(option);
  }


  private mapFormControlToControl(option: number) {
    if (option === 1) {
      // this.thirdParty.ContactPerson = this.thirdPartyFormGroup.get('contactPerson').value;
      this.thirdParty.ThirdPartyName = this.thirdPartyFormGroup.get('thirdPartyName').value;
      this.thirdParty.EmailAddress = this.thirdPartyFormGroup.get('purposeOfDisclosure').value;
      // this.thirdParty.PhoneNumber = this.thirdPartyFormGroup.get('phoneNumber').value;
    } else {
      this.thirdParty.ThirdPartyName = this.thirdPartyFormGroup.get('thirdPartyName').value;
      this.thirdParty.EmailAddress = this.thirdPartyFormGroup.get('purposeOfDisclosure').value;
      // this.thirdPartyFormGroup.get('contactPerson').setValue(this.thirdParty.ContactPerson);
      // this.thirdPartyFormGroup.get('thirdPartyName').setValue(this.thirdParty.ThirdPartyName);
      // this.thirdPartyFormGroup.get('emailAddress').setValue(this.thirdParty.EmailAddress);
      // this.thirdPartyFormGroup.get('phoneNumber').setValue(this.thirdParty.PhoneNumber);
    }
  }

  deleteItem(index: number) {
    this.list.data.splice(index, 1);
    this.thirdParties.splice(index, 1);
    this.list.data = [...this.list.data];
    // Send items to parent
    this.thirdPartiesEvent.emit(this.thirdParties);
    this.isEditingThirdParty = false;
  }

  isValidForm() {
    return this.thirdPartyFormGroup.valid;
  }


}

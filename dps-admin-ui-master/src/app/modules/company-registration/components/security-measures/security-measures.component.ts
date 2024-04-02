import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SecurityMeasuresModel} from '../company-registration.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {UtilService} from '../../../../../@fury/services/util.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';

@Component({
  selector: 'fury-security-measures',
  templateUrl: './security-measures.component.html',
  styleUrls: ['./security-measures.component.scss']
})
export class SecurityMeasuresComponent implements OnInit {

  @Input() securityMeasures: SecurityMeasuresModel[];
  @Input() isViewOnly: boolean;
  @Output() securityEvent = new EventEmitter<SecurityMeasuresModel[]>();

  securityMeasure : SecurityMeasuresModel = new SecurityMeasuresModel();

  securityFormGroup: FormGroup;

  subscriptions: Subscription[] = [];

  // arrays
  errors: string[] = [];
  list = [];
  displayColumns: string [] = ['nber', 'security_measure', 'actions'];
  $securityMeasure: Subscription [] = [];

  // events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
  // Button Config
  buttonIcon = 'add_circle_outline';
  buttonLabel = 'Add';
  // boolean
  isEditingSecurityMeasure = false;
  tableEditable = true;
  // int
  securityMeasureIndex = 0;
  securityMeasureNumber = 1;

  constructor(
      private fb: FormBuilder,
      private auth: KeycloakService,
      private utilService: UtilService,
      public snackBar: SnackBarService
  ) {
  }

  ngOnInit(): void {
    this.initForms();
    if (this.securityMeasures) {
      this.securityMeasures.forEach(securityMeasure => this.list.push(securityMeasure));
    }
    this.initMainObject();
  }

  private initMainObject() {
    this.securityMeasure = new SecurityMeasuresModel();
  }

  private initForms(): void {
    this.securityFormGroup = this.fb.group(
        {
          security_measure: [null, Validators.required],
        }
    );
  }

  addOrUpdateSecurityMeasure(option: number): void {

    if (this.securityFormGroup.valid) {
      this.mapFormControlToControl(1);
      if (option === 1) {
        this.list.push(this.securityMeasure);
        this.securityMeasures.push(this.securityMeasure);
        this.list = [...this.list];
      } else {
        this.list[this.securityMeasureIndex] = this.securityMeasure;
        this.securityMeasures[this.securityMeasureIndex] = this.securityMeasure;
        this.list = [...this.securityMeasures];
      }
      this.securityEvent.emit(this.securityMeasures);
      this.resetControl();
    }
  }

  resetControl() {
    this.securityFormGroup.reset();
    this.securityMeasure = new SecurityMeasuresModel();
    this.validateSecurityMeasureLabels(1);
    this.manageControl(1);
  }
  validateSecurityMeasureLabels(option: number) {
    if (option === 1) {
      this.buttonIcon = 'add_circle_outline';
      this.buttonLabel = 'Add new Security Measure';
    } else {
      this.buttonIcon = 'save';
      this.buttonLabel = 'Save';
    }
  }

  manageControl(option: number, id ?: number) {
    if (option === 2) {
      this.securityMeasure = this.securityMeasures[id];
      this.isEditingSecurityMeasure = true;
      this.securityMeasureIndex = id;
      this.mapFormControlToControl(option);
    } else {
      this.isEditingSecurityMeasure = false;
      this.securityMeasure = new SecurityMeasuresModel();
      this.securityMeasureIndex = 0;
    }
    this.validateSecurityMeasureLabels(option);
  }


  private mapFormControlToControl(option: number) {
    if (option === 1) {
      this.securityMeasure.Name = this.securityFormGroup.get('fileName').value;
    } else {
      this.securityFormGroup.get('fileName').setValue(this.securityMeasures);
    }
  }

  deleteItem(index: number) {
    this.list.splice(index, 1);
    this.securityMeasures.splice(index, 1);
    this.list = [...this.list];
    // Send items to parent
    this.securityEvent.emit(this.securityMeasures);
    this.isEditingSecurityMeasure = false;
  }

  isValidForm() {
    return this.securityFormGroup.valid;
  }

}

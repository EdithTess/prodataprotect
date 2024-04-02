import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Observable, of, ReplaySubject, Subscription} from 'rxjs';
import {DataAffectedCategoryModel, PERSONAL_DATA_AFFECTED} from '../../../models/personal-data-affected.model';
import {IMPACT_OF_BREACH, ImpactOfBreachModel, PersonalDataModel} from '../../breach-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {MatSnackBar} from '@angular/material/snack-bar';
import {UtilService} from '../../../../../@fury/services/util.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';

@Component({
  selector: 'fury-data-breach-impact',
  templateUrl: './data-breach-impact.component.html',
  styleUrls: ['./data-breach-impact.component.scss']
})
export class DataBreachImpactComponent implements OnInit {

  // Simulating A DataCategory and SubCategory
  subject$: ReplaySubject<ImpactOfBreachModel> = new ReplaySubject<ImpactOfBreachModel>(1);
  data$: Observable<ImpactOfBreachModel> = this.subject$.asObservable();

  @Input() impactOfBreaches: ImpactOfBreachModel[];
  @Input() isViewOnly: boolean;
  @Input() impactOfBreachEvent = new EventEmitter<ImpactOfBreachModel[]>();

  impactOfBreach: ImpactOfBreachModel = new ImpactOfBreachModel();

  impactOfBreachFormGroup: FormGroup;

  subscriptions: Subscription[] = [];

  //arrays
  errors: string[] = [];
  list = [];
  displayColumns: string [] = ['nber', 'impact', 'actions'];
  $impactOfBreaches: ImpactOfBreachModel [] = [];

  //events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
  //Button Config
  buttonIcon = 'add_circle_outline';
  buttonLabel = 'Add';
  //boolean
  isEditingImpactOfBreach = false;
  tableEditable: boolean = true;
  // int
  impactOfBreachIndex = 0;
  impactOfBreachNumber = 1;

  constructor(
      private fb: FormBuilder,
      private auth: KeycloakService,
      private utilService: UtilService,
      public snackBar: SnackBarService
  ) { }

  ngOnInit(): void {
    this.initForms();
    if (this.impactOfBreaches) {
      this.impactOfBreaches.forEach(impactOfBreach => this.list.push(impactOfBreach));
    }
    this.getSampleJson.subscribe(dataCategories => {
      this.$impactOfBreaches = dataCategories;
    });
    this.initMainObject();
  }

  private initMainObject() {
    this.impactOfBreach = new ImpactOfBreachModel();
  }

  private initForms(): void {
    this.impactOfBreachFormGroup = this.fb.group(
        {
          potentialImpact: [null, Validators.required],
        }
    );
  }

  addOrUpdateImpactOfBreach(option: number): void {
    if (this.impactOfBreachFormGroup.valid) {
      if (this.checkForDuplicates(option)) {
        this.snackBar.snackBarAlert(
            'Error', 'Imapact Already Selected !!', {
              duration: 3000
            }
        );
      } else {
        this.mapFormControlToControl(1);
        if (option === 1) {
          this.list.push(this.impactOfBreach);
          this.impactOfBreaches.push(this.impactOfBreach);
          this.list = [...this.list];
        } else {
          this.list[this.impactOfBreachIndex] = this.impactOfBreach;
          this.impactOfBreaches[this.impactOfBreachIndex] = this.impactOfBreach;
          this.list = [...this.impactOfBreaches];
        }
        this.resetImpactOfBreach();
        console.log(this.list)
      }
      }

  }

  resetImpactOfBreach() {
    this.impactOfBreachFormGroup.reset();
    this.impactOfBreach = new ImpactOfBreachModel();
    this.validatePolicyLabels(1);
    this.manageImpactOfBreach(1);
  }

  validatePolicyLabels(option: number) {
    if (option === 1) {
      this.buttonIcon = 'add_circle_outline';
      this.buttonLabel = 'Add potential Imapact';
    } else {
      this.buttonIcon = 'save';
      this.buttonLabel = 'Save';
    }
  }


  manageImpactOfBreach(option: number, id ?: number) {
    if (option === 2) {
      this.impactOfBreach = this.impactOfBreaches[id];
      this.isEditingImpactOfBreach = true;
      this.impactOfBreachIndex = id;
      this.mapFormControlToControl(option);
    } else {
      this.isEditingImpactOfBreach = false;
      this.impactOfBreach = new ImpactOfBreachModel();
      this.impactOfBreachIndex = 0;
    }
    this.validatePolicyLabels(option);
  }


  private checkForDuplicates(option: number) {
    const impact = this.impactOfBreachFormGroup.get('potentialImpact').value;

    if (option === 1) {
      return !!(this.impactOfBreaches.find(item => item.rating === impact.rating));
    } else {return null;}
  }

  editItem(index: number) {
    // Store the index of the item to be modified
    this.impactOfBreachIndex = index;
    this.impactOfBreach = this.impactOfBreaches[this.impactOfBreachIndex];
    this.isEditingImpactOfBreach = true;
    // Map item to form fields
    this.mapFormControlToControl(index);
    this.validatePolicyLabels(2);
  }

  deleteItem(index: number) {
    this.list.splice(index, 1);
    this.impactOfBreaches.splice(index, 1);
    this.list = [...this.list];
    // Send items to parent
    this.impactOfBreachEvent.emit(this.impactOfBreaches);
    this.isEditingImpactOfBreach = false;
  }

  private mapFormControlToControl(option: number) {
    if (option === 1) {
      this.impactOfBreach.impact = this.impactOfBreachFormGroup.get('potentialImpact').value;
    } else {
      this.impactOfBreachFormGroup.get('potentialImpact').setValue(this.impactOfBreach.impact);
    }
  }

  isValidForm() {
    let formValid = this.impactOfBreachFormGroup.valid;
    return formValid;
  }

  get getSampleJson() {
    return of(IMPACT_OF_BREACH.map(document => document));
  }


}

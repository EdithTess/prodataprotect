import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Observable, of, ReplaySubject, Subscription} from 'rxjs';
import {DataAffectedCategoryModel, PERSONAL_DATA_AFFECTED} from '../../../models/personal-data-affected.model';
import {
    BREACH_CONTROL,
    BreachControlCategoryReferenceModel,
    BreachControlModel,
    BreachControlReferenceModel,
    CONTROLS,
    PersonalDataModel
} from '../../breach-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {UtilService} from '../../../../../@fury/services/util.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {element} from 'protractor';

@Component({
    selector: 'fury-data-breach-controls',
    templateUrl: './data-breach-controls.component.html',
    styleUrls: ['./data-breach-controls.component.scss']
})
export class DataBreachControlsComponent implements OnInit {
    // Simulating A DataCategory and SubCategory
    subject$: ReplaySubject<BreachControlModel> = new ReplaySubject<BreachControlModel>(1);
    data$: Observable<BreachControlModel> = this.subject$.asObservable();

    @Input() breachControls: BreachControlModel[];
    @Input() isViewOnly: boolean;
    @Input() breachControlEvent = new EventEmitter<BreachControlModel[]>();

    breachControl: BreachControlModel = new BreachControlModel();

    breachControlFormGroup: FormGroup;

    subscriptions: Subscription[] = [];

    //arrays
    errors: string[] = [];
    list = [];
    displayColumns: string [] = ['nber', 'control', 'title', 'description', 'actions'];
    $breachControls: BreachControlReferenceModel [] = [];
    $breachControlCategories: BreachControlCategoryReferenceModel [] = [];
    $controls: any [] = [];
    $controlCategories: any [] = [];
    //events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
    //Button Config
    buttonIcon = 'add_circle_outline';
    buttonLabel = 'Add';
    //boolean
    isEditingControl = false;
    tableEditable: boolean = true;
    // int
    personalDataIndex = 0;
    personalNumber = 1;


    constructor(
        private fb: FormBuilder,
        private auth: KeycloakService,
        private utilService: UtilService,
        public snackBar: SnackBarService
    ) {
    }

    ngOnInit(): void {
        this.initForms();
        if (this.breachControls) {
            this.breachControls.forEach(personalData => this.list.push(personalData));
        }
        this.getSampleJson.subscribe(controls => {
            this.$breachControls = controls;
        });
        this.getBreachControlJson.subscribe(breachControls => {
            this.$controls = breachControls;
        });
        this.initMainObject();
    }

    private initMainObject() {
        this.breachControl = new BreachControlModel();
    }

    private initForms(): void {
        this.breachControlFormGroup = this.fb.group(
            {
                control: [null, Validators.required],
                controlCategory: [null, Validators.required],
                controlCategoryDesc: [null, Validators.required],
            }
        );
    }

    addOrUpdateControl(option: number): void {

        if (this.breachControlFormGroup.valid) {
            // if (this.checkForDuplicates(option)) {
            //   this.snackBar.snackBarAlert(
            //       'Error', 'Potential Consquence Already exist in the Table, Please Update', {
            //         duration: 3000
            //       }
            //   );
            // } else {
            this.mapFormControlToControl(1);
            if (option === 1) {
                this.list.push(this.breachControl);
                this.breachControls.push(this.breachControl);
                this.list = [...this.list];
            } else {
                this.list[this.personalDataIndex] = this.breachControl;
                this.breachControls[this.personalDataIndex] = this.breachControl;
                this.list = [...this.breachControls];
            }
            this.resetControl();
        }
        console.log(this.list);
        // }
    }

    resetControl() {
        this.breachControlFormGroup.reset();
        this.breachControl = new BreachControlModel();
        this.validatePolicyLabels(1);
        this.manageControl(1);
    }

    validatePolicyLabels(option: number) {
        if (option === 1) {
            this.buttonIcon = 'add_circle_outline';
            this.buttonLabel = 'Add new control data';
        } else {
            this.buttonIcon = 'save';
            this.buttonLabel = 'Save';
        }
    }

    // private checkForDuplicates(option: number) {
    //   const control = this.breachControlFormGroup.get('control').value;
    //   const controlCategory = this.breachControlFormGroup.get('controlCategory').value;
    //   if (option === 1) {
    //     return !!(this.breachControls.find(item => item.controlName  ));
    //   }
    // }

    onSelectControl(category) {
        this.$controlCategories = [];
        var controlCategories = this.$controls.filter(categories => categories.controlName === category.value.name);
        controlCategories.forEach(
            element => this.$controlCategories.push(element)
        );
    }

    onSelectControlCategoryDesc(controlCategory){
        console.log(controlCategory);
        this.breachControlFormGroup.get('controlCategoryDesc').setValue(controlCategory.value.subCategoryDesc);
    }


    disableSubCategories() {
      if (this.$controlCategories.length === 0) {
        this.breachControlFormGroup.get('controlCategory').disable();
          this.breachControlFormGroup.get('controlCategoryDesc').disable();
      }
    }

    manageControl(option: number, id ?: number) {
        if (option === 2) {
            this.breachControl = this.breachControls[id];
            this.isEditingControl = true;
            this.personalDataIndex = id;
            this.mapFormControlToControl(option);
        } else {
            this.isEditingControl = false;
            this.breachControl = new BreachControlModel();
            this.personalDataIndex = 0;
        }
        this.validatePolicyLabels(option);
    }

    //
    // private checkForDuplicates(option: number) {
    //   const personalData = this.personalDataFormGroup.get('dataCategory').value;
    //   const _personalData = this.personalDataFormGroup.get('dataSubCategory').value;
    //   console.log(_personalData);
    //   if (option === 1) {
    //     return !!(this.personalDataList.find(item => item.dataCategory === personalData));
    //   }
    // }

    editItem(index: number) {
        // Store the index of the item to be modified
        this.personalDataIndex = index;
        this.breachControl = this.breachControls[this.personalDataIndex];
        this.isEditingControl = true;
        // Map item to form fields
        this.mapFormControlToControl(index);
        this.validatePolicyLabels(2);
    }

    deleteItem(index: number) {
        this.list.splice(index, 1);
        this.breachControls.splice(index, 1);
        this.list = [...this.list];
        // Send items to parent
        this.breachControlEvent.emit(this.breachControls);
        this.isEditingControl = false;
    }

    private mapFormControlToControl(option: number) {
        if (option === 1) {
            this.breachControl.controlName = this.breachControlFormGroup.get('control').value;
            this.breachControl.subCategoryName = this.breachControlFormGroup.get('controlCategory').value;
            this.breachControl.subCategoryDesc = this.breachControlFormGroup.get('controlCategoryDesc').value;
        } else {
            this.breachControlFormGroup.get('control').setValue(this.breachControl.controlName);
            this.breachControlFormGroup.get('controlCategory').setValue(this.breachControl.subCategoryName);
            this.breachControlFormGroup.get('controlCategoryDesc').setValue(this.breachControl.subCategoryDesc);
        }
    }

    isValidForm() {
        let formValid = this.breachControlFormGroup.valid;
        return formValid;
    }

    get getSampleJson() {
        return of(BREACH_CONTROL.map(document => document));
    }

    get getBreachControlJson() {
        return of(CONTROLS.map(document => document));
    }


}

import {Component, EventEmitter, Input,Output, OnInit} from '@angular/core';
import {PersonalDataModel} from '../../complaints-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable, of, ReplaySubject, Subscription} from 'rxjs';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {MatSnackBar} from '@angular/material/snack-bar';
import {COMPLAINT_JSON, ComplaintModel} from '../../../complaints/complaints-model';
import {
    $DataAffectedCategoryModel,
    DataAffectedCategoryModel,
    DataAffectedSubCategoryModel,
    PERSONAL_DATA_AFFECTED
} from '../../../models/personal-data-affected.model';
import {UtilService} from '../../../../../@fury/services/util.service';
import {DataSubjectModel} from '../../../models/data-subject.model';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';


@Component({
  selector: 'fury-data-complaint-personal-data-itemised',
  templateUrl: './data-complaint-personal-data-itemised.component.html',
  styleUrls: ['./data-complaint-personal-data-itemised.component.scss']
})
export class DataComplaintPersonalDataItemisedComponent implements OnInit {

  // Simulating A DataCategory and SubCategory
  subject$: ReplaySubject<DataAffectedCategoryModel> = new ReplaySubject<DataAffectedCategoryModel>(1);
  data$: Observable<DataAffectedCategoryModel> = this.subject$.asObservable();

  @Input() personalDataList: PersonalDataModel[];
  @Input() isViewOnly: boolean;
  @Input() personalDataEvent = new EventEmitter<PersonalDataModel[]>();
  @Output() PersonalDataAffected = new EventEmitter<PersonalDataModel[]>();

  personalData: PersonalDataModel = new PersonalDataModel();

  personalDataFormGroup: FormGroup;

  subscriptions: Subscription[] = [];

  //arrays
  errors: string[] = [];
  list = [];
  displayColumns: string [] = ['nber', 'personalDataCategory', 'personalDataSubCategory', 'toWhatExtent','affectedIndividuals', 'affectedRecords','complaintsMade','individualAwareness', 'actions'];
  dataCategories: DataAffectedCategoryModel [] = [];
  $dataCategories: DataAffectedCategoryModel [] = [];
  $subCategories: any [] = [];

  //events
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
  //Button Config
  buttonIcon = 'add_circle_outline';
  buttonLabel = 'Add';
  //boolean
  isEditingPersonalData = false;
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
        if (this.personalDataList) {
            this.personalDataList.forEach(personalData => this.list.push(personalData));
        }
        this.getSampleJson.subscribe(dataCategories => {
            this.$dataCategories = dataCategories;
        });
        this.$subCategories;
        this.initMainObject();
    }

    private initMainObject() {
        this.personalData = new PersonalDataModel();
    }

    private initForms(): void {
        this.personalDataFormGroup = this.fb.group(
            {
                dataCategory: [null, Validators.required],
                dataSubCategory: [null, Validators.required],
                toWhatExtent: [null, Validators.required],
                affectedIndividuals: [null, Validators.required],
                recordsInvolved: [null, Validators.required],
                individualAwareness: [null, Validators.required],
                individualComplain: [null, Validators.required],
            }
        );
    }

    addOrUpdatePersonalData(option: number): void {
        if (this.personalDataFormGroup.valid) {
            if (this.checkForDuplicates(option)) {
                this.snackBar.snackBarAlert(
                    'Error', 'Potential Consquence Already exist in the Table, Please Update', {
                        duration: 3000
                    }
                );
            } else {
                this.mapFormControlToControl(1);
                if (option === 1) {
                    this.list.push(this.personalData);
                    this.personalDataList.push(this.personalData);
                    this.list = [...this.list];
                } else {
                    this.list[this.personalDataIndex] = this.personalData;
                    this.personalDataList[this.personalDataIndex] = this.personalData;
                    this.list = [...this.personalDataList];
                }
                this.resetPersonalData();
            }
            console.log(this.list)
            this.PersonalDataAffected.emit(this.personalDataList);
        }
    }

    resetPersonalData() {
        this.personalDataFormGroup.reset();
        this.personalData = new PersonalDataModel();
        this.validatePolicyLabels(1);
        this.managePersonalData(1);
    }

    validatePolicyLabels(option: number) {
        if (option === 1) {
            this.buttonIcon = 'add_circle_outline';
            this.buttonLabel = 'Add new personal data';
        } else {
            this.buttonIcon = 'save';
            this.buttonLabel = 'Save';
        }
    }

    onSelectCategory(category) {
        this.$subCategories = [];
        var categories = this.$dataCategories.find(categories => categories === category.value);
        categories.subCategories.forEach(
            element => this.$subCategories.push(element)
        );
        this.personalDataFormGroup.get('dataSubCategory').enable();
    }

    disableSubCategories() {
        if (this.$subCategories.length === 0) {
            this.personalDataFormGroup.get('dataSubCategory').disable();
        }
    }

    managePersonalData(option: number, id ?: number) {
        if (option === 2) {
            this.personalData = this.personalDataList[id];
            this.isEditingPersonalData = true;
            this.personalDataIndex = id;
            this.mapFormControlToControl(option);
        } else {
            this.isEditingPersonalData = false;
            this.personalData = new PersonalDataModel();
            this.personalDataIndex = 0;
        }
        this.validatePolicyLabels(option);
    }


    private checkForDuplicates(option: number) {
        const personalData = this.personalDataFormGroup.get('dataCategory').value;
        const _personalData = this.personalDataFormGroup.get('dataSubCategory').value;
        console.log(_personalData);
        if (option === 1) {
            return !!(this.personalDataList.find(item => item.dataCategory === personalData));
        } else { return null; }
    }

    editItem(index: number) {
        // Store the index of the item to be modified
        this.personalDataIndex = index;
        this.personalData = this.personalDataList[this.personalDataIndex];
        this.isEditingPersonalData = true;
        // Map item to form fields
        this.mapFormControlToControl(index);
        this.validatePolicyLabels(2);
    }

    deleteItem(index: number) {
        this.list.splice(index, 1);
        this.personalDataList.splice(index, 1);
        this.list = [...this.list];
        // Send items to parent
        this.personalDataEvent.emit(this.personalDataList);
        this.isEditingPersonalData = false;
    }

    private mapFormControlToControl(option: number) {
        if (option === 1) {
            this.personalData.dataCategory = this.personalDataFormGroup.get('dataCategory').value;
            this.personalData.dataSubCategory = this.personalDataFormGroup.get('dataSubCategory').value;
            
        } else {
            this.personalDataFormGroup.get('dataCategory').setValue(this.personalData.dataCategory);
            this.personalDataFormGroup.get('dataSubCategory').setValue(this.personalData.dataSubCategory);
            
        }
    }

    isValidForm() {
        let formValid = this.personalDataFormGroup.valid;
        return formValid;
    }

    get getSampleJson() {
        return of(PERSONAL_DATA_AFFECTED.map(document => document));
    }

  

}

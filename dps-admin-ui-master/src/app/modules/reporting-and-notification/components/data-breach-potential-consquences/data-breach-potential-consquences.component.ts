import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {Observable, of, ReplaySubject, Subscription} from 'rxjs';
import {ConsequenceModel, CONSQUENCES, POTENTIAL_CONSQUENCES, PotentialConsequenceModel} from '../../breach-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {UtilService} from '../../../../../@fury/services/util.service';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';

@Component({
    selector: 'fury-data-breach-potential-consquences',
    templateUrl: './data-breach-potential-consquences.component.html',
    styleUrls: ['./data-breach-potential-consquences.component.scss']
})
export class DataBreachPotentialConsquencesComponent implements OnInit {

    // Simulating A DataCategory and SubCategory
    subject$: ReplaySubject<PotentialConsequenceModel> = new ReplaySubject<PotentialConsequenceModel>(1);
    data$: Observable<PotentialConsequenceModel> = this.subject$.asObservable();

    @Input() consquences: PotentialConsequenceModel[];
    @Input() isViewOnly: boolean;
    @Input() consquenceEvent = new EventEmitter<PotentialConsequenceModel[]>();

    consquence: PotentialConsequenceModel = new PotentialConsequenceModel();

    consquenceFormGroup: FormGroup;

    subscriptions: Subscription[] = [];

    //arrays
    errors: string[] = [];
    list = [];
    displayColumns: string [] = ['nber', 'consquence', 'details', 'actions'];
    $consquences: ConsequenceModel [] = [];
    $potentialConsquences: PotentialConsequenceModel [] = [];
    $additionalDetails: any [] = [];

    //events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
    //Button Config
    buttonIcon = 'add_circle_outline';
    buttonLabel = 'Add';
    //boolean
    isEditingConsquence = false;
    tableEditable: boolean = true;
    // int
    consquenceIndex = 0;
    consquenceNumber = 1;

    constructor(
        private fb: FormBuilder,
        private auth: KeycloakService,
        private utilService: UtilService,
        public snackBar: SnackBarService
    ) {
    }

    ngOnInit(): void {
        // Init forms
        this.initForms();
        // Initialize list of policies
        if (this.consquences) {
            this.consquences.forEach(policy => {
                this.list.push(policy);
            });
        }
        this.getSampleJson.subscribe(counsquences => {
            this.$consquences = counsquences;
        });
        this.getPotentialConsquences.subscribe(potentialConsquences => this.$potentialConsquences = potentialConsquences);
        this.initMainObject();
    }


    private initMainObject() {
        this.consquence = new PotentialConsequenceModel();
    }

    private initForms(): void {
        this.consquenceFormGroup = this.fb.group(
            {
                potentialConsequence: [null, Validators.required],
                details: [null, Validators.required],
            }
        );
    }

    addOrUpdateConsquence(option: number): void {
        if (this.consquenceFormGroup.valid) {
            if (this.checkForDuplicates(option)) {
                this.snackBar.snackBarAlert(
                    'Error', 'Potential Consquence Already exist in the Table, Please Update', {
                        duration: 3000
                    }
                );
            }else {
                this.mapFormControlToControl(1);
                if (option === 1) {
                    this.list.push(this.consquence);
                    this.consquences.push(this.consquence);
                    this.list = [...this.list];
                } else {
                    this.list[this.consquenceIndex] = this.consquence;
                    this.consquences[this.consquenceIndex] = this.consquence;
                    this.list = [...this.consquences];
                }
                console.log(this.list);
                this.resetConsquence();
            }
        }
    }

    resetConsquence() {
        this.consquenceFormGroup.reset();
        this.consquence = new PotentialConsequenceModel();
        this.validateConsquenceLabels(1);
        this.manageConsquence(1);
    }

    validateConsquenceLabels(option: number) {
        if (option === 1) {
            this.buttonIcon = 'add_circle_outline';
            this.buttonLabel = 'Add potential consquence';
        } else {
            this.buttonIcon = 'save';
            this.buttonLabel = 'Save';
        }
    }


    manageConsquence(option: number, id ?: number) {
        if (option === 2) {
            this.consquence = this.consquences[id];
            this.isEditingConsquence = true;
            this.consquenceIndex = id;
            this.mapFormControlToControl(option);
        } else {
            this.isEditingConsquence = false;
            this.consquence = new PotentialConsequenceModel();
            this.consquenceIndex = 0;
        }
        this.validateConsquenceLabels(option);
    }


    private checkForDuplicates(option: number) {
        const potentialConsequence = this.consquenceFormGroup.get('potentialConsequence').value;

        if (option === 1) {
            return !!(this.consquences.find(item => item.potentialConsquence === potentialConsequence));
        } else {return   null;}
    }

    editItem(index: number) {
        // Store the index of the item to be modified
        this.consquenceIndex = index;
        this.consquence = this.consquences[this.consquenceIndex];
        this.isEditingConsquence = true;
        // Map item to form fields
        this.mapFormControlToControl(index);
        this.validateConsquenceLabels(2);
    }

    deleteItem(index: number) {
        this.list.splice(index, 1);
        this.consquences.splice(index, 1);
        this.list = [...this.list];
        // Send items to parent
        this.consquenceEvent.emit(this.consquences);
        this.isEditingConsquence = false;
    }

    private mapFormControlToControl(option: number) {
        if (option === 1) {
            this.consquence.potentialConsquence = this.consquenceFormGroup.get('potentialConsequence').value;
            this.consquence.additional = this.consquenceFormGroup.get('details').value;
        } else {
            this.consquenceFormGroup.get('potentialConsequence').setValue(this.consquence.potentialConsquence);
            this.consquenceFormGroup.get('details').setValue(this.consquence.additional);
        }
    }

    isValidForm() {
        return this.consquenceFormGroup.valid;
    }

    get getSampleJson() {
        return of(CONSQUENCES.map(document => document));
    }

    get getPotentialConsquences() {
        return of(POTENTIAL_CONSQUENCES.map(document => document));
    }

    onSelectPotentialConsquence(category) {
        this.$additionalDetails = [];
        // tslint:disable-next-line:max-line-length
        const additionalInfo = this.$potentialConsquences.filter(potentialConsquences => potentialConsquences.potentialConsquence === category.value.consquence);
        additionalInfo.forEach(element => this.$additionalDetails.push(element));
        this.consquenceFormGroup.get('details').enable();
    }

    disableAdditionalField() {
        if (this.$potentialConsquences.length === 0) {
            this.consquenceFormGroup.get('details').disable();
        }
    }

}

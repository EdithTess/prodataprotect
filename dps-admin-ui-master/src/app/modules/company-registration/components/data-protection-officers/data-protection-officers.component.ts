import {Component, EventEmitter, Input, OnInit} from '@angular/core';
import {
    BreachControlCategoryReferenceModel,
    BreachControlModel,
    BreachControlReferenceModel, ImpactOfBreachModel
} from '../../../reporting-and-notification/breach-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {DataProtectionOfficer} from '../../../models/data-subject.model';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {KeycloakService} from 'keycloak-angular';
import {SnackBarService} from '../../../../pages/services/snack-bar.service';
import {UtilService} from '../../../../../@fury/services/util.service';

@Component({
    selector: 'fury-data-protection-officers',
    templateUrl: './data-protection-officers.component.html',
    styleUrls: ['./data-protection-officers.component.scss']
})
export class DataProtectionOfficersComponent implements OnInit {

    @Input() dataProtectionOfficers: DataProtectionOfficer[];
    @Input() isViewOnly: boolean;
    @Input() dataProtectionOfficerEvent = new EventEmitter<DataProtectionOfficer[]>();

    dataProtectionOfficer: DataProtectionOfficer = new DataProtectionOfficer();

    dataProtectionOfficersFormGroup: FormGroup;

    subscriptions: Subscription[] = [];

    //arrays
    errors: string[] = [];
    list = [];
    displayColumns: string [] = ['nber', 'name', 'postionInOrganisation', 'email', 'physicalAddress', 'phoneNumber', 'actions'];
    $dataProtectionOfficers: DataProtectionOfficer [] = [];
    //events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
    //Button Config
    buttonIcon = 'add_circle_outline';
    buttonLabel = 'Add';
    //boolean
    isEditingDataProtectionOfficer = false;
    tableEditable: boolean = true;
    // int
    dataProtectionOfficerIndex = 0;
    dataProtectionOfficerNumber = 1;

    constructor(
        private fb: FormBuilder,
        private auth: KeycloakService,
        private utilService: UtilService,
        public snackBar: SnackBarService
    ) {

    }

    ngOnInit(): void {
        this.initForms();
        console.log("DPO " + this.dataProtectionOfficers);
        if (this.dataProtectionOfficers) {
            this.dataProtectionOfficers.forEach(dataProtectionOfficer => this.list.push(dataProtectionOfficer));
        }
        this.initMainObject();
    }

    private initMainObject() {
        this.dataProtectionOfficer = new DataProtectionOfficer();
    }

    private initForms(): void {
        this.dataProtectionOfficersFormGroup = this.fb.group(
            {
                name: [null, Validators.required],
                postionInOrgainsation: [null, Validators.required],
                email: [null, Validators.required],
                physicalAddress: [null, Validators.required],
                phoneNumber: [null, Validators.required],
            }
        );
    }

    addOrUpdateDataProtectionOfficer(option: number): void {
        if (this.dataProtectionOfficersFormGroup.valid) {
            this.mapFormControlToControl(1);
            if (option === 1) {
                this.list.push(this.dataProtectionOfficer);
                this.dataProtectionOfficers.push(this.dataProtectionOfficer);
                this.list = [...this.list];
            } else {
                this.list[this.dataProtectionOfficerIndex] = this.dataProtectionOfficer;
                this.dataProtectionOfficers[this.dataProtectionOfficerNumber] = this.dataProtectionOfficer;
                this.list = [...this.dataProtectionOfficers];
            }
            this.restDataProtectionOfficer();
            console.log(this.list);
        }
    }

    private mapFormControlToControl(option: number) {
        if (option === 1) {
            this.dataProtectionOfficer.Name = this.dataProtectionOfficersFormGroup.get('name').value;
            this.dataProtectionOfficer.PositionInOrganisation = this.dataProtectionOfficersFormGroup.get('postionInOrgainsation').value;
            this.dataProtectionOfficer.EmailAddress = this.dataProtectionOfficersFormGroup.get('email').value;
            this.dataProtectionOfficer.PhysicalAddress = this.dataProtectionOfficersFormGroup.get('physicalAddress').value;
            this.dataProtectionOfficer.PhoneNumber = this.dataProtectionOfficersFormGroup.get('phoneNumber').value;
        } else {
            this.dataProtectionOfficersFormGroup.get('name').setValue(this.dataProtectionOfficer.Name);
            this.dataProtectionOfficersFormGroup.get('postionInOrgainsation').setValue(this.dataProtectionOfficer.PositionInOrganisation);
            this.dataProtectionOfficersFormGroup.get('email').setValue(this.dataProtectionOfficer.EmailAddress);
            this.dataProtectionOfficersFormGroup.get('physicalAddress').setValue(this.dataProtectionOfficer.PhysicalAddress);
            this.dataProtectionOfficersFormGroup.get('phoneNumber').setValue(this.dataProtectionOfficer.PhoneNumber);
        }
    }


    restDataProtectionOfficer() {
        this.dataProtectionOfficersFormGroup.reset();
        this.dataProtectionOfficer = new DataProtectionOfficer();
        this.validateDataProtectionOfficerLabels(1);
        this.manageDataProtectionOfficer(1);
    }

    validateDataProtectionOfficerLabels(option: number) {
        if (option === 1) {
            this.buttonIcon = 'add_circle_outline';
            this.buttonLabel = 'Add potential Imapact';
        } else {
            this.buttonIcon = 'save';
            this.buttonLabel = 'Save';
        }
    }

    manageDataProtectionOfficer(option: number, id ?: number) {
        if (option === 2) {
            this.dataProtectionOfficer = this.dataProtectionOfficers[id];
            this.isEditingDataProtectionOfficer = true;
            this.dataProtectionOfficerIndex = id;
            this.mapFormControlToControl(option);
        } else {
            this.isEditingDataProtectionOfficer = false;
            this.dataProtectionOfficer = new DataProtectionOfficer();
            this.dataProtectionOfficerIndex = 0;
        }
        this.validateDataProtectionOfficerLabels(option);
    }

    deleteItem(index: number) {
        this.list.splice(index, 1);
        this.dataProtectionOfficers.splice(index, 1);
        this.list = [...this.list];
        // Send items to parent
        this.dataProtectionOfficerEvent.emit(this.dataProtectionOfficers);
        this.isEditingDataProtectionOfficer = false;
    }

    isValidForm() {
        let formValid = this.dataProtectionOfficersFormGroup.valid;
        return formValid;
    }

}


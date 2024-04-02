import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Subscription} from 'rxjs';
// import {DataServiceError} from 'src/@fury/shared/HttpModel';
// import {AuthenticationService} from 'src/app/authentication/authentication.service';
import {PolicyModel} from '../../breach-model';
import {DataServiceError} from '../../../../../@fury/shared/HttpModel';
import {AuthenticationService} from '../../../../authentication/authentication.service';

@Component({
    selector: 'fury-data-breach-policy-item',
    templateUrl: './data-breach-policy-item.component.html',
    styleUrls: ['./data-breach-policy-item.component.scss']
})
export class DataBreachPolicyItemComponent implements OnInit {

    @Input() policies: PolicyModel[];
    @Input() isViewOnly: boolean;
    @Output() policyEvent = new EventEmitter<PolicyModel[]>();

    policy: PolicyModel = new PolicyModel();
    policyForm: FormGroup;

    // Subscriptions
    subscriptions: Subscription[] = [];
    errors: string[] = [];
    list = [];

    // handle these two event notifications
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();

    displayedColumns: string [] = ['nber', 'policy', 'explanation', 'dataOfImplementation', 'actions'];

    isEditingPolicy = false;
    tableEditable = true;
    buttonIcon = 'add_circle_outline';
    buttonLabel = 'Add';
    policyIndex = 0;
    policyNumber = 1;
    policyId = 0;

    constructor(
        private _formBuilder: FormBuilder,
        private auth: AuthenticationService,
        private snackBar: MatSnackBar
    ) {
    }

    ngOnInit(): void {
        // Init forms
        this.initForms();
        // Initialize list of policies
        if (this.policies) {
            this.policies.forEach(policy => {
                this.list.push(policy);
            });
        }
        this.initMainObject();
    }

    private initMainObject() {
        this.policy = new PolicyModel();
    }

    private initForms(): void {
        this.policyForm = this._formBuilder.group(
            {
                policy: [null, Validators.required],
                implementationDate: [null, Validators.required],
                explanation: [null, Validators.required],
            }
        );
    }

    addOrUpdatePolicy(option: number): void {
        console.log('isEditing ->'  + this.isEditingPolicy );
        if (this.policyForm.valid) {
            this.mapFromControlToControl(1);
            if (option === 1) {
                console.log('add');
                this.list.push(this.policy);
                this.policies.push(this.policy);
                this.list = [...this.list];
            } else {
                console.log('update');
                this.list[this.policyIndex] = this.policy;
                this.policies[this.policyIndex] = this.policy;
                this.list = [...this.policies];
            }
            // Send new policy list to parent component
            // this.policyEvent.emit(this.policies);
            // Reset from and item object
            this.resetPolicy();
        }
    }

    resetPolicy() {
        this.policyForm.reset();
        // this.policyForm.markAsUntouched();
        // this.policyForm.markAsPristine();
        this.policy = new PolicyModel();
        this.validatePolicyLabels(1);
        this.managePolicy(1);
    }



    managePolicy(option: number, id?: number) {
        if (option === 2) {
            this.policy = this.policies[id];
            this.isEditingPolicy = true;
            this.policyIndex = id;
            this.mapFromControlToControl(option);
        } else {
            this.isEditingPolicy = false;
            this.policy = new PolicyModel();
            this.policyIndex = 0;
        }

        this.validatePolicyLabels(option);
    }

    validatePolicyLabels(option: number) {
        if (option === 1) {
            this.buttonIcon = 'add_circle_outline';
            this.buttonLabel = 'Add new policy';
        } else {
            this.buttonIcon = 'save';
            this.buttonLabel = 'Save';
        }
    }

    private updateItemId() {
        this.policyNumber = (this.policies) ? (this.policies.length + 1) : 1;
        // reorganize indexes
        this.policies.forEach((policy, index) => {
            policy.id = index + 1;
        });
    }

    private checkForDuplicates(option: number) {
        const policyName = this.policyForm.get('policy').value;

        if (option === 1) {
            return !!(this.policies.find(item => policyName.indexOf(item.policy) >= 0));
        } else {return null; }
    }

    editItem(index: number) {
        // Store the index of the item to be modified
        this.policyIndex = index;
        this.policy = this.policies[this.policyIndex];
        this.isEditingPolicy = true;
        // Map item to form fields
        this.mapFromControlToControl(index);
        this.validatePolicyLabels(2);
    }

    deleteItem(index: number) {
        this.list.splice(index, 1);
        this.policies.splice(index, 1);
        this.list = [...this.list];
        // Send items to parent
        this.policyEvent.emit(this.policies);
        this.isEditingPolicy = false;
    }

    private mapFromControlToControl(option: number) {
        if (option === 1) {
            this.policy.policy = this.policyForm.get('policy').value;
            this.policy.explanation = this.policyForm.get('explanation').value;
            this.policy.implementationDate = this.policyForm.get('implementationDate').value;
        } else {
            this.policyForm.get('policy').setValue(this.policy.policy);
            this.policyForm.get('explanation').setValue(this.policy.explanation);
            this.policyForm.get('implementationDate').setValue(this.policy.implementationDate);
        }

    }

    // private mapFromObjectToControl() {
    //   this.policy.policy = this.policyForm.get('policy').value;
    //   this.policy.explanation = this.policyForm.get('explanation').value;
    //   this.policy.implementationDate = this.policyForm.get('implementationDate').value;
    // }

    isValidForm() {
        const formValid = this.policyForm.valid;
        return formValid;
    }


}

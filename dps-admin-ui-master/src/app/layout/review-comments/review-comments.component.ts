import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {
    $RequestMoreInfoField,
    Checked,
    Checklist, RequestMoreInfo,
    RequestMoreInfoField
} from '../../modules/models/reference.model';
import {MatCheckboxChange} from '@angular/material/checkbox';
import {of, Subscription} from 'rxjs';
import {Action, WorkFlowConstants} from '../../modules/models/document-workflow.model';
import {DataServiceError} from '../../../@fury/shared/HttpModel';
import {ReferenceTableService} from '../../services/reference-table.service';
import {CheckListed} from '../../modules/company-registration/components/company-registration.model';

@Component({
    selector: 'fury-review-comments',
    templateUrl: './review-comments.component.html',
    styleUrls: ['./review-comments.component.scss']
})
export class ReviewCommentsComponent implements OnInit {

    constructor(@Inject(MAT_DIALOG_DATA) public data,
        private dialogRef: MatDialogRef<ReviewCommentsComponent>,
        private referenceService: ReferenceTableService,
        private fb: FormBuilder) 
    {
        // console.log('data:', data);
    }

    action: Action;
    _checklist: Checklist [] = [];
    dirChecklist: CheckListed [] = [];
    _applicationSectionFR: RequestMoreInfo[] = [];
    _formFields: RequestMoreInfoField[] = [];
    selectedCheckList: Checked[] = [];
    list = [];
    displayColumns: string [] = ['nber', 'Section', 'Field', 'Comment', 'actions'];
    dialogResult: ReviewDetails = new ReviewDetails();
    isRequestForMoreInfo = false;
    requestedField: $RequestMoreInfoField = new $RequestMoreInfoField();
    requestedFields: $RequestMoreInfoField[] = [];
    isEditingRequestedField = false;
    requestedIndex = 0;
    // Button Config
    buttonIcon = 'add_circle_outline';
    buttonLabel = 'Add';
    // events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();
    $resultFormFieldsEvent: EventEmitter<any> = new EventEmitter();
    // Subscriptions
    subscriptions: Subscription[] = [];

    reviewCommentFormGroup: FormGroup;
    requestMoreFormGroup: FormGroup;

    ngOnInit(): void {
        this.initialiseDialogData();
        this.initForm();

        this.reviewCommentFormGroup = this.fb.group({
            comments: new FormControl('', [Validators.required]),
            checkList: [],
            Section: [],
            SectionFields: new FormControl({value: '', disabled: true}, Validators.required),
        });

        if (this.action.ActionName === WorkFlowConstants.REQUEST_MORE_INFO_ACTION) {
            this.isRequestForMoreInfo = true;
        }

        this.subscriptions['$resultFormFieldsEvent'] = this.$resultFormFieldsEvent.subscribe(result => {
            if (result) {
                this._applicationSectionFR = result;
            }
        });

        // Get FormFields
        this.getFormFields();
    }

    initForm() {
        this.requestMoreFormGroup = this.fb.group({
            
            checkListed: [],
            comments: new FormControl('', [Validators.required]),
            section: new FormControl({value: ''}, Validators.required),
            field: new FormControl({value: '', disabled: true}, Validators.required),
        });
    }

    getFormFields() {
        this.referenceService.getFormFields(
            this.$processingEvent,
            this.$resultFormFieldsEvent,
            this.$errorsEvent
        );
    }

    initialiseDialogData() {
        this._checklist = this.data.checklist;
        this.action = this.data.action;
        this.dirChecklist = this.data.directorChecklist;
        console.log(this.dirChecklist);
    }

    submitComment() {
        this.dialogResult.comment = this.reviewCommentFormGroup.get('comments').value;
        this.dialogResult.checklist = this.selectedCheckList;
        this.dialogRef.close(this.dialogResult);
    }

    // Submit Request Form MoreInfo Fields
    submitRequestMoreInfo() {
        const fields = [];
        console.log(this.list);
        this.list.forEach( item => {
            const rqFields = new $RequestMoreInfoField();
            rqFields.FieldID = item.FieldID.FieldID;
            rqFields.SectionID = item.SectionID.SectionID;
            rqFields.Comment = item.Comment;
            fields.push(rqFields);
        });
        this.dialogResult.requestedMoreFields = fields;
        this.dialogRef.close(this.dialogResult);
    }


    onSelectSection($event: RequestMoreInfo) {
        this.requestMoreFormGroup.get('field').enable();
        this._formFields.length = 0;
        $event.Fields.forEach(e => this._formFields.push(e));
    }

    onSelectField($event: RequestMoreInfoField) {
    }

    onSelectFormField(sectionName: RequestMoreInfoField) {

    }

    onChangeSubCategory(event: MatCheckboxChange, checklist: Checklist): void {
        const box = new Checked();
        if (event.checked) {
            box.ChecklistValue = 'True';
            box.ChecklistID = checklist.ChecklistID;
            this.selectedCheckList.push(box);
        } else {
            box.ChecklistValue = 'False';
            box.ChecklistID = checklist.ChecklistID;
            this.selectedCheckList.splice(this.selectedCheckList.indexOf(checklist), 1);
        }
    }

    addOrUpdateRequestField(option: number): void {
        if (this.requestMoreFormGroup.valid) {
            this.mapFormControlToControl(1);
            if (option === 1) {
                this.list.push(this.requestedField);
                this.requestedFields.push(this.requestedField);
                this.list = [...this.list];
            } else {
                this.list[this.requestedIndex] = this.requestedField;
                this.requestedFields[this.requestedIndex] = this.requestedField;
                this.list = [...this.requestedFields];
            }
            // this.securityEvent.emit(this.securityMeasures);
            this.resetControl();
        }
    }

    manageRequestedField(option: number, id ?: number) {
        if (option === 2) {
            this.requestedField = this.requestedFields[id];
            this.isEditingRequestedField = true;
            this.requestedIndex = id;
            this.mapFormControlToControl(option);
        } else {
            this.isEditingRequestedField = false;
            this.requestedField = new $RequestMoreInfoField();
            this.requestedIndex = 0;
        }
        this.validateRequestedFieldsLabels(option);
    }

    private mapFormControlToControl(option: number) {
        if (option === 1) {
            this.requestedField.SectionID = this.requestMoreFormGroup.get('section').value;
            this.requestedField.FieldID = this.requestMoreFormGroup.get('field').value;
            this.requestedField.Comment = this.requestMoreFormGroup.get('comments').value;
        } else {
            this.requestMoreFormGroup.get('field').setValue(this.requestedField.FieldID);
            this.requestMoreFormGroup.get('section').setValue(this.requestedField.SectionID);
            this.requestMoreFormGroup.get('comments').setValue(this.requestedField.Comment);
        }
    }

    validateRequestedFieldsLabels(option: number) {
        if (option === 1) {
            this.buttonIcon = 'add_circle_outline';
            this.buttonLabel = 'Add new thirdParty data';
        } else {
            this.buttonIcon = 'save';
            this.buttonLabel = 'Save';
        }
    }

    deleteItem(index: number) {
        this.list.splice(index, 1);
        this.requestedFields.splice(index, 1);
        this.list = [...this.list];
        this.isEditingRequestedField = false;
    }

    isValidForm() {
        return this.requestMoreFormGroup.valid;
    }

    resetControl() {
        this.requestMoreFormGroup.reset();
        this.requestedField = new $RequestMoreInfoField();
        this.validateRequestedFieldsLabels(1);
        this.manageRequestedField(1);
    }
}

export class ReviewDetails {
    comment: string;
    checklist: Checked[];
    directorChecklist: CheckListed;
    requestedMoreFields: $RequestMoreInfoField[];
}

import { EventEmitter} from '@angular/core';
import {ActionPerformed, ActionPerformedRequestMoreInfo, WorkFlowActions} from '../../app/modules/models/document-workflow.model';
import { DataServiceError } from './HttpModel';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {CompanyRegistrationService} from '../../app/modules/company-registration/company-registration.service';
import {SnackBarService} from '../../app/pages/services/snack-bar.service';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../app/services/workflow-service.service';
import { ComplaintService } from '../../app/modules/complaints/complaints.service';

export abstract class BaseFuryForm {
    isViewOnly = false;
    isEditMode = false;
    operationType = '';
    isApplicationValid = false;
    isLoaded = false;
    blockActions = false;
    hasStepAccess = false;
    workFlowActions: WorkFlowActions;
    realmRole: string;
    // Arrays
    errors: string[] = [];

    // Events
    $resultWorkFlowActionsEvent: EventEmitter<any> = new EventEmitter();
    $resultPerformActionEvent: EventEmitter<any> = new EventEmitter();
    $resultDocWorkFlowTimelineEvent: EventEmitter<any> = new EventEmitter();
    $resultRequestMoreInfo: EventEmitter<any> = new EventEmitter();
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $resultDocumentCertificate: EventEmitter<any> = new EventEmitter();
    $errorsEvent: EventEmitter<DataServiceError[]> = new EventEmitter();


    constructor(
        public authService: KeycloakService,
        public _workerService: WorkflowServiceService,
        public registrationService: CompanyRegistrationService,
        public complaintService: ComplaintService,
    ) {
        if (this.authService.getKeycloakInstance().realmAccess) {
            this.realmRole = this.authService.getKeycloakInstance().realmAccess.roles[0];
        }
    }
    public getGenericDDL(items: [], pattern: any, addDefaultOption?: boolean): {}[] {
        const itemsResult: {}[] = [];
        if (addDefaultOption === undefined || addDefaultOption === true) {
            itemsResult.push(
                {
                    key: '',
                    value: 'Select an option',
                    disabled: true
                });
        }
        items.forEach(item => {
            itemsResult.push({
                key: item[pattern.key],
                value: item[pattern.label],
                disabled: false,
                rawData: item
            });
        });
        return itemsResult;
    }

    findDocumentActions(workFlowId: any, stepId: any) {
        this._workerService.getDocumentActions(
            workFlowId,
            stepId,
            this.$processingEvent,
            this.$resultWorkFlowActionsEvent,
            this.$errorsEvent
        );
    }

    performingAction(actionPerformed: ActionPerformed) {
        this._workerService.performAction(
            this.$processingEvent,
            this.$resultPerformActionEvent,
            this.$errorsEvent,
            actionPerformed
        );
    }

    performActionRequestMoreInfo(actionPerformed: ActionPerformedRequestMoreInfo) {
        this._workerService.performActionRequestMoreInfo(
            this.$processingEvent,
            this.$resultPerformActionEvent,
            this.$errorsEvent,
            actionPerformed
        );
    }

    getDocumentWorkflow(regTrackingNo: string, workflowId: string ) {
        this._workerService.getDocumentWorkFlowTimeLine(
            this.realmRole,
            workflowId,
            regTrackingNo,
            this.$processingEvent,
            this.$resultDocWorkFlowTimelineEvent,
            this.$errorsEvent
        );
    }

    // Get Certificate Details
    generateCert(organisationId: number, IssueType: string) {
        this.registrationService.createCertificate(
            this.$processingEvent,
            this.$resultDocumentCertificate,
            this.$errorsEvent,
            organisationId,
            IssueType
        );
    }

    // Get Certificate Details
    getIssuedCertDetails(organisationId: number) {
        this.registrationService.getCertificateDetails(
            this.$processingEvent,
            this.$resultDocumentCertificate,
            this.$errorsEvent,
            organisationId
        );
    }

    // Update download count
    updateCertificateDownloadCount(certificateRegNumber: string) {
        this.registrationService.updateCertificateDownloadCount(
            this.$processingEvent,
            this.$resultDocumentCertificate,
            this.$errorsEvent,
            certificateRegNumber
        );
    }

    // Check has request for more info
    hasRequestForMoreInfo(certificateRegNumber: string) {
        this._workerService.hasRequestForMoreInfo(
            certificateRegNumber,
            this.$processingEvent,
            this.$resultRequestMoreInfo,
            this.$errorsEvent,
        );
    }


}

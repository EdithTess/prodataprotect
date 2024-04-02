import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {GroupModel, UserRoles} from '../../user-adminstration.model';
import {IFinderField, ListColumn} from '../../../../../@fury/shared/list/list-column.model';
import {Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {UserAdministrationService} from '../../user-administration.service';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { ComplaintService } from '../../../complaints/complaints.service';

@Component({
    selector: 'fury-system-roles',
    templateUrl: './system-roles.component.html',
    styleUrls: ['./system-roles.component.scss'],
    animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class SystemRolesComponent extends BaseFuryForm implements OnInit {

    //Arrays
    accesses: any [] = [];
    groups: UserRoles[];
    searchFields: IFinderField[];
    // Subscriptions
    subscriptions: Subscription[] = [];
    //Events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<any> = new EventEmitter();
    $resultRolesEvent: EventEmitter<UserRoles> = new EventEmitter();
    //Bolean
    isProcessing = false;
    //Input
    @Input()
    columns: ListColumn[] = [
        {name: 'Role Id', property: 'id', visible: true, isModelProperty: true},
        {name: 'Role Name', property: 'name', visible: true, isModelProperty: true},
        {name: 'Role Description', property: 'description', visible: true, isModelProperty: true},
        {name: 'Actions', property: 'actions', visible: true},
    ] as ListColumn[];
    pageSize = 10;
    dataSource: MatTableDataSource<UserRoles> | null;
    //ViewChild
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private auth: KeycloakService,
        private userAdminService: UserAdministrationService,
        public _workflowService: WorkflowServiceService,
        public registrationService: CompanyRegistrationService,
        public complaintService: ComplaintService
    ) {
        super(
            auth,
            _workflowService, 
            registrationService,
            complaintService
        );
    }


    ngOnInit(): void {
        // ProcessEvent
        this.subscriptions['$processingEvent'] = this.$processingEvent.subscribe(isProcessing => this.isProcessing = isProcessing);
        //datasource
        this.dataSource = new MatTableDataSource();
        // Users
        this.subscriptions['$resultUsersEvent'] = this.$resultRolesEvent.subscribe(result => {
            if (result) {
                this.groups = result;
                this.dataSource.data = this.groups.filter(roles =>
                    roles.name != 'uma_authorization' && roles.name != 'offline_access' && roles.name != 'default-roles-dataprotectionsolution'
                );
                this.isLoaded = true;
            }
        });
        this.loadUserRoles();
        this.defineSearchFields();
    }


    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    loadUserRoles() {
        this.userAdminService.getUserRoles(this.$processingEvent, this.$resultRolesEvent, this.$errorsEvent);
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    }

    onFilterChange(value) {
        if (!this.dataSource) {
            return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.dataSource.filter = value;
    }

    private defineSearchFields() {
        this.searchFields = [];
    }

}

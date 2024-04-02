import {Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';
import {KeycloakService} from 'keycloak-angular';
import {UserAdministrationService} from '../../user-administration.service';
import {User} from '../../user-adminstration.model';
import {Subscription} from 'rxjs';
import {CompanyRegistration, ComponyRegistrationObject} from '../../../company-registration/components/company-registration.model';
import {
    DataType,
    DateFinderOptions, IFinderField,
    ListColumn,
    LookupFinderOptions,
    TextFinderOptions
} from '../../../../../@fury/shared/list/list-column.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {DatePipe} from '@angular/common';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { ComplaintService } from '../../../complaints/complaints.service';
import { Router } from '@angular/router';
@Component({
    selector: 'fury-find-users',
    templateUrl: './find-users.component.html',
    styleUrls: ['./find-users.component.scss'],
    animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class FindUsersComponent extends BaseFuryForm implements OnInit {

    //Arrays
    accesses: any [] = [];
    users: User[];
    searchFields: IFinderField[];
    // Subscriptions
    subscriptions: Subscription[] = [];
    //Events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<any> = new EventEmitter();
    $resultUsersEvent: EventEmitter<User> = new EventEmitter();
    //Bolean
    isProcessing = false;
    //Input
    @Input()
    columns: ListColumn[] = [
        {name: 'User Id', property: 'UserID', visible: false, isModelProperty: true},
        {name: 'Username', property: 'Username', visible: true, isModelProperty: true},
        {name: 'First Name', property: 'FirstName', visible: true, isModelProperty: true},
        {name: 'Last Name', property: 'LastName', visible: true, isModelProperty: true},
        {name: 'Email', property: 'Email', visible: true, isModelProperty: true},
        {name: 'Actions', property: 'actions', visible: true},
    ] as ListColumn[];
    pageSize = 10;
    dataSource: MatTableDataSource<User> | null;
    //ViewChild
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    constructor(
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private auth: KeycloakService,
        private datePipe: DatePipe,
        private router: Router,
        private userAdminService: UserAdministrationService,
        public _workflowService: WorkflowServiceService,
        public registrationService: CompanyRegistrationService,
        public complaintService: ComplaintService
    ) {
        super(
            auth, _workflowService, 
            registrationService,
            complaintService
        );
    }

    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    ngOnInit(): void {
        // ProcessEvent
        this.subscriptions['$processingEvent'] = this.$processingEvent.subscribe(isProcessing => this.isProcessing = isProcessing);
        // datasource
        this.dataSource = new MatTableDataSource();
        // Users
        this.subscriptions['$resultUsersEvent'] = this.$resultUsersEvent.subscribe(result => {
            if (result) {
                this.users = result;
                this.dataSource.data = this.users;
                this.isLoaded = true;
            }
        });
        this.loadUsers();
        this.defineSearchFields();
    }

    loadUsers() {
        this.userAdminService.getUsers(this.$processingEvent, this.$resultUsersEvent, this.$errorsEvent);
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


    viewUser(user) {
 
        this.router.navigate(['/user-administration/users/view'],
            {state: {
                UserID: user.UserID
            }}).then( );
    }
        
                }


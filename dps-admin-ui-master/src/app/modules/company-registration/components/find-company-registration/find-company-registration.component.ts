import {AfterViewInit, Component, EventEmitter, Input, OnInit, ViewChild} from '@angular/core';
import { Subscription} from 'rxjs';
import {
    CompanyRegistration,
    ComponyRegistrationObject
} from '../company-registration.model';
import {
    DataType, DateFinderOptions,
    IFinderField,
    ListColumn,
    LookupFinderOptions,
    TextFinderOptions
} from '../../../../../@fury/shared/list/list-column.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {CompanyRegistrationService} from '../../company-registration.service';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {AuthenticationService} from '../../../../authentication/authentication.service';
import {ComplaintService} from '../../../complaints/complaints.service';

@Component({
    selector: 'fury-find-company-registration',
    templateUrl: './find-company-registration.component.html',
    styleUrls: ['./find-company-registration.component.scss'],
    animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class FindCompanyRegistrationComponent extends BaseFuryForm implements OnInit, AfterViewInit {


    statuses: any = [
        {code: '001', description: 'Received'},
        {code: '002', description: 'Pending Payment'},
        {code: '003', description: 'Legal Review'},
        {code: '004', description: 'Technical Review'},
        {code: '005', description: 'Paid'},
        {code: '002', description: 'Certificate Issued'},
    ];

    operationType = '';
    realmRole: string;
    showUpdateButton =  false;
    // Array
    accesses: any [] = [];
    statusList: any[] = [];
    companyRegistrations: ComponyRegistrationObject[];
    // Subscriptions
    subscriptions: Subscription[] = [];
    // Events
    $processingEvent: EventEmitter<boolean> = new EventEmitter();
    $errorsEvent: EventEmitter<any> = new EventEmitter();
    $resultCompaniesEvent: EventEmitter<ComponyRegistrationObject> = new EventEmitter();
    // Boolean
    isProcessing = false;
    isOrganisation = false;
    @Input()
    columns: ListColumn[] = [
        {name: 'Tracking No', property: 'RegTrackingNo', visible: true, isModelProperty: true},
        {name: 'Organisation Name', property: 'OrganisationName', visible: true, isModelProperty: true},
        {name: 'Current Status', property: 'CurrentStepName', visible: true, isModelProperty: true},
        {name: 'Email', property: 'EmailAddress', visible: true, isModelProperty: true},
        {name: 'PhoneNumber', property: 'PhoneNumber', visible: true, isModelProperty: true},
        {name: 'Created On', property: 'EnteredOn', visible: true, isModelProperty: false},
        {name: 'Actions', property: 'actions', visible: true},
    ] as ListColumn[];
    pageSize = 10;
    dataSource: MatTableDataSource<CompanyRegistration> | null;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Search fields
    searchFields: IFinderField[];

    constructor(
        private dialog: MatDialog,
        private route: ActivatedRoute,
        private router: Router,
        private auth: KeycloakService,
        private authenticationService: AuthenticationService,
        public registrationService: CompanyRegistrationService,
        public _workflowService: WorkflowServiceService,
        public complaintService:ComplaintService
    ) {
        super(
            auth,
            _workflowService,
            registrationService,
            complaintService,
        );

        this.operationType = route.routeConfig.data.action;
    }

    // TODO:: Need to hide addressedTo Column from data controllers its mainly for nita data-protection officers
    get visibleColumns() {
        return this.columns.filter(column => column.visible).map(column => column.property);
    }

    ngOnInit(): void {
        if (this.auth.getKeycloakInstance().resourceAccess['dps-frontend']) {
            this.accesses = this.auth.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
        }

        console.log(this.auth.getKeycloakInstance());

        if (this.auth.getKeycloakInstance().realmAccess) {
            if(this.auth.getKeycloakInstance().realmAccess.roles.includes('organisation')){
                this.isOrganisation = true;
            }
            //this.realmRole = this.auth.getKeycloakInstance().realmAccess.roles[1];
            //console.log(this.realmRole);
            //console.log("here");
            //if (this.realmRole === 'organisation') {
                //this.isOrganisation = true;
            //}
        }

        // Processing event
        this.subscriptions['$processingEvent'] = this.$processingEvent.subscribe(isProcessing => this.isProcessing = isProcessing);

        this.dataSource = new MatTableDataSource();

        // registeredCompanies
        this.subscriptions['$resultCompaniesEvent'] = this.$resultCompaniesEvent.subscribe(result => {
            if (result) {
                this.companyRegistrations = result;
                this.dataSource.data = result;
                this.isLoaded = true;
            }
        });

        this.statusList = this.getGenericDDL(this.statuses, {key: 'code', label: 'description'}, false);

        this.defineSearchFields();

        if (this.operationType === 'FIND') {
            if (this.isOrganisation) {
                this.loadByOrganisationID();
            } else {
                this.loadRegisteredOrganisation();
            }
        }

        if (this.operationType === 'PENDING-TASK') {
            this.loadMyPendingTask();
        }
    }

    loadRegisteredOrganisation() {
        this.showUpdateButton = true;
        this.registrationService.getRegisteredOrganisation(this.$processingEvent, this.$resultCompaniesEvent, this.$errorsEvent);
    }

    loadByOrganisationID() {
        // tslint:disable-next-line:max-line-length
        this.registrationService.getByOrgID(this.$processingEvent, this.$resultCompaniesEvent, this.$errorsEvent, this.authenticationService.getOrganisationID());
    }
    //

    loadMyPendingTask() {
        console.log(this.realmRole);
        this.registrationService.getMyPendingTask(
            this.realmRole, this.$processingEvent, this.$resultCompaniesEvent, this.$errorsEvent);
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

    viewRegistration(registration) {
        this.router.navigate(['/company-registration/view'],
            {state: {regTrackingNo: registration.RegTrackingNo}}).then( );
    }

    manageRegistration(registration) {
        console.log(registration);
        if(registration.CurrentStepID === 7 || registration.CurrentStepID === 8){
            this.router.navigate(['/company-registration/manage-registration-update'],
                {state: {regTrackingNo: registration.RegTrackingNo,
                         OrganisationID: registration.OrganisationID,
                         CurrentStepID : registration.CurrentStepID}}).then();
        }
        else{
            console.log('tracking number' + JSON.stringify(registration.RegTrackingNo));
            this.router.navigate(['/company-registration/update-application'],
                {state: {regTrackingNo: registration.RegTrackingNo}}).then();
        }
      
    }


    updateRegistrationDetails(registration) {
        
        this.router.navigate(['/company-registration/update-registration-details'],
            {state: {regTrackingNo: registration.RegTrackingNo}}).then();
         
    }

    private defineSearchFields() {
        this.searchFields = [
            {
                label: 'Registration reference #',
                fieldName: 'registrationReference',
                operators: TextFinderOptions,
                dataType: DataType.TEXT
            },
            {
                label: 'Company Name',
                fieldName: 'companyName',
                operators: TextFinderOptions,
                dataType: DataType.TEXT
            },
            {
                label: 'Status',
                fieldName: 'status',
                operators: LookupFinderOptions,
                dataType: DataType.TEXT,
                lookupOptions: this.statusList,
                multiple: true
            },
            {
                label: 'Registration date',
                fieldName: 'registrationDate',
                operators: DateFinderOptions,
                dataType: DataType.DATETIME
            },
        ];
    }


}
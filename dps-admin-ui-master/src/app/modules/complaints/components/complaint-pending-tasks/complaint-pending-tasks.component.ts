import {AfterViewInit,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Complaint, COMPLAINT_DEMO_DATA} from '../../complaints-model';
import {
    DataType,
    DateFinderOptions,
    IFinderField,
    ListColumn,
    LookupFinderOptions,
    TextFinderOptions
} from '../../../../../@fury/shared/list/list-column.model';
import { Subscription} from 'rxjs';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {Observable, of, ReplaySubject} from 'rxjs';
import {filter} from 'rxjs/operators';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../../@fury/shared/base-fury-form';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {KeycloakService} from 'keycloak-angular';
import {ComplaintService} from '../../complaints.service';
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { RoutingService } from '../../../../services/routing.service';




@Component({
  selector: 'fury-complaint-pending-tasks',
  templateUrl: './complaint-pending-tasks.component.html',
  styleUrls: ['./complaint-pending-tasks.component.scss'],

  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ComplaintPendingTasksComponent extends BaseFuryForm implements OnInit, AfterViewInit, OnDestroy  {

  // TODO:: Simulating a service with http that returns observables
  subject$: ReplaySubject<Complaint[]> = new ReplaySubject<Complaint[]>(1);
  data$: Observable<Complaint[]> = this.subject$.asObservable();
  complaints: Complaint[];
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultComplaintsEvent: EventEmitter<Complaint> = new EventEmitter();
  statusList: any[] = [];
  pageIndex = this.routingService.complaintsTablePageIndex
  pageSize = 10;
  realmRole: string;
  subscriptions: Subscription[] = [];
  statuses: any = [
      {code: '001', description: 'Form 9'},
      {code: '002', description: 'FORM 6'},
      {code: '003', description: 'FORM 11'}
  ];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @Input()



  columns: ListColumn[] = [
      {name: 'Complaint Tracking Number', property: 'ComplaintTrackingNo', visible: true, isModelProperty: true},
      {name: 'Complaint Source', property: 'ComplaintSourceName', visible: true, isModelProperty: true},
      {name: 'Type of Complaint', property: 'FormName', visible: true, isModelProperty: true},
      {name: 'Email Address', property: 'EmailAddress', visible: true, isModelProperty: true},
      {name: 'First Name', property: 'FirstName', visible: true, isModelProperty: true},
      {name: 'Last Name', property: 'LastName', visible: true, isModelProperty: true},
      {name: 'Phone Number', property: 'PhoneNumber', visible: true, isModelProperty: true},
      {name: 'Have Complained to Organisation?', property: 'HaveComplainedToOrganisationAlready', visible: true, isModelProperty: true},
      {name: 'Organisation Complained To', property: 'OrganisationComplainedToName', visible: true, isModelProperty: true},
      {name: 'Complaint Timeline', property: 'Status', visible: true, isModelProperty: true},
      {name: 'Actions', property: 'actions', visible: true},
  ] as ListColumn[];

  dataSource: MatTableDataSource<Complaint> =  new MatTableDataSource<Complaint>();

  // Search fields
  searchFields: IFinderField[];

  @ViewChild('autosize') autosize: CdkTextareaAutosize;

  
  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute, 
    public authService: KeycloakService,
    private router: Router,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    public complaintService: ComplaintService,
    private routingService : RoutingService
) {
    super(
        authService,
        _workflowService, registrationService, 
        complaintService
    );
}





 // TODO:: Need to hide addressedTo Column from data controllers its mainly for nita data-protection officers
 get visibleColumns() {
  return this.columns.filter(column => column.visible).map(column => column.property);
}

getData() {
  return of(COMPLAINT_DEMO_DATA.map(complaint => new Complaint(complaint)));
}

ngOnInit(): void {
  console.log(this.authService.getKeycloakInstance());
  this.realmRole = this.authService.getKeycloakInstance().realmAccess.roles[0]
  console.log(this.realmRole);
  console.log(this.pageIndex);    


  this.dataSource.paginator = this.paginator;

  this.getComplaints();
  console.log(this.getComplaints);




  this.route.paramMap.subscribe(params => {
      console.log(params.has('navigationPrams'));
  });

  this.statusList = this.getGenericDDL(this.statuses, {key: 'code', label: 'description'}, false);

  this.defineSearchFields();

 
  

}

ngAfterViewInit() {

  setTimeout(() =>{

      this.paginator.pageIndex = this.pageIndex;
        // complaints
      this.subscriptions['$resultComplaintsEvent'] = this.$resultComplaintsEvent.subscribe(result => {
          if (result) {
              
              this.complaints = result;
      

              this.dataSource.data = result;
      
              this.isLoaded = true;
          }
          else{
              console.log("expected");
          }
      });
  }, 0)

}

onFilterChange(value) {
  if (!this.dataSource) {
      return;
  }
  value = value.trim();
  value = value.toLowerCase();
  this.dataSource.filter = value;
}

ngOnDestroy(): void {
}

private defineSearchFields() {
  this.searchFields = [
      {
          label: 'Complaint reference #',
          fieldName: 'complaintReference',
          operators: TextFinderOptions,
          dataType: DataType.TEXT
      },
      {
          label: 'Data subject',
          fieldName: 'subjectNames',
          operators: TextFinderOptions,
          dataType: DataType.TEXT
      },
      {
          label: 'Form Types',
          fieldName: 'Form',
          operators: LookupFinderOptions,
          dataType: DataType.TEXT,
          lookupOptions: this.statusList,
          multiple: true
      },
      {
          label: 'Reason for the complaint',
          fieldName: 'type',
          operators: TextFinderOptions,
          dataType: DataType.TEXT
      },
      {
          label: 'Filed Against',
          fieldName: 'compliantAgainst',
          operators: TextFinderOptions,
          dataType: DataType.TEXT
      },
      {
          label: 'Registration date',
          fieldName: 'registrationDate',
          operators: DateFinderOptions,
          dataType: DataType.DATETIME
      },
  ];
}

getComplaints() {
  // tslint:disable-next-line:max-line-length
  this.complaintService.getComplaintPendingTasks(this.$processingEvent, this.$resultComplaintsEvent, this.$errorsEvent, this.realmRole);
}

viewComplaint(complaint) {
 
  this.router.navigate(['/complaints/view-complaint'],
      {state: {ComplaintTrackingNumber: complaint.ComplaintTrackingNo}}).then( );
}

manageComplaint (complaint) {

  this.routingService.complaintsTablePageIndex = this.pageIndex;
 
  this.router.navigate(['/complaints/complaints-edit'],
      {state: {ComplaintTrackingNumber: complaint.ComplaintTrackingNo,
                  ComplaintSourceID : complaint.ComplaintSourceID}}).then( );
    
}

onPaginateChange(event){

  this.pageIndex =  event.pageIndex;
  console.log(this.pageIndex);

}

}

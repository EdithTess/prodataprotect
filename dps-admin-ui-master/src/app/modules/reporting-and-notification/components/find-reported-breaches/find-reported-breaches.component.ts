import { Component,EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import {Observable, of, ReplaySubject, forkJoin, Subscription} from 'rxjs';
import {BooleanLookup, DataType, DateFinderOptions, IFinderField, ListColumn, LookupFinderOptions, TextFinderOptions } from '../../../../../@fury/shared/list/list-column.model';
import {BREACHES_JSON, BreachModel, TableBreachModel} from '../../breach-model';
import {fadeInRightAnimation} from '../../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../../@fury/animations/fade-in-up.animation';
import {Complaint, COMPLAINT_DEMO_DATA} from '../../../complaints/complaints-model';
import {filter} from 'rxjs/operators';
import { ApiPayload, Organisation, OrganisationDetails } from '../../../../services/api.model';
import {HttpClient} from '@angular/common/http';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import {catchError} from 'rxjs/operators';
import { ApiService } from '../../../../services/api.service';
import {DataBreachService} from '../../data-breach.service';
@Component({
  selector: 'fury-find-reported-breaches',
  templateUrl: './find-reported-breaches.component.html',
  styleUrls: ['./find-reported-breaches.component.scss'
  ],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class FindReportedBreachesComponent implements OnInit {

  // TODO:: Simulating a service with http that returns observables
  subject$: ReplaySubject<BreachModel[]> = new ReplaySubject<BreachModel[]>(1);
  data$: Observable<BreachModel[]> = this.subject$.asObservable();
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultComplaintsEvent: EventEmitter<TableBreachModel> = new EventEmitter();
  breaches: TableBreachModel[];
  statusList: any [] = [];
  httpSub: Subscription;
  subscriptions: Subscription[] = [];
  

  // Table
  @Input() columns: ListColumn[] = [
    {name: 'Tracking No / Reference', property: 'DataBreachTrackingNo', visible: true, isModelProperty: true},
    {name: 'Data Collector/Controller/Processor', property: 'OrganisationName', visible: true, isModelProperty: true},
    {name: 'Incident Date', property: 'IncidentDate', visible: true, isModelProperty: true},
    {name: 'Status', property: 'StatusName', visible: true, isModelProperty: true},
    {name: 'Actions', property: 'actions', visible: true},
  ] as ListColumn[];
  pageSize = 10;
  dataSource: MatTableDataSource<TableBreachModel> | null;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  //Advanced Search Fields
  searchFields: IFinderField[];

  constructor(
    private service: ApiService,
      private dialog: MatDialog,
      private route: ActivatedRoute,
      private endpoints: ApiEndpointsService,
      private http: HttpClient,
      private router: Router,
      public dataBreachService: DataBreachService,
  ) { }

  ngOnInit(): void {
    // Get All Breaches

    this.dataSource = new MatTableDataSource();

    this.getBreaches()

    this.subscriptions['$resultComplaintsEvent'] = this.$resultComplaintsEvent.subscribe(result => {
      if (result) {

        this.breaches = result;
        

        this.dataSource.data = result;

      }
      else{
        console.log("expected");
      }
    });
          

    
  }

  

  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
  }

  getData() {
    return of(BREACHES_JSON.map(breaches => breaches));
  }


  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

 

  ngOnDestroy(): void {
  }

  private defineSearchFields() {
    this.searchFields = [
      {
        label: "Breach Reference #",
        fieldName: 'breachReference',
        operators: TextFinderOptions,
        dataType: DataType.TEXT
      },
      {
        label: 'Delay In Reporting',
        fieldName: 'delayInReporting',
        operators: LookupFinderOptions,
        dataType: DataType.BOOLEAN,
        lookupOptions: this.statusList,
        multiple: true
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
        fieldName: ' v',
        operators: DateFinderOptions,
        dataType: DataType.DATETIME
      },
    ]
  }

  getBreaches() {
    // tslint:disable-next-line:max-line-length
    this.dataBreachService.getBreaches(this.$processingEvent, this.$resultComplaintsEvent, this.$errorsEvent);
}


viewBreach(breach) {
       
  this.router.navigate(['/reporting-and-notification/view/'],
      {state: {DataBreachTrackingNo: breach.DataBreachTrackingNo}}).then( );
}

manageBreach(breach) {
 
  this.router.navigate(['/reporting-and-notification/manage/'],
      {state: {DataBreachTrackingNo: breach.DataBreachTrackingNo}}).then( );
}


}

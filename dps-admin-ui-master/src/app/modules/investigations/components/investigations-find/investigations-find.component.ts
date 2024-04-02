import {AfterViewInit,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { InvestigationsModule } from '../../investigation.module';
import {Investigation, INVESTIGATION_DEMO_DATA} from '../../investigation-model';
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
import {WorkflowServiceService} from '../../../../services/workflow-service.service';
import {CompanyRegistrationService} from '../../../company-registration/company-registration.service';
import { InvestigationService } from '../../investigation.service';
import {ApplicationTimelineComponent} from '../../../../layout/application-timeline/application-timeline.component';
import {Action, ActionPerformed, WorkFlowActions, WorkFlowStep, WorkFlowTimeline} from '../../../models/document-workflow.model';
@Component({
  selector: 'fury-investigations-find',
  templateUrl: './investigations-find.component.html',
  styleUrls: ['./investigations-find.component.scss']
})
export class InvestigationsFindComponent implements OnInit {

  // TODO:: Simulating a service with http that returns observables
  subject$: ReplaySubject<Investigation[]> = new ReplaySubject<Investigation[]>(1);
  data$: Observable<Investigation[]> = this.subject$.asObservable();
  investigations: Investigation[];
  $processingEvent: EventEmitter<boolean> = new EventEmitter();
  $errorsEvent: EventEmitter<any> = new EventEmitter();
  $resultInvestigationsEvent: EventEmitter<Investigation> = new EventEmitter();
  statusList: any[] = [];
  subscriptions: Subscription[] = [];
  workflowID = '1';
  workflowTimeLine: WorkFlowTimeline;
  currentStep: WorkFlowStep;

  @Input()
    columns: ListColumn[] = [
        {name: 'Investigation ID', property:'InvestigationID', isModelProperty:true, visible:false},
        {name: 'Investigation Tracking Number', property: 'InvestigationTrackingNo', visible: true, isModelProperty: true},
        {name: 'Organisation', property: 'Organisation', visible: true, isModelProperty: true},
        {name: 'Type of Investigation', property: 'InvestigationType', visible: true, isModelProperty: true},
        {name: 'Investigation Status', property: 'InvestigationStatus', visible: true, isModelProperty: true},
        {name: 'Actions', property: 'actions', visible: true},
    ] as ListColumn[];
    pageSize = 10;
    dataSource: MatTableDataSource<Investigation> | null;

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Search fields
    searchFields: IFinderField[];

    @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(

    private dialog: MatDialog,
        private route: ActivatedRoute, public authService: KeycloakService,
        private router: Router,
        public _workflowService: WorkflowServiceService,
        public registrationService: CompanyRegistrationService,
        public investigationService: InvestigationService
  ) { 

    //   super(
    //     authService,
    //     _workflowService, registrationService, 
    //     investigationService
    // );
  }

  // TODO:: Need to hide addressedTo Column from data controllers its mainly for nita data-protection officers
  get visibleColumns() {
    return this.columns.filter(column => column.visible).map(column => column.property);
}


  ngOnInit(): void {

    this.dataSource = new MatTableDataSource();
        console.log("here");

        this.getInvestigations();
        console.log(this.getInvestigations);

        // complaints
        this.subscriptions['$resultInvestigationsEvent'] = this.$resultInvestigationsEvent.subscribe(result => {
            if (result) {
                
                this.investigations = result;
        

                this.dataSource.data = result;
        
                // this.isLoaded = true;
            }
            else{
                console.log("expected");
            }
        });


        this.route.paramMap.subscribe(params => {
            console.log(params.has('navigationPrams'));
        });

        // this.statusList = this.getGenericDDL(this.statuses, {key: 'code', label: 'description'}, false);

        this.defineSearchFields();
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

getInvestigations() {
  // tslint:disable-next-line:max-line-length
  this.investigationService.getInvestigations(this.$processingEvent, this.$resultInvestigationsEvent, this.$errorsEvent);
}

viewInvestigation(investigation) {
 
  this.router.navigate(['/investigations/view-investigation'],
      {state: {InvestigationTrackingNumber: investigation.InvestigationTrackingNo}}).then( );
}

manageInvestigation(investigation) {
 
  this.router.navigate(['/investigations/investigations-edit'],
      {state: {InvestigationTrackingNumber: investigation.InvestigationTrackingNo,
                InvestigationID:investigation.InvestigationID,
                  }}).then( );
  
      
}

viewApplicationTimeLine() {
  this.dialog.open(ApplicationTimelineComponent, {
      width: '941px',
      height: '595px',
      data: this.workflowTimeLine
  });
}



  

}

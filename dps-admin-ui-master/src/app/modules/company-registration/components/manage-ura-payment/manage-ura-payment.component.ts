import {AfterViewInit,EventEmitter, Component, Input, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {
    DataType,
    DateFinderOptions,
    IFinderField,
    ListColumn,
    LookupFinderOptions,
    TextFinderOptions
} from '../../../../../@fury/shared/list/list-column.model';
import { PRN } from '../company-registration.model';
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
import { RoutingService } from '../../../../services/routing.service';
import { ComplaintService } from '../../../complaints/complaints.service';
import { SuccessfulMessageDialogComponent } from '../../../../layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { ApiService } from '../../../../services/api.service';
import { environment } from '../../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import { ApiPayload } from '../../../../services/api.model';
import { ApiEndpointsService } from '../../../../services/api-endpoints.service';
import { catchError } from 'rxjs/operators';


@Component({
  selector: 'fury-manage-ura-payment',
  templateUrl: './manage-ura-payment.component.html',
  styleUrls: ['./manage-ura-payment.component.scss'],

  animations: [fadeInRightAnimation, fadeInUpAnimation]
  
})
export class ManageUraPaymentComponent extends BaseFuryForm implements OnInit, AfterViewInit, OnDestroy {

      // TODO:: Simulating a service with http that returns observables
      subject$: ReplaySubject<PRN[]> = new ReplaySubject<PRN[]>(1);
      data$: Observable<PRN[]> = this.subject$.asObservable();
      PrnData: [];
      dialogRef;
      processing = false;
      $processingEvent: EventEmitter<boolean> = new EventEmitter();
      $errorsEvent: EventEmitter<any> = new EventEmitter();
      $resultComplaintsEvent: EventEmitter<PRN> = new EventEmitter();
      statusList: any[] = [];
      pageSize = 10;
      httpSub: Subscription;
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
          {name: 'Organisation', property: 'OrganisationName', visible: true, isModelProperty: true},
          {name: 'PRN', property: 'PRN', visible: true, isModelProperty: true},
          {name: 'Search Code', property: 'SearchCode', visible: true, isModelProperty: true},
          {name: 'Generation Date', property: 'PRNGenerationDate', visible: true, isModelProperty: true},
          {name: 'Days Passed', property: 'DaysPassed', visible: true, isModelProperty: true},
          {name: 'Actions', property: 'actions', visible: true},
      ] as ListColumn[];
  
      dataSource: MatTableDataSource<PRN> =  new MatTableDataSource<PRN>();
  
      // Search fields
      searchFields: IFinderField[];
  
      @ViewChild('autosize') autosize: CdkTextareaAutosize;

  constructor(
    private dialog: MatDialog,
    private route: ActivatedRoute, public authService: KeycloakService,
    private router: Router,
    private service: ApiService,
    private http: HttpClient,
    private endpoints: ApiEndpointsService,
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


  ngOnInit(): void {

    this.dataSource.paginator = this.paginator;

    this.getPRNData();

    this.route.paramMap.subscribe(params => {
        console.log(params.has('navigationPrams'));
    });

    this.statusList = this.getGenericDDL(this.statuses, {key: 'code', label: 'description'}, false);

  }
  ngAfterViewInit() {

    setTimeout(() =>{

        this.subscriptions['$resultComplaintsEvent'] = this.$resultComplaintsEvent.subscribe(result => {
            if (result) {
              console.log(result);
                
                this.PrnData = result.data;
        

                this.dataSource.data = result.data;
        
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

getPRNData() {
  // tslint:disable-next-line:max-line-length
  this.registrationService.getPrnData(this.$processingEvent, this.$resultComplaintsEvent, this.$errorsEvent);
}


viewPRNStatus(row){
  console.log(row);
  const data =  {

    prn : row.PRN

  }

  this.httpSub = this.http.post<ApiPayload>(this.endpoints.checkPRN, data)
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      console.log(response.data);

      let message;
      let status;

      if(response.data.ErrorCode == 'A'){
        message = 'The PRN is valid, however payment has not been made';
        status = false;
      }
      else if(response.data.ErrorCode == 'R'){
         message =  'The PRN is valid, however the cheque has not yet matured';
         status = false;
      }
      else if(response.data.ErrorCode == 'T'){
         message = 'Received and credited. The payment has been reconciled with the  bank';
         status = true;
      }
      else if(response.data.ErrorCode == 'D'){
         message = 'The PRN is valid, however the cheque was dishonoured';
         status = false;
      }
      else if(response.data.ErrorCode == 'C'){
         message = 'The PRN was cancelled';
         status = false;
      }
      else if(response.data.ErrorCode == 'X'){
         message = 'THe PRN has expired';
         status = false;
      }
      else if(response.data.ErrorCode == 'APPOO1'){
        message = response.data.ErrorDesc;
        status =  false;
      }
      else{
        message = 'An error occured';
        status = false;
      }


      
      this.dialogRef = this.dialog.open(SuccessfulMessageDialogComponent, {
        disableClose: true,
        data: {
          title: 'URA PRN',
          message: message,
          status: false,
        }
      });


      this.processing = false;
    }, (error) => {
      this.processing = false;

      if (error.error.message) {
        this.dialogRef = this.dialog.open( SuccessfulMessageDialogComponent, {
          panelClass: ['forward-message-dialog', 'dialogs'],
          disableClose: true,
          data: {
            title: error.error.message['title'] ? error.error.message['title'] : 'Operation Failed',
            message: error.error.message['body'] ? error.error.message['body'] : environment.technicalErrorResponse,
            status: false,
          }
        });
      } else {
        this.service.determineErrorResponse(error);
      }
    });
}

}

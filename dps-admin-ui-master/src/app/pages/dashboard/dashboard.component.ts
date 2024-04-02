import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChartData } from 'chart.js';
import * as moment from 'moment';
import {forkJoin, Observable, Subscription} from 'rxjs';
import { AdvancedPieChartWidgetOptions } from './widgets/advanced-pie-chart-widget/advanced-pie-chart-widget-options.interface';
import { AudienceOverviewWidgetOptions } from './widgets/audience-overview-widget/audience-overview-widget-options.interface';
import { BarChartWidgetOptions } from './widgets/bar-chart-widget/bar-chart-widget-options.interface';
import { DonutChartWidgetOptions } from './widgets/donut-chart-widget/donut-chart-widget-options.interface';
import { RealtimeUsersWidgetData, RealtimeUsersWidgetPages } from './widgets/realtime-users-widget/realtime-users-widget.interface';
import { RecentSalesWidgetOptions } from './widgets/recent-sales-widget/recent-sales-widget-options.interface';
import { SalesSummaryWidgetOptions } from './widgets/sales-summary-widget/sales-summary-widget-options.interface';
import { DashboardService } from './dashboard.service';
import { ChartWidgetOptions } from '../../../@fury/shared/chart-widget/chart-widget-options.interface';
import { ApiEndpointsService } from '../../services/api-endpoints.service';
import { ApiService } from '../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { ApiPayload } from '../../services/api.model';
import { AuthenticationService } from '../../authentication/authentication.service';
import { KeycloakService } from 'keycloak-angular';
import { WorkflowServiceService } from '../../services/workflow-service.service';
import { BaseFuryForm } from '../../../@fury/shared/base-fury-form';
import { CompanyRegistrationService } from '../../modules/company-registration/company-registration.service';
import { ComplaintService } from '../../modules/complaints/complaints.service';
import { fadeInRightAnimation } from '../../../@fury/animations/fade-in-right.animation';
import { fadeInUpAnimation } from '../../../@fury/animations/fade-in-up.animation';
import { ThemeService } from 'ng2-charts';

@Component({
  selector: 'fury-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})

export class DashboardComponent extends BaseFuryForm implements OnInit, AfterViewInit {

  private static isInitialLoad = true;
  httpSub: Subscription;
  isLoading = true;
  isOfficer: boolean;

  totalMonthlyApplications: ChartData;
  totalMonthlyApplicationsOptions: ChartWidgetOptions = {
    title: 'Total Monthly Applications',
    gain: null,
    subTitle: null,
    background: '#3F51B5',
    color: '#FFFFFF',
    isLoading: true,
  };

  top5CategoriesData$: Observable<ChartData>;
  top5CategoriesOptions: DonutChartWidgetOptions = {
    title: 'Data Categories',
    subTitle: '',
    isLoading: false
  };

  organisationsRegistered;
  organisationsUnderReview;
  registrationAverageTimeTaken;
  amountOfMoneyGenerated;
  complaintsReported;
  complaintsUnderReview;
  complaintAverageTimeTaken;
  breachesReported;
  breachesUnderReview;
  breachesAverageTimeTaken;

  
  
  private _gap = 16;
  gap = `${this._gap}px`;

  constructor(
    private dashboardService: DashboardService,
    private endpoints: ApiEndpointsService,
    private service: ApiService,
    private http: HttpClient,
    private router: Router,
    private auth: AuthenticationService,
    public authService: KeycloakService,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    public complaintService: ComplaintService
  ) {

    super(
      authService,
      _workflowService,
      registrationService,
      complaintService
    );

    this.isOfficer = this.service.timeLineAccess.includes(this.realmRole);
  }

  ngOnInit(): void {
   
  }

  ngAfterViewInit(): void {

    this.onFetchCategories();

    this.onFetchMonthlyData();

    this.httpSub = this.onFetchRegistrationCardDetails()
    .pipe(catchError(this.service.handleError))
    .subscribe((responseList) => {
      console.log(responseList);

      this.organisationsRegistered = responseList[0].data[0].number_of_organisations;
      console.log(this.organisationsRegistered);

      this.organisationsUnderReview = responseList[1].data[0].number_of_organisations_under_review;

      this.registrationAverageTimeTaken = responseList[2].data[0].average_time_taken;

      this.registrationAverageTimeTaken = this.registrationAverageTimeTaken + ' days'

      this.amountOfMoneyGenerated =  responseList[3].data[0].amount_of_money

      this.amountOfMoneyGenerated = 'UGX ' + this.amountOfMoneyGenerated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


     
    }, (error) => {
   
      this.service.determineErrorResponse(error);
    });

    this.httpSub = this.onFetchComplaintsAnalytics()
    .pipe(catchError(this.service.handleError))
    .subscribe((responseList) => {
      console.log(responseList);

      this.complaintsReported = responseList[0].data[0].number_of_complaints_reported;
      console.log(this.organisationsRegistered);

      this.complaintsUnderReview = responseList[1].data[0].number_of_complaints_under_review;

      this.complaintAverageTimeTaken = responseList[2].data[0].average_time_taken;

      this.complaintAverageTimeTaken = this.complaintAverageTimeTaken + ' days'

      this.amountOfMoneyGenerated =  responseList[3].data[0].amount_of_money

      this.amountOfMoneyGenerated = 'UGX ' + this.amountOfMoneyGenerated.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");


     
    }, (error) => {
   
      this.service.determineErrorResponse(error);
    });


    this.httpSub = this.onFetchBreachesAnalytics()
    .pipe(catchError(this.service.handleError))
    .subscribe((responseList) => {
      console.log(responseList);

      this.breachesReported = responseList[0].data[0].number_of_breaches_reported;
      console.log(this.organisationsRegistered);

      this.breachesUnderReview = responseList[1].data[0].number_of_breaches_under_review;

      this.breachesAverageTimeTaken = responseList[2].data[0].average_time_taken;

      if(this.breachesAverageTimeTaken == null){
        this.breachesAverageTimeTaken = 'None resolved';
      }
      else{
        this.breachesAverageTimeTaken = this.breachesAverageTimeTaken + ' days'
      }

     

     
    }, (error) => {
   
      this.service.determineErrorResponse(error);
    });
  
  

    
  }

  col(colAmount: number) {
    return `1 1 calc(${100 / colAmount}% - ${this._gap - (this._gap / colAmount)}px)`;
  }   

 

  onFetchCategories(): void {
    this.httpSub = this.http.get<ApiPayload>(this.endpoints.analyticsDppCategoryTotals)
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {

      const data: any[] = response.data;
      let cleanData: { label: string; value: number }[] = [];

      data.filter((item) => {
        cleanData.push({
          label: item['category_name'],
          value: item['total']
        })
      });

      this.top5CategoriesData$ = this.dashboardService.getTop5Categories(cleanData);

      this.top5CategoriesOptions.isLoading = false;

    }, (error) => {
      this.top5CategoriesOptions.isLoading = false;
      this.service.determineErrorResponse(error);
    });    
  }

  onFetchMonthlyData(): void {
    this.httpSub = this.http.get<ApiPayload>(this.endpoints.analyticsTotalMonthlyRegistrations)
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {

      const data = response.data;

      let cleanData = [
        data['January'],
        data['February'],
        data['March'],
        data['April'],
        data['May'],
        data['June'],
        data['July'],
        data['August'],
        data['September'],
        data['October'],
        data['November'],
        data['December']
      ];

      let labels = [
        'January', 
        'February', 
        'March', 
        'April', 
        'May', 
        'June', 
        'July', 
        'August', 
        'September', 
        'October', 
        'November', 
        'December'
      ];

      this.totalMonthlyApplications = {
        labels: labels,
        datasets: [
          { 
            label: '# Applications',
            data: cleanData,
            fill: false,
            backgroundColor: '#FFFFFF'         
          }
        ]
      }

      this.totalMonthlyApplicationsOptions.isLoading = false;

      

    }, (error) => {
      this.totalMonthlyApplicationsOptions.isLoading = false;
      this.service.determineErrorResponse(error);
    });    
  }

  onFetchRegistrationCardDetails(): Observable<any[]>{

    const registeredOrganisations = this.http.get<ApiPayload>(this.endpoints.registeredOrganisations);
    const organisationsUnderReview = this.http.get<ApiPayload>(this.endpoints.organisationsUnderReview);
    const averageTimeTaken = this.http.get<ApiPayload>(this.endpoints.registrationAverageTimeTaken);
    const amountOfMoneyGenerated = this.http.get<ApiPayload>(this.endpoints.amountOfMoneyGenerated);

    
    // tslint:disable-next-line:max-line-length
    return forkJoin([
      registeredOrganisations, 
      organisationsUnderReview, 
      averageTimeTaken, 
      amountOfMoneyGenerated, 
    
    ]);

  }

  onFetchComplaintsAnalytics(): Observable<any[]>{

    const complaintsReported = this.http.get<ApiPayload>(this.endpoints.complaintsReported);
    const complaintsUnderReview = this.http.get<ApiPayload>(this.endpoints.complaintsUnderReview);
    const averageTimeTaken = this.http.get<ApiPayload>(this.endpoints.complaintsAverageTimeTaken);
 

    
    // tslint:disable-next-line:max-line-length
    return forkJoin([
      complaintsReported, 
      complaintsUnderReview, 
      averageTimeTaken, 
   
    
    ]);

  }


  onFetchBreachesAnalytics(): Observable<any[]>{

    const breachesReported = this.http.get<ApiPayload>(this.endpoints.breachesReported);
    const breachesUnderReview = this.http.get<ApiPayload>(this.endpoints.breachesUnderReview);
    const averageTimeTaken = this.http.get<ApiPayload>(this.endpoints.breachesAverageTimeTaken);
 

    
    // tslint:disable-next-line:max-line-length
    return forkJoin([
      breachesReported, 
      breachesUnderReview, 
      averageTimeTaken, 
   
    
    ]);

  }
}
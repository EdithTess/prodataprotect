import { Component, OnInit } from '@angular/core';
import {fadeInRightAnimation} from '../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../@fury/animations/fade-in-up.animation';
import {AfterViewInit, EventEmitter, Input, ViewChild} from '@angular/core';
import { Subscription} from 'rxjs';
import {
    CompanyRegistration,
    ComponyRegistrationObject
} from '../../company-registration/components/company-registration.model';
import {
    DataType, DateFinderOptions,
    IFinderField,
    ListColumn,
    LookupFinderOptions,
    TextFinderOptions
} from '../../../../@fury/shared/list/list-column.model';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatDialog} from '@angular/material/dialog';
import {ActivatedRoute, Router} from '@angular/router';
import {BaseFuryForm} from '../../../../@fury/shared/base-fury-form';
import {CompanyRegistrationService} from '../../company-registration/company-registration.service';
import {KeycloakService} from 'keycloak-angular';
import {WorkflowServiceService} from '../../../services/workflow-service.service';
import {AuthenticationService} from '../../../authentication/authentication.service';
import {ComplaintService} from '../../complaints/complaints.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';


interface MinimalsDT {
    orgName: string;
    // orgCategory: string;
    orgRegDate: string;
    orgRegNo: string;
    orgMyID: string;
}

interface ReportsDT {
    ComplianceReportID: string;
    CreatedDate: string;
    OrganizationID: string;
}

@Component({
  selector: 'fury-find-compliance-reports',
  templateUrl: './find-compliance-reports.component.html',
  styleUrls: ['./find-compliance-reports.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class FindComplianceReportsComponent extends BaseFuryForm implements OnInit, AfterViewInit {

    @Input()
    pageSize = 10;
  
    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort: MatSort;

    // Search fields
    searchFields: IFinderField[];

    realmRole: string;
    isOrganisation = false;
    accesses: any [] = [];

    // Define your properties here
    orgName: string[] = [];
    orgRegNo: string[] = [];
    orgRegDate: string[] = [];
    orgMyID: string[] = [];
    orgRenewal: string[] = [];

    ComplianceReportID: string[] = [];
    CreatedDate: string[] = [];
    OrganizationID: any[];
  
    operationType = '';
    MinimalsArray: MinimalsDT[] = [];
    MinimalColumns: string[] = ['orgName', 'orgRegDate', 'orgMyID', 'action'];
    MinimalDataSource: MatTableDataSource<MinimalsDT>;

    ReportsArray: ReportsDT[] = [];
    ReportsColumns: string[] = ['orgName','orgRegNo','ComplianceReportID', 'CreatedDate', 'action'];
    ReportsDataSource: MatTableDataSource<ReportsDT>;

  constructor(
    private auth: KeycloakService,
    private http: HttpClient,
    private authenticationService: AuthenticationService,
    public registrationService: CompanyRegistrationService,
    public _workflowService: WorkflowServiceService,
    public complaintService:ComplaintService
    ) 
    {
        super(
            auth,
            _workflowService,
            registrationService,
            complaintService,
        );

        //console.log("Here-----")
        this.operationType = 'FIND';
        this.MinimalDataSource = new MatTableDataSource<MinimalsDT>(this.MinimalsArray);
        this.ReportsDataSource = new MatTableDataSource<ReportsDT>(this.ReportsArray);
     }

         // TODO:: Need to hide addressedTo Column from data controllers its mainly for nita data-protection officers

    ngOnInit(): void {
        this.defineSearchFields();
        if (this.auth.getKeycloakInstance().resourceAccess['dps-frontend']) {
            this.accesses = this.auth.getKeycloakInstance().resourceAccess['dps-frontend'].roles;
        }

        // console.log("Keycloak instance below--")
        // console.log(this.auth.getKeycloakInstance());

        if (this.auth.getKeycloakInstance().realmAccess) {
            if(this.auth.getKeycloakInstance().realmAccess.roles.includes('organisation')){
                this.isOrganisation = true;
            }
            //console.log(this.auth.getKeycloakInstance().realmAccess.roles)
        }

        // Here rest of the Role Code
        if (this.operationType === 'FIND') {
            if (this.isOrganisation) {            
                this.fetchMinimalDataAndThenFetchReportsData();
                //console.log('---Loaded One Report---');
            } else {
                this.FetchAllReportsData();
              //console.log('---Loaded All Reports---');
            }
        }
    }

    ngAfterViewInit() {
        this.ReportsDataSource.paginator = this.paginator;
        this.ReportsDataSource.sort = this.sort;
    }

    onFilterChange(value) {
        if (!this.ReportsDataSource) {
            return;
        }
        value = value.trim();
        value = value.toLowerCase();
        this.ReportsDataSource.filter = value;
    }

    private baseAPIUri = environment.backend;
    //This function is for fetching individual reports for an organisation
    fetchMinimalDataAndThenFetchReportsData(): void {
        const api2 = `${this.baseAPIUri}v1.0/org-registration/byorgid/single?OrganizationID=${this.authenticationService.getOrganisationID()}`;
      
        this.http.get<any[]>(api2).pipe(
          switchMap((response) => {
            this.MinimalsArray = response.map((item) => ({
              orgName: item.OrganisationName,
              orgRegDate: item.EnteredOn,
              orgRegNo: item.RegTrackingNo,
              orgMyID: item.OrganisationID,
            }));
            this.orgMyID = this.MinimalsArray.map(item => item.orgMyID);
            this.MinimalDataSource.data = this.MinimalsArray;
            
            return this.orgMyID;
          })
        ).subscribe((orgMyID) => {
         
          const api3 = `${this.baseAPIUri}v1.0/compliance-report/compliance-report/single?OrganizationID=${orgMyID}`;
  
                this.http.get<any>(api3).subscribe(
                    (response) => {
                    if (Array.isArray(response.compliance_reports)) {
                        const complianceReports = response.compliance_reports;
                        complianceReports.sort((a, b) => new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime());
                        this.ReportsArray = complianceReports.map((item) => ({
                        ComplianceReportID: item.ComplianceReportID,
                        CreatedDate: item.CreatedDate,
                        OrganizationID: item.OrganizationID,
                        orgName: this.MinimalsArray.find(minimal => minimal.orgMyID === item.OrganizationID)?.orgName,
                        orgRegNo: this.MinimalsArray.find(minimal => minimal.orgMyID === item.OrganizationID)?.orgRegNo,
                        }));
                        
                        this.ReportsDataSource.data = this.ReportsArray;
                        //console.log("-----Finished loading org Data-----")

                    } else {
                        console.error('Response does not contain the expected "compliance_reports" array:', response);
                    }
                    },
                    (error) => {
                        console.error('Error fetching Single Organization Report data:', error);
                    }
                );
        });
      }

      //Then this function is for the legal team to fetch all reports
      FetchAllReportsData(): void {
        const api4 = this.baseAPIUri + 'v1.0' + '/org-registration/all/minimal-data';
        this.http.get<any[]>(api4).pipe(
          switchMap((response) => {
            this.MinimalsArray = response.map((item) => ({
              orgName: item.OrganisationName,
              orgRegDate: item.EnteredOn,
              orgRegNo: item.RegTrackingNo,
              orgMyID: item.OrganisationID,
            }));
            this.orgMyID = this.MinimalsArray.map(item => item.orgMyID);
            this.MinimalDataSource.data = this.MinimalsArray;
            
            return this.orgMyID;
          })
        ).subscribe((orgMyID) => {
         
          const api5 = `${this.baseAPIUri}v1.0/compliance-report/compliance-reports/all`;
  
                this.http.get<any>(api5).subscribe(
                    (response) => {
                    if (Array.isArray(response.compliance_reports)) {
                        const complianceReports = response.compliance_reports;
                        complianceReports.sort((a, b) => new Date(b.CreatedDate).getTime() - new Date(a.CreatedDate).getTime());
                        this.ReportsArray = complianceReports.map((item) => ({
                        ComplianceReportID: item.ComplianceReportID,
                        CreatedDate: item.CreatedDate,
                        OrganizationID: item.OrganizationID,
                        orgName: this.MinimalsArray.find(minimal => minimal.orgMyID === item.OrganizationID)?.orgName,
                        orgRegNo: this.MinimalsArray.find(minimal => minimal.orgMyID === item.OrganizationID)?.orgRegNo,
                        }));
                        
                        this.ReportsDataSource.data = this.ReportsArray;
                        //console.log("-----Finished loading All Reports Data-----")

                    } else {
                        console.error('Response does not contain the expected "compliance_reports" array:', response);
                    }
                    },
                    (error) => {
                        console.error('Error fetching All Organization Reports data:', error);
                    }
                );
        });
      }

    private defineSearchFields() {
        this.searchFields = [
          {
            label: 'Compliance Report ID',
            fieldName: 'ComplianceReportID',
            operators: TextFinderOptions,
            dataType: DataType.TEXT
          },
          {
            label: 'Organization Name',
            fieldName: 'orgName',
            operators: TextFinderOptions,
            dataType: DataType.TEXT
          },
          {
            label: 'Registration Number',
            fieldName: 'orgRegNo',
            operators: TextFinderOptions,
            dataType: DataType.TEXT
          },
          {
            label: 'Created On',
            fieldName: 'CreatedDate',
            operators: DateFinderOptions,
            dataType: DataType.DATETIME
          }
        ];
      }
      

}

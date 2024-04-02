import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { LIST_FADE_ANIMATION } from '../../../../@fury/shared/list.animation';
import { Subscription} from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { ApiEndpointsService } from '../../../services/api-endpoints.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { SnackBarService } from '../../../pages/services/snack-bar.service';
import { KeycloakService } from 'keycloak-angular';
import { WorkflowServiceService } from '../../../services/workflow-service.service';
import { CompanyRegistrationService } from '../../../modules/company-registration/company-registration.service';
import { AuthenticationService } from '../../../authentication/authentication.service';
import { BaseFuryForm } from '../../../../@fury/shared/base-fury-form';
import { ApiPayload } from '../../../services/api.model';
import { catchError } from 'rxjs/operators';
import { ShowNotificationDialogComponent } from '../../dialogs/show-notification-dialog/show-notification-dialog.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ShowAllNotificationsBottomsheetComponent } from '../../bottomsheets/show-all-notifications-bottomsheet/show-all-notifications-bottomsheet.component';
import { KeycloakProfile } from 'keycloak-js';
import { ComplaintService } from '../../../modules/complaints/complaints.service';

export interface Notification {
  NotificationID: number;
  OrganizationID: number;
  RegTrackingNo: string;
  Title: string;
  Body: string;
  Category: string;
  IsRead: string;
  ReadDate: Date;
  EnteredOn: Date;
  Role: string;
}

@Component({
  selector: 'fury-toolbar-notifications',
  templateUrl: './toolbar-notifications.component.html',
  styleUrls: ['./toolbar-notifications.component.scss'],
  animations: [...LIST_FADE_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolbarNotificationsComponent extends BaseFuryForm implements OnInit{

  notifications: Notification[] = [];
  isOpen: boolean;
  httpSub: Subscription;
  userSub: Subscription;
  dialogRef;
  bottomsheetRef;
  public isLoggedIn = false;
  userProfile: KeycloakProfile | null = null;
  isOfficer: boolean;
  totalCount = 0;
  RegTrackingNo: string = null;
  Interval: number = 0;
  organisation

  constructor(
    private service: ApiService,
    private endpoints: ApiEndpointsService,
    private dialog: MatDialog,
    private bottomsheet: MatBottomSheet,
    private http: HttpClient,
    private snackBar: SnackBarService,
    public authService: KeycloakService,
    public _auth: AuthenticationService,
    public _workflowService: WorkflowServiceService,
    public registrationService: CompanyRegistrationService,
    public complaintService: ComplaintService,
    private changeDetector: ChangeDetectorRef
  ) {

    super(
      authService,
      _workflowService,
      registrationService,
      complaintService
    );

    this.organisation = _auth.getKeycloakInstance();    
    
    


    this.isOfficer = this.service.timeLineAccess.includes(this.realmRole);
    
  }

  async ngOnInit() {
    
    if (await this.authService.isLoggedIn()) {
      if (this._auth.user) {

        this._auth.userSubject.subscribe((e) => {  
          
          this.userProfile = e;

          if (this.userProfile) {
            if (!this.isOfficer) {  
              this.onFetchOrganisationDetails();
  
            } else {
              this.onFetchNotifications();
            }         
          }
        });
      }
    }   
  }

  private onFetchOrganisationDetails(): void {
    
    this.httpSub = this.http.get<ApiPayload>(this.endpoints.getOrgDetailsById, {
      params: { OrganizationID: this.organisation.profile.attributes.organisation_id[0] }
    })
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
        
      console.log('response', response);
      this.RegTrackingNo = response[0]['RegTrackingNo'];

      this.onFetchNotifications();

    }, (error) => {
      this.service.determineErrorResponse(error);
    });       
  }

  private onFetchNotifications(): void {
    let params = null;
    clearInterval(this.Interval);

    if (this.RegTrackingNo) {
      params = { 
        RegTrackingNo: this.RegTrackingNo,
        Role: this.realmRole,
      }
    } else {
      params = { 
        Role: this.realmRole,
      }
    }

    this.httpSub = this.http.get<ApiPayload>(this.endpoints.notifications, { params })
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      
      console.log(response);
      this.totalCount = 0;
      this.notifications = response.data;
      
      this.notifications.filter((item) => {
        this.totalCount = item.IsRead === 'No' ? ++this.totalCount : this.totalCount;
      });

      this.changeDetector.detectChanges();

      this.Interval = window.setTimeout(() => {
        this.onFetchNotifications();
      }, 30000);

    }, (error) => {
      this.service.determineErrorResponse(error);
    }); 
  }

  dismiss(notification, event) {
    event.stopPropagation();
    this.notifications.splice(this.notifications.indexOf(notification), 1);
    this.totalCount = this.totalCount === 0 ? this.totalCount : this.totalCount - 1;
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  onClickOutside() {
    this.isOpen = false;
  }

  markAllAsRead() {
    this.notifications.forEach(notification => notification.IsRead = 'Yes');
    this.totalCount = 0;
  }

  markAsRead(row: Notification, event): void {
    event.stopPropagation();

    this.dialogRef = this.dialog.open(ShowNotificationDialogComponent, {
      panelClass: ['show-notification-dialog', 'dialogs'],
      disableClose: true,
      data: { row }
    });

    this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: Notification }) => {
      this.totalCount = this.totalCount === 0 ? this.totalCount : this.totalCount - 1;
      this.onSaveMarkAsRead(row);
    });
  }

  onShowAll(): void {
    event.stopPropagation();

    this.bottomsheetRef = this.bottomsheet.open(ShowAllNotificationsBottomsheetComponent, {
      panelClass: ['show-all-notifications-bottomsheet', 'bottomsheets'],
      disableClose: true,
      data: {
        RegTrackingNo: this.RegTrackingNo,
        Role: this.realmRole,        
      }
    });

    this.bottomsheetRef.afterDismissed().subscribe((result: any) => {
      // Check for notifications
      this.onFetchNotifications();
    });

  }

  private onSaveMarkAsRead(row: Notification): void {

    let data = {
      NotificationID: String(row.NotificationID)
    }

    this.httpSub = this.http.put<ApiPayload>(this.endpoints.notifications, data)
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
      row.IsRead = 'Yes';
    }, (error) => {
      this.service.determineErrorResponse(error);
    });      
  }

  ngOnDestroy(): void {
    if (this.dialogRef) { this.dialogRef.close(); }
    if (this.httpSub) { this.httpSub.unsubscribe(); }
    if (this.Interval) { clearInterval(this.Interval) }
  }
}

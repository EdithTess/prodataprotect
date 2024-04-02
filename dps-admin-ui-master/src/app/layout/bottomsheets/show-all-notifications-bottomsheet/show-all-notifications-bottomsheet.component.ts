import { Component, OnInit, OnDestroy, ViewChild, ChangeDetectorRef, Output, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { Subscription } from 'rxjs';
import { ApiService } from '../../../services/api.service';
import { ApiEndpointsService } from '../../../services/api-endpoints.service';
import { ApiPayload } from '../../../services/api.model';
import { Notification } from '../../toolbar/toolbar-notifications/toolbar-notifications.component';
import { ShowNotificationDialogComponent } from '../../dialogs/show-notification-dialog/show-notification-dialog.component';

@Component({
  selector: 'fury-show-all-notifications-bottomsheet',
  templateUrl: './show-all-notifications-bottomsheet.component.html',
  styleUrls: ['./show-all-notifications-bottomsheet.component.scss']
})
export class ShowAllNotificationsBottomsheetComponent implements OnInit, AfterViewInit, OnDestroy {

  dialogRef;
  processing = false;
  notifications: Notification[] = [];
  displayedColumns: string[] = ['count'];
  dataSource: MatTableDataSource<any>;
  processingBtn = null;
  httpSub: Subscription;
  totalCount = 0;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort: MatSort;

  @Output() onProcessing = new EventEmitter();

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: { RegTrackingNo: string; Role: string },
    private bottomsheetRef: MatBottomSheetRef<ShowAllNotificationsBottomsheetComponent>,    
    private http: HttpClient,
    private service: ApiService,
    private endpoints: ApiEndpointsService,
    private dialog: MatDialog,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onFetch();    
  }

  onCloseWindow(): void {
    this.bottomsheetRef.dismiss();
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onFetch(): void {
    this.processing = true;
    this.changeDetector.detectChanges();
    
    // this.http.get<ApiPayload>(this.endPoints.epMeetingMembers, {
    //   params: { meetingID: this.data.meeting.meetingID }
    // })
    // .pipe(catchError(this.apiService.handleError))
    // .subscribe((response) => {      
    //   this.dataSource = new MatTableDataSource(response.data);

    //   setTimeout(() => {
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //   });
      
    //   this.processing = false;
    //   this.changeDetector.detectChanges();

    // }, (error) => {
    //   this.processing = false;
    //   this.apiService.determineErrorResponse(error);
    // });

    let params = null;

    if (this.data.RegTrackingNo) {
      params = { 
        RegTrackingNo: this.data.RegTrackingNo,
        Role: this.data.Role,
      }
    } else {
      params = { 
        Role: this.data.Role,
      }
    }

    this.httpSub = this.http.get<ApiPayload>(this.endpoints.notifications, { params })
    .pipe(catchError(this.service.handleError))
    .subscribe((response) => {
        
      // console.log('notifications', response);
      
      this.notifications = response.data;
      
      this.notifications.filter((item) => {
        this.totalCount = item.IsRead === 'No' ? ++this.totalCount : this.totalCount;
      });

      this.dataSource = new MatTableDataSource(this.notifications);

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
      
      this.processing = false;
      this.changeDetector.detectChanges();
            
    }, (error) => {
      this.service.determineErrorResponse(error);
    }); 
  }

  markAsRead(row: Notification, event): void {
    event.stopPropagation();

    this.dialogRef = this.dialog.open(ShowNotificationDialogComponent, {
      panelClass: ['show-notification-dialog', 'dialogs'],
      disableClose: true,
      data: { row }
    });

    this.dialogRef.afterClosed().subscribe((result: { status: boolean, row: Notification }) => {
      row.IsRead = 'Yes';
      --this.totalCount;
    });
  }

  ngOnDestroy(): void {
    this.onProcessing.next(false);

    if (this.dialogRef) { this.dialogRef.close(); }
    if (this.httpSub) { this.httpSub.unsubscribe(); }
  }
}

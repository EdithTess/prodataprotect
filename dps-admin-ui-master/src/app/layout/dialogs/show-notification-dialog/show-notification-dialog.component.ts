import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { Notification } from '../../toolbar/toolbar-notifications/toolbar-notifications.component';

@Component({
  selector: 'fury-show-notification-dialog',
  templateUrl: './show-notification-dialog.component.html',
  styleUrls: ['./show-notification-dialog.component.scss']
})
export class ShowNotificationDialogComponent implements OnInit {

  processing = true;
  status = false;

  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { row: Notification },
    private dialogRef: MatDialogRef<ShowNotificationDialogComponent>
  ) { }

  ngOnInit(): void { }

  onCloseDialog(): void {
    this.dialogRef.close({
      status: this.status,
      row: this.data ? this.data.row : null
    });
  }
}


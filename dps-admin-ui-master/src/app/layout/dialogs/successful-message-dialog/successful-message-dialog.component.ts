import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-successful-message-dialog',
  templateUrl: './successful-message-dialog.component.html',
  styleUrls: ['./successful-message-dialog.component.scss']
})
export class SuccessfulMessageDialogComponent implements OnInit {

  processing = false;
  httpSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, status: boolean },
    private dialogRef: MatDialogRef<SuccessfulMessageDialogComponent>,
  ) { }

  ngOnInit(): void { }

  onCloseDialog(): void {
    this.dialogRef.close();
  }  
}



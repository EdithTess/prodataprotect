import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fury-forward-message-dialog',
  templateUrl: './forward-message-dialog.component.html',
  styleUrls: ['./forward-message-dialog.component.scss']
})
export class ForwardMessageDialogComponent implements OnInit {

  processing = false;
  httpSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, status: boolean },
    private dialogRef: MatDialogRef<ForwardMessageDialogComponent>
  ) { }

  ngOnInit(): void {}

  onCloseDialog(): void{
    this.dialogRef.close();
  }

}

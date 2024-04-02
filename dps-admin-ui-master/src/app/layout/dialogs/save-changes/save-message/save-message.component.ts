import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fury-save-message',
  templateUrl: './save-message.component.html',
  styleUrls: ['./save-message.component.scss']
})
export class SaveMessageComponent implements OnInit {

  processing = false;
  httpSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string, message: string, status: boolean },
    private dialogRef: MatDialogRef<SaveMessageComponent>,
  ) { }

  ngOnInit(): void { }

  onCloseDialog(): void {
    this.dialogRef.close();
  }  

}

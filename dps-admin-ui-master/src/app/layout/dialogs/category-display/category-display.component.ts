import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';

@Component({
  selector: 'fury-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.scss']
})
export class CategoryDisplayComponent implements OnInit {

  processing = false;
  httpSubscription: Subscription;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data,
    private dialogRef: MatDialogRef<CategoryDisplayComponent>,
  ) { }

  ngOnInit(): void { 

    console.log(this.data);
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }  

}

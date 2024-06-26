import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-dialog-form-input',
  templateUrl: './dialog-form-input.component.html',
  styleUrls: ['./dialog-form-input.component.scss']
})
export class DialogFormInputComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogFormInputComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick(): void {
    this.dialogRef.close(true);
  }
}

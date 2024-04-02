import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReviewCommentsComponent} from './review-comments.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MaterialModule} from '../../../@fury/shared/material-components.module';



@NgModule({
  declarations: [
      ReviewCommentsComponent
  ],
  entryComponents: [ReviewCommentsComponent],
  exports: [
    ReviewCommentsComponent
      ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    ListModule,
    MaterialModule,
  ]
})
export class ReviewCommentsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MglTimelineModule} from 'angular-mgl-timeline';
import {ApplicationTimelineComponent} from './application-timeline.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [ApplicationTimelineComponent],
  entryComponents: [ApplicationTimelineComponent],
  exports: [
    ApplicationTimelineComponent
  ],
  imports: [
    CommonModule,
    MglTimelineModule,
    MatDialogModule
  ]
})
export class ApplicationTimelineModule { }

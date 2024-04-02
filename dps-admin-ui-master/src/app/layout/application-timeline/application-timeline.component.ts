import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {WorkFlowTimeline} from '../../modules/models/document-workflow.model';

@Component({
  selector: 'fury-application-timeline',
  templateUrl: './application-timeline.component.html',
  styleUrls: ['./application-timeline.component.scss']
})
export class ApplicationTimelineComponent implements OnInit {
  entries: any;
  alternate = true;
  toggle = true;
  color = false;
  size = 40;
  expandEnabled = true;
  contentAnimation = true;
  dotAnimation = true;
  side = 'left';

  constructor(@Inject(MAT_DIALOG_DATA) public workFlowTimeline: WorkFlowTimeline,
              private dialogRef: MatDialogRef<ApplicationTimelineComponent>) {
  }

  ngOnInit(): void {
    this.entries = this.workFlowTimeline.data;
    console.log('keeper of the timeline ' + JSON.stringify(this.workFlowTimeline));
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`);
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }
  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

export interface Data {
  url: string;
  title: string;
}

@Component({
  selector: 'app-view-pdf-document-bottomsheet',
  templateUrl: './view-pdf-document-bottomsheet.component.html',
  styleUrls: ['./view-pdf-document-bottomsheet.component.scss']
})
export class ViewPdfDocumentBottomsheetComponent implements OnInit {

  url = './assets/images/bg.png';
  title = null;

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) private data: Data,
    private bottomsheetRef: MatBottomSheetRef<ViewPdfDocumentBottomsheetComponent>,
  ) { }

  ngOnInit() {
    this.url = this.data.url;
    this.title = this.data.title;
  }

  onClose() {
    this.bottomsheetRef.dismiss();
  }

}

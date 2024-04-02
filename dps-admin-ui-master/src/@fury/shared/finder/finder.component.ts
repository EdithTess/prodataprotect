import {Component, Inject, OnInit} from '@angular/core';
import {DataType, DataTypeOperation, IFinderField, ISearchExpression} from '../list/list-column.model';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'fury-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit {
  // list of fields to display on the search form.
  // search fields should be in the format
  // {name:'voyage', type:string}, etc.
  searchFields: IFinderField[];
  // list of search criterion to use in api call.
  searchExpressions: ISearchExpression[] = [];
  // Limit date values
  minDateFrom: Date = new Date(1900, 0, 1);
  maxDateFrom: Date = new Date();
  minDateTo: Date = new Date(1900, 0, 1);
  maxDateTo: Date = new Date();
  // Make enums available on html
  public dataType = DataType;
  public dataTypeOperation = DataTypeOperation;
  // default constructor
  constructor(
      public dialogRef: MatDialogRef<FinderComponent>,
      @Inject(MAT_DIALOG_DATA) public data: {
        decision: boolean,
        message: string,
        title: string,
        searchFields: IFinderField[]
      }) {
  }

  ngOnInit(): void {
    // create mapping objects for search fields.
    this.data.searchFields.forEach((item) => {
      this.searchExpressions.push({
        fieldName: item.fieldName,
        dataType: item.dataType,
        operation: (item.selectedOperation) ? item.selectedOperation : DataTypeOperation.ANY,
        expressionType: 'SearchCriterion',
        values: (item.selectedValues) ? item.selectedValues : []
      });
    });
    // bind search fields to build form.
    this.searchFields = this.data.searchFields;
  }

  /**
   * Close dialog.
   */
  closeDialog(): void {
    this.dialogRef.close();
  }
  /**
   * Toggle the associated text field
   * @param $event - change event
   * @param idx - index of changed item
   */
  toggleValueField($event: any, idx: number): void {
    if ($event.value) {
      this.searchFields[idx].active = true;
    } else {
      this.searchFields[idx].active = false;
      this.searchExpressions[idx].values = [];
    }
  }

  setMinDate(value: any): void {
    if (value) {
      this.minDateTo = value;
    }
  }

  setMaxDate(value: any): void {
    if (value) {
      this.maxDateFrom = value;
    }
  }

}

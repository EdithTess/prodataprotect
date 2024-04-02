import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import {DataTypeOperation, IFinderColumn, IFinderField, ISearchExpression, ISearchRequest, ListColumn} from './list-column.model';
import {DialogService} from '../../services/dialog.service';
import {MatPaginator} from '@angular/material/paginator';
import {FinderDataSource} from './finder.data.source';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'fury-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ListComponent implements AfterViewInit {

  DEFAULT_PAGE_SIZE = 10;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() name: string;
  @Input() columns: ListColumn[];
  /**
   * Array of fields to be included in the search criteria component
   */
  @Input() searchFields: IFinderField[];
  /**
   * Array of columns to be displayed on grid result
   */
  @Input() finderColumns: IFinderColumn[] = [];
  /**
   * Predefined filter criteria, if any
   */
  @Input() filterCriteria: ISearchExpression[] = [];
  /**
   * Whether or not the finder criteria dialog should be open when the component is displayed
   */
  @Input() openFinderCriteriaByDefault = true;
  @Input() hideFilteringButtons = false;
  @Input() finderDialogTitle: string;
  @Input() finderDialogWidth = 800;
  @Output() fireActionEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() pageSizeOptions = [10, 50, 100];
  @Input() length = this.DEFAULT_PAGE_SIZE;

  @ViewChild('filter') filter: ElementRef;
  @Output() filterChange = new EventEmitter<string>();

  @Input() hideHeader: boolean;
  // Paginator parameters
  listData: FinderDataSource;
  // Search parameters
  searchRequest: ISearchRequest;
  searchExpresion: ISearchExpression[] = null;

  constructor(
      private dialog: DialogService,
  ) {
  }

  ngAfterViewInit() {
    if (!this.hideHeader) {
      fromEvent(this.filter.nativeElement, 'keyup').pipe(
        distinctUntilChanged(),
        debounceTime(150)
      ).subscribe(() => {
        this.filterChange.emit(this.filter.nativeElement.value);
      });
    }
  }

  toggleColumnVisibility(column, event) {
    event.stopPropagation();
    event.stopImmediatePropagation();
    column.visible = !column.visible;
  }

  // Open a search finder dialog
  openFinder(): void {
    //delay the display of search dialog
    // prevents issue where error is thrown because component is not created yet
    setTimeout(() => {
      this.dialog.search(this.finderDialogTitle, this.searchFields, this.finderDialogWidth).subscribe((searchExpression) => {
        // if the criteria is passed we assume the user chose to submit the search
        if (searchExpression) {
          this.searchExpresion = searchExpression;
          // Clear paginator
          // this.paginator.pageIndex = 0;
          // this.paginator.pageSize = this.length;
          // this.prepareSearchRequest(this.searchExpresion);
          // this.setCriteriaOnSearchFields();
          // this.getDocumentData();
        }
      });
    });
  }

  private prepareSearchRequest(criteria: ISearchExpression[]) {
    // pagination
    this.searchRequest.pagination = {
      page: this.paginator.pageIndex + 1,
      nextPageIndicator: true,
      itemsPerPage: this.paginator.pageSize
    };
    // Sort order
    this.searchRequest.sortBy = [
      {
        fieldName: this.sort.active,
        ascending: (this.sort.direction === 'asc')
      }
    ];
    if (criteria && criteria.length > 0) {
      criteria = criteria.concat(this.filterCriteria);
    } else {
      criteria = this.filterCriteria;
    }
    this.searchRequest.criteria = criteria;
  }

  private setCriteriaOnSearchFields() {
    this.searchFields.forEach(field => {
      const expresion = this.searchExpresion.find(criteria => criteria.fieldName === field.fieldName);
      if (expresion && expresion.values) {
        field.active = true;
        field.selectedValues = expresion.values;
        field.selectedOperation = expresion.operation;
      } else {
        field.active = false;
        field.selectedValues = [];
        field.selectedOperation = DataTypeOperation.ANY;
      }
    });
  }


  private getDocumentData() {
    // this.listData.loadDocumentData(this.searchUrl, this.searchRequest, this.errorsEvent$);
  }

}

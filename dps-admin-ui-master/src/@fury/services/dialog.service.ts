import { Injectable } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {IFinderField} from '../shared/list/list-column.model';
import {Observable} from 'rxjs';
import {FinderComponent} from '../shared/finder/finder.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(
      public dialog: MatDialog
  ) { }

  /**
   * Open a finder window to perform a search
   * @param title - Title of the search form
   * @param  searchFields - List of filter fields to be used for search
   * @param  width - width of the search dialog
   */

  public search(title: string,searchFields: IFinderField[], width: number = 200): Observable<any> {
    const  dialogInstance = this.dialog.open(
        FinderComponent,{
          width: width + 'px',
          data: {title: title, searchFields: searchFields }
        }
    );
    return dialogInstance.afterClosed();
  }
}

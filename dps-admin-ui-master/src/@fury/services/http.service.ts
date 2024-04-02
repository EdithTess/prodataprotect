import { HttpErrorResponse } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpUtils } from '../http/HttpUtils';
import { DataServiceError } from '../shared/HttpModel';
import { FindDataRequest } from '../shared/list/list-column.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  /**
   * Process FindDataRequest parameters for search
   * @param req - Finder request
   */
  public getParams(req: FindDataRequest): any {
    const searchRequest: any = Object.assign({}, req);
    searchRequest.criteria = JSON.stringify(req.criteria);
    searchRequest.viewColumn = req.viewColumn;
    return searchRequest;
  }


  /**
   * Handle and parse errors received from the API
   * @param responseError - Error received
   */
  public handleError(responseError: HttpErrorResponse) {
    const errors: DataServiceError[] = [];
    // Parse errors
    if (responseError.error instanceof ErrorEvent) {
    } else {
      try {
        if (responseError.error.status) {
          if (responseError.error.status.errors && responseError.error.status.errors.length > 0) {
            responseError.error.status.errors.forEach((error: DataServiceError) => {
              if (!errors.includes(error)) {
                errors.push(error);
              }
            });
          }
        }
        if (responseError.error.errors.length > 0) {
          responseError.error.errors.forEach((error: DataServiceError) => {
            if (!errors.includes(error)) {
              errors.push(error);
            }
          });
        }
      } catch (e) {
      }
      // Format error messages
      if (errors) {
        if (errors.length === 0) {
          errors.push({message: 'Unexpected error, please contact your administrator', path: '', value: ''});
        }
      }
    }
    // Return
    return throwError(errors);
  }

}

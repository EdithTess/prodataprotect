import { formatDate, formatNumber } from '@angular/common';
import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { MatOption } from '@angular/material/core';
import { MatSelectChange } from '@angular/material/select';
// import { environment } from 'src/environments/environment';
import { environment } from '../../environments/environment';
import {CatalogRequest, ISearchExpression, ISearchOrder, ISearchPagination, ISearchRequest, LookupValue } from '../shared/list/list-column.model';

@Injectable({
  providedIn: 'root'
})

export class UtilService {
  constructor() {
  }

  public addMonthToDate(nMonths: number): Date {
    const month = new Date().getMonth();
    let day = new Date().getDate();
    const year = new Date().getFullYear();
    if (month + nMonths > 12) {
      if ((month + nMonths) % 12 === 2) {
        if (day > 29) {
          day = 28;
        }
      }
      return new Date(year + 1, (month + nMonths) % 12, day);
    } else {
      if (month + nMonths === 2) {
        if (day > 29) {
          day = 28;
        }
      }
      return new Date(year, month + nMonths, day);
    }
  }

  public convertToNumber(numberInputField): number {
    return (numberInputField && numberInputField !== '') ? +numberInputField : null;
  }

  public transformDate(dateString: string) {
    return dateString && dateString !== null + '' ?
        formatDate(dateString, environment.defaultServerDateFormat, environment.defaultLocale) :
        null;
  }

  public transformDateTime(dateString: string) {
    if (dateString && dateString !== null + '') {
      return formatDate(dateString, environment.defaultServerDateTimeFormat, environment.defaultLocale, '+0300');
    } else {
      return null;
    }
  }

  public formatDecimal(value: number, digitalInfo?: string) {
    const digitalFormat = (digitalInfo) ? digitalInfo : environment.defaultDigitalInfo;
    return formatNumber(value, environment.defaultLocale, digitalFormat);
  }

  // setSelectedText(event, targetField: string, document: any) {
  //   const target = event.source.selected._element.nativeElement;
  //   let text = target.innerText.trim();
  //   const arrayText = text.split('|');
  //
  //   if (arrayText.length > 1) {
  //     text = arrayText[1];
  //   } else {
  //     text = arrayText[0];
  //   }
  //
  //   if (document) {
  //     document[targetField] = text;
  //   }
  // }

  public setSelectedText(event, targetField: string, document: any, fieldControl?: AbstractControl) {
    const target = event.source.selected._element.nativeElement;
    let text = target.innerText.trim();
    const arrayText = text.split('|');
    if (arrayText.length > 1) {
      text = arrayText[1];
    } else {
      text = arrayText[0];
    }
    if (document) {
      document[targetField] = text.trim();
    }
    if (fieldControl) {
      fieldControl.setValue(text.trim());
    }
  }

  /**
   * Get text of mat-select option selected
   */
  public setSelectedOptionText(event: MatSelectChange): string {
    const selectedData = {
      text: (event.source.selected as MatOption).viewValue,
      value: event.source.value
    };
    const arrayText = selectedData.text.split('|');
    return (arrayText.length > 1) ? arrayText[1] : arrayText[0];
  }

  public getGenericDDL(items: [], pattern: any, addDefaultOption?: boolean): {}[] {
    const itemsResult: {}[] = [];
    if (addDefaultOption === undefined || addDefaultOption === true) {
      itemsResult.push(
          {
            key: '',
            value: 'Select an option',
            disabled: true
          });
    }
    items.forEach(item => {
      itemsResult.push({
        key: item[pattern.key],
        value: item[pattern.label],
        disabled: false,
        rawData: item
      });
    });
    return itemsResult;
  }

  public getContentType(fileName: string) {
    const extensionArray: string[] = fileName.split('.');
    const extension = extensionArray[extensionArray.length - 1].toLowerCase();
    let contentType: string;
    switch (extension) {
      case 'pdf':
        contentType = 'application/pdf';
        break;
      case 'gif':
        contentType = 'image/gif';
        break;
      case 'png':
        contentType = 'image/png';
        break;
      case 'jpg':
        contentType = 'image/jpg';
        break;
      case 'doc':
        contentType = 'application/msword';
        break;
      case 'docx':
        contentType = 'application/msword';
        break;
      default:
        contentType = 'application/octet-stream ';
        break;
    }
    return contentType;
  }

  public formatString(str: string, ...val: string[]) {
    for (let index = 0; index < val.length; index++) {
      str = str.replace(`{${index}}`, val[index]);
    }
    return str;
  }

  public makeRandom(lengthOfCode: number) {
    const possible = 'abcdefghijklmnopqrstuvwxyz1234567890';
    let text = '';
    for (let i = 0; i < lengthOfCode; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  public getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1 ;
  }

  public isNotEmpty(entity: any) {
    return entity !== undefined && entity !== null;
  }

  public getDateFromString(stringDate: string): Date {
    if (stringDate) {
      return new Date(stringDate);
    } else {
      return null;
    }
  }

  public formatCatalogRequest(catalogRequest: CatalogRequest): string {
    const searchRequest: any = Object.assign({}, catalogRequest);
    if (catalogRequest) {
      if (catalogRequest.viewColumn) {
        searchRequest.viewColumn = JSON.stringify(catalogRequest.viewColumn);
      }
      if (catalogRequest.criteria) {
        // we must send the search criteria array as a string
        searchRequest.criteria = JSON.stringify(catalogRequest.criteria);
      }
    }
    return searchRequest;
  }

  public formatSearchRequest(searchRequest: ISearchRequest): string {
    const jsonRequest: any = Object.assign({}, {q: searchRequest});
    jsonRequest.q = JSON.stringify(searchRequest);
    return jsonRequest;
  }

  public getSearchRequest(
      includeTotals: boolean,
      excludeRecords: boolean,
      pagination: ISearchPagination,
      viewColumns: string[],
      criteria: ISearchExpression[],
      sortBy: ISearchOrder[]): ISearchRequest {
    return {
      includeTotals: includeTotals,
      excludeRecords: excludeRecords,
      pagination: pagination,
      viewColumns: viewColumns,
      criteria: criteria,
      sortBy: sortBy};
  }

  public enumToLookupValue(enumClass: any): LookupValue[] {
    const list: LookupValue[] = [];
    Object.keys(enumClass).forEach((key) => {
      list.push({
        key: key,
        value: enumClass[key]
      });
    });
    return list;
  }

  public setLookupValues(items: [], pattern: any): LookupValue[] {
    const itemsResult: LookupValue[] = [];
    items.forEach(item => {
      itemsResult.push(
          {
            key: item[pattern.key],
            value: item[pattern.label]
          }
      );
    });
    return itemsResult;
  }

  public getListOptionsFromEnum(enumClass: any): {}[] {
    const itemsResult: {}[] = [
      {
        key: '',
        value: 'Select an option',
        disabled: true
      }
    ];
    Object.keys(enumClass).forEach((key) => {
      itemsResult.push({
        key: key,
        value: this.constantNameToDescription(enumClass[key]),
        disabled: false,
        rawData: key
      });
    });
    return itemsResult;
  }

  public constantNameToDescription(constantName: string): string {
    if (!constantName || constantName.trim() === '') {
      return 'N/A';
    }
    let stringFormatted = '';
    const words: string[] = constantName.split('_');
    words.forEach(word => {
      if (word.length === 1) {
        word = word.toUpperCase();
      } else {
        word = word.substring(0, 1).toUpperCase().concat(word.substr(1).toLowerCase());
      }
      stringFormatted += word + ' ';
    });
    return stringFormatted.trim();
  }

  public buildSearchRequest(
      order: ISearchOrder[],
      columns: string[],
      pagination: ISearchPagination,
      criteria: ISearchExpression[]): any {
    const searchRequest: any = {
      q: {
        includeTotals: true,
        excludeRecords: false
      }
    };
    if (order) {
      searchRequest.q.sortBy = order;
    }
    if (columns) {
      searchRequest.q.viewColumns = columns;
    }
    if (pagination) {
      searchRequest.q.pagination = pagination;
    }
    if (criteria) {
      searchRequest.q.criteria = criteria;
    }
    const searchRequestEncoded: any = Object.assign({}, searchRequest);
    // Prepare json string to be sent
    searchRequestEncoded.q = JSON.stringify(searchRequest.q);
    // Return
    return searchRequestEncoded;
  }

  public resolveAccessObject(path, obj) {
    return path.split('.').reduce(function(prev, curr) {
      return prev ? prev[curr] : null;
    }, obj || self);
  }
}

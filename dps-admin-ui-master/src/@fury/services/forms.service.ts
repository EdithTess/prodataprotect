import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FieldConfig } from '../shared/dynamic-form/field.interface';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  // Observable events sources
  private onSelectEventSource = new Subject<any>();
  private onDescriptionFieldSource = new Subject<any>();

  // Observable events streams
  optionSelected$ = this.onSelectEventSource.asObservable();
  descriptionFieldSelected = this.onDescriptionFieldSource.asObservable();

  // Send selected value
  sendSelectedValue(value: any) {
    this.onSelectEventSource.next(value);
  }

  // Send text value for description field
  sendDescriptionValue(field: FieldConfig, selectedText: string) {
    if (field.dependentFieldDescription) {
      this.onDescriptionFieldSource.next({
        field: field.dependentFieldDescription,
        value: selectedText
      });
    }
  }
}

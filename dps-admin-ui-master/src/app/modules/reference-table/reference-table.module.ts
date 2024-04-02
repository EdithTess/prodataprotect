import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReferenceTableRoutingModule} from './reference-table-routing.module';
import {ReferenceEditComponent} from './reference-edit/reference-edit.component';
import {TimedReferenceComponent} from './timed-reference/timed-reference.component';
import {TimedReferenceTableComponent} from './timed-reference-table/timed-reference-table.component';
import {DynamicFormModule} from '../../../@fury/shared/dynamic-form/dynamic-form.module';


@NgModule({
    declarations: [ReferenceEditComponent, TimedReferenceComponent, TimedReferenceTableComponent],
    entryComponents: [ReferenceEditComponent, TimedReferenceComponent, TimedReferenceTableComponent],
    imports: [
        CommonModule,
        DynamicFormModule,
        ReferenceTableRoutingModule,
    ]
})
export class ReferenceTableModule {
}

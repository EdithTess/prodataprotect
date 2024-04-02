import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommentsComponent} from './comments.component';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {FormElementsRoutingModule} from '../../pages/forms/form-elements/form-elements-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {ListModule} from '../../../@fury/shared/list/list.module';


@NgModule({
    declarations: [CommentsComponent],
    exports: [CommentsComponent],
    imports: [
        CommonModule,
        MaterialModule,
        FurySharedModule,
        FormElementsRoutingModule,
        ReactiveFormsModule,
        ListModule,
    ]
})
export class CommentsModule {
}

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ComplaintsRoutingModule} from './complaints-routing.module';
import {ComplaintsFindComponent} from './components/complaints-find/complaints-find.component';
import {ViewComplaintComponent} from './components/view-complaint/view-complaint.component';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {CustomerCreateUpdateModule} from '../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import { ComplaintsEditComponent } from './components/complaints-edit/complaints-edit.component';
import { FormElementsRoutingModule } from '../../pages/forms/form-elements/form-elements-routing.module';
import { MatGridListModule } from '@angular/material/grid-list';
// import { FormElementsRoutingModule } from 'src/app/pages/forms/form-elements/form-elements-routing.module';
import { HighlightModule } from '../../../@fury/shared/highlightjs/highlight.module';
// import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { FuryCardModule } from '../../../@fury/shared/card/card.module';
// import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import {CommentsModule} from '../../layout/comments/comments.module';
import {FormWizardRoutingModule} from '../../pages/forms/form-wizard/form-wizard-routing.module';
// import { DataComplaintPersonalDataItemisedComponent } from './components/data-complaint-personal-data-itemised/data-complaint-personal-data-itemised.component';

import { MatTableModule } from '@angular/material/table';
import { DataComplaintPersonalDataItemisedComponent } from './components/data-complaint-personal-data-itemised/data-complaint-personal-data-itemised.component';
import { ComplaintPendingTasksComponent } from './components/complaint-pending-tasks/complaint-pending-tasks.component';



@NgModule({
    declarations: [ComplaintsFindComponent, ViewComplaintComponent,ComplaintsEditComponent, DataComplaintPersonalDataItemisedComponent, ComplaintPendingTasksComponent],
    imports: [
        MatTableModule,
        CommonModule,
        ComplaintsRoutingModule,
        MaterialModule,
        FurySharedModule,
        FormElementsRoutingModule,
        ReactiveFormsModule,
        FormWizardRoutingModule,
        MatGridListModule,
        // Core
        ListModule,
        CommentsModule,
        HighlightModule,
        FuryCardModule,
        CustomerCreateUpdateModule,
        BreadcrumbsModule
    ]
})
export class ComplaintsModule {
}

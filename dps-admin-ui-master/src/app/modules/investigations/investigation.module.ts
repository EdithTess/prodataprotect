import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {InvestigationsRoutingModule} from './investigation-routing.module';
import {InvestigationsFindComponent} from './components/investigations-find/investigations-find.component';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {CustomerCreateUpdateModule} from '../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import { InvestigationsEditComponent } from './components/investigations-edit/investigations-edit.component';
import { FormElementsRoutingModule } from '../../pages/forms/form-elements/form-elements-routing.module';
// import { FormElementsRoutingModule } from 'src/app/pages/forms/form-elements/form-elements-routing.module';
import { HighlightModule } from '../../../@fury/shared/highlightjs/highlight.module';
// import { HighlightModule } from 'src/@fury/shared/highlightjs/highlight.module';
import { FuryCardModule } from '../../../@fury/shared/card/card.module';
// import { FuryCardModule } from 'src/@fury/shared/card/card.module';
import {CommentsModule} from '../../layout/comments/comments.module';
import {FormWizardRoutingModule} from '../../pages/forms/form-wizard/form-wizard-routing.module';
import { ViewInvestigationComponent } from './components/view-investigation/view-investigation.component';



@NgModule({
    declarations: [InvestigationsFindComponent, InvestigationsEditComponent, ViewInvestigationComponent],
    imports: [
        CommonModule,
        InvestigationsRoutingModule,
        MaterialModule,
        FurySharedModule,
        FormElementsRoutingModule,
        ReactiveFormsModule,
        FormWizardRoutingModule,
        // Core
        ListModule,
        CommentsModule,
        HighlightModule,
        FuryCardModule,
        CustomerCreateUpdateModule,
        BreadcrumbsModule
    ]
})
export class InvestigationsModule {
}

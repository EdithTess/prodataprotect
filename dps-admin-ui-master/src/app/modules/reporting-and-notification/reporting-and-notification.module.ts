import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingAndNotificationRoutingModule } from './reporting-and-notification-routing.module';
import { FindReportedBreachesComponent } from './components/find-reported-breaches/find-reported-breaches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBreachEditComponent } from './components/data-breach-edit/data-breach-edit.component';
import { DataBreachPolicyItemComponent } from './components/data-breach-policy-item/data-breach-policy-item.component';
import {DataBreachPersonalDataItemisedComponent} from './components/data-breach-personal-data-itemised/data-breach-personal-data-itemised.component';
import { DataBreachAdditionalInfoComponent } from './components/data-breach-additional-info/data-breach-additional-info.component';
import { DataBreachPotentialConsquencesComponent } from './components/data-breach-potential-consquences/data-breach-potential-consquences.component';
import { DataBreachImpactComponent } from './components/data-breach-impact/data-breach-impact.component';
import { DataBreachConsquencesComponent } from './components/data-breach-consquences/data-breach-consquences.component';
import { DataBreachControlsComponent } from './components/data-breach-controls/data-breach-controls.component';
import { DataBreachAccessmentComponent } from './components/data-breach-accessment/data-breach-accessment.component';
import { MaterialModule } from '../../../@fury/shared/material-components.module';
import { FormElementsRoutingModule } from '../../pages/forms/form-elements/form-elements-routing.module';
import { FurySharedModule } from '../../../@fury/fury-shared.module';
import { FormWizardRoutingModule } from '../../pages/forms/form-wizard/form-wizard-routing.module';
import { ListModule } from '../../../@fury/shared/list/list.module';
import { HighlightModule } from '../../../@fury/shared/highlightjs/highlight.module';
import { FuryCardModule } from '../../../@fury/shared/card/card.module';
import { CustomerCreateUpdateModule } from '../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module';
import { BreadcrumbsModule } from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import { BreachCommentsComponent } from './components/breach-comments/breach-comments.component';


@NgModule({
  declarations: [ FindReportedBreachesComponent, DataBreachEditComponent, DataBreachPolicyItemComponent, DataBreachPersonalDataItemisedComponent, DataBreachAdditionalInfoComponent, DataBreachPotentialConsquencesComponent, DataBreachImpactComponent, DataBreachConsquencesComponent, DataBreachControlsComponent, DataBreachAccessmentComponent, BreachCommentsComponent],
  imports: [
    CommonModule,
    ReportingAndNotificationRoutingModule,
    FormsModule,
    MaterialModule,
    FormElementsRoutingModule,
    ReactiveFormsModule,
    FurySharedModule,
    FormWizardRoutingModule,
    // Core
    ListModule,
    HighlightModule,
    FuryCardModule,
    CustomerCreateUpdateModule,
    BreadcrumbsModule
  ]
})
export class ReportingAndNotificationModule { }

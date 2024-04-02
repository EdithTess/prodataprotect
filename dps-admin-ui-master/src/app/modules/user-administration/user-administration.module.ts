import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { UserAdministrationRoutingModule } from './user-administration-routing.module';
import { FindUsersComponent } from './users/find-users/find-users.component';
import { ViewUserComponent } from './users/view-user/view-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { SystemRolesComponent } from './security/system-roles/system-roles.component';
import { SystemAccessesComponent } from './security/system-accesses/system-accesses.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {FormElementsRoutingModule} from '../../pages/forms/form-elements/form-elements-routing.module';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {FormWizardRoutingModule} from '../../pages/forms/form-wizard/form-wizard-routing.module';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {HighlightModule} from '../../../@fury/shared/highlightjs/highlight.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {GroupsComponent} from './users/groups/groups.component';


@NgModule({
  declarations: [FindUsersComponent,GroupsComponent, ViewUserComponent, AddUserComponent, SystemRolesComponent, SystemAccessesComponent],
  imports: [
    CommonModule,
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
    BreadcrumbsModule,
    UserAdministrationRoutingModule
  ],
  providers: [
      DatePipe
  ]
})
export class UserAdministrationModule { }

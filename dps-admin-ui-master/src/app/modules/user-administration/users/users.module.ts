import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {AddUserComponent} from './add-user/add-user.component';
import {FindUsersComponent} from './find-users/find-users.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {CompanyRegistrationRoutingModule} from '../../company-registration/company-registration-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../../@fury/shared/material-components.module';
import {FormElementsRoutingModule} from '../../../pages/forms/form-elements/form-elements-routing.module';
import {FurySharedModule} from '../../../../@fury/fury-shared.module';
import {FormWizardRoutingModule} from '../../../pages/forms/form-wizard/form-wizard-routing.module';
import {ListModule} from '../../../../@fury/shared/list/list.module';
import {HighlightModule} from '../../../../@fury/shared/highlightjs/highlight.module';
import {FuryCardModule} from '../../../../@fury/shared/card/card.module';
import {CustomerCreateUpdateModule} from '../../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module';
import {BreadcrumbsModule} from '../../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import { GroupsComponent } from './groups/groups.component';


@NgModule({
    declarations: [
        
        // FindUsersComponent,
        //ViewUserComponent,
        // GroupsComponent
    ],
    imports: [
        CommonModule,
        UsersRoutingModule
    ]
})
export class UsersModule {
}

import {NgModule} from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import {CompanyRegistrationRoutingModule} from './company-registration-routing.module';
import {FindCompanyRegistrationComponent} from './components/find-company-registration/find-company-registration.component';
import {EditCompanyRegistrationComponent} from './components/edit-company-registration/edit-company-registration.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from '../../../@fury/shared/material-components.module';
import {FurySharedModule} from '../../../@fury/fury-shared.module';
import {ListModule} from '../../../@fury/shared/list/list.module';
import {CustomerCreateUpdateModule} from '../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module';
import {BreadcrumbsModule} from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReportingAndNotificationRoutingModule} from '../reporting-and-notification/reporting-and-notification-routing.module';
import {FormElementsRoutingModule} from '../../pages/forms/form-elements/form-elements-routing.module';
import {FormWizardRoutingModule} from '../../pages/forms/form-wizard/form-wizard-routing.module';
import {HighlightModule} from '../../../@fury/shared/highlightjs/highlight.module';
import {FuryCardModule} from '../../../@fury/shared/card/card.module';
import { SecurityMeasuresComponent } from './components/security-measures/security-measures.component';
import { ThirdPartiesComponent } from './components/third-parties/third-parties.component';
import { DataProtectionOfficersComponent } from './components/data-protection-officers/data-protection-officers.component';
import {ReviewCommentsModule} from '../../layout/review-comments/review-comments.module';
import { CompanyCertComponent } from './components/company-cert/company-cert.component';
import { CertPreviewComponent } from './components/cert-preview/cert-preview.component';
import {MatTabsModule} from '@angular/material/tabs';
import {ApplicationTimelineModule} from '../../layout/application-timeline/application-timeline.module';
import {MglTimelineModule} from 'angular-mgl-timeline';
import { CountriesComponent } from './components/countries/countries.component';
import { TestPreviewComponent } from './components/test-preview/test-preview.component';
import { RegisterOrganisationComponent } from './components/register-organisation/register-organisation.component';
import { SharedModule } from '../../../@fury/shared/shared-module.module';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';
import { RenewalsComponent } from './components/cert-renewals/renewals/renewals.component';
import { UpdateInformationComponent } from './components/update/update-information/update-information.component';
import { ManageRegistrationUpdateComponent } from './components/manage-registration-update/manage-registration-update.component';
import { UraPaymentsComponent } from './components/ura-payments/ura-payments.component';
import { QRCodeModule } from 'angularx-qrcode';

import {MatTableModule} from '@angular/material/table';
import {Component} from '@angular/core';
import { ManageUraPaymentComponent } from './components/manage-ura-payment/manage-ura-payment.component';
import { CancelRegistrationComponent } from './components/cancel-registration/cancel-registration.component';
import { ViewCancelRegistrationComponent } from './components/view-cancel-registration/view-cancel-registration.component';
import { CompanyRegistrationDetailComponent } from './components/company-registration-detail/company-registration-detail.component';

@NgModule({
    declarations: [
        FindCompanyRegistrationComponent,
        EditCompanyRegistrationComponent,
        SecurityMeasuresComponent,
        ThirdPartiesComponent,
        DataProtectionOfficersComponent,
        CompanyCertComponent,
        CertPreviewComponent,
        CountriesComponent,
        TestPreviewComponent,
        RegisterOrganisationComponent,
        UpdateRegistrationComponent,
        RenewalsComponent,
        UpdateInformationComponent,
        ManageRegistrationUpdateComponent,
        UraPaymentsComponent,
        ManageUraPaymentComponent,
        CancelRegistrationComponent,
        ViewCancelRegistrationComponent,
        CompanyRegistrationDetailComponent
    ],
    imports: [
        CommonModule,
        CompanyRegistrationRoutingModule,
        FormsModule,
        MaterialModule,
        SharedModule,
        FormElementsRoutingModule,
        ReactiveFormsModule,
        FurySharedModule,
        FormWizardRoutingModule,
        ReviewCommentsModule,
        ApplicationTimelineModule,
        // MatTabsModule,
        // Core
        ListModule,
        HighlightModule,
        FuryCardModule,
        CustomerCreateUpdateModule,
        BreadcrumbsModule,
        QRCodeModule
    ],
    providers:[
        DatePipe
    ]
})
export class CompanyRegistrationModule {
}

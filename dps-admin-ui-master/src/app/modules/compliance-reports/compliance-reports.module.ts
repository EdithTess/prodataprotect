import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ComplianceReportsComponent } from './compliance-reports-component/compliance-reports-component.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ComplianceReportsRoutingModule } from './compilance-reports-routing.module';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { DialogFormInputComponent } from './dialog-form-input/dialog-form-input.component';
import { FurySharedModule } from '../../../@fury/fury-shared.module';
import { FuryCardModule } from '../../../@fury/shared/card/card.module';
import { MaterialModule } from '../../../@fury/shared/material-components.module';
import { HighlightModule } from '../../../@fury/shared/highlightjs/highlight.module';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
// import { DialogComponent } from './dialog/dialog.component';
import { PolicyDialogComponent } from './policy-dialog/policy-dialog.component';
import { DisplayTableComponent } from './display-table/display-table.component';
import { DpoDialogComponent } from './dpo-dialog/dpo-dialog.component';
import { StaffDialogComponent } from './staff-dialog/staff-dialog.component';
import { ThirdpartyDialogComponent } from './thirdparty-dialog/thirdparty-dialog.component';
import { ComplaintsDialogComponent } from './complaints-dialog/complaints-dialog.component';
import { BreachesDialogComponent } from './breaches-dialog/breaches-dialog.component';
import { ImpactDialogComponent } from './impact-dialog/impact-dialog.component';
import { AuditsDialogComponent } from './audits-dialog/audits-dialog.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FindComplianceReportsComponent } from './find-compliance-reports/find-compliance-reports.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '../../../@fury/shared/shared-module.module';
import { FormElementsRoutingModule } from '../../pages/forms/form-elements/form-elements-routing.module';
import { FormWizardRoutingModule } from '../../pages/forms/form-wizard/form-wizard-routing.module';
import { ReviewCommentsModule } from '../../layout/review-comments/review-comments.module';
import { ApplicationTimelineModule } from '../../layout/application-timeline/application-timeline.module';
import { ListModule } from '../../../@fury/shared/list/list.module';
import { BreadcrumbsModule } from '../../../@fury/shared/breadcrumbs/breadcrumbs.module';
import { CustomerCreateUpdateModule } from '../../pages/tables/all-in-one-table/customer-create-update/customer-create-update.module';
import { ViewComplianceReportComponent } from './view-compliance-report/view-compliance-report.component';

@NgModule({
  declarations: [ComplianceReportsComponent, DialogFormInputComponent, PolicyDialogComponent, DisplayTableComponent, DpoDialogComponent, StaffDialogComponent, ThirdpartyDialogComponent, ComplaintsDialogComponent, BreachesDialogComponent, ImpactDialogComponent, AuditsDialogComponent, FindComplianceReportsComponent, ViewComplianceReportComponent],
  imports: [
    CommonModule,
    MatDialogModule, 
    MatStepperModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    ComplianceReportsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule,
    FurySharedModule,
    FuryCardModule,
    MaterialModule,
    HighlightModule,
    MatCheckboxModule,
    MatSlideToggleModule,
    MaterialModule,
    SharedModule,
    FormElementsRoutingModule,
    FormWizardRoutingModule,
    ReviewCommentsModule,
    ApplicationTimelineModule,
    ListModule,
    CustomerCreateUpdateModule,
    BreadcrumbsModule    
  ],
  providers:[
      DatePipe
  ]
})

export class ComplianceReportsModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplianceReportsComponent } from './compliance-reports-component/compliance-reports-component.component';
import { FindComplianceReportsComponent } from './find-compliance-reports/find-compliance-reports.component';
import { ViewComplianceReportComponent } from './view-compliance-report/view-compliance-report.component';


const routes: Routes = [
  {
    path: '',
    component: ComplianceReportsComponent,
  },
  {
    path: 'edit-compliance-reports/:id/:orgid/:reportdate',
    component: ViewComplianceReportComponent,
  },
  {
    path: 'find-compliance-reports',
    component: FindComplianceReportsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComplianceReportsRoutingModule {}

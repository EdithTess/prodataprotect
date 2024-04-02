import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindReportedBreachesComponent} from './components/find-reported-breaches/find-reported-breaches.component';
import {AuthGuard} from '../../authentication/auth.guard';
import { DataBreachEditComponent } from './components/data-breach-edit/data-breach-edit.component';

const routes: Routes = [
  {
    path: 'find/all',
    component: FindReportedBreachesComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['find.breaches','view.breach'],
      action: "FIND"
    }
  },
  {
    path: 'create',
    component: DataBreachEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['report.breach','update.breach'],
      action: "EDIT"
    }
  },
  {
    path: 'view',
    component: DataBreachEditComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['find.breaches','view.breach'],
      action: "VIEW"
    }
  },
  // {
  //   path: 'view',
  //   component: DataBreachEditComponent,
  //   canActivate: [AuthGuard],
  //   data: {
  //     roles: ['find.breaches', 'manage.breach'],
  //     action: "VIEW"
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingAndNotificationRoutingModule { }

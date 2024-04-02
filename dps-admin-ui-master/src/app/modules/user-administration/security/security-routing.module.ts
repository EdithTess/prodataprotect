import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemRolesComponent} from './system-roles/system-roles.component';
import {SystemAccessesComponent} from './system-accesses/system-accesses.component';

const routes: Routes = [
  {
    path: 'roles',component: SystemRolesComponent,
  },
  {
    path: 'accesses',component: SystemAccessesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule {

}

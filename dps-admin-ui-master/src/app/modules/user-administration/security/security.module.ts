import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import {SystemAccessesComponent} from './system-accesses/system-accesses.component';
import {SystemRolesComponent} from './system-roles/system-roles.component';


@NgModule({
  declarations: [
      SystemAccessesComponent,
      // SystemRolesComponent
  ],
  imports: [
    CommonModule,
    SecurityRoutingModule
  ]
})
export class SecurityModule { }

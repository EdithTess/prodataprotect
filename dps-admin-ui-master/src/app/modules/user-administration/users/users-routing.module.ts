import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindUsersComponent} from './find-users/find-users.component';
import {AddUserComponent} from './add-user/add-user.component';
import {ViewUserComponent} from './view-user/view-user.component';
import {AuthGuard} from '../../../authentication/auth.guard';
import {GroupsComponent} from './groups/groups.component';

const routes: Routes = [
  {
    path: 'all',
    component: FindUsersComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.user.accounts'],
      action: "FIND"
    }
  },
  {
    path: 'groups',
    component: GroupsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.user.accounts'],
      action: "FIND"
    }
  },
  {
    path: 'create', component: AddUserComponent,
  },
  {
    path: 'view', component: ViewUserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

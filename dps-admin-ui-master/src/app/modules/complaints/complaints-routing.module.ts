import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ComplaintsFindComponent} from './components/complaints-find/complaints-find.component';
import {ViewComplaintComponent} from './components/view-complaint/view-complaint.component';
import {AuthGuard} from '../../authentication/auth.guard';
import {ComplaintsEditComponent} from './components/complaints-edit/complaints-edit.component';
import { ComplaintPendingTasksComponent } from './components/complaint-pending-tasks/complaint-pending-tasks.component';


const routes: Routes = [
    {
        path: 'find',
        component: ComplaintsFindComponent,
        canActivate: [AuthGuard],
        data: {
            roles: ['view.complaint', 'find.complaint'],
            action: "FIND"
        }
    },

    {
        path: 'pending-tasks',
        component: ComplaintPendingTasksComponent,
        canActivate: [AuthGuard],
        data: {
            roles: ['view.complaint', 'find.complaint'],
            action: "FIND"
        }
    },
    
    {
        path: 'view-complaint',
        component: ViewComplaintComponent,
        canActivate: [AuthGuard], data: {
            roles: ['view.complaint'],
            action: "VIEW"
        }
    },
    
    {
        path: 'complaints-edit',
        component: ComplaintsEditComponent,
        canActivate: [AuthGuard], data: {
            roles: ['view.complaint'],
            action: "VIEW"
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ComplaintsRoutingModule {
}

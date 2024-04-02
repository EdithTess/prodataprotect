import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { InvestigationsFindComponent } from './components/investigations-find/investigations-find.component';
import {AuthGuard} from '../../authentication/auth.guard';
import { InvestigationsEditComponent } from './components/investigations-edit/investigations-edit.component';


const routes: Routes = [
    {
        path: 'find',
        component: InvestigationsFindComponent,
        canActivate: [AuthGuard],
        data: {
            roles: ['view.investigation', 'find.investigation'],
            action: "FIND"
        }
    },
    
    // {
    //     path: 'view-complaint',
    //     component: ViewComplaintComponent,
    //     canActivate: [AuthGuard], data: {
    //         roles: ['view.complaint'],
    //         action: "VIEW"
    //     }
    // },
    
    {
        path: 'investigations-edit',
        component: InvestigationsEditComponent,
        canActivate: [AuthGuard], data: {
            roles: ['view.investigation'],
            action: "VIEW"
        }
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InvestigationsRoutingModule {
}

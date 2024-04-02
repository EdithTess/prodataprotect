import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
    {
        path: 'security',
        loadChildren: () => import('./security/security-routing.module')
            .then(m => m.SecurityRoutingModule)
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users-routing.module')
            .then(m => m.UsersRoutingModule)
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserAdministrationRoutingModule {
}

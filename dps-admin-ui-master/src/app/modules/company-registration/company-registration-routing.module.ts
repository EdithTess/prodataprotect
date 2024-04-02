import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FindCompanyRegistrationComponent} from './components/find-company-registration/find-company-registration.component';
import {AuthGuard} from '../../authentication/auth.guard';
import {EditCompanyRegistrationComponent} from './components/edit-company-registration/edit-company-registration.component';
import { RegisterOrganisationComponent } from './components/register-organisation/register-organisation.component';
import { UpdateRegistrationComponent } from './components/update-registration/update-registration.component';
import { RenewalsComponent } from './components/cert-renewals/renewals/renewals.component';
import { UpdateInformationComponent } from './components/update/update-information/update-information.component';
import { ManageRegistrationUpdateComponent } from './components/manage-registration-update/manage-registration-update.component';
import { UraPaymentsComponent } from './components/ura-payments/ura-payments.component';
import { ManageUraPaymentComponent } from './components/manage-ura-payment/manage-ura-payment.component';
import { CancelRegistrationComponent } from './components/cancel-registration/cancel-registration.component';
import { ViewCancelRegistrationComponent } from './components/view-cancel-registration/view-cancel-registration.component';
import { CompanyRegistrationDetailComponent } from './components/company-registration-detail/company-registration-detail.component';

const routes: Routes = [
  {
    path: 'find',
    component: FindCompanyRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['find.company.registration'],
      action: 'FIND'
    }
  },
  {
    path: 'pending-task',
    component: FindCompanyRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['find.company.registration'],
      action: 'PENDING-TASK'
    }
  },

  {
    path: 'register',
    component: EditCompanyRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['register.company'],
      action: 'EDIT',
      viewOnlyMode: false
    }
  },

  {
    path: 'cancel-registration',
    component: CancelRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['cancel.registration'],
      action: 'EDIT',
      viewOnlyMode: true
    }
  },



  {
    path: 'apply',
    component: RegisterOrganisationComponent,
    canActivate: [AuthGuard],
    data: {
      // roles: ['register.company'],
      action: 'EDIT',
      viewOnlyMode: false
    }
  },
  {
    path: 'view',
    component: UpdateRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.company.registration'],
      action: 'VIEW',
      viewOnlyMode: true
    }
  },
  {
    path: 'ura-payment',
    component: UraPaymentsComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['ura.payment'],
      action: 'MANAGE',
      viewOnlyMode: false
    }
  },

  {
    path: 'prn-information',
    component: ManageUraPaymentComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['manage.ura'],
      action: 'FIND',
      viewOnlyMode: false
    }
  },
  {
    path: 'perform-action',
    component: EditCompanyRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.company.registration'],
      action: 'MANAGE',
      viewOnlyMode: true
    }
  },

  {
    path: 'update',
    component: UpdateInformationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['renewals.registration'],
      action: 'MANAGE'
    }
  },

 
  {
    path: 'update-application',
    component: UpdateRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.company.registration'],
      action: 'MANAGE',
      viewOnlyMode: true
    }
  },

  {
    path: 'update-registration-details',
    component: CompanyRegistrationDetailComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.company.registration'],
      action: 'MANAGE',
      viewOnlyMode: true
    }
  },

  {
    path: 'view-cancel-registration',
    component: ViewCancelRegistrationComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['cancel.registration'],
      action: 'MANAGE',
      viewOnlyMode: true
    }
  },

  {
    path: 'manage-registration-update',
    component: ManageRegistrationUpdateComponent,
    canActivate: [AuthGuard],
    data: {
      roles: ['view.company.registration'],
      action: 'MANAGE',
      viewOnlyMode: true
    }
  },
  {
    path: 'renewals',
    component: RenewalsComponent,
    canActivate: [AuthGuard],
    data: {
      // roles: ['register.company'],
      action: 'EDIT',
      viewOnlyMode: false
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRegistrationRoutingModule { }

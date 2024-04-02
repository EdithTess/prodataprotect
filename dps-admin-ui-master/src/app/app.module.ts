import { HttpClientModule } from '@angular/common/http';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Needed for Touch functionality of Material Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './layout/layout.module';
import { PendingInterceptorModule } from '../@fury/shared/loading-indicator/pending-interceptor.module';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldDefaultOptions } from '@angular/material/form-field';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './authentication/appInit';
import {AuthenticationService} from './authentication/authentication.service';

import { ApiService } from './services/api.service';
import { ApiEndpointsService } from './services/api-endpoints.service';
// import { CreateAccountsComponent } from './modules/create-accounts/create-accounts.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// These are for the Dialog box
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    // Angular Core Module // Don't remove!
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    //New modules for Dialog box
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    // Fury Core Modules
    AppRoutingModule,

    // Layout Module (Sidenav, Toolbar, Quickpanel, Content)
    LayoutModule,

    // Displays Loading Bar when a Route Request or HTTP Request is pending
    PendingInterceptorModule,
    // Register a Service Worker (optional)
    // ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // KeycloakAngular Module
      KeycloakAngularModule,

      
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    ApiService,
    ApiEndpointsService,
    AuthenticationService,
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: {
        appearance: 'fill'
      } as MatFormFieldDefaultOptions
    },
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: {
        duration: 5000,
        horizontalPosition: 'end',
        verticalPosition: 'bottom'
      } as MatSnackBarConfig
    },
    {
      provide: APP_INITIALIZER,
      useFactory: initializer,
      multi: true,
      deps: [KeycloakService, AuthenticationService],
    },


  ]
})
export class AppModule {
}

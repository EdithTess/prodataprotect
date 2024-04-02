import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
import {SnackBarService} from '../pages/services/snack-bar.service';
import {KeycloakResourceAccess} from 'keycloak-js';
import {ResourceAccesses} from './user.model';
import {AuthenticationService} from './authentication.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard extends KeycloakAuthGuard {
    private resourceRoles: ResourceAccesses;
    constructor(
        protected readonly router: Router,
        protected readonly keycloak: KeycloakService,
        private authentication: AuthenticationService,
        public snackBar: SnackBarService
    ) {
        super(router, keycloak);
    }

    isAccessAllowed(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Promise<boolean> {
        return new Promise((resolve, reject) => {
            let permission;
            // this.resourceRoles = this.keycloak.getKeycloakInstance().resourceAccess;
            // console.log(JSON.stringify(this.resourceRoles.roles));
            if (!this.authenticated) {
                this.keycloakAngular.login().catch((e) => console.log(e));
                return reject(false);
            }

            const requiredRoles: string[] = route.data.roles;
            if (!requiredRoles || requiredRoles.length === 0) {
                permission = true;
            } else {
                if (!this.roles || this.roles.length === 0) {
                    permission = false;
                }
                permission = requiredRoles.every((role) => this.roles.indexOf(role) > -1);
            }

            if (!permission) {
                this.router.navigate(['/']);
                this.snackBar.snackBarAlert(
                    'Error', 'Authorised Access', {
                        duration: 3000
                    }
                );
            }
            resolve(permission);

        });
        // Force the user to log in if currently unauthenticated.
        // if (!this.authenticated) {
        //     this.keycloak.login({
        //         redirectUri: window.location.origin + state.url,
        //     });
        // }
        //
        // // Get the roles required from the route.
        // const requiredRoles = route.data.roles;
        // console.log(requiredRoles)
        //
        // // Allow the user to to proceed if no additional roles are required to access the route.
        // if (!(requiredRoles instanceof Array) || requiredRoles.length === 0) {
        //     return true;
        // }
        //
        // // Allow the user to proceed if all the required roles are present.
        // return requiredRoles.every((role) => this.roles.includes(role));
    }
}

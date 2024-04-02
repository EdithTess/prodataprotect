import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UserProfile} from './user.model';
import {KeycloakService} from 'keycloak-angular';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {environment} from '../../environments/environment';
import {KeycloakInstance} from 'keycloak-js';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(
        private keycloakService: KeycloakService,
        private http: HttpClient,
    ) {
        this.userSubject = new BehaviorSubject<UserProfile>(null);
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): UserProfile {
        return this.userSubject.value;
    }
    private static userSession: UserProfile;

    public userSubject: BehaviorSubject<UserProfile>;
    public user: Observable<UserProfile>;

    public getUserDetails() {
        AuthenticationService.userSession = null;
        this.keycloakService.loadUserProfile().then((e) => console.log('here')).catch((e) => console.log(e));
    }

    public getKeycloakInstance(): KeycloakInstance {
        return this.keycloakService.getKeycloakInstance();
    }

    public getUser(): any {
        if (AuthenticationService.userSession) {
            return AuthenticationService.userSession;
        }
    }

    public getUsername(): any {
        if (AuthenticationService.userSession) {
            return AuthenticationService.userSession.username;
        }
    }

    public getOrganisationName(): any {
        if (AuthenticationService.userSession) {
            return AuthenticationService.userSession.organisation_name;
        }
    }

    public getOrganisationID(): any {
        if (AuthenticationService.userSession) {
            return AuthenticationService.userSession.organisation_id;
        }
    }


    public async isAuthenticated(): Promise<boolean> {
        return await this.keycloakService.isLoggedIn();
    }

    public  getUserInfo() {
        return this.http.get<any>(environment.keycloakAdmin + 'protocol/openid-connect/userinfo')
            .pipe(map((user) => {
                this.prepareUserSession(user);
            }));
    }

    private prepareUserSession(userInfo: any) {
        const tmpUserSession: UserProfile = {
            username: userInfo.preferred_username,
            firstName: userInfo.given_name,
            lastName: userInfo.family_name,
            emailVerified: userInfo.email_verified,
            email: userInfo.email,
            id: userInfo.sub,
            organisation_id: userInfo.organisation_id,
            organisation_name: userInfo.organisation_name
        };
        if (environment.production === false) {
            console.log(userInfo);
        }
        AuthenticationService.userSession = tmpUserSession;
        this.userSubject.next(AuthenticationService.userSession);
    }

    public hasRole(role: string): boolean {
        return this.keycloakService.getKeycloakInstance().hasRealmRole(role);
    }

    public userAccess() {
        return this.keycloakService.getKeycloakInstance().resourceAccess;
    }

}

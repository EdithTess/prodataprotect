import {Component, OnInit} from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {RealmAccesses} from '../../../authentication/user.model';
import {AuthenticationService} from '../../../authentication/authentication.service';
import {KeycloakProfile} from 'keycloak-js';

@Component({
    selector: 'fury-toolbar-user',
    templateUrl: './toolbar-user.component.html',
    styleUrls: ['./toolbar-user.component.scss']
})
export class ToolbarUserComponent implements OnInit {

    isOpen: boolean;
    public isLoggedIn = false;
    public userProfile: KeycloakProfile | null = null;
    public realmAccesses: RealmAccesses | null = null;

    constructor(
        private readonly _auth: KeycloakService,
        private auth: AuthenticationService
    ) {

    }

    async ngOnInit() {
        if (await this._auth.isLoggedIn()) {
            if (this.auth.user) {
                this.auth.userSubject.subscribe( e => this.userProfile = e);
            }
        }
    }

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    onClickOutside() {
        this.isOpen = false;
    }

    logout() {
        this._auth.getKeycloakInstance().logout();
    }

}

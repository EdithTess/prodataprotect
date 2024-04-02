import {KeycloakProfile, KeycloakResourceAccess, KeycloakRoles} from 'keycloak-js';

export class LoginResult {
    success: boolean;
    error?: string;
}

export interface UserProfile extends KeycloakProfile {
    organisation_id?: string;
    organisation_name?: string;

}

export interface RealmAccesses extends KeycloakRoles {

}

export interface ResourceAccesses  {
}

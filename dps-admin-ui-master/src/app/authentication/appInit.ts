import {KeycloakService} from 'keycloak-angular';
import {Environment} from '@angular/compiler-cli/src/ngtsc/typecheck/src/environment';
import {environment} from '../../environments/environment';

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return () => keycloak.init({
        config: {
            url: environment.keycloakConfig.url,
            realm: environment.keycloakConfig.realm,
            clientId: environment.keycloakConfig.clientId,
        },
        initOptions: {
            onLoad: 'login-required',
            checkLoginIframe: false,
            flow: 'implicit',
            redirectUri: environment.keycloakConfig.redirectUrl
        },
        loadUserProfileAtStartUp: true,
        bearerExcludedUrls: [],
        enableBearerInterceptor: true,
    }).then(success => console.log(`keycloak init returned ${success}`)).catch(e => console.log(`keycloak init exception: ${e}`));
    // return (): Promise<any> => keycloak.init(options).catch((e) => {console.log("Error thrown in init "+e)});
}


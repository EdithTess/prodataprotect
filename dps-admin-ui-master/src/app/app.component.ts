import {DOCUMENT} from '@angular/common';
import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {SidenavService} from './layout/sidenav/sidenav.service';
import {ThemeService} from '../@fury/services/theme.service';
import {ActivatedRoute} from '@angular/router';
import {filter} from 'rxjs/operators';
import {Platform} from '@angular/cdk/platform';
import {SplashScreenService} from '../@fury/services/splash-screen.service';
import {TREE_STRUCTURE} from '../tree-structure';
import {UserProfile} from './authentication/user.model';
import {KeycloakService} from 'keycloak-angular';
import {AuthenticationService} from './authentication/authentication.service';

@Component({
    selector: 'fury-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

    public isLoggedIn = false;
    public userProfile: UserProfile | null = null;

    constructor(private sidenavService: SidenavService,
                private iconRegistry: MatIconRegistry,
                private renderer: Renderer2,
                private themeService: ThemeService,
                @Inject(DOCUMENT) private document: Document,
                private platform: Platform,
                private route: ActivatedRoute,
                private readonly _auth: KeycloakService,
                private authentication: AuthenticationService,
                private splashScreenService: SplashScreenService) {


        this.route.queryParamMap.pipe(
            filter(queryParamMap => queryParamMap.has('style'))
        ).subscribe(queryParamMap => this.themeService.setStyle(queryParamMap.get('style')));

        this.iconRegistry.setDefaultFontSetClass('material-icons-round');

        this.themeService.theme$.subscribe(theme => {
            if (theme[0]) {
                this.renderer.removeClass(this.document.body, theme[0]);
            }

            this.renderer.addClass(this.document.body, theme[1]);
        });

        if (this.platform.BLINK) {
            this.renderer.addClass(this.document.body, 'is-blink');
        }
        this.sidenavService.addItems(
            TREE_STRUCTURE
         );
    }

    ngOnInit(): void {
        this.authentication.getUserInfo().subscribe();
    }

    // public async ngOnInit() {
    //     this.isLoggedIn = await this._auth.isLoggedIn();
    //     console.log("is logged" + this.isLoggedIn);
    //     if (this.isLoggedIn) {
    //        this.userProfile =  await this._auth.getKeycloakInstance().loadUserProfile()
    //         console.log("profile" + this.userProfile)
    //     }
    // }
}

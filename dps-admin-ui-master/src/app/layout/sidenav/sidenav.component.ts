import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SidenavItem } from './sidenav-item/sidenav-item.interface';
import { SidenavService } from './sidenav.service';
import { ThemeService } from '../../../@fury/services/theme.service';
import {KeycloakService} from 'keycloak-angular';
import {AuthenticationService} from '../../authentication/authentication.service';
import {KeycloakProfile} from 'keycloak-js';

@Component({
  selector: 'fury-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit, OnDestroy {

  sidenavUserVisible$ = this.themeService.config$.pipe(map(config => config.sidenavUserVisible));

  @Input()
  @HostBinding('class.collapsed')
  collapsed: boolean;

  @Input()
  @HostBinding('class.expanded')
  expanded: boolean;

  items$: Observable<SidenavItem[]>;
  realmRole: string;
  public userProfile: KeycloakProfile | null = null;

  constructor(private router: Router,
              private sidenavService: SidenavService,
              private authService: KeycloakService,
              private auth: AuthenticationService,
              private themeService: ThemeService) {
  }

  async  ngOnInit() {
    this.items$ = this.sidenavService.items$.pipe(
      map((items: SidenavItem[]) => this.sidenavService.sortRecursive(items, 'position'))
    );
    this.realmRole = this.authService.getKeycloakInstance().realmAccess.roles[0];
    if ( await this.authService.isLoggedIn()) {
     this.auth.userSubject.subscribe( e => this.userProfile = e);
     console.log('userProfile:', this.userProfile);
    }
  }

  toggleCollapsed() {
    this.sidenavService.toggleCollapsed();
  }

  @HostListener('mouseenter')
  @HostListener('touchenter')
  onMouseEnter() {
    this.sidenavService.setExpanded(true);
  }

  @HostListener('mouseleave')
  @HostListener('touchleave')
  onMouseLeave() {
    this.sidenavService.setExpanded(false);
  }

  ngOnDestroy() {
  }
}

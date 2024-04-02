import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, throwError } from 'rxjs';
import { Platform } from '@angular/cdk/platform';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Title } from '@angular/platform-browser';

import { ComplaintReason, DataCategory, Organisation } from './api.model';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  pageTabTitle = new Subject();
  overflow = new Subject();
  breadcrumb = new Subject();
  slideShowClasses = ['glassCube', 'paralell'];
  ComplaintSourceID = 1;
  timeLineAccess: string[] = ['data-protection-officer-director', 'data-protection-officer-nita', 'data-protection-officer-technical', 'data-protection-officer-legal'];

  organisations: Organisation[] = [
    {
      OrganisationID: 1,
      OrganisationName: 'MTN-Uganda'
    },
    {
      OrganisationID: 2,
      OrganisationName: 'Airtel'
    },
    {
      OrganisationID: 3,
      OrganisationName: 'UTL'
    },
  ];

  complaintReasons: ComplaintReason[] = [
    {
      ComplaintReasonID: 1,
      ComplaintReasonName: 'Processing personal data without appropriate security measures'
    },
    {
      ComplaintReasonID: 2,
      ComplaintReasonName: 'Inaccurate personal data in the possession of data controllers'
    },
    {
      ComplaintReasonID: 3,
      ComplaintReasonName: 'Holds Irrelevant Information'
    },
    {
      ComplaintReasonID: 4,
      ComplaintReasonName: 'Excessive Information'
    },
    {
      ComplaintReasonID: 5,
      ComplaintReasonName: 'Out of Date Information'
    },
    {
      ComplaintReasonID: 6,
      ComplaintReasonName: 'Incomplete Information'
    },
    {
      ComplaintReasonID: 7,
      ComplaintReasonName: 'Misleading Information'
    },
    {
      ComplaintReasonID: 8,
      ComplaintReasonName: 'Information Obtained Unlawfully'
    },
    {
      ComplaintReasonID: 9,
      ComplaintReasonName: 'Information Retained for longer than lawfully required'
    },
    {
      ComplaintReasonID: 10,
      ComplaintReasonName: 'Infidges on my privacy'
    },
    {
      ComplaintReasonID: 11,
      ComplaintReasonName: 'Other'
    },
  ];

  constructor(
    private router: Router,
    private platform: Platform,
    private snackBar: MatSnackBar,
    private pageTitle: Title
  ) {
  }

  isAndroidOrIOS(): boolean {
    // return this.platform.ANDROID || this.platform.IOS || this.platform.WEBKIT ? true : false;
    return this.platform.ANDROID || this.platform.IOS;
  }

  isStandalone(): boolean {
    return window.matchMedia('(display-mode: standalone)').matches;
  }

  createConfig(message: string): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = 2000;
    config.panelClass = ['snackBar-cust'];
    config.data = message;
    return config;
  }

  createContributionsConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = 4000;
    config.panelClass = ['snackBar-cust'];
    return config;
  }

  createErrorConfig(message: string): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.duration = 4000;
    config.panelClass = ['snackBar-err-cust'];
    config.data = message;
    return config;
  }

  createNuetralConfig(message: string): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.duration = 2000;
    config.horizontalPosition = 'right';
    config.panelClass = ['snackBar-nuet-cust'];
    config.data = message;
    return config;
  }

  createProcessingSnackbarConfig(): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.panelClass = ['mat-snack-bar-container-processing'];
    return config;
  }

  createConfigSucWithLong(message: string): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.panelClass = ['snackBar-cust'];
    config.duration = 20000;
    config.data = message;
    return config;
  }

  createConfigErrLong(message: string): MatSnackBarConfig {
    const config = new MatSnackBarConfig();
    config.verticalPosition = 'bottom';
    config.horizontalPosition = 'right';
    config.panelClass = ['snackBar-err-cust'];
    config.duration = 20000;
    config.data = message;
    return config;
  }

  openSnackBar(message: string, type: string): void {
    let config: MatSnackBarConfig<any>;

    if (type === 'success') {
      config = this.createConfig(message);
    } else if (type === 'error') {
      config = this.createErrorConfig(message);
    } else if (type === 'nuetral') {
      config = this.createNuetralConfig(message);
    } else if (type === 'success-lg') {
      config = this.createConfigSucWithLong(message);
    } else if (type === 'error-lg') {
      config = this.createConfigErrLong(message);
    }

    // this.snackBar.openFromComponent(SnackBarComponent, config);
  }

  handleError(error: HttpErrorResponse) {
    return throwError({
      error: error.status >= 500 || error.status > 400 ? 'Server error. Please try again later.' :
             error.status !== 0 ? error.error : 'Please check your internet connection and try again.'
    });
  }


  determineErrorResponse(error: {error?: any}, code?: number) {
    if (error === null) {
      this.openSnackBar('', 'error');
      this.router.navigate(['/']);
    } else {
      this.openSnackBar(error.error.message ? error.error.message : error.error, 'error-lg');
    }
  }

  scollToTop(top?: number): void {
    const pageWrapper = document.getElementById('main-content-wrapper') as HTMLElement;

    console.log('pageWrapper:', pageWrapper);

    pageWrapper.scrollTo({
      behavior: 'smooth',
      left: 0,
      top: top ? top : 0
    });
  }

  updatePageTitle(title: string[]): void {
    this.pageTitle.setTitle(title[title.length - 1] + ' - Data Protection Solution - NITA-U');

    this.breadcrumb.next(title);
  }

  getSlideShowClass(index: number) {
    const even: number = index % 2;
    return this.slideShowClasses[index % 2 ? 0 : 1];
  }

  // getCMSMediaProxy(url: string) {
  //   const media = url.split('wp-content/uploads');
  //   const newUrl = environment.cmsMediaProxy + media[1]
  //   return newUrl;
  // }

  getDateSuperscript(day: number): string {

    if (day === 1 || day === 21) {
      return 'st';
    } else if (day === 2 || day === 22) {
      return 'nd';
    } else if (day === 3 || day === 23) {
      return 'rd';
    } else {
      return 'th';
    }
  }

}

import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { CommonModule, CurrencyPipe, DecimalPipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResourceSanitizerPipe } from '../pipes/resource-sanitizer.pipe';
import { TextShortnerPipe } from '../pipes/text-shortner.pipe';
import { TelephoneFormaterDirective } from '../directives/telephone-formater.directive';
import { RemoveSpacesDirective } from '../directives/remove-spaces.directive';
import { SuccessfulMessageDialogComponent } from '../../app/layout/dialogs/successful-message-dialog/successful-message-dialog.component';
import { InlineMatSpinnerComponent } from '../../app/layout/inline-mat-spinner/inline-mat-spinner.component';
import { OrgDataProtectionOfficerComponent } from '../../app/layout/dialogs/org-registration/org-data-protection-officer/org-data-protection-officer.component';
import { OrgSecurityMeasuresComponent } from '../../app/layout/dialogs/org-registration/org-security-measures/org-security-measures.component';
import { OrgThirdPartyComponent } from '../../app/layout/dialogs/org-registration/org-third-party/org-third-party.component';
import { OrgNoticeComponent } from '../../app/layout/dialogs/org-registration/org-notice/org-notice.component';
import { OrgCountryComponent } from '../../app/layout/dialogs/org-registration/org-country/org-country.component';
import { OrgUploadComponent } from '../../app/layout/dialogs/org-upload/org-upload.component';
import { CurrencyDirective } from '../directives/currency.directive';
import { OrgForm3DialogComponent } from '../../app/layout/dialogs/org-registration/org-form3-dialog/org-form3-dialog.component';
import { OrgRegistrationPreviewDialogComponent } from '../../app/layout/dialogs/org-registration/org-registration-preview-dialog/org-registration-preview-dialog.component';
import { OrgMainActivityComponent } from '../../app/layout/dialogs/org-registration/org-main-activity/org-main-activity.component';


@NgModule({
    declarations: [
        ResourceSanitizerPipe,
        TextShortnerPipe,
        TelephoneFormaterDirective,
        RemoveSpacesDirective,
        InlineMatSpinnerComponent,
        OrgMainActivityComponent,
        OrgDataProtectionOfficerComponent,
        OrgSecurityMeasuresComponent,
        OrgThirdPartyComponent,
        OrgNoticeComponent,
        OrgCountryComponent,
        SuccessfulMessageDialogComponent,
        OrgUploadComponent,
        CurrencyDirective,
        OrgForm3DialogComponent,
        // OrgRegistrationPreviewDialogComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        
    ],
    exports: [
        ResourceSanitizerPipe,
        TextShortnerPipe,
        TelephoneFormaterDirective,
        RemoveSpacesDirective,
        InlineMatSpinnerComponent,
        CurrencyDirective,
    ],
    entryComponents: [
        OrgMainActivityComponent,
        OrgDataProtectionOfficerComponent,  
        OrgSecurityMeasuresComponent,
        OrgThirdPartyComponent,   
        OrgNoticeComponent,  
        SuccessfulMessageDialogComponent,  
        OrgCountryComponent,    
        OrgUploadComponent,
        OrgForm3DialogComponent,
        OrgRegistrationPreviewDialogComponent,
    ],
    providers: [
        ResourceSanitizerPipe,
        CurrencyPipe,
        DecimalPipe
    ]
})
export class SharedModule {}

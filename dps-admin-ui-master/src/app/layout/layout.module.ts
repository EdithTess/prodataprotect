import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BackdropModule} from '../../@fury/shared/backdrop/backdrop.module';
import {LoadingIndicatorModule} from '../../@fury/shared/loading-indicator/loading-indicator.module';
import {MaterialModule} from '../../@fury/shared/material-components.module';
import {FooterModule} from './footer/footer.module';
import {LayoutComponent} from './layout.component';
import {QuickpanelModule} from './quickpanel/quickpanel.module';
import {SidenavModule} from './sidenav/sidenav.module';
import {ToolbarModule} from './toolbar/toolbar.module';
import {ConfigPanelModule} from './config-panel/config-panel.module';
import {FurySharedModule} from '../../@fury/fury-shared.module';
import {NavigationModule} from './navigation/navigation.module';
import {CommentsModule} from './comments/comments.module';
import {MglTimelineModule} from 'angular-mgl-timeline';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ShowNotificationDialogComponent } from './dialogs/show-notification-dialog/show-notification-dialog.component';
import { ShowAllNotificationsBottomsheetComponent } from './bottomsheets/show-all-notifications-bottomsheet/show-all-notifications-bottomsheet.component';
// import { PdfReaderComponent } from './pdf-reader/pdf-reader.component';
// import { PdfViewerModule } from 'ng2-pdf-viewer';
// import { ViewPdfDocumentBottomsheetComponent } from './bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component';
import { SharedModule } from '../../@fury/shared/shared-module.module';
import { ViewPdfDocumentBottomsheetComponent } from './bottomsheets/view-pdf-document-bottomsheet/view-pdf-document-bottomsheet.component';
import { ComplaintCommentsComponent } from './complaint-comments/complaint-comments.component';
import { ResolutionUploadComponent } from './dialogs/resolution-upload/resolution-upload.component';
import { AppropriateSecurityMeasuresLetterComponent } from './dialogs/appropriate-security-measures-letter/appropriate-security-measures-letter.component';
import { InfringementLetterComponent } from './dialogs/infringement-letter/infringement-letter.component';
import { ViolationOfTheActLetterComponent } from './dialogs/violation-of-the-act-letter/violation-of-the-act-letter.component';
import { ForwardMessageDialogComponent } from './dialogs/forward-message-dialog/forward-message-dialog.component';
import { CategoryDisplayComponent } from './dialogs/category-display/category-display.component';
import { ForwardCommentsComponent } from './dialogs/forward-comments/forward-comments.component';
import { MoreInformationComponent } from './dialogs/more-information/more-information.component';
import { BreachCommentsComponent } from './breach-comments/breach-comments.component';
import { InvestigationNotesComponent } from './dialogs/investigation-dialogs/investigation-notes/investigation-notes.component';
import { BreachInvestigationsComponent } from './dialogs/breach-investigations/breach-investigations/breach-investigations.component';
import { ForwardInvestigationsComponent } from './dialogs/forward-investigation/forward-investigations/forward-investigations.component';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { GatherMoreInformationComponent } from './dialogs/investigation-dialogs/investigation-information/gather-more-information/gather-more-information.component';
import { InvestigationCommentsComponent } from './investigation-comments/investigation-comments/investigation-comments.component';
import { UpdateRegistrationComponent } from './dialogs/update-message-dialog/update-registration/update-registration.component';
import { OrgBreachPreviewComponent } from './dialogs/Breach-review/org-breach-preview/org-breach-preview.component';
import { SaveMessageComponent } from './dialogs/save-changes/save-message/save-message.component';
import { ComplaintManageMoreInformationComponent } from './dialogs/complaint-manage-more-information/complaint-manage-more-information.component';
import { BreachRequestForInformationComponent } from './dialogs/breach-request-for-information/breach-request-for-information.component';
import { BreachManageMoreInformationComponent } from './dialogs/breach-manage-more-information/breach-manage-more-information.component';
import { DownloadPRNReceiptComponent } from './dialogs/download-prnreceipt/download-prnreceipt.component';
import { DownloadComplaintComponent } from './dialogs/download-complaint/download-complaint.component';
import { CancellationCommentsComponent } from './dialogs/cancellation-comments/cancellation-comments.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        MaterialModule,
        LoadingIndicatorModule,
        FurySharedModule,
        SharedModule,
        ReactiveFormsModule,
        MatIconModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserModule,
        // PdfViewerModule,

        // Core
        ToolbarModule,
        QuickpanelModule,
        SidenavModule,
        FooterModule,
        BackdropModule,
        ConfigPanelModule,
        CommentsModule,
        NavigationModule,
        MglTimelineModule,
    ],
    declarations: [
        LayoutComponent,
        ShowNotificationDialogComponent,
        ShowAllNotificationsBottomsheetComponent,
        // PdfReaderComponent,
        // ViewPdfDocumentBottomsheetComponent,
        ViewPdfDocumentBottomsheetComponent,
        ComplaintCommentsComponent,
        ResolutionUploadComponent,
        AppropriateSecurityMeasuresLetterComponent,
        InfringementLetterComponent,
        ViolationOfTheActLetterComponent,
        ForwardMessageDialogComponent,
        CategoryDisplayComponent,
        ForwardCommentsComponent,
        MoreInformationComponent,
        BreachCommentsComponent,
        InvestigationNotesComponent,
        BreachInvestigationsComponent,
        ForwardInvestigationsComponent,
        GatherMoreInformationComponent,
        InvestigationCommentsComponent,
        UpdateRegistrationComponent,
        OrgBreachPreviewComponent,
        SaveMessageComponent,
        ComplaintManageMoreInformationComponent,
        BreachRequestForInformationComponent,
        BreachManageMoreInformationComponent,
        DownloadPRNReceiptComponent,
        DownloadComplaintComponent,
        CancellationCommentsComponent,
       
    ],
    entryComponents: [
        ShowNotificationDialogComponent,
        ShowAllNotificationsBottomsheetComponent,
        ViewPdfDocumentBottomsheetComponent,
    ]
})

export class LayoutModule {
}

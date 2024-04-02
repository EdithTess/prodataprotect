import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {HttpUtils} from '../../../@fury/http/HttpUtils';
import {HttpService} from '../../../@fury/services/http.service';
import {environment} from '../../../environments/environment';
import {ActionPerformed} from '../models/document-workflow.model';
import { CertificateRequest } from './components/company-registration.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyRegistrationService  extends HttpService{

  constructor(
      private auth: KeycloakService,
      private http: HttpClient,
  ) {
    super();
    this.httpUtils = new HttpUtils(auth, http);
  }

  private httpUtils:  HttpUtils;
  private baseAPIUri = environment.backend;

  // tslint:disable-next-line:max-line-length
  public getRegisteredOrganisation(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    // const api = this.baseAPIUri + 'v1.0' + '/org-registration';
    const api = this.baseAPIUri + 'v1.0' + '/org-registration/all/minimal-data';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public getByOrgID(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, OrgID: string): void {
    const api = this.baseAPIUri + 'v1.0' + '/org-registration/byorgid/single?OrganizationID=' + OrgID;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }
  // tslint:disable-next-line:max-line-length
  public getMyPendingTask(role: string, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + '/org-registration/my-tasks?Role=' + role;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getRequestsToCancel(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + '/org-registration/cancel-request'   ;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }


  // tslint:disable-next-line:max-line-length
  public getRegistrationByReferenceNumber(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, RegTrackingNo: String): void {
    const api = this.baseAPIUri + 'v1.0' + '/org-registration/single?RegTrackingNo=' + RegTrackingNo;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public createCertificate(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, organisationalId: number, IssueType: string): void {
    const api = this.baseAPIUri + 'v1.0' + '/certificate/generate';
    const request = {'OrganizationID': `${organisationalId}`, 'IssueType': `${IssueType}`};
    return this.httpUtils.invokePost(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public getCertificateDetails(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, organisationalId: number): void {
    const api = this.baseAPIUri + 'v1.0' + '/certificate/details';
    const request = {'OrganizationID': `${organisationalId}`};
    return this.httpUtils.invokeGetWithParams(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public updateCertificateDownloadCount(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, certificateRegNumber: string): void {
    const api = this.baseAPIUri + 'v1.0' + '/certificate/update_after_download';
    const request = {'CertificateRegNumber': `${certificateRegNumber}`};
    return this.httpUtils.invokePut(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getPrnData(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
   
    const api = this.baseAPIUri + 'v1.0' + '/ura/prn-data';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  
  }
}

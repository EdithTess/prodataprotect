import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { KeycloakService } from 'keycloak-angular';
import { HttpUtils } from '../../../@fury/http/HttpUtils';
import { HttpService } from '../../../@fury/services/http.service';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComplianceReportService extends HttpService {

  private submittedUsers: Set<any> = new Set();
  constructor(
    private auth: KeycloakService,
    private http: HttpClient,
  ) {
    super();
    this.httpUtils = new HttpUtils(auth, http);
  }

  private httpUtils: HttpUtils;
  private baseAPIUri = environment.backend;
  //private statusApiUrl = `${this.baseAPIUri}v1.0/compliance-report/compliance-report/single?OrganizationID=${orgMyID}`;

  markFormSubmitted(userId: string) {
    this.submittedUsers.add(userId);
  }

  markFormNotSubmitted(userId: string) {
    this.submittedUsers.delete(userId);
  }

  toggleFormSubmission(userId: any) {
    if (this.hasUserSubmittedForm(userId)) {
      this.markFormNotSubmitted(userId);
    } else {
      this.markFormSubmitted(userId);
    }
  }

  hasUserSubmittedForm(userId: string) {
    return this.submittedUsers.has(userId);
  }


  public sendComplianceReport(payload: any): void {
    
    const processingEvent = new EventEmitter<boolean>();
    const resultEvent = new EventEmitter<any>();
    const errorsEvent = new EventEmitter<any>();
    
    const api = this.baseAPIUri + 'v1.0' + '/compliance-report/compliance-report/single';
    
    const responseHandler = (response: any) => {
      console.log('Response from backend:', response);
      // handle the response from the backend here
    };

    this.httpUtils.invokePost(api, payload, processingEvent, resultEvent, errorsEvent, responseHandler);
  }
}

import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../@fury/services/http.service';
import {KeycloakService} from 'keycloak-angular';
import {HttpClient} from '@angular/common/http';
import {HttpUtils} from '../../@fury/http/HttpUtils';
import {environment} from '../../environments/environment';
import {ActionPerformed, ActionPerformedRequestMoreInfo} from '../modules/models/document-workflow.model';

@Injectable({
  providedIn: 'root'
})
export class WorkflowServiceService  extends HttpService {

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
  public getDocumentActions(workflowId: any, stepId: any, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + '/workflow/get_actions?WorkFlowID=' + `${workflowId}&StepID=${stepId}`;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public getDocumentWorkFlowTimeLine(role: string, workflowId: any, RegTrackingNo: any, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + `/workflow/?Role=${role}` + `&WorkFlowID=${workflowId}&RecordTrackingNo=${RegTrackingNo}`;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public performAction(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, actionPerformed: ActionPerformed): void {
    const api = this.baseAPIUri + 'v1.0' + '/workflow/perform-action';
    return this.httpUtils.invokePost(api, actionPerformed, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public performActionRequestMoreInfo(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, actionPerformed: ActionPerformedRequestMoreInfo): void {
    const api = this.baseAPIUri + 'v1.0' + '/workflow/request-more-info';
    return this.httpUtils.invokePost(api, actionPerformed, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public hasRequestForMoreInfo( RegTrackingNo: any, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + '/workflow/check-request-for-more-info';
    const request = {'RecordTrackingNo': `${RegTrackingNo}`};
    return this.httpUtils.invokeGetWithParams(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

}

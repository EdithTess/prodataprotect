import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {HttpUtils} from '../../../@fury/http/HttpUtils';
import {HttpService} from '../../../@fury/services/http.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class InvestigationService  extends HttpService{

    constructor(
        private auth: KeycloakService,
        private http: HttpClient,
    ) {
        super();
        this.httpUtils = new HttpUtils(auth, http);
    }

    private httpUtils:  HttpUtils;
    private baseAPIUri = environment.backend;


    public getInvestigations(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/investigations';
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }

    public getInvestigation(InvestigationTrackingNo:string,processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/investigations/single?InvestigationTrackingNo='+InvestigationTrackingNo;
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }

    public updateInvestigationStatus(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/update-investigation-status';

        //const request = {'OrganizationID': `${organisationalId}`, 'IssueType': `${IssueType}`};
       // return this.httpUtils.invokePost(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
      }

}
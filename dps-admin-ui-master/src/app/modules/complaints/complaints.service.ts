import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {HttpUtils} from '../../../@fury/http/HttpUtils';
import {HttpService} from '../../../@fury/services/http.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ComplaintService  extends HttpService{

    constructor(
        private auth: KeycloakService,
        private http: HttpClient,
    ) {
        super();
        this.httpUtils = new HttpUtils(auth, http);
    }

    private httpUtils:  HttpUtils;
    private baseAPIUri = environment.backend;


    public getComplaints(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/complaints';
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }

    public getComplaint(ComplaintTrackingNo:string,processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/complaints/single?ComplaintTrackingNo='+ComplaintTrackingNo;
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }

    public updateComplaintStatus(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/update-complaint-status';

        //const request = {'OrganizationID': `${organisationalId}`, 'IssueType': `${IssueType}`};
       // return this.httpUtils.invokePost(api, request, processingEvent, resultEvent, errorsEvent, this.handleError);
      }

    public getComplaintPendingTasks(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, RealmRole:string): void {
        const api = this.baseAPIUri + 'v1.0' + '/complaints/pending-tasks?Role='+RealmRole;
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }

}
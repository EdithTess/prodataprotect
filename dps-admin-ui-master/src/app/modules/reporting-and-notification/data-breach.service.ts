import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import {KeycloakService} from 'keycloak-angular';
import {HttpUtils} from '../../../@fury/http/HttpUtils';
import {HttpService} from '../../../@fury/services/http.service';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DataBreachService  extends HttpService{

    constructor(
        private auth: KeycloakService,
        private http: HttpClient,
    ) {
        super();
        this.httpUtils = new HttpUtils(auth, http);
    }

    private httpUtils:  HttpUtils;
    private baseAPIUri = environment.backend;


    public getBreaches(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
        const api = this.baseAPIUri + 'v1.0' + '/data-breach/';
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }
    public getBreach(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>, DataBreachTrackingNo): void {
        const api = this.baseAPIUri + 'v1.0' + '/data-breach/single?DataBreachTrackingNo='+ DataBreachTrackingNo;
        return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
    }

   
}
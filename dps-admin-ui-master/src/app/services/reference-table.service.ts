import { HttpClient } from '@angular/common/http';
import {EventEmitter, Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { HttpUtils } from '../../@fury/http/HttpUtils';
import { HttpService } from '../../@fury/services/http.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReferenceTableService extends HttpService {

  constructor(
      private auth: KeycloakService,
      private http: HttpClient,
  ) {
    super();
    this.httpUtils = new HttpUtils(auth, http);
  }

  private httpUtils:  HttpUtils;
  private baseAPIUri = environment.backend;
  private  reference = '/reference';

  public getFormFields( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/form-fields';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getSubCategories( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/get_category_subcategories';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getDataPurposes( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/data_purpose';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }


  public getSectors( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/sector';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getDataSource( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/data_source';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getCountries( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/countries';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  public getChecklist( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/checklist';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public getNatureOfBusiness( processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/nature-of-business';
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }

  // tslint:disable-next-line:max-line-length
  public getNatureOfBusinessSubCat( natureOfBusinessId: any, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'v1.0' + this.reference + '/nature-of-business?NatureOfBusinessSubCat=' + natureOfBusinessId;
    return this.httpUtils.invokeGet(api, processingEvent, resultEvent, errorsEvent, this.handleError);
  }
}

import {EventEmitter, Injectable} from '@angular/core';
import {HttpService} from '../../../@fury/services/http.service';
import {KeycloakService} from 'keycloak-angular';
import {HttpClient} from '@angular/common/http';
import {HttpUtils} from '../../../@fury/http/HttpUtils';
// import { environment } from 'src/environments/environment';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserAdministrationService extends HttpService {

  constructor(
      private auth: KeycloakService,
      private http: HttpClient
  ) { 
    super();
    this.httpUtils = new HttpUtils(auth,http);
  }
  
  private httpUtils: HttpUtils;
  private baseAPIUri = environment.keycloakAdmin;


  public getUsers(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = environment.pythonApi + 'account-management/get-users';
    return this.httpUtils.invokeGet(api,processingEvent,resultEvent,errorsEvent,this.handleError);
  }

  public getUserGroups(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'groups';
    return this.httpUtils.invokeGet(api,processingEvent,resultEvent,errorsEvent,this.handleError);
  }

  public getUserRoles(processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<any>, errorsEvent: EventEmitter<any>): void {
    const api = this.baseAPIUri + 'roles';
    return this.httpUtils.invokeGet(api,processingEvent,resultEvent,errorsEvent,this.handleError);
  }
}

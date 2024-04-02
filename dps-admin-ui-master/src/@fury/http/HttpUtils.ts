import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { retry } from 'rxjs/operators';
import {KeycloakService} from 'keycloak-angular';
import {HttpService} from '../services/http.service';

@Injectable()
export class HttpUtils extends HttpService{

    constructor(
        private auth: KeycloakService,
        private http: HttpClient,
    ) {
        super();
    }

    private static getHttpOptionsBasic() {
        return {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            withCredentials: false
        };
    }

    private static getHttpOptions() {
        return {
            withCredentials: false
        };
    }

    public invokeGet<R, E>(
        endpoint: string,
        processingEvent: EventEmitter<boolean>,
        resultEvent: EventEmitter<R>,
        errorsEvent: EventEmitter<E>,
        httpErrorHandler?: any): void {
        // Fire processing emitter
        processingEvent.emit(true);
        const httpOptions = HttpUtils.getHttpOptions();
        // Call api
        this.http.get<R>(endpoint, httpOptions)
            .pipe(
                retry(0)
            ).subscribe((result: R) => {
                processingEvent.emit(false);
                resultEvent.emit(result);
            }, (errors: E) => {
                processingEvent.emit(false);
                errorsEvent.emit(errors);
            },
            () => {});
    }

    public invokeGetWithParams<R, E>(endpoint: string, params: any, processingEvent: EventEmitter<boolean>,
                                     resultEvent: EventEmitter<R>, errorsEvent: EventEmitter<any>, httpErrorHandler?: any): void {
        // Fire processing emitter
        processingEvent.emit(true);
        const options = HttpUtils.getHttpOptions();
        (options as any).params = { ...params };
        // Call api
        this.http.get<R>(endpoint, options)
            .pipe(
                retry(0),
                // catchError(httpErrorHandler)
            ).subscribe((result: R) => {
                processingEvent.emit(false);
                resultEvent.emit(result);
            }, (errors: E) => {
                processingEvent.emit(false);
                errorsEvent.emit(errors);
            },
            () => {});
    }

    // tslint:disable-next-line:max-line-length
    public invokePut<B, R, E>(endpoint: string, body: B, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<R>, errorsEvent: EventEmitter<E>, httpErrorHandler?: any): void {
        // Fire processing emitter
        processingEvent.emit(true);
        const httpOptions = HttpUtils.getHttpOptions();
        // Call api
        this.http.put<R>(endpoint, body, httpOptions)
            .pipe(
                retry(0),
                // catchError(httpErrorHandler)
            ).subscribe((result: R) => {
            processingEvent.emit(false);
            resultEvent.emit(result);
        }, (errors: E) => {
            processingEvent.emit(false);
            errorsEvent.emit(errors);
        });
    }


    // tslint:disable-next-line:max-line-length
    public invokePost<B, R, E>(endpoint: string, body: B, processingEvent: EventEmitter<boolean>, resultEvent: EventEmitter<R>, errorsEvent: EventEmitter<E>, httpErrorHandler?: any): void {
        // Fire processing emitter
        processingEvent.emit(true);
        // Define options
        const httpOptions = HttpUtils.getHttpOptions();
        // Call api
        this.http.post<R>(endpoint, body, httpOptions)
            .pipe(
                retry(0),
                // catchError(httpErrorHandler)
            ).subscribe((result: R) => {
            processingEvent.emit(false);
            resultEvent.emit(result);
        }, (errors: E) => {
            processingEvent.emit(false);
            errorsEvent.emit(errors);
        });
    }


}

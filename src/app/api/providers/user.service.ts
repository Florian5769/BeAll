/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
class UserService extends __BaseService {
    static readonly getUserPath = '/user';
    static readonly putUserPath = '/user';

    constructor(
        config: __Configuration,
        http: HttpClient
    ) {
        super(config, http);
    }


}

export { UserService }
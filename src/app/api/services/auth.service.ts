/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Auth } from '../models/auth';
@Injectable({
  providedIn: 'root',
})
class AuthService extends __BaseService {
  static readonly postApiAuthSigninPath = '/api/auth/signin';
  static readonly postApiAuthGoogleAuthPath = '/api/auth/googleAuth';
  static readonly postApiAuthLogoutPath = '/api/auth/logout';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Login
   * @param user User object
   */
  postApiAuthSigninResponse(user: Auth): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = user;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/signin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Login
   * @param user User object
   */
  postApiAuthSignin(user: Auth): __Observable<null> {
    return this.postApiAuthSigninResponse(user).pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Google Auth
   */
  postApiAuthGoogleAuthResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/googleAuth`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Google Auth
   */
  postApiAuthGoogleAuth(): __Observable<null> {
    return this.postApiAuthGoogleAuthResponse().pipe(
      __map(_r => _r.body as null)
    );
  }

  /**
   * Logout
   */
  postApiAuthLogoutResponse(): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/auth/logout`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Logout
   */
  postApiAuthLogout(): __Observable<null> {
    return this.postApiAuthLogoutResponse().pipe(
      __map(_r => _r.body as null)
    );
  }
}

module AuthService {
}

export { AuthService }

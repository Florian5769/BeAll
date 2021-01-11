/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { LoginResponseModel } from '../models/login-response.model';
import { CheckCredentialModel } from '../models/check-creadential.model';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
class AuthService extends __BaseService {
  static readonly postAuthLoginPath = '/auth/login';
  static readonly putAuthSignupPath = '/auth/signup';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postAuthLoginResponse(CheckCredentialModel: CheckCredentialModel): __Observable<__StrictHttpResponse<LoginResponseModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CheckCredentialModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/signin`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginResponseModel>;
      })
    );
  }
  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postAuthLogin(CheckCredentialModel: CheckCredentialModel): __Observable<LoginResponseModel> {
    return this.postAuthLoginResponse(CheckCredentialModel).pipe(
      __map(_r => _r.body as LoginResponseModel)
    );
  }

    /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postGenerateCodeResponse(UserModel: UserModel): __Observable<__StrictHttpResponse<LoginResponseModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = UserModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/generate-totp`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginResponseModel>;
      })
    );
  }
  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postGenerateCode(UserModel: UserModel): __Observable<LoginResponseModel> {
    return this.postGenerateCodeResponse(UserModel).pipe(
      __map(_r => _r.body as LoginResponseModel)
    );
  }

      /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postChangePasswordResponse(UserModel: UserModel): __Observable<__StrictHttpResponse<LoginResponseModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = UserModel;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/auth/change-password`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<LoginResponseModel>;
      })
    );
  }
  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postChangePassword(UserModel: UserModel): __Observable<LoginResponseModel> {
    return this.postChangePasswordResponse(UserModel).pipe(
      __map(_r => _r.body as LoginResponseModel)
    );
  }

  /**
   * @param CreateUserModel User to create
   * @return User created
   */
  putAuthSignupResponse(CreateUserModel: UserModel): __Observable<__StrictHttpResponse<UserModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CreateUserModel;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/auth/signup`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UserModel>;
      })
    );
  }
  /**
   * @param CreateUserDto User to create
   * @return User created
   */
  putAuthSignup(CreateUserModel: UserModel): __Observable<UserModel> {
    return this.putAuthSignupResponse(CreateUserModel).pipe(
      __map(_r => _r.body as UserModel)
    );
  }
}

module AuthService {
}

export { AuthService }
/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { trigger } from '@angular/animations';

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

    /**
  * @param params The `UserService.GetUserParams` containing the following parameters:
  *
  * - `role`: role to retrieve
  *
  * - `name`: Name to retrieve
  *
  * - `lastname`: Lastname to retrieve
  *
  * - `email`: Email to retrieve
  *
  * @return All users
  */
    getUserResponse(params: UserService.GetUserParams): __Observable<__StrictHttpResponse<Array<UserModel>>> {
        let __params = this.newParams();
        let __headers = new HttpHeaders()
        let __body: any = null;
        if (params.role != null) __params = __params.set('role', params.role.toString());
        if (params.name != null) __params = __params.set('name', params.name.toString());
        if (params.lastname != null) __params = __params.set('lastname', params.lastname.toString());
        if (params.email != null) __params = __params.set('email', params.email.toString());
        let req = new HttpRequest<any>(
            'GET',
            this.rootUrl + `/test/user`,
            __body,
            {
                headers: __headers,
                params: __params,
                responseType: 'json'
            });

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => {
                return _r as __StrictHttpResponse<Array<UserModel>>;
            })
        );
    }
    /**
     * @param params The `UserService.GetUserParams` containing the following parameters:
     *
     * - `role`: role to retrieve
     *
     * - `name`: Name to retrieve
     *
     * - `lastname`: Lastname to retrieve
     *
     * - `email`: Email to retrieve
     *
     * @return All users
     */
    getUser(params: UserService.GetUserParams): __Observable<Array<UserModel>> {
        return this.getUserResponse(params).pipe(
            __map(_r => _r.body as Array<UserModel>)
        );
    }

    /**
* @param params The `UserService.GetUserParams` containing the following parameters:
*
* - `role`: role to retrieve
*
* - `name`: Name to retrieve
*
* - `lastname`: Lastname to retrieve
*
* - `email`: Email to retrieve
*
* @return All users
*/
    getUsersResponse(): __Observable<__StrictHttpResponse<Array<UserModel>>> {
        let __params = this.newParams();
        let __headers = new HttpHeaders();
        let __body: any = null;
        let req = new HttpRequest<any>(
            'GET',
            this.rootUrl + `/test/users`,
            __body,
            {
                headers: __headers,
                params: __params,
                responseType: 'json'
            });

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => {
                return _r as __StrictHttpResponse<Array<UserModel>>;
            })
        );
    }
    /**
     * @param params The `UserService.GetUserParams` containing the following parameters:
     *
     * - `role`: role to retrieve
     *
     * - `name`: Name to retrieve
     *
     * - `lastname`: Lastname to retrieve
     *
     * - `email`: Email to retrieve
     *
     * @return All users
     */
    getUsers(): __Observable<Array<UserModel>> {
        return this.getUsersResponse().pipe(
            __map(_r => _r.body as Array<UserModel>)
        );
    }

}

module UserService {
    /**
      * Parameters for getUser
      */
    export interface GetUserParams {

        /**
         * role to retrieve
         */
        role: number;

        /**
         * Name to retrieve
         */
        name: string;

        /**
         * Lastname to retrieve
         */
        lastname: string;

        /**
         * Email to retrieve
         */
        email: string;
    }
}

export { UserService }
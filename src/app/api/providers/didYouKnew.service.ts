/* tslint:disable */
import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpRequest,
  HttpResponse,
  HttpHeaders,
} from "@angular/common/http";
import { BaseService as __BaseService } from "../base-service";
import { ApiConfiguration as __Configuration } from "../api-configuration";
import { StrictHttpResponse as __StrictHttpResponse } from "../strict-http-response";
import { Observable as __Observable } from "rxjs";
import { map as __map, filter as __filter } from "rxjs/operators";
import { CheckDidYouKnew } from "../models/check-did-you-knew.model";
import { DidYouKnewModel } from "../models/didYouKnew.model";

@Injectable({
  providedIn: "root",
})
class DidYouKnewService extends __BaseService {
  static readonly putDidYouKnew = "/didYouKnew";

  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  postNewYouKnewArticle(
    CheckDidYouKnew: CheckDidYouKnew
  ): __Observable<__StrictHttpResponse<CheckDidYouKnew>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = CheckDidYouKnew;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/didYouKnew`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CheckDidYouKnew>;
      })
    );
  }

  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postDidYouKnew(
    CheckDidYouKnew: CheckDidYouKnew
  ): __Observable<CheckDidYouKnew> {
    return this.postNewYouKnewArticle(CheckDidYouKnew).pipe(
      __map((_r) => _r.body as CheckDidYouKnew)
    );
  }

  /**
   * @param params The `UserService.GetUserParams` containing the following parameters:
   *
   * @return All didyouknew
   */
  getDidYouKnewsResponse(): __Observable<
    __StrictHttpResponse<Array<DidYouKnewModel>>
  > {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + `/didYouKnew/all`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: "json",
      }
    );

    return this.http.request<any>(req).pipe(
      __filter((_r) => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<DidYouKnewModel>>;
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
   getDidYouKnews(): __Observable<Array<DidYouKnewModel>> {
    return this.getDidYouKnewsResponse().pipe(
      __map((_r) => _r.body as Array<DidYouKnewModel>)
    );
  }
}

export { DidYouKnewService };

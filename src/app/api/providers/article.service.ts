/*
 * File: article.service.ts                                                    *
 * Project: erp                                                                *
 * Created Date: We May yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Wed May 26 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */



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
import { ArticleCategorieModel } from "../models/article-categorie.model";
 
 @Injectable({
   providedIn: "root",
 })
class ArticleService extends __BaseService {
  static readonly articleComponent = "/articles";

  constructor(config: __Configuration, http: HttpClient) {
  super(config, http);
}
  
  getCategoriesResponse(): __Observable<__StrictHttpResponse<Array<ArticleCategorieModel>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
        'GET',
        this.rootUrl + '/article-categorie',
        __body,
        {
            headers: __headers,
            params: __params,
            responseType: 'json'
        });

        return this.http.request<any>(req).pipe(
            __filter(_r => _r instanceof HttpResponse),
            __map((_r) => {
                return _r as __StrictHttpResponse<Array<ArticleCategorieModel>>;
            })
        );
    }

    getCategories(): __Observable<Array<ArticleCategorieModel>> {
        return this.getCategoriesResponse().pipe(
            __map(_r => _r.body as Array<ArticleCategorieModel>)
        );
    }
}


module ArticleService{

}

export { ArticleService }; 
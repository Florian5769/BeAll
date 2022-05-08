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
import { ArticleModel, Article } from "../models/article.model";
 
@Injectable({
  providedIn: "root",
})
class ArticleService extends __BaseService {
  constructor(config: __Configuration, http: HttpClient) {
    super(config, http);
  }

  getAllArticlesResponse(
    categorie
  ): __Observable<__StrictHttpResponse<ArticleModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    categorie ? categorie : "undefined";
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + "/articles/" + categorie,
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
        return _r as __StrictHttpResponse<ArticleModel>;
      })
    );
  }

  getAllArticles(categorie?): __Observable<ArticleModel> {
    return this.getAllArticlesResponse(categorie).pipe(
      __map((_r) => _r.body as ArticleModel)
    );
  }

  getArticleByIdResponse(id): __Observable<__StrictHttpResponse<Article>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + "/admin/article/" + id,
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
        return _r as __StrictHttpResponse<Article>;
      })
    );
  }

  getArticleById(id: string): __Observable<Article> {
    return this.getArticleByIdResponse(id).pipe(
      __map((_r) => _r.body as Article)
    );
  }

  postNewCategorieResponse(
    categories
  ): __Observable<__StrictHttpResponse<ArticleCategorieModel>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = categories;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + `/article-categorie`,
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
        return _r as __StrictHttpResponse<ArticleCategorieModel>;
      })
    );
  }

  /**
   * @param CheckCredentialModel User credential to check
   * @return User authentificated token
   */
  postCategorie(categories): __Observable<ArticleCategorieModel> {
    return this.postNewCategorieResponse(categories).pipe(
      __map((_r) => _r.body as ArticleCategorieModel)
    );
  }

  getCategoriesResponse(): __Observable<
    __StrictHttpResponse<Array<ArticleCategorieModel>>
  > {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      "GET",
      this.rootUrl + "/article-categorie",
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
        return _r as __StrictHttpResponse<Array<ArticleCategorieModel>>;
      })
    );
  }

  getCategories(): __Observable<Array<ArticleCategorieModel>> {
    return this.getCategoriesResponse().pipe(
      __map((_r) => _r.body as Array<ArticleCategorieModel>)
    );
  }

  validateArticleResponse(
    article
  ): __Observable<__StrictHttpResponse<Article>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = article;
    let req = new HttpRequest<any>(
      "POST",
      this.rootUrl + "/article/updateStatus",
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
        return _r as __StrictHttpResponse<Article>;
      })
    );
  }

  validateArticle(article): __Observable<Article> {
    return this.validateArticleResponse(article).pipe(
      __map((_r) => _r.body as Article)
    );
  }
}

module ArticleService{

}

export { ArticleService }; 
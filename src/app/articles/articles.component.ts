/*
 * File: articles.component.ts                                                 *
 * Project: erp                                                                *
 * Created Date: Tu May yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Wed May 26 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */

import { Component, OnInit } from '@angular/core';
import { ArticleCategorieModel } from "../api/models";
import { Article, ArticleModel } from '../api/models/article.model';
import { ArticleService } from "../api/providers";
import { Router } from '@angular/router';

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
  public isLoading = false;
  articles: ArticleModel["allArticles"];
  article: Article;
  public showFilter: boolean;

  constructor(private Article: ArticleService) {
    this.showFilter = false
  }

  ngOnInit(): void {
    this.getAllArticles();
  }

  openFilters() {
    this.showFilter = !this.showFilter
  }

  getAllArticles = () => {
    this.Article.getAllArticles()
      .toPromise()
      .then((result: ArticleModel) => {
        if (result) {
          this.articles = result.allArticles;
        }
      });
  };
}

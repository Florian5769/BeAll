/*
 * File: article.component.ts                                                  *
 * Project: erp                                                                *
 * Created Date: Su May yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Mon May 31 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */



import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from "../api/models/article.model";
import { ArticleService } from "../api/providers";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
})
export class ArticleComponent implements OnInit {
  public isLoading = false;
  public article: Article;
  public disabled: boolean;
  public comment = "";
  public adminList = [];

  constructor(
    private route: ActivatedRoute,
    private Article: ArticleService
  ) {
    this.disabled = true;
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get("_id");

    this.getArticle(id);
  }

  getArticle = (id: string) => {
    this.Article.getArticleById(id)
      .toPromise()
      .then((result) => {
        this.article = result;
        if (result['article'].adminComments.length >= 90) {
          this.disabled = false;
          this.adminList = result['adminUsers'];
        }
      });
  };

  getComments = (e: Event) => {
    this.comment.length > 90
      ? this.disabled = false
      : this.disabled = true
  }

  approvedArticle = (arg: boolean) => {
    if (arg) {
      this.article.status = 1;
      this.article.adminComments = "Cet article est validé";
      this.Article.validateArticle(this.article)
        .toPromise()
        .then((result) => {
          if (result && result.status === 200) {
            // add success SnackBar
          } else {
            // add failure SnackBar
          }
        });
    } else {
      this.article.status = -2;
      this.article.adminComments = this.comment
      this.Article.validateArticle(this.article)
        .toPromise()
        .then((result) => {
          if (result && result.status === 200) {
            // add success SnackBar
          } else {
            // add failure SnackBar
          }
        });
    }
  };

  populateCommentText = (text: string) => {
    this.comment = text;
  }
}

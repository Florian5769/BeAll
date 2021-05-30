/*
 * File: article-categorie.model.ts                                            *
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



export interface ArticleCategorieModel {
    _id?: number;
    categorie: string;
    value: string;
    logo: string;
}
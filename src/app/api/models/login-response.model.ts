/*
 * File: login-response.model.ts                                               *
 * Project: erp                                                                *
 * Created Date: Tu Apr yyyy                                                   *
 * Author: Franck Ehui                                                         *
 * -----                                                                       *
 * Last Modified: Sun Apr 25 2021                                              *
 * Modified By: Franck Ehui                                                    *
 * -----                                                                       *
 * Copyright (c) 2021 BeAll                                                    *
 * -----                                                                       *
 * HISTORY:                                                                    *
 * Date      	By	Comments                                                     *
 * ----------	---	---------------------------------------------------------    *
 */



/* tslint:disable */
export interface LoginResponseModel {
  token: string;
  Status: number;
  Message: string;
  id?: number;
  email?: string;
  username?: string;
  firstname?: string;
  lastname?: string;
  roles?: 'admin' | 'user' | 'moderator';
  createdAt?: Date;
  updatedAt?: Date;
  password?:string;
  lastConnection?: Date;
  address?: string;
  gender?: 'Male' | 'Female';
  birthyear?: number;
  image?: string;
  subscribe?:boolean;
  plan?:number;
}
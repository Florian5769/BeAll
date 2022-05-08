/*
 * File: user.model.ts                                                         *
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
 * Date      	By	Comments                                                   *
 * ----------	---	---------------------------------------------------------  *
 */

export interface UserModel {
    id?: number;
    email?: string;
    username?: string;
    firstname?: string;
    lastname?: string;
    roles?: 'admin' | 'user' | 'moderator';
    createdAt?: Date;
    updatedAt?: Date;
    token?: string;
    password?:string;
    lastConnection?: Date;
    address?: string;
    gender?: 'Male' | 'Female';
    birthyear?: number;
    userimage?: string;
    subscribe?:boolean;
    plan?:number;
}
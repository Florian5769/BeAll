/**
 * File: g:\WorkSpace\BeAll_Admin\BeAll\src\app\api\models\didYouKnew.model.ts
 * Project: g:\WorkSpace\BeAll_Admin\BeAll
 * Created Date: Monday, April 19th 2021, 9:11:23 pm
 * Author: Alexis Brossette
 * -----
 * Last Modified: Sun May 30 2021
 * Modified By: Alexis Brossette
 * -----
 * Copyright (c) 2021 BeAll
 * ------------------------------------
 * Javascript will save your soul!
 */

export interface DidYouKnewModel {
  dyk: object;
  _id: string;
  userId: string;
  userImage: string;
  email: string;
  username: string;
  firstname: string;
  lastname: string;
  deleted: boolean;
  roles: [],
}
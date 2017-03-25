/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { ISys_User_Role } from "./ISys_User_Role";
export interface ISys_User_RoleModel extends ISys_User_Role, mongoose.Document {
};

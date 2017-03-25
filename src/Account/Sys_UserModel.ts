/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { ISys_User } from "./ISys_User";
export interface ISys_UserModel extends ISys_User, mongoose.Document {
};

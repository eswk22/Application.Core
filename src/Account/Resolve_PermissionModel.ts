/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { IResolve_Permission } from "./IResolve_Permission";
export interface IResolve_PermissionModel extends IResolve_Permission, mongoose.Document {
};

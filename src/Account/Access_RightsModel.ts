/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { IAccess_Rights } from "./IAccess_Rights";
export interface IAccess_RightsModel extends IAccess_Rights, mongoose.Document {
};

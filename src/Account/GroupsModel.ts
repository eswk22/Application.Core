/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { IGroups } from "./IGroups";
export interface IGroupsModel extends IGroups, mongoose.Document {
};

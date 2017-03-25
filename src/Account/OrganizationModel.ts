/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { IOrganization } from "./IOrganization";
export interface IOrganizationModel extends IOrganization, mongoose.Document {
};

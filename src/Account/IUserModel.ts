/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';

import { IUser } from "./IUser";

export interface IUserModel extends IUser, mongoose.Document {
	fullName(): string; 
}; 
  
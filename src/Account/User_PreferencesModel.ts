/// <reference path="../../typings/tsd.d.ts" />
import * as mongoose from 'mongoose';
import { IUser_Preferences } from "./IUser_Preferences";
export interface IUser_PreferencesModel extends IUser_Preferences, mongoose.Document {
};

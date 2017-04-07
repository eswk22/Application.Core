/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Netcool_Alarms extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_serial : String,
  u_cascade_id : String,
  u_first_occurance : Date,
  u_last_occurence : Date,
  u_clearedtime : Date,
  u_cleared_time : Date,
};

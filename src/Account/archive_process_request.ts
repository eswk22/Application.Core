/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Archive_Process_Request extends mongoose.Document {
  u_duration : Number,
  u_number : String,
  u_status : String,
  u_timeout : String,
  u_wiki : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_problem : String,
  sys_is_deleted : String,
  sys_org : String,
};

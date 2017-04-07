/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Archive_Execute_Result extends mongoose.Document {
  u_address : String,
  u_duration : Number,
  u_returncode : Number,
  u_target : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_request : String,
  u_execute_result_lob : String,
  sys_is_deleted : String,
  sys_org : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Alert_Log extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_component : String,
  u_message : String,
  u_severity : String,
  u_type : String,
};

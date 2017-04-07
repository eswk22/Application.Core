/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Threshold extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_status : String,
  u_componenttype : String,
  u_group : String,
  u_guid : String,
  u_high : String,
  u_ipaddress : String,
  u_low : String,
  u_name : String,
  u_type : String,
};

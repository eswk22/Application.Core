/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Registration extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_build : String,
  u_config : String,
  u_createtime : Date,
  u_cronoffset : Number,
  u_description : String,
  u_group : String,
  u_guid : String,
  u_ipaddress : String,
  u_location : String,
  u_name : String,
  u_status : String,
  u_type : String,
  u_updatetime : Date,
  u_version : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Mcp_File extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_date : Date,
  u_name : String,
  u_server : String,
  u_server_name : String,
  u_size : Number,
  u_type : String,
  u_version : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Access_Rights extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_admin_access : String,
  u_execute_access : String,
  u_read_access : String,
  u_resource_sys_id : String,
  u_resource_name : String,
  u_resource_type : String,
  u_write_access : String,
};

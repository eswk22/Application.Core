/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Filter extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_is_global : Boolean,
  u_is_role : Boolean,
  u_is_self : Boolean,
  u_name : String,
  u_userid : String,
  u_value : String,
  u_meta_access_rights_sys_id : String,
  u_meta_table_sys_id : String,
};

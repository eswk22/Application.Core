/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Wikiarchive extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_comment : String,
  u_patch : String,
  u_table_column : String,
  u_table_sys_id : String,
  u_table_name : String,
  u_is_user_archive : String,
  u_version : Number,
};

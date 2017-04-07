/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Permission extends mongoose.Document {
  u_perm_id : String,
  u_role : String,
  u_table_name : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_org : String,
  sys_perm : String,
  sys_updated_by : String,
  sys_updated_on : Date,
};

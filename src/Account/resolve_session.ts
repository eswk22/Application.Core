/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Session extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active_type : String,
  u_change_request : String,
  u_is_archive : String,
  u_problem_sys_id : String,
  u_archive_problem : String,
};

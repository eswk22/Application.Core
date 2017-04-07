/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_App_Roles_Rel extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_resolve_app_sys_id : String,
  u_resolve_roles_sys_id : String,
};

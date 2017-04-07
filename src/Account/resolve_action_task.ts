/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Action_Task extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active : Boolean,
  u_description : String,
  u_fullname : String,
  u_is_default_role : String,
  u_is_deleted : String,
  u_is_hidden : String,
  u_logresult : Boolean,
  u_menu_path : String,
  u_name : String,
  u_namespace : String,
  u_roles : String,
  u_summary : String,
  u_types : String,
  u_accessrights : String,
  u_assigned_to : String,
  u_preprocess : String,
  u_invocation : String,
};

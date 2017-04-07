/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Impex_Manifest extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_comp_sys_id : String,
  u_display_type : String,
  u_file_name : String,
  u_fullname : String,
  u_include : Boolean,
  u_module : String,
  u_module_name : String,
  u_name : String,
  u_operation : String,
  u_operation_type : String,
  u_status : String,
  u_table_name : String,
};

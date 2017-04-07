/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Table_View extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_create_form_id : String,
  u_display_name : String,
  u_edit_form_id : String,
  u_is_global : Boolean,
  meta_form_link : String,
  meta_new_link : String,
  u_name : String,
  u_params : String,
  u_target : String,
  u_type : String,
  u_user : String,
  u_meta_access_rights_sys_id : String,
  u_meta_control_sys_id : String,
  u_meta_table_sys_id : String,
  u_parent_sys_id : String,
};

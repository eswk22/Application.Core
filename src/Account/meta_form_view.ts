/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Form_View extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_display_name : String,
  u_form_name : String,
  u_is_header_visible : String,
  u_is_view_collapsible : String,
  u_is_wizard : String,
  u_table_display_name : String,
  u_table_name : String,
  u_view_name : String,
  u_wiki_name : String,
  u_window_title : String,
  u_meta_access_rights_sys_id : String,
  u_meta_control_sys_id : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Source extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_dbtype : String,
  u_display_name : String,
  u_name : String,
  u_source : String,
  u_type : String,
  u_meta_field_properties_sys_id : String,
  u_meta_form_view_sys_id : String,
};

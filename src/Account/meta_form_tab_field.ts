/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Form_Tab_Field extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_column_number : Number,
  u_order : Number,
  u_meta_field_sys_id : String,
  u_meta_field_properties_sys_id : String,
  u_meta_form_tab_sys_id : String,
  u_meta_source_sys_id : String,
};

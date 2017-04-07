/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Table_View_Field extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_order : Number,
  u_meta_field_sys_id : String,
  u_meta_field_properties_sys_id : String,
  u_meta_table_view_sys_id : String,
  u_meta_view_field_sys_id : String,
};

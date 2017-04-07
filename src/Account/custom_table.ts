/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Custom_Table extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_destination : String,
  u_display_name : String,
  u_model_name : String,
  u_name : String,
  u_reference_table_names : String,
  u_schema_definition : String,
  u_source : String,
  u_type : String,
  u_meta_table_sys_id : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Control_Item extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_custom_table_display : String,
  u_display_name : String,
  u_group_display_name : String,
  u_group_name : String,
  u_name : String,
  u_param : String,
  u_sequence : Number,
  u_type : String,
  u_meta_control_sys_id : String,
};

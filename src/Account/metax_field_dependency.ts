/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metax_Field_Dependency extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_action : String,
  u_action_options : String,
  u_condition : String,
  u_target : String,
  u_value : String,
  u_meta_control_item_sys_id : String,
  u_meta_field_prop_sys_id : String,
  u_meta_form_tab_sys_id : String,
};

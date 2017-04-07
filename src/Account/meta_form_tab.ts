/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Form_Tab extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_is_selected_default : Boolean,
  u_no_of_vertical_columns : Number,
  u_order : Number,
  u_position : String,
  u_tab_name : String,
  u_tab_width : Number,
  u_url : String,
  u_meta_form_view_sys_id : String,
  u_metax_form_view_pnl_sys_id : String,
};

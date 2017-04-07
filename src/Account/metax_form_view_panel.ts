/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metax_Form_View_Panel extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_no_of_vertical_columns : Number,
  u_order : Number,
  u_panel_title : String,
  u_panel_width : Number,
  u_url : String,
  u_xtype : String,
  u_meta_form_view_sys_id : String,
};

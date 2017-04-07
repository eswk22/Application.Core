/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Custom_Table_Parent_Example extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_cb_boolean : String,
  u_cbox_select : String,
  u_checkbox : String,
  u_date : Date,
  u_datetime : Date,
  u_journal_string : String,
  u_list : String,
  u_rb_choice : String,
  u_ta_string : String,
  u_tags : String,
  u_tf_decimal : Number,
  u_tf_link : String,
  u_tf_number : Number,
  u_tf_sequence : String,
  u_tf_string : String,
  u_timestamp : Number,
  u_tf_reference : String,
};

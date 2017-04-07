/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Rb_General extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_generated : Boolean,
  u_name : String,
  u_namespace : String,
  u_new_worksheet : Boolean,
  u_no_of_column : Number,
  u_summary : String,
  wiki_id : String,
};

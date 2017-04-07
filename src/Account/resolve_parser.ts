/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Parser extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_configuration : String,
  u_description : String,
  u_heading : String,
  u_lineseparator : String,
  u_method : String,
  u_name : String,
  u_script : String,
  u_separator : String,
  u_type : String,
};

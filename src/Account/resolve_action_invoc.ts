/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Action_Invoc extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active : Boolean,
  u_args : String,
  u_command : String,
  u_description : String,
  u_matchregex : String,
  u_matchvalue : String,
  u_order : Number,
  u_task : String,
  u_timeout : Number,
  u_type : String,
  u_assess : String,
  u_parser : String,
  u_preprocess : String,
};

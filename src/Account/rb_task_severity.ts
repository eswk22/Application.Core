/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Rb_Task_Severity extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_comparison : String,
  u_criteria : String,
  u_order : Number,
  u_severity : String,
  u_severity_id : String,
  u_source : String,
  u_source_name : String,
  u_variable : String,
  u_variable_source : String,
  u_task_id : String,
};

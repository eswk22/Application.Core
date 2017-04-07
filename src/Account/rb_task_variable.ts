/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Rb_Task_Variable extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_color : String,
  u_flow : Boolean,
  u_list : Boolean,
  u_name : String,
  u_wsdata : Boolean,
  u_task_id : String,
};

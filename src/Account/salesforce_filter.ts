/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Salesforce_Filter extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active : Boolean,
  u_event_eventid : String,
  u_interval : Number,
  u_name : String,
  u_order : Number,
  u_queue : String,
  u_runbook : String,
  u_script : String,
  u_object : String,
  u_query : String,
};

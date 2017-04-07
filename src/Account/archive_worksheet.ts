/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Archive_Worksheet extends mongoose.Document {
  u_alert_id : String,
  u_condition : String,
  u_correlation_id : String,
  u_debug : String,
  u_description : String,
  u_number : String,
  u_reference : String,
  u_severity : String,
  u_summary : String,
  u_work_notes : String,
  u_worksheet : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_assigned_to : String,
  sys_is_deleted : String,
  sys_org : String,
  u_assigned_to_name : String,
};

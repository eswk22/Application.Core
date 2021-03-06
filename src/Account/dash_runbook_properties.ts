/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Dash_Runbook_Properties extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_runbook : String,
  u_manual_duration : Number,
  u_hourly_cost : Number,
  u_display_name : String,
};

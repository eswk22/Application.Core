/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Rr_Rule extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active : Boolean,
  u_automation : String,
  u_automation_id : String,
  u_event_id : String,
  u_module : String,
  u_new_worksheet : Boolean,
  u_rid : String,
  u_runbook : String,
  u_runbook_id : String,
  u_wiki : String,
  u_wiki_id : String,
  u_schema_id : String,
};

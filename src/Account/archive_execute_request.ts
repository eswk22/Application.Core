/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Archive_Execute_Request extends mongoose.Document {
  u_duration : Number,
  u_event_id : String,
  u_execute_status : String,
  u_node_id : String,
  u_node_label : String,
  u_number : String,
  u_trigger : String,
  u_wiki : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_problem : String,
  u_process : String,
  u_task : String,
  sys_is_deleted : String,
  sys_org : String,
};

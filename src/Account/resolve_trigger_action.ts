/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Trigger_Action extends mongoose.Document {
  u_active : Boolean,
  u_description : String,
  u_name : String,
  u_namespace : String,
  u_trigger_parser : String,
  u_type : String,
  u_wiki_process : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Execute_Log extends mongoose.Document {
  u_actiontask : String,
  u_address : String,
  u_target : String,
  u_trigger : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
};

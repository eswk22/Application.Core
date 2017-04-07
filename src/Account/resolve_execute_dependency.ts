/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Execute_Dependency extends mongoose.Document {
  u_completion : Boolean,
  u_condition : String,
  u_execute : String,
  u_expression : String,
  u_merge : String,
  u_severity : String,
  u_type : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Event extends mongoose.Document {
  u_value : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_is_deleted : String,
  sys_org : String,
};

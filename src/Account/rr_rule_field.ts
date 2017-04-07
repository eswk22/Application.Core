/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Rr_Rule_Field extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_name : String,
  u_order : Number,
  u_value : String,
  u_rule : String,
};

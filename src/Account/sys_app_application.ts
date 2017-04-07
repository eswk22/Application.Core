/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Sys_App_Application extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  active : Boolean,
  color : String,
  hint : String,
  name : String,
  resolve_order : Number,
  textColor : String,
  title : String,
  view_name : String,
};

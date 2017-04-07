/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Archive_Execute_Result_Lob extends mongoose.Document {
  u_command : String,
  u_raw : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_is_deleted : String,
  sys_org : String,
};

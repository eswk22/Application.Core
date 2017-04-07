/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Archive_Action_Result_Lob extends mongoose.Document {
  u_detail : String,
  u_summary : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_is_deleted : String,
  sys_org : String,
  u_raw : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface SBU_PHRASES extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_id : Number,
  u_phrase : String,
  u_active : String,
};

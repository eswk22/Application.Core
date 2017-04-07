/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface SBU_USER_INFO extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_username : String,
  u_password : String,
  u_active : String,
};

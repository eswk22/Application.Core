/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface User_Preferences extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_pref_desc : String,
  u_pref_group : String,
  u_pref_key : String,
  u_pref_value : String,
  u_user_sys_id : String,
};

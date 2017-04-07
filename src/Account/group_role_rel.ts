/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Group_Role_Rel extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_group_sys_id : String,
  u_role_sys_id : String,
};

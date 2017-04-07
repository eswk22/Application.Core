/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Social_User_Notification extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_notification : String,
  u_notf_rule : String,
  u_notf_value : String,
  u_node_sys_id : String,
  u_user_sys_id : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Telnet_Pool extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_maxconn : Number,
  u_queue : String,
  u_subnetmask : String,
  u_timeout : Number,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Groups extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_description : String,
  u_has_external_link : String,
  u_is_link_to_team : String,
  u_name : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Ericsson_Firmware extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_prc_unit_type : String,
  u_prc_unit_id : String,
  u_loc_type : String,
  u_id : String,
  u_type : String,
  u_name : String,
  u_version : String,
  u_rel_ver : String,
  u_file_size : String,
  u_chksum : String,
  u_build_time : String,
};

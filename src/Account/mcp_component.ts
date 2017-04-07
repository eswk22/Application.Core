/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Mcp_Component extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_comp_name : String,
  u_comp_guid : String,
  u_instance_name : String,
  u_status_updated : Date,
  u_server_ip : String,
  u_server_name : String,
  u_status : String,
  u_worksheet : String,
  u_worksheet_id : String,
};

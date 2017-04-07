/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Mcp_Server extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_active : Boolean,
  u_act_blueprint : String,
  u_blueprint : String,
  u_build : String,
  u_comp_status : String,
  u_description : String,
  u_name : String,
  u_private_key_loc : String,
  u_remote_pwd : String,
  u_remote_user : String,
  u_resolve_home : String,
  u_server_ip : String,
  u_ssh_port : Number,
  u_status : String,
  u_tag : String,
  u_terminal_prompt : String,
  u_version : String,
  u_worksheet : String,
  u_worksheet_id : String,
};

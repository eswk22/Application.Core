import {Mcp_Server} from "./../Mcp_Server";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_is_deleted:
  {
      type: String
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_org:
  {
      type: String
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_active:
  {
      type: Boolean
  },
  u_act_blueprint:
  {
      type: String
  },
  u_blueprint:
  {
      type: String
  },
  u_build:
  {
      type: String
  },
  u_comp_status:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_private_key_loc:
  {
      type: String
  },
  u_remote_pwd:
  {
      type: String
  },
  u_remote_user:
  {
      type: String
  },
  u_resolve_home:
  {
      type: String
  },
  u_server_ip:
  {
      type: String
  },
  u_ssh_port:
  {
      type: Number
  },
  u_status:
  {
      type: String
  },
  u_tag:
  {
      type: String
  },
  u_terminal_prompt:
  {
      type: String
  },
  u_version:
  {
      type: String
  },
  u_worksheet:
  {
      type: String
  },
  u_worksheet_id:
  {
      type: String
  },
});

export let Mcp_ServerSchema = mongooseConnection.model<Mcp_Server>('mcp_server', schema);

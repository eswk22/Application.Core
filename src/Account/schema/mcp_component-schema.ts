import {Mcp_Component} from "./../Mcp_Component";
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
  u_comp_name:
  {
      type: String
  },
  u_comp_guid:
  {
      type: String
  },
  u_instance_name:
  {
      type: String
  },
  u_status_updated:
  {
      type: Date
  },
  u_server_ip:
  {
      type: String
  },
  u_server_name:
  {
      type: String
  },
  u_status:
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

export let Mcp_ComponentSchema = mongooseConnection.model<Mcp_Component>('mcp_component', schema);

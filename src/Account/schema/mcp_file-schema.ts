import {Mcp_File} from "./../Mcp_File";
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
  u_date:
  {
      type: Date
  },
  u_name:
  {
      type: String
  },
  u_server:
  {
      type: String
  },
  u_server_name:
  {
      type: String
  },
  u_size:
  {
      type: Number
  },
  u_type:
  {
      type: String
  },
  u_version:
  {
      type: String
  },
});

export let Mcp_FileSchema = mongooseConnection.model<Mcp_File>('mcp_file', schema);

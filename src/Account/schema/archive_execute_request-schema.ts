import {Archive_Execute_Request} from "./../Archive_Execute_Request";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_duration:
  {
      type: Number
  },
  u_event_id:
  {
      type: String
  },
  u_execute_status:
  {
      type: String
  },
  u_node_id:
  {
      type: String
  },
  u_node_label:
  {
      type: String
  },
  u_number:
  {
      type: String
  },
  u_trigger:
  {
      type: String
  },
  u_wiki:
  {
      type: String
  },
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_problem:
  {
      type: String
  },
  u_process:
  {
      type: String
  },
  u_task:
  {
      type: String
  },
  sys_is_deleted:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
});

export let Archive_Execute_RequestSchema = mongooseConnection.model<Archive_Execute_Request>('archive_execute_request', schema);

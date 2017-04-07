import {Archive_Action_Result} from "./../Archive_Action_Result";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_address:
  {
      type: String
  },
  u_completion:
  {
      type: String
  },
  u_condition:
  {
      type: String
  },
  u_duration:
  {
      type: Number
  },
  u_esbaddr:
  {
      type: String
  },
  u_severity:
  {
      type: String
  },
  u_timestamp:
  {
      type: Number
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
  u_action_result_lob:
  {
      type: String
  },
  u_execute_request:
  {
      type: String
  },
  u_execute_result:
  {
      type: String
  },
  u_problem:
  {
      type: String
  },
  u_process:
  {
      type: String
  },
  u_target:
  {
      type: String
  },
  u_actiontask:
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
  u_hidden:
  {
      type: Boolean
  },
  u_node_id:
  {
      type: String
  },
  u_target_guid:
  {
      type: String
  },
  u_wiki:
  {
      type: String
  },
});

export let Archive_Action_ResultSchema = mongooseConnection.model<Archive_Action_Result>('archive_action_result', schema);

import {Resolve_Action_Task_Mock_Data} from "./../Resolve_Action_Task_Mock_Data";
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
  u_data:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_flows:
  {
      type: String
  },
  u_inputs:
  {
      type: String
  },
  u_is_active:
  {
      type: Boolean
  },
  u_name:
  {
      type: String
  },
  u_params:
  {
      type: String
  },
  u_invocation:
  {
      type: String
  },
});

export let Resolve_Action_Task_Mock_DataSchema = mongooseConnection.model<Resolve_Action_Task_Mock_Data>('resolve_action_task_mock_data', schema);

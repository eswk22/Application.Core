import {Resolve_Action_Task} from "./../Resolve_Action_Task";
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
  u_description:
  {
      type: String
  },
  u_fullname:
  {
      type: String
  },
  u_is_default_role:
  {
      type: String
  },
  u_is_deleted:
  {
      type: String
  },
  u_is_hidden:
  {
      type: String
  },
  u_logresult:
  {
      type: Boolean
  },
  u_menu_path:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_namespace:
  {
      type: String
  },
  u_roles:
  {
      type: String
  },
  u_summary:
  {
      type: String
  },
  u_types:
  {
      type: String
  },
  u_accessrights:
  {
      type: String
  },
  u_assigned_to:
  {
      type: String
  },
  u_preprocess:
  {
      type: String
  },
  u_invocation:
  {
      type: String
  },
});

export let Resolve_Action_TaskSchema = mongooseConnection.model<Resolve_Action_Task>('resolve_action_task', schema);

import {Resolve_Action_Invoc} from "./../Resolve_Action_Invoc";
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
  u_args:
  {
      type: String
  },
  u_command:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_matchregex:
  {
      type: String
  },
  u_matchvalue:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_task:
  {
      type: String
  },
  u_timeout:
  {
      type: Number
  },
  u_type:
  {
      type: String
  },
  u_assess:
  {
      type: String
  },
  u_parser:
  {
      type: String
  },
  u_preprocess:
  {
      type: String
  },
});

export let Resolve_Action_InvocSchema = mongooseConnection.model<Resolve_Action_Invoc>('resolve_action_invoc', schema);

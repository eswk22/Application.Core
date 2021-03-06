import {Resolve_Action_Parameter} from "./../Resolve_Action_Parameter";
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
  u_cns_name:
  {
      type: String
  },
  u_default_value:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_encrypt:
  {
      type: Boolean
  },
  u_include:
  {
      type: Boolean
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_prefix:
  {
      type: String
  },
  u_prefix_separator:
  {
      type: String
  },
  u_required:
  {
      type: Boolean
  },
  u_type:
  {
      type: String
  },
  u_invocation:
  {
      type: String
  },
});

export let Resolve_Action_ParameterSchema = mongooseConnection.model<Resolve_Action_Parameter>('resolve_action_parameter', schema);

import {Resolve_Trigger_Action} from "./../Resolve_Trigger_Action";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_active:
  {
      type: Boolean
  },
  u_description:
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
  u_trigger_parser:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_wiki_process:
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
});

export let Resolve_Trigger_ActionSchema = mongooseConnection.model<Resolve_Trigger_Action>('resolve_trigger_action', schema);

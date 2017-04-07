import {Resolve_Impex_Log} from "./../Resolve_Impex_Log";
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
  u_log_history:
  {
      type: String
  },
  u_log_summary:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
  u_impex_module:
  {
      type: String
  },
});

export let Resolve_Impex_LogSchema = mongooseConnection.model<Resolve_Impex_Log>('resolve_impex_log', schema);

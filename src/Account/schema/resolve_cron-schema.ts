import {Resolve_Cron} from "./../Resolve_Cron";
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
  u_end_time:
  {
      type: Date
  },
  u_expression:
  {
      type: String
  },
  u_module:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_params:
  {
      type: String
  },
  u_runbook:
  {
      type: String
  },
  u_start_time:
  {
      type: Date
  },
});

export let Resolve_CronSchema = mongooseConnection.model<Resolve_Cron>('resolve_cron', schema);

import {Database_Filter} from "./../Database_Filter";
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
  u_event_eventid:
  {
      type: String
  },
  u_interval:
  {
      type: Number
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_queue:
  {
      type: String
  },
  u_runbook:
  {
      type: String
  },
  u_script:
  {
      type: String
  },
  u_lastvalue:
  {
      type: String
  },
  u_lastvaluecolumn:
  {
      type: String
  },
  u_lastvaluequote:
  {
      type: Boolean
  },
  u_pool:
  {
      type: String
  },
  u_prefix:
  {
      type: String
  },
  u_sql:
  {
      type: String
  },
  u_update_sql:
  {
      type: String
  },
});

export let Database_FilterSchema = mongooseConnection.model<Database_Filter>('database_filter', schema);

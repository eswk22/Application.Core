import {Resolve_Execute_Log} from "./../Resolve_Execute_Log";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_actiontask:
  {
      type: String
  },
  u_address:
  {
      type: String
  },
  u_target:
  {
      type: String
  },
  u_trigger:
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

export let Resolve_Execute_LogSchema = mongooseConnection.model<Resolve_Execute_Log>('resolve_execute_log', schema);

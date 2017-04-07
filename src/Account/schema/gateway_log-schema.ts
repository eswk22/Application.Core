import {Gateway_Log} from "./../Gateway_Log";
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
  u_component:
  {
      type: String
  },
  u_gateway:
  {
      type: String
  },
  u_message:
  {
      type: String
  },
  u_severity:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
});

export let Gateway_LogSchema = mongooseConnection.model<Gateway_Log>('gateway_log', schema);

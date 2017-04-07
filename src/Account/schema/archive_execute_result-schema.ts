import {Archive_Execute_Result} from "./../Archive_Execute_Result";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_address:
  {
      type: String
  },
  u_duration:
  {
      type: Number
  },
  u_returncode:
  {
      type: Number
  },
  u_target:
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
  u_request:
  {
      type: String
  },
  u_execute_result_lob:
  {
      type: String
  },
  sys_is_deleted:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
});

export let Archive_Execute_ResultSchema = mongooseConnection.model<Archive_Execute_Result>('archive_execute_result', schema);

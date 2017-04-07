import {Resolve_Session} from "./../Resolve_Session";
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
  u_active_type:
  {
      type: String
  },
  u_change_request:
  {
      type: String
  },
  u_is_archive:
  {
      type: String
  },
  u_problem_sys_id:
  {
      type: String
  },
  u_archive_problem:
  {
      type: String
  },
});

export let Resolve_SessionSchema = mongooseConnection.model<Resolve_Session>('resolve_session', schema);

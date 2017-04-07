import {Resolve_Assess} from "./../Resolve_Assess";
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
  u_description:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_only_completed:
  {
      type: Boolean
  },
  u_parse:
  {
      type: Boolean
  },
  u_script:
  {
      type: String
  },
});

export let Resolve_AssessSchema = mongooseConnection.model<Resolve_Assess>('resolve_assess', schema);

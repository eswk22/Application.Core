import {Resolve_Execute_Dependency} from "./../Resolve_Execute_Dependency";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_completion:
  {
      type: Boolean
  },
  u_condition:
  {
      type: String
  },
  u_execute:
  {
      type: String
  },
  u_expression:
  {
      type: String
  },
  u_merge:
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

export let Resolve_Execute_DependencySchema = mongooseConnection.model<Resolve_Execute_Dependency>('resolve_execute_dependency', schema);

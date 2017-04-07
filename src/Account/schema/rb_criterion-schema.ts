import {Rb_Criterion} from "./../Rb_Criterion";
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
  u_comparison:
  {
      type: String
  },
  u_parent_type:
  {
      type: String
  },
  u_source:
  {
      type: String
  },
  u_source_name:
  {
      type: String
  },
  u_variable:
  {
      type: String
  },
  u_variable_source:
  {
      type: String
  },
  u_parent_id:
  {
      type: String
  },
});

export let Rb_CriterionSchema = mongooseConnection.model<Rb_Criterion>('rb_criterion', schema);

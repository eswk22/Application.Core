import {Resolve_Business_Rule} from "./../Resolve_Business_Rule";
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
  u_async:
  {
      type: Boolean
  },
  u_before:
  {
      type: Boolean
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_script:
  {
      type: String
  },
  u_table:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
});

export let Resolve_Business_RuleSchema = mongooseConnection.model<Resolve_Business_Rule>('resolve_business_rule', schema);

import {Rb_Condition} from "./../Rb_Condition";
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
  u_expression:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_parent_id:
  {
      type: String
  },
  u_parent_type:
  {
      type: String
  },
});

export let Rb_ConditionSchema = mongooseConnection.model<Rb_Condition>('rb_condition', schema);

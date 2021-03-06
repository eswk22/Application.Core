import {Rb_Loop} from "./../Rb_Loop";
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
  u_count:
  {
      type: Number
  },
  u_description:
  {
      type: String
  },
  u_item_delimiter:
  {
      type: String
  },
  u_item_src:
  {
      type: String
  },
  u_item_src_name:
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

export let Rb_LoopSchema = mongooseConnection.model<Rb_Loop>('rb_loop', schema);

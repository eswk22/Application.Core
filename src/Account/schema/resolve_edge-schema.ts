import {Resolve_Edge} from "./../Resolve_Edge";
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
  u_order:
  {
      type: Number
  },
  u_rel_type:
  {
      type: String
  },
  u_dest_sys_id:
  {
      type: String
  },
  u_src_sys_id:
  {
      type: String
  },
});

export let Resolve_EdgeSchema = mongooseConnection.model<Resolve_Edge>('resolve_edge', schema);

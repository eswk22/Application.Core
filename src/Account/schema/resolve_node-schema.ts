import {Resolve_Node} from "./../Resolve_Node";
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
  u_comp_name:
  {
      type: String
  },
  u_comp_sys_id:
  {
      type: String
  },
  u_edit_roles:
  {
      type: String
  },
  u_is_locked:
  {
      type: String
  },
  u_is_mark_deleted:
  {
      type: String
  },
  u_is_pinned:
  {
      type: String
  },
  u_post_roles:
  {
      type: String
  },
  u_read_roles:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
});

export let Resolve_NodeSchema = mongooseConnection.model<Resolve_Node>('resolve_node', schema);

import {Meta_Filter} from "./../Meta_Filter";
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
  u_is_global:
  {
      type: Boolean
  },
  u_is_role:
  {
      type: Boolean
  },
  u_is_self:
  {
      type: Boolean
  },
  u_name:
  {
      type: String
  },
  u_userid:
  {
      type: String
  },
  u_value:
  {
      type: String
  },
  u_meta_access_rights_sys_id:
  {
      type: String
  },
  u_meta_table_sys_id:
  {
      type: String
  },
});

export let Meta_FilterSchema = mongooseConnection.model<Meta_Filter>('meta_filter', schema);

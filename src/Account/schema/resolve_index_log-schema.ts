import {Resolve_Index_Log} from "./../Resolve_Index_Log";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_component_avg_rating:
  {
      type: Number
  },
  u_component_description:
  {
      type: String
  },
  u_component_sys_id:
  {
      type: String
  },
  u_component_name:
  {
      type: String
  },
  u_component_parent_sys_id:
  {
      type: String
  },
  u_component_parent_name:
  {
      type: String
  },
  u_component_parent_type:
  {
      type: String
  },
  u_component_rating_boost:
  {
      type: Number
  },
  u_component_title:
  {
      type: String
  },
  u_component_type:
  {
      type: String
  },
  u_component_updated_by:
  {
      type: String
  },
  u_component_updated_on:
  {
      type: Date
  },
  u_content_to_index:
  {
      type: String
  },
  UHasActiveModel:
  {
      type: Boolean
  },
  u_should_delete:
  {
      type: String
  },
  u_should_index:
  {
      type: String
  },
  u_tags:
  {
      type: String
  },
  u_view_count:
  {
      type: Number
  },
  u_view_roles:
  {
      type: String
  },
  summary:
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

export let Resolve_Index_LogSchema = mongooseConnection.model<Resolve_Index_Log>('resolve_index_log', schema);

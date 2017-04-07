import {Sys_App_Module} from "./../Sys_App_Module";
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
  active:
  {
      type: Boolean
  },
  filter:
  {
      type: String
  },
  resolve_group:
  {
      type: String
  },
  hint:
  {
      type: String
  },
  image:
  {
      type: String
  },
  link_type:
  {
      type: String
  },
  name:
  {
      type: String
  },
  resolve_order:
  {
      type: Number
  },
  query:
  {
      type: String
  },
  title:
  {
      type: String
  },
  view_name:
  {
      type: String
  },
  window_name:
  {
      type: String
  },
  application:
  {
      type: String
  },
});

export let Sys_App_ModuleSchema = mongooseConnection.model<Sys_App_Module>('sys_app_module', schema);

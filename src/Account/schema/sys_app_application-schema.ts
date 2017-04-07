import {Sys_App_Application} from "./../Sys_App_Application";
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
  color:
  {
      type: String
  },
  hint:
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
  textColor:
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
});

export let Sys_App_ApplicationSchema = mongooseConnection.model<Sys_App_Application>('sys_app_application', schema);

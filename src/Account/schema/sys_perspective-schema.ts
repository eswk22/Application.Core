import {Sys_Perspective} from "./../Sys_Perspective";
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
  application:
  {
      type: String
  },
  name:
  {
      type: String
  },
  sequence:
  {
      type: Number
  },
});

export let Sys_PerspectiveSchema = mongooseConnection.model<Sys_Perspective>('sys_perspective', schema);

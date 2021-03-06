import {Rb_Connection_Param} from "./../Rb_Connection_Param";
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
  u_data_type:
  {
      type: String
  },
  u_default_value:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_source:
  {
      type: String
  },
  u_source_name:
  {
      type: String
  },
  u_connection_id:
  {
      type: String
  },
});

export let Rb_Connection_ParamSchema = mongooseConnection.model<Rb_Connection_Param>('rb_connection_param', schema);

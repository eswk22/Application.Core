import {Dash_Task_Properties} from "./../Dash_Task_Properties";
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
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  sys_perm:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_manual_duration:
  {
      type: Number
  },
  u_hourly_cost:
  {
      type: Number
  },
});

export let Dash_Task_PropertiesSchema = mongooseConnection.model<Dash_Task_Properties>('dash_task_properties', schema);

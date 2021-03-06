import {Dash_Runbook_Properties} from "./../Dash_Runbook_Properties";
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
  u_runbook:
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
  u_display_name:
  {
      type: String
  },
});

export let Dash_Runbook_PropertiesSchema = mongooseConnection.model<Dash_Runbook_Properties>('dash_runbook_properties', schema);

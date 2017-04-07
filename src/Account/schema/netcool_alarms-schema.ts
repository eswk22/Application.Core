import {Netcool_Alarms} from "./../Netcool_Alarms";
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
  u_serial:
  {
      type: String
  },
  u_cascade_id:
  {
      type: String
  },
  u_first_occurance:
  {
      type: Date
  },
  u_last_occurence:
  {
      type: Date
  },
  u_clearedtime:
  {
      type: Date
  },
  u_cleared_time:
  {
      type: Date
  },
});

export let Netcool_AlarmsSchema = mongooseConnection.model<Netcool_Alarms>('netcool_alarms', schema);

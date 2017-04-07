import {Eric_Eventsupplementinfo} from "./../Eric_Eventsupplementinfo";
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
  u_evenid:
  {
      type: String
  },
  u_lastexecutedtime:
  {
      type: String
  },
  u_serverserial:
  {
      type: String
  },
  u_alarmname:
  {
      type: String
  },
  u_maxretrycount:
  {
      type: String
  },
  u_retrycount:
  {
      type: String
  },
  u_status:
  {
      type: String
  },
  u_supplementinfo:
  {
      type: String
  },
  u_nextruntime:
  {
      type: String
  },
});

export let Eric_EventsupplementinfoSchema = mongooseConnection.model<Eric_Eventsupplementinfo>('eric_eventsupplementinfo', schema);

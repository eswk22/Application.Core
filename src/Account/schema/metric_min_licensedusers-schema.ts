import {Metric_Min_Licensedusers} from "./../Metric_Min_Licensedusers";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  idx:
  {
      type: Number
  },
  id:
  {
      type: String
  },
  src:
  {
      type: String
  },
  ts:
  {
      type: Number
  },
  ts_datetime:
  {
      type: Date
  },
  tot_endusers:
  {
      type: Number
  },
  cnt_endusers:
  {
      type: Number
  },
  del_endusers:
  {
      type: Number
  },
  tot_adminusers:
  {
      type: Number
  },
  cnt_adminusers:
  {
      type: Number
  },
  del_adminusers:
  {
      type: Number
  },
});

export let Metric_Min_LicensedusersSchema = mongooseConnection.model<Metric_Min_Licensedusers>('metric_min_licensedusers', schema);

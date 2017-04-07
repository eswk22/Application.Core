import {Metric_Day_Cr} from "./../Metric_Day_Cr";
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
  tot_status:
  {
      type: Number
  },
  cnt_status:
  {
      type: Number
  },
  del_status:
  {
      type: Number
  },
});

export let Metric_Day_CrSchema = mongooseConnection.model<Metric_Day_Cr>('metric_day_cr', schema);

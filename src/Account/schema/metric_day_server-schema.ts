import {Metric_Day_Server} from "./../Metric_Day_Server";
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
  tot_load1:
  {
      type: Number
  },
  cnt_load1:
  {
      type: Number
  },
  del_load1:
  {
      type: Number
  },
  tot_load5:
  {
      type: Number
  },
  cnt_load5:
  {
      type: Number
  },
  del_load5:
  {
      type: Number
  },
  tot_load15:
  {
      type: Number
  },
  cnt_load15:
  {
      type: Number
  },
  del_load15:
  {
      type: Number
  },
});

export let Metric_Day_ServerSchema = mongooseConnection.model<Metric_Day_Server>('metric_day_server', schema);

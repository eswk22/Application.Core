/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Min_Transaction extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_transaction : Number,
  cnt_transaction : Number,
  del_transaction : Number,
  tot_latency : Number,
  cnt_latency : Number,
  del_latency : Number,
};

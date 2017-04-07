/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Hr_Server extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_load1 : Number,
  cnt_load1 : Number,
  del_load1 : Number,
  tot_load5 : Number,
  cnt_load5 : Number,
  del_load5 : Number,
  tot_load15 : Number,
  cnt_load15 : Number,
  del_load15 : Number,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Hr_Cr extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_status : Number,
  cnt_status : Number,
  del_status : Number,
};

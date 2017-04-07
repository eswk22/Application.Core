/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Day_Users extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_active : Number,
  cnt_active : Number,
  del_active : Number,
};

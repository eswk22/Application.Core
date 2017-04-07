/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Day_Licensedusers extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_endusers : Number,
  cnt_endusers : Number,
  del_endusers : Number,
  tot_adminusers : Number,
  cnt_adminusers : Number,
  del_adminusers : Number,
};

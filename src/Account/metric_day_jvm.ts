/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Day_Jvm extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_thread_count : Number,
  cnt_thread_count : Number,
  del_thread_count : Number,
  tot_mem_free : Number,
  cnt_mem_free : Number,
  del_mem_free : Number,
};

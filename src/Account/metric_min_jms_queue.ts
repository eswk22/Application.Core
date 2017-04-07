/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Min_Jms_Queue extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_msgs_count : Number,
  cnt_msgs_count : Number,
  del_msgs_count : Number,
};

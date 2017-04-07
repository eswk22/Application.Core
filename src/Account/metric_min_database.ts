/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Min_Database extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_free_space : Number,
  cnt_free_space : Number,
  del_free_space : Number,
  tot_size : Number,
  cnt_size : Number,
  del_size : Number,
  tot_percentage_used : Number,
  cnt_percentage_used : Number,
  del_percentage_used : Number,
  tot_response_time : Number,
  cnt_response_time : Number,
  del_response_time : Number,
  tot_query_count : Number,
  cnt_query_count : Number,
  del_query_count : Number,
  tot_percentage_wait : Number,
  cnt_percentage_wait : Number,
  del_percentage_wait : Number,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Tmetric_Day_Dt extends mongoose.Document {
  idx : Number,
  pathid : String,
  nodeid : String,
  seqid : Number,
  userid : String,
  ts : Number,
  ts_datetime : Date,
  node_cnt : Number,
  tot_cnt : Number,
  tot_time : Number,
  status : String,
  dtnamespace : String,
};

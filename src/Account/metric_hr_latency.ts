/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Metric_Hr_Latency extends mongoose.Document {
  idx : Number,
  id : String,
  src : String,
  ts : Number,
  ts_datetime : Date,
  tot_wiki : Number,
  cnt_wiki : Number,
  del_wiki : Number,
  tot_wikiresponsetime : Number,
  cnt_wikiresponsetime : Number,
  del_wikiresponsetime : Number,
  tot_social : Number,
  cnt_social : Number,
  del_social : Number,
  tot_socialresponsetime : Number,
  cnt_socialresponsetime : Number,
  del_socialresponsetime : Number,
};

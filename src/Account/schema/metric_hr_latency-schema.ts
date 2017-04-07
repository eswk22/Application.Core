import {Metric_Hr_Latency} from "./../Metric_Hr_Latency";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  idx:
  {
      type: Number
  },
  id:
  {
      type: String
  },
  src:
  {
      type: String
  },
  ts:
  {
      type: Number
  },
  ts_datetime:
  {
      type: Date
  },
  tot_wiki:
  {
      type: Number
  },
  cnt_wiki:
  {
      type: Number
  },
  del_wiki:
  {
      type: Number
  },
  tot_wikiresponsetime:
  {
      type: Number
  },
  cnt_wikiresponsetime:
  {
      type: Number
  },
  del_wikiresponsetime:
  {
      type: Number
  },
  tot_social:
  {
      type: Number
  },
  cnt_social:
  {
      type: Number
  },
  del_social:
  {
      type: Number
  },
  tot_socialresponsetime:
  {
      type: Number
  },
  cnt_socialresponsetime:
  {
      type: Number
  },
  del_socialresponsetime:
  {
      type: Number
  },
});

export let Metric_Hr_LatencySchema = mongooseConnection.model<Metric_Hr_Latency>('metric_hr_latency', schema);

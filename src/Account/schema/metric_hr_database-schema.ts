import {Metric_Hr_Database} from "./../Metric_Hr_Database";
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
  tot_free_space:
  {
      type: Number
  },
  cnt_free_space:
  {
      type: Number
  },
  del_free_space:
  {
      type: Number
  },
  tot_size:
  {
      type: Number
  },
  cnt_size:
  {
      type: Number
  },
  del_size:
  {
      type: Number
  },
  tot_percentage_used:
  {
      type: Number
  },
  cnt_percentage_used:
  {
      type: Number
  },
  del_percentage_used:
  {
      type: Number
  },
  tot_response_time:
  {
      type: Number
  },
  cnt_response_time:
  {
      type: Number
  },
  del_response_time:
  {
      type: Number
  },
  tot_query_count:
  {
      type: Number
  },
  cnt_query_count:
  {
      type: Number
  },
  del_query_count:
  {
      type: Number
  },
  tot_percentage_wait:
  {
      type: Number
  },
  cnt_percentage_wait:
  {
      type: Number
  },
  del_percentage_wait:
  {
      type: Number
  },
});

export let Metric_Hr_DatabaseSchema = mongooseConnection.model<Metric_Hr_Database>('metric_hr_database', schema);

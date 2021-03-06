import {Metric_Hr_Jvm} from "./../Metric_Hr_Jvm";
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
  tot_thread_count:
  {
      type: Number
  },
  cnt_thread_count:
  {
      type: Number
  },
  del_thread_count:
  {
      type: Number
  },
  tot_mem_free:
  {
      type: Number
  },
  cnt_mem_free:
  {
      type: Number
  },
  del_mem_free:
  {
      type: Number
  },
});

export let Metric_Hr_JvmSchema = mongooseConnection.model<Metric_Hr_Jvm>('metric_hr_jvm', schema);

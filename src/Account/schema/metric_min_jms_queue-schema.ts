import {Metric_Min_Jms_Queue} from "./../Metric_Min_Jms_Queue";
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
  tot_msgs_count:
  {
      type: Number
  },
  cnt_msgs_count:
  {
      type: Number
  },
  del_msgs_count:
  {
      type: Number
  },
});

export let Metric_Min_Jms_QueueSchema = mongooseConnection.model<Metric_Min_Jms_Queue>('metric_min_jms_queue', schema);

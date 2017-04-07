import {Metric_Hr_Jms_Queue} from "./../Metric_Hr_Jms_Queue";
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

export let Metric_Hr_Jms_QueueSchema = mongooseConnection.model<Metric_Hr_Jms_Queue>('metric_hr_jms_queue', schema);

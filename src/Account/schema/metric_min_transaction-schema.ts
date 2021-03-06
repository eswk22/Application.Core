import {Metric_Min_Transaction} from "./../Metric_Min_Transaction";
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
  tot_transaction:
  {
      type: Number
  },
  cnt_transaction:
  {
      type: Number
  },
  del_transaction:
  {
      type: Number
  },
  tot_latency:
  {
      type: Number
  },
  cnt_latency:
  {
      type: Number
  },
  del_latency:
  {
      type: Number
  },
});

export let Metric_Min_TransactionSchema = mongooseConnection.model<Metric_Min_Transaction>('metric_min_transaction', schema);

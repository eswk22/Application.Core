import {Metric_Hr_Users} from "./../Metric_Hr_Users";
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
  tot_active:
  {
      type: Number
  },
  cnt_active:
  {
      type: Number
  },
  del_active:
  {
      type: Number
  },
});

export let Metric_Hr_UsersSchema = mongooseConnection.model<Metric_Hr_Users>('metric_hr_users', schema);

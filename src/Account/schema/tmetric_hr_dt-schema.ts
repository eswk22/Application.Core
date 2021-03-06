import {Tmetric_Hr_Dt} from "./../Tmetric_Hr_Dt";
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
  pathid:
  {
      type: String
  },
  nodeid:
  {
      type: String
  },
  seqid:
  {
      type: Number
  },
  userid:
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
  node_cnt:
  {
      type: Number
  },
  tot_cnt:
  {
      type: Number
  },
  tot_time:
  {
      type: Number
  },
  status:
  {
      type: String
  },
  dtnamespace:
  {
      type: String
  },
});

export let Tmetric_Hr_DtSchema = mongooseConnection.model<Tmetric_Hr_Dt>('tmetric_hr_dt', schema);

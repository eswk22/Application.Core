import {Metric_Threshold} from "./../Metric_Threshold";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_is_deleted:
  {
      type: String
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_org:
  {
      type: String
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_status:
  {
      type: String
  },
  u_componenttype:
  {
      type: String
  },
  u_group:
  {
      type: String
  },
  u_guid:
  {
      type: String
  },
  u_high:
  {
      type: String
  },
  u_ipaddress:
  {
      type: String
  },
  u_low:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_type:
  {
      type: String
  },
});

export let Metric_ThresholdSchema = mongooseConnection.model<Metric_Threshold>('metric_threshold', schema);

import {Metric_Min_Runbook} from "./../Metric_Min_Runbook";
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
  tot_aborted:
  {
      type: Number
  },
  cnt_aborted:
  {
      type: Number
  },
  del_aborted:
  {
      type: Number
  },
  tot_completed:
  {
      type: Number
  },
  cnt_completed:
  {
      type: Number
  },
  del_completed:
  {
      type: Number
  },
  tot_gcondition:
  {
      type: Number
  },
  cnt_gcondition:
  {
      type: Number
  },
  del_gcondition:
  {
      type: Number
  },
  tot_bcondition:
  {
      type: Number
  },
  cnt_bcondition:
  {
      type: Number
  },
  del_bcondition:
  {
      type: Number
  },
  tot_ucondition:
  {
      type: Number
  },
  cnt_ucondition:
  {
      type: Number
  },
  del_ucondition:
  {
      type: Number
  },
  tot_gseverity:
  {
      type: Number
  },
  cnt_gseverity:
  {
      type: Number
  },
  del_gseverity:
  {
      type: Number
  },
  tot_cseverity:
  {
      type: Number
  },
  cnt_cseverity:
  {
      type: Number
  },
  del_cseverity:
  {
      type: Number
  },
  tot_wseverity:
  {
      type: Number
  },
  cnt_wseverity:
  {
      type: Number
  },
  del_wseverity:
  {
      type: Number
  },
  tot_sseverity:
  {
      type: Number
  },
  cnt_sseverity:
  {
      type: Number
  },
  del_sseverity:
  {
      type: Number
  },
  tot_useverity:
  {
      type: Number
  },
  cnt_useverity:
  {
      type: Number
  },
  del_useverity:
  {
      type: Number
  },
  tot_duration:
  {
      type: Number
  },
  cnt_duration:
  {
      type: Number
  },
  del_duration:
  {
      type: Number
  },
});

export let Metric_Min_RunbookSchema = mongooseConnection.model<Metric_Min_Runbook>('metric_min_runbook', schema);

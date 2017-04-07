import {Archive_Worksheet} from "./../Archive_Worksheet";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_alert_id:
  {
      type: String
  },
  u_condition:
  {
      type: String
  },
  u_correlation_id:
  {
      type: String
  },
  u_debug:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_number:
  {
      type: String
  },
  u_reference:
  {
      type: String
  },
  u_severity:
  {
      type: String
  },
  u_summary:
  {
      type: String
  },
  u_work_notes:
  {
      type: String
  },
  u_worksheet:
  {
      type: String
  },
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  u_assigned_to:
  {
      type: String
  },
  sys_is_deleted:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
  u_assigned_to_name:
  {
      type: String
  },
});

export let Archive_WorksheetSchema = mongooseConnection.model<Archive_Worksheet>('archive_worksheet', schema);

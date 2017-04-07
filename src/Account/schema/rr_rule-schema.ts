import {Rr_Rule} from "./../Rr_Rule";
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
  u_active:
  {
      type: Boolean
  },
  u_automation:
  {
      type: String
  },
  u_automation_id:
  {
      type: String
  },
  u_event_id:
  {
      type: String
  },
  u_module:
  {
      type: String
  },
  u_new_worksheet:
  {
      type: Boolean
  },
  u_rid:
  {
      type: String
  },
  u_runbook:
  {
      type: String
  },
  u_runbook_id:
  {
      type: String
  },
  u_wiki:
  {
      type: String
  },
  u_wiki_id:
  {
      type: String
  },
  u_schema_id:
  {
      type: String
  },
});

export let Rr_RuleSchema = mongooseConnection.model<Rr_Rule>('rr_rule', schema);

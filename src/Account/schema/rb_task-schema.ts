import {Rb_Task} from "./../Rb_Task";
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
  assessor_auto_gen:
  {
      type: Boolean
  },
  u_assessor_script:
  {
      type: String
  },
  u_command:
  {
      type: String
  },
  u_continuation:
  {
      type: String
  },
  u_default_assess:
  {
      type: String
  },
  u_default_severity:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_detail:
  {
      type: String
  },
  encoded_command:
  {
      type: String
  },
  u_expect_timeout:
  {
      type: Number
  },
  u_general_id:
  {
      type: String
  },
  u_inputfile:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_order:
  {
      type: Number
  },
  u_parent_id:
  {
      type: String
  },
  u_parent_type:
  {
      type: String
  },
  parser_auto_gen:
  {
      type: Boolean
  },
  u_parser_config:
  {
      type: String
  },
  u_parser_script:
  {
      type: String
  },
  u_parser_type:
  {
      type: String
  },
  u_prompt_source:
  {
      type: String
  },
  u_prompt_source_name:
  {
      type: String
  },
  u_queue_name:
  {
      type: String
  },
  u_queue_name_src:
  {
      type: String
  },
  u_ref_runbook_params:
  {
      type: String
  },
  u_repeat:
  {
      type: Boolean
  },
  u_sample:
  {
      type: String
  },
  u_summary:
  {
      type: String
  },
  u_timeout:
  {
      type: Number
  },
  u_ref_runbook_id:
  {
      type: String
  },
});

export let Rb_TaskSchema = mongooseConnection.model<Rb_Task>('rb_task', schema);

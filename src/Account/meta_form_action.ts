/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_Form_Action extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_actiontask_name : String,
  u_add_params : String,
  u_crud_action : String,
  u_operation : String,
  u_redirect_target : String,
  u_redirect_url : String,
  u_runbook_fullname : String,
  u_script_name : String,
  u_sequence : Number,
  u_meta_control_item_sys_id : String,
};

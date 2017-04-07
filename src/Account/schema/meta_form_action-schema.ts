import {Meta_Form_Action} from "./../Meta_Form_Action";
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
  u_actiontask_name:
  {
      type: String
  },
  u_add_params:
  {
      type: String
  },
  u_crud_action:
  {
      type: String
  },
  u_operation:
  {
      type: String
  },
  u_redirect_target:
  {
      type: String
  },
  u_redirect_url:
  {
      type: String
  },
  u_runbook_fullname:
  {
      type: String
  },
  u_script_name:
  {
      type: String
  },
  u_sequence:
  {
      type: Number
  },
  u_meta_control_item_sys_id:
  {
      type: String
  },
});

export let Meta_Form_ActionSchema = mongooseConnection.model<Meta_Form_Action>('meta_form_action', schema);

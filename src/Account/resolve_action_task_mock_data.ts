/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Action_Task_Mock_Data extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_data : String,
  u_description : String,
  u_flows : String,
  u_inputs : String,
  u_is_active : Boolean,
  u_name : String,
  u_params : String,
  u_invocation : String,
};

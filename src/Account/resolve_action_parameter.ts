/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Action_Parameter extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_cns_name : String,
  u_default_value : String,
  u_description : String,
  u_encrypt : Boolean,
  u_include : Boolean,
  u_name : String,
  u_order : Number,
  u_prefix : String,
  u_prefix_separator : String,
  u_required : Boolean,
  u_type : String,
  u_invocation : String,
};

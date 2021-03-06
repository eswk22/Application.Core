/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Impex_Module extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_description : String,
  u_dirty : Boolean,
  u_forward_to_document : String,
  u_location : String,
  u_name : String,
  u_script_name : String,
  u_version : String,
  u_zip_file_content : String,
  u_zip_file_name : String,
};

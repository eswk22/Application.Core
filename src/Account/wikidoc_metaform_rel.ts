/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Wikidoc_Metaform_Rel extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_description : String,
  u_metaform_name : String,
  u_is_default_role : String,
  u_name : String,
  u_type : String,
  u_wikidoc_fullname : String,
  u_accessrights : String,
  u_metaform_sys_id : String,
  u_wikidoc_sys_id : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Wikidoc_Statistics extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_content_checksum : String,
  u_edit_count : Number,
  u_exception_checksum : String,
  u_execute_count : Number,
  u_final_checksum : String,
  u_model_checksum : String,
  u_review_count : Number,
  u_useful_no_count : Number,
  u_useful_yes_count : Number,
  u_view_count : Number,
  u_wikidoc_sys_id : String,
};

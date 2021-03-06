/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Wikidoc extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_catalog_id : String,
  u_content : String,
  u_dt_abort_time : Number,
  u_decision_tree : String,
  u_display_mode : String,
  u_expire_on : Date,
  u_fullname : String,
  u_has_active_model : String,
  u_has_rsln_builder : String,
  u_is_active : String,
  u_is_default_role : String,
  u_is_deleted : String,
  u_is_hidden : String,
  u_is_locked : String,
  u_is_req_submitted : String,
  u_is_root : String,
  u_language : String,
  u_last_reviewed_by : String,
  u_last_reviewed_on : Date,
  u_locked_by : String,
  u_model_exception : String,
  u_model_final : String,
  u_model_process : String,
  u_name : String,
  u_namespace : String,
  u_rating_boost : Number,
  u_req_submitted_on : Date,
  u_rsln_builder_id : String,
  u_summary : String,
  u_tag : String,
  u_title : String,
  u_version : Number,
  u_wiki_parameters : String,
  u_wysiwyg : String,
  u_accessrights : String,
};

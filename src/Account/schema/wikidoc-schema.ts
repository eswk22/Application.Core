import {Wikidoc} from "./../Wikidoc";
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
  u_catalog_id:
  {
      type: String
  },
  u_content:
  {
      type: String
  },
  u_dt_abort_time:
  {
      type: Number
  },
  u_decision_tree:
  {
      type: String
  },
  u_display_mode:
  {
      type: String
  },
  u_expire_on:
  {
      type: Date
  },
  u_fullname:
  {
      type: String
  },
  u_has_active_model:
  {
      type: String
  },
  u_has_rsln_builder:
  {
      type: String
  },
  u_is_active:
  {
      type: String
  },
  u_is_default_role:
  {
      type: String
  },
  u_is_deleted:
  {
      type: String
  },
  u_is_hidden:
  {
      type: String
  },
  u_is_locked:
  {
      type: String
  },
  u_is_req_submitted:
  {
      type: String
  },
  u_is_root:
  {
      type: String
  },
  u_language:
  {
      type: String
  },
  u_last_reviewed_by:
  {
      type: String
  },
  u_last_reviewed_on:
  {
      type: Date
  },
  u_locked_by:
  {
      type: String
  },
  u_model_exception:
  {
      type: String
  },
  u_model_final:
  {
      type: String
  },
  u_model_process:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_namespace:
  {
      type: String
  },
  u_rating_boost:
  {
      type: Number
  },
  u_req_submitted_on:
  {
      type: Date
  },
  u_rsln_builder_id:
  {
      type: String
  },
  u_summary:
  {
      type: String
  },
  u_tag:
  {
      type: String
  },
  u_title:
  {
      type: String
  },
  u_version:
  {
      type: Number
  },
  u_wiki_parameters:
  {
      type: String
  },
  u_wysiwyg:
  {
      type: String
  },
  u_accessrights:
  {
      type: String
  },
});

export let WikidocSchema = mongooseConnection.model<Wikidoc>('wikidoc', schema);

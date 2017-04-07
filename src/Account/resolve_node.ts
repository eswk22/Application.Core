/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Resolve_Node extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_comp_name : String,
  u_comp_sys_id : String,
  u_edit_roles : String,
  u_is_locked : String,
  u_is_mark_deleted : String,
  u_is_pinned : String,
  u_post_roles : String,
  u_read_roles : String,
  u_type : String,
};

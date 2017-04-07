/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Rss_Subscription extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_rss_owner : String,
  u_module : String,
  u_active : Boolean,
  u_display_name : String,
  u_description : String,
  u_edit_roles : String,
  u_read_roles : String,
  u_url : String,
  u_feed_updated : Date,
  u_schedule : String,
  u_is_locked : Boolean,
  u_is_private : Boolean,
  u_post_roles : String,
};

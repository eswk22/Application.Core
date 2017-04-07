/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Social_Post_Attachment extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_content : String,
  u_displayname : String,
  u_filename : String,
  u_is_valid : String,
  u_location : String,
  u_post_id : String,
  u_size : Number,
  u_type : String,
};

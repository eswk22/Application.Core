/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Social_Forum extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_display_name : String,
  u_description : String,
  u_module : String,
  u_is_active : Boolean,
  u_owner : String,
  u_read_roles : String,
  u_edit_roles : String,
  u_email : String,
  u_im : String,
  u_email_display_name : String,
  u_im_display_name : String,
  u_send_to : String,
  u_receive_from : String,
  u_receive_pwd : String,
  u_im_pwd : String,
  u_is_private : Boolean,
  u_post_roles : String,
  u_is_locked : Boolean,
};

import {Social_Team} from "./../Social_Team";
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
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
  sys_perm:
  {
      type: String
  },
  sys_org:
  {
      type: String
  },
  u_display_name:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_module:
  {
      type: String
  },
  u_owner:
  {
      type: String
  },
  u_is_active:
  {
      type: Boolean
  },
  u_read_roles:
  {
      type: String
  },
  u_edit_roles:
  {
      type: String
  },
  u_im:
  {
      type: String
  },
  u_im_display_name:
  {
      type: String
  },
  u_email:
  {
      type: String
  },
  u_email_display_name:
  {
      type: String
  },
  u_send_to:
  {
      type: String
  },
  u_receive_from:
  {
      type: String
  },
  u_receive_pwd:
  {
      type: String
  },
  u_im_pwd:
  {
      type: String
  },
  u_is_private:
  {
      type: Boolean
  },
  u_post_roles:
  {
      type: String
  },
  u_is_locked:
  {
      type: Boolean
  },
});

export let Social_TeamSchema = mongooseConnection.model<Social_Team>('social_team', schema);

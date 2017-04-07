import {Social_User_Notification} from "./../Social_User_Notification";
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
  u_notification:
  {
      type: String
  },
  u_notf_rule:
  {
      type: String
  },
  u_notf_value:
  {
      type: String
  },
  u_node_sys_id:
  {
      type: String
  },
  u_user_sys_id:
  {
      type: String
  },
});

export let Social_User_NotificationSchema = mongooseConnection.model<Social_User_Notification>('social_user_notification', schema);

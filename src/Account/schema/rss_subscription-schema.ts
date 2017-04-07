import {Rss_Subscription} from "./../Rss_Subscription";
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
  u_rss_owner:
  {
      type: String
  },
  u_module:
  {
      type: String
  },
  u_active:
  {
      type: Boolean
  },
  u_display_name:
  {
      type: String
  },
  u_description:
  {
      type: String
  },
  u_edit_roles:
  {
      type: String
  },
  u_read_roles:
  {
      type: String
  },
  u_url:
  {
      type: String
  },
  u_feed_updated:
  {
      type: Date
  },
  u_schedule:
  {
      type: String
  },
  u_is_locked:
  {
      type: Boolean
  },
  u_is_private:
  {
      type: Boolean
  },
  u_post_roles:
  {
      type: String
  },
});

export let Rss_SubscriptionSchema = mongooseConnection.model<Rss_Subscription>('rss_subscription', schema);

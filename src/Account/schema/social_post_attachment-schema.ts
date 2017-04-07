import {Social_Post_Attachment} from "./../Social_Post_Attachment";
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
  u_content:
  {
      type: String
  },
  u_displayname:
  {
      type: String
  },
  u_filename:
  {
      type: String
  },
  u_is_valid:
  {
      type: String
  },
  u_location:
  {
      type: String
  },
  u_post_id:
  {
      type: String
  },
  u_size:
  {
      type: Number
  },
  u_type:
  {
      type: String
  },
});

export let Social_Post_AttachmentSchema = mongooseConnection.model<Social_Post_Attachment>('social_post_attachment', schema);

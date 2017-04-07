import {Post_Sync} from "./../Post_Sync";
import { DataAccess} from './../../dataAccess/DataAccess'; 
import * as mongooseRaw from 'mongoose';
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
export let Schema = mongoose.Schema;
export let ObjectId = mongoose.Schema.Types.ObjectId;
export let Mixed = mongoose.Schema.Types.Mixed;


let schema = new Schema({
  u_content:
  {
      type: String
  },
  u_endtime:
  {
      type: Number
  },
  u_postid:
  {
      type: String
  },
  u_starttme:
  {
      type: Number
  },
  sys_created_by:
  {
      type: String
  },
  sys_created_on:
  {
      type: Date
  },
  sys_mod_count:
  {
      type: Number
  },
  sys_updated_by:
  {
      type: String
  },
  sys_updated_on:
  {
      type: Date
  },
});

export let Post_SyncSchema = mongooseConnection.model<Post_Sync>('post_sync', schema);

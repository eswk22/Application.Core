import {Content_Request_Hist} from "./../Content_Request_Hist";
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
  u_status:
  {
      type: String
  },
  u_user:
  {
      type: String
  },
  u_comment:
  {
      type: String
  },
  u_content_request:
  {
      type: String
  },
});

export let Content_Request_HistSchema = mongooseConnection.model<Content_Request_Hist>('content_request_hist', schema);

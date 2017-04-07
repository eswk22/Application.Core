import {Content_Request_Fu} from "./../Content_Request_Fu";
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
  u_filename:
  {
      type: String
  },
  u_size:
  {
      type: Number
  },
  u_content:
  {
      type: String
  },
  u_content_request_sys_id:
  {
      type: String
  },
});

export let Content_Request_FuSchema = mongooseConnection.model<Content_Request_Fu>('content_request_fu', schema);

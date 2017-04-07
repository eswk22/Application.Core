import {Content_Request_Asset} from "./../Content_Request_Asset";
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
  u_type:
  {
      type: String
  },
  u_name:
  {
      type: String
  },
  u_destination:
  {
      type: String
  },
  u_status:
  {
      type: String
  },
  u_content_request:
  {
      type: String
  },
  u_scan:
  {
      type: Boolean
  },
});

export let Content_Request_AssetSchema = mongooseConnection.model<Content_Request_Asset>('content_request_asset', schema);

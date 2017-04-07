import {Content_Request} from "./../Content_Request";
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
  u_description:
  {
      type: String
  },
  u_number:
  {
      type: String
  },
  u_status:
  {
      type: String
  },
  u_request_type:
  {
      type: String
  },
  u_component_type:
  {
      type: String
  },
  u_summary:
  {
      type: String
  },
  u_detail:
  {
      type: String
  },
  u_priority:
  {
      type: String
  },
  u_requester:
  {
      type: String
  },
  u_assignee:
  {
      type: String
  },
  u_manager:
  {
      type: String
  },
  u_comments:
  {
      type: String
  },
  u_worksheet:
  {
      type: String
  },
});

export let Content_RequestSchema = mongooseConnection.model<Content_Request>('content_request', schema);

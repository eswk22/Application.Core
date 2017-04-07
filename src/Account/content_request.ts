/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Content_Request extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_description : String,
  u_number : String,
  u_status : String,
  u_request_type : String,
  u_component_type : String,
  u_summary : String,
  u_detail : String,
  u_priority : String,
  u_requester : String,
  u_assignee : String,
  u_manager : String,
  u_comments : String,
  u_worksheet : String,
};

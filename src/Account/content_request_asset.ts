/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Content_Request_Asset extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_type : String,
  u_name : String,
  u_destination : String,
  u_status : String,
  u_content_request : String,
  u_scan : Boolean,
};

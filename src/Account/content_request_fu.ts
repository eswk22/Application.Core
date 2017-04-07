/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Content_Request_Fu extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_filename : String,
  u_size : Number,
  u_content : String,
  u_content_request_sys_id : String,
};

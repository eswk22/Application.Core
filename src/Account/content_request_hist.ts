/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Content_Request_Hist extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_status : String,
  u_user : String,
  u_comment : String,
  u_content_request : String,
};

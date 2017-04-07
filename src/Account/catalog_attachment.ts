/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Catalog_Attachment extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_content : String,
  displayname : String,
  filename : String,
  location : String,
  u_size : Number,
  type : String,
};

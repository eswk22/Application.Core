/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Content_Wikidoc_Wikidoc_Rel extends mongoose.Document {
  u_wikidoc_fullname : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_content_wikidoc_sys_id : String,
};

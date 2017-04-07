/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Post_Sync extends mongoose.Document {
  u_content : String,
  u_endtime : Number,
  u_postid : String,
  u_starttme : Number,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
};

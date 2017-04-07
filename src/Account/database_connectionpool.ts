/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Database_Connectionpool extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_dbconnecturi : String,
  u_dbmaxconnect : Number,
  u_dbpassword : String,
  u_dbusername : String,
  u_driverclass : String,
  u_name : String,
  u_queue : String,
};

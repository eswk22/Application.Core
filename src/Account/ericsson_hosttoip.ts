/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Ericsson_Hosttoip extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_bsc_nme : String,
  u_bsc_ip : String,
  u_technology : String,
};

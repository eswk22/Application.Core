/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Ericsson_Emselementmap extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_updated_by : String,
  sys_updated_on : Date,
  sys_perm : String,
  sys_org : String,
  u_elementid : String,
  u_elementnodename : String,
  u_ipaddress : String,
  u_userid : String,
  u_password : String,
  u_emsid : String,
  u_extradata : String,
  u_elementtype : String,
};

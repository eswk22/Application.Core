/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Catalog_Edge extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_order : Number,
  u_catalog_sys_id : String,
  u_dest_sys_id : String,
  u_src_sys_id : String,
};

/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Tmetric_Lookup extends mongoose.Document {
  u_full_path : String,
  u_path_id : String,
  u_dt_root_doc : String,
  sys_created_by : String,
  sys_created_on : Date,
  sys_mod_count : Number,
  sys_updated_by : String,
  sys_updated_on : Date,
};

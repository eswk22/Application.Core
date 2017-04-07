/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Wikidoc_Rating_Resolution extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_1_star_count : Number,
  u_2_star_count : Number,
  u_3_star_count : Number,
  u_4_star_count : Number,
  u_5_star_count : Number,
  u_init_count : Number,
  u_init_total : Number,
  u_wikidoc_sys_id : String,
};

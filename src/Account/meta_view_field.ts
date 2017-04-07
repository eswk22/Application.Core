/// <reference path="./../../typings/index.d.ts" />;
import * as mongoose from 'mongoose';

export interface Meta_View_Field extends mongoose.Document {
  sys_created_by : String,
  sys_created_on : Date,
  sys_is_deleted : String,
  sys_mod_count : Number,
  sys_org : String,
  sys_updated_by : String,
  sys_updated_on : Date,
  u_alignment : String,
  u_dateTimeformat : String,
  u_fixed : Boolean,
  u_groupable : Boolean,
  u_header : String,
  u_id : String,
  u_resizeable : Boolean,
  u_rowheader : Boolean,
  u_sortable : Boolean,
  u_tooltip : String,
  u_width : Number,
};
